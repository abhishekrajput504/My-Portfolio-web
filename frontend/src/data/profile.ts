import type { EducationEntry } from '@/types/experience'

/**
 * PLACEHOLDER CONTENT — LinkedIn could not be accessed to pull real profile data.
 * Everything below is plausible sample content. Swap-in checklist: see PLACEHOLDER_CONTENT.md.
 * Real values already wired in: name, email, LinkedIn URL.
 */
export const profile = {
  name: 'Abhishek Rajput',
  initials: 'AR',
  location: 'Pune, India', // PLACEHOLDER
  tagline:
    'I build reliable backend systems and connect them to the physical world — from Spring Boot microservices to IoT devices on the factory floor.',
  bio: [
    "I'm a backend-focused software engineer specializing in Java and the Spring ecosystem, with a hands-on interest in IoT and embedded connectivity. I care about systems that stay boring in production — clear service boundaries, sensible defaults, and observability that tells you what actually broke.",
    'Outside of typical CRUD-and-microservices work, I like connecting software to hardware: ESP8266 sensor nodes reporting over MQTT into a Spring Boot ingestion layer, dashboards that make raw telemetry legible. That mix of backend rigor and physical-world debugging is where I do my best work.',
  ], // PLACEHOLDER narrative — replace with real bio
  yearsExperience: 3, // PLACEHOLDER
  currentRole: 'Backend Engineer', // PLACEHOLDER
  currentCompany: 'TechNova Systems', // PLACEHOLDER
  email: 'rupesh.ar33@gmail.com',
  socials: {
    github: 'https://github.com/abhishek-rajput', // PLACEHOLDER — confirm real handle
    linkedin: 'https://www.linkedin.com/in/abhishek-rajput-1b999a184/',
    email: 'mailto:rupesh.ar33@gmail.com',
  },
  resumeUrl: '/resume/Abhishek_Rajput_Resume.pdf', // PLACEHOLDER file — see public/resume/
  roles: [
    'Java Backend Engineer',
    'Spring Boot Developer',
    'Microservices Developer',
    'IoT Engineer',
    'Software Engineer',
    'Cloud Enthusiast',
  ],
  stats: [
    { label: 'Years of experience', value: '3+' },
    { label: 'Production services shipped', value: '12+' },
    { label: 'IoT devices deployed', value: '20+' },
    { label: 'Core languages', value: 'Java · TS' },
  ], // PLACEHOLDER
}

export const education: EducationEntry[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science & Engineering', // PLACEHOLDER
    institution: 'Your University Name', // PLACEHOLDER
    location: 'India',
    startDate: '2018',
    endDate: '2022',
    detail: 'Focus on distributed systems, embedded computing, and software engineering fundamentals.',
  },
]
