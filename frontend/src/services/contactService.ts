import type { ContactApiError, ContactApiSuccess, ContactFormValues } from '@/types/contact'
import { API_BASE_URL } from '@/utils/constants'

export class ContactApiRequestError extends Error {
  status: number
  fieldErrors?: ContactApiError['errors']

  constructor(payload: ContactApiError) {
    super(payload.message)
    this.name = 'ContactApiRequestError'
    this.status = payload.status
    this.fieldErrors = payload.errors
  }
}

/** Submits the contact form to the Spring Boot backend's POST /api/contact endpoint. */
export async function submitContactForm(values: ContactFormValues): Promise<ContactApiSuccess> {
  const { name, email, subject, message } = values

  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message }),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new ContactApiRequestError(
      data ?? {
        message: 'Something went wrong. Please try again in a moment.',
        status: response.status,
        timestamp: new Date().toISOString(),
      },
    )
  }

  return data as ContactApiSuccess
}
