export interface Project {
  slug: string
  title: string
  summary: string
  description: string[]
  features: string[]
  architecture: string
  techStack: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
