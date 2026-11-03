/** Keys resolved to a react-icons component in `sections/Skills/iconRegistry.ts`. */
export type SkillIconKey =
  | 'java'
  | 'openjdk'
  | 'html'
  | 'spring'
  | 'springFramework'
  | 'hibernate'
  | 'microservices'
  | 'api'
  | 'mysql'
  | 'mongodb'
  | 'aws'
  | 'maven'
  | 'gradle'
  | 'git'
  | 'github'
  | 'gitlab'
  | 'intellij'
  | 'eclipse'
  | 'postman'
  | 'swagger'
  | 'jira'
  | 'snyk'
  | 'security'
  | 'arduino'
  | 'agile'
  | 'problemSolving'

export interface Skill {
  name: string
  icon: SkillIconKey
  /** Proficiency out of 100, rendered as a progress indicator. */
  level: number
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}
