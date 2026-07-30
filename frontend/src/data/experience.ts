import type { ExperienceEntry } from '@/types/experience'

/** PLACEHOLDER — replace with real employment history. See PLACEHOLDER_CONTENT.md. */
export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-1',
    role: 'Backend Engineer',
    company: 'TechNova Systems',
    companyUrl: undefined,
    location: 'Pune, India',
    startDate: 'Jun 2023',
    endDate: 'Present',
    summary:
      'Own backend services for a multi-tenant SaaS platform, focused on API reliability, data integrity, and internal developer tooling.',
    responsibilities: [
      'Designed and maintained REST APIs powering the core product using Spring Boot and MySQL',
      'Introduced structured logging and health checks that cut mean-time-to-diagnosis for production incidents',
      'Migrated a monolithic module into an independently deployable microservice',
      'Set up CI pipelines and Dockerized deployment for the service tier',
    ],
    achievements: [
      'Reduced p95 API latency by 38% by fixing N+1 queries and adding targeted caching',
      'Led the rollout of Spring Security-based role authorization across 4 internal services',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'AWS', 'Nginx'],
  },
  {
    id: 'exp-2',
    role: 'IoT & Software Engineering Intern',
    company: 'Circuit & Cloud Labs',
    companyUrl: undefined,
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'May 2023',
    summary:
      'Built the ingestion pipeline connecting ESP8266-based sensor nodes to a Spring Boot backend over MQTT.',
    responsibilities: [
      'Programmed ESP8266 firmware to publish sensor telemetry over MQTT',
      'Built a Spring Boot MQTT consumer and REST layer to persist and expose device data',
      'Created a lightweight React dashboard to visualize live device telemetry',
    ],
    achievements: [
      'Delivered a working end-to-end IoT pipeline (device → broker → backend → dashboard) within an 8-week internship',
    ],
    technologies: ['Java', 'Spring Boot', 'MQTT', 'ESP8266', 'React', 'REST APIs'],
  },
]
