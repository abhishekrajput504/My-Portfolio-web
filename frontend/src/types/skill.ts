/** Keys resolved to a react-icons component in `sections/Skills/iconRegistry.ts`. */
export type SkillIconKey =
  | 'java'
  | 'spring'
  | 'hibernate'
  | 'microservices'
  | 'api'
  | 'mysql'
  | 'docker'
  | 'git'
  | 'github'
  | 'linux'
  | 'nginx'
  | 'aws'
  | 'react'
  | 'javascript'
  | 'typescript'
  | 'mui'
  | 'iot'
  | 'esp8266'
  | 'mqtt'
  | 'problemSolving'
  | 'security'

export interface Skill {
  name: string
  icon: SkillIconKey
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}
