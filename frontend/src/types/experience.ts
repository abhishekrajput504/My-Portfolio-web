export interface ExperienceEntry {
  id: string
  role: string
  company: string
  companyUrl?: string
  location: string
  employmentType: string
  startDate: string
  endDate: string
  current: boolean
  summary: string
  /** Quantified business impact — lead with these, not task lists. */
  impact: string[]
  responsibilities: string[]
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
