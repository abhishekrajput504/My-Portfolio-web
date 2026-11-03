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
  | 'vscode'
  | 'agile'

export interface Skill {
  name: string
  icon: SkillIconKey
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: Skill[]
}
