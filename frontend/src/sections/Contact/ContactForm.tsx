import { useState, type FormEvent } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiSend } from 'react-icons/fi'
import type { ContactFormValues } from '@/types/contact'
import { AnimatedButton } from '@/components/AnimatedButton'
import { submitContactForm, ContactApiRequestError } from '@/services/contactService'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormErrors = Partial<Record<keyof Omit<ContactFormValues, 'company'>, string>>

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const handleChange = (field: keyof ContactFormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = (): boolean => {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!EMAIL_PATTERN.test(values.email)) nextErrors.email = 'That email address doesn’t look right.'
    if (!values.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (!values.message.trim()) nextErrors.message = 'Please write a message.'
    else if (values.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setServerError(null)

    if (values.company) {
      // Honeypot tripped — silently pretend success without hitting the API.
      setStatus('success')
      return
    }

    if (!validate()) return

    setStatus('submitting')
    try {
      await submitContactForm(values)
      setStatus('success')
      setValues(initialValues)
      setErrors({})
    } catch (err) {
      setStatus('error')
      if (err instanceof ContactApiRequestError) {
        setServerError(err.message)
      } else {
        setServerError('Something went wrong. Please try again in a moment.')
      }
    }
  }

  if (status === 'success') {
    return (
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <FiCheckCircle size={40} color="#34D399" />
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Message sent
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 320, mb: 3 }}>
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </Typography>
        <AnimatedButton variant="outlined" onClick={() => setStatus('idle')}>
          Send another message
        </AnimatedButton>
      </Box>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <AnimatePresence>
          {status === 'error' && serverError && (
            <Box component={motion.div} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
              <Alert severity="error" sx={{ backgroundColor: 'rgba(248, 113, 113, 0.08)' }}>
                {serverError}
              </Alert>
            </Box>
          )}
        </AnimatePresence>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
          <TextField
            label="Name"
            fullWidth
            value={values.name}
            onChange={handleChange('name')}
            error={!!errors.name}
            helperText={errors.name}
            disabled={status === 'submitting'}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            disabled={status === 'submitting'}
          />
        </Stack>

        <TextField
          label="Subject"
          fullWidth
          value={values.subject}
          onChange={handleChange('subject')}
          error={!!errors.subject}
          helperText={errors.subject}
          disabled={status === 'submitting'}
        />

        <TextField
          label="Message"
          fullWidth
          multiline
          minRows={5}
          value={values.message}
          onChange={handleChange('message')}
          error={!!errors.message}
          helperText={errors.message}
          disabled={status === 'submitting'}
        />

        {/* Honeypot field — real users never see or fill this in. */}
        <Box
          sx={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
          aria-hidden="true"
        >
          <TextField
            label="Company"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={handleChange('company')}
          />
        </Box>

        <AnimatedButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          loading={status === 'submitting'}
          startIcon={<FiSend />}
          sx={{ alignSelf: 'flex-start' }}
        >
          Send message
        </AnimatedButton>
      </Stack>
    </Box>
  )
}
