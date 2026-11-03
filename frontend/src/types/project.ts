export interface Project {
  slug: string
  title: string
  summary: string
  description: string[]
  /** What problem existed before this was built. */
  problem: string[]
  /** How the system addresses the problem. */
  solution: string[]
  architecture: string
  techStack: string[]
  features: string[]
  /** Quantified or qualitative outcomes — what changed because this shipped. */
  businessImpact: string[]
  /** Notable technical challenges and how they were resolved. */
  challenges: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
