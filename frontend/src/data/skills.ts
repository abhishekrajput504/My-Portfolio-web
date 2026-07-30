import type { SkillCategory } from '@/types/skill'

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Spring Security', icon: 'security' },
      { name: 'Hibernate', icon: 'hibernate' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Material UI', icon: 'mui' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'AWS', icon: 'aws' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT',
    skills: [
      { name: 'IoT Systems', icon: 'iot' },
      { name: 'ESP8266', icon: 'esp8266' },
      { name: 'MQTT', icon: 'mqtt' },
    ],
  },
  {
    id: 'craft',
    title: 'Engineering Craft',
    skills: [{ name: 'Problem Solving', icon: 'problemSolving' }],
  },
]
