import type { SkillCategory } from '@/types/skill'

/** Mirrors the Technical Skills section of the resume. */
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Core Java', icon: 'java', level: 92 },
      { name: 'Java 8 & 17', icon: 'openjdk', level: 88 },
      { name: 'HTML', icon: 'html', level: 70 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', icon: 'spring', level: 90 },
      { name: 'Spring MVC', icon: 'springFramework', level: 85 },
      { name: 'Hibernate JPA', icon: 'hibernate', level: 86 },
      { name: 'RESTful APIs', icon: 'api', level: 90 },
      { name: 'Microservices', icon: 'microservices', level: 80 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'mysql', level: 85 },
      { name: 'MongoDB', icon: 'mongodb', level: 72 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    skills: [{ name: 'AWS S3', icon: 'aws', level: 70 }],
  },
  {
    id: 'build',
    title: 'Build & Version Control',
    skills: [
      { name: 'Maven', icon: 'maven', level: 82 },
      { name: 'Gradle', icon: 'gradle', level: 68 },
      { name: 'Git', icon: 'git', level: 85 },
      { name: 'GitHub', icon: 'github', level: 85 },
      { name: 'GitLab', icon: 'gitlab', level: 78 },
    ],
  },
  {
    id: 'tools',
    title: 'Developer & Testing Tools',
    skills: [
      { name: 'IntelliJ IDEA', icon: 'intellij', level: 85 },
      { name: 'Eclipse / STS-4', icon: 'eclipse', level: 82 },
      { name: 'Postman', icon: 'postman', level: 88 },
      { name: 'Swagger', icon: 'swagger', level: 80 },
      { name: 'Jira', icon: 'jira', level: 80 },
    ],
  },
  {
    id: 'security',
    title: 'Security Scanning',
    skills: [
      { name: 'Snyk', icon: 'snyk', level: 72 },
      { name: 'Black Duck', icon: 'security', level: 68 },
    ],
  },
  {
    id: 'iot',
    title: 'Embedded / IoT',
    skills: [
      { name: 'Arduino UNO', icon: 'arduino', level: 72 },
      { name: 'Arduino IDE', icon: 'arduino', level: 72 },
    ],
  },
  {
    id: 'practices',
    title: 'Practices',
    skills: [
      { name: 'Agile Methodology', icon: 'agile', level: 85 },
      { name: 'Problem Solving', icon: 'problemSolving', level: 90 },
    ],
  },
]
