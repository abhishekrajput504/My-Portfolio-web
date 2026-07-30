export interface ContactFormValues {
  name: string
  email: string
  subject: string
  message: string
  /** Honeypot field — real users never fill this in; bots typically do. */
  company: string
}

export interface ContactApiSuccess {
  message: string
}

export interface ContactApiFieldError {
  field: string
  message: string
}

export interface ContactApiError {
  message: string
  status: number
  timestamp: string
  errors?: ContactApiFieldError[]
}
