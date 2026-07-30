export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

export const SITE_URL: string = import.meta.env.VITE_SITE_URL ?? 'https://abhishekrajput.dev' // PLACEHOLDER domain

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  certificates: 'certificates',
  contact: 'contact',
} as const
