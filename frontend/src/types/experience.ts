export interface ExperienceEntry {
  id: string
  role: string
  company: string
  companyUrl?: string
  location: string
  startDate: string
  endDate: string
  summary: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface EducationEntry {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  detail?: string
}
