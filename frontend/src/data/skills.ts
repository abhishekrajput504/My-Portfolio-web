import type { SkillCategory } from '@/types/skill'

/** Mirrors the Technical Skills section of the resume. */
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    description: 'Production APIs and services on the Spring ecosystem.',
    skills: [
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Spring MVC', icon: 'springFramework' },
      { name: 'Hibernate JPA', icon: 'hibernate' },
      { name: 'RESTful APIs', icon: 'api' },
      { name: 'Microservices', icon: 'microservices' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Java first — from core OOP to modern Java features.',
    skills: [
      { name: 'Core Java', icon: 'java' },
      { name: 'Java 8 & 17', icon: 'openjdk' },
      { name: 'HTML', icon: 'html' },
    ],
  },
  {
    id: 'data',
    title: 'Databases & Cloud',
    description: 'Relational and document stores, with cloud file storage.',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'AWS S3', icon: 'aws' },
    ],
  },
  {
    id: 'build',
    title: 'Build & Version Control',
    description: 'Reproducible builds and team-friendly Git workflows.',
    skills: [
      { name: 'Maven', icon: 'maven' },
      { name: 'Gradle', icon: 'gradle' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'GitLab', icon: 'gitlab' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Process',
    description: 'API testing, documentation, and Agile delivery.',
    skills: [
      { name: 'IntelliJ IDEA', icon: 'intellij' },
      { name: 'Eclipse / STS-4', icon: 'eclipse' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Swagger', icon: 'swagger' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Agile', icon: 'agile' },
    ],
  },
  {
    id: 'security-iot',
    title: 'Security & IoT',
    description: 'Dependency scanning and edge hardware integration.',
    skills: [
      { name: 'Snyk', icon: 'snyk' },
      { name: 'Black Duck', icon: 'security' },
      { name: 'Arduino UNO', icon: 'arduino' },
      { name: 'Arduino IDE', icon: 'arduino' },
    ],
  },
]
