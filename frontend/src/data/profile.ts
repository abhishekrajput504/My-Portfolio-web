import type { EducationEntry } from '@/types/experience'

export interface ProfileStat {
  label: string
  /** Numeric stats animate as a count-up; `null` renders `display` as a static badge instead. */
  value: number | null
  suffix?: string
  display?: string
}

/**
 * All content is taken from the resume in public/resume/Abhishek_Rajput_Resume.pdf.
 * Stat counts are derived from it (years, companies, projects listed). See PLACEHOLDER_CONTENT.md.
 */
export const profile = {
  name: 'Abhishek Rajput',
  initials: 'AR',
  location: 'New Delhi, India',
  tagline:
    'Java developer with 3+ years of experience building robust, scalable backend applications with Spring Boot, Hibernate JPA, and RESTful APIs.',
  bio: [
    "I'm a results-oriented Java developer with 3+ years of hands-on experience building robust and scalable applications using Spring Boot, Hibernate JPA, and RESTful APIs. I'm currently an Application Engineer at Energasia Smart Poles, where I build backend microservices for an integrated Public Address audio system, a secure Jail Monitoring System, and the enterprise Energasia Portal — and connect Arduino-based edge hardware to cloud infrastructure.",
    'Before this I worked on a hospital management backend at UST Global, built hotel booking and authentication services at 7Edge, and developed a property platform with role-based access control during my internship at NoBroker. I enjoy working with cross-functional teams to turn business requirements into clean, secure technical solutions.',
  ],
  yearsExperience: 3,
  currentRole: 'Application Engineer',
  currentCompany: 'Energasia Smart Poles Pvt. Ltd.',
  email: 'rupesh.ar33@gmail.com',
  socials: {
    github: 'https://github.com/abhishekrajput504',
    linkedin: 'https://www.linkedin.com/in/abhishek-rajput-1b999a184/',
    email: 'mailto:rupesh.ar33@gmail.com',
  },
  resumeUrl: '/resume/Abhishek_Rajput_Resume.pdf',
  roles: [
    'Java Backend Developer',
    'Application Engineer',
    'Spring Boot Developer',
    'Microservices Developer',
    'REST API Developer',
    'IoT Integration Engineer',
  ],
  stats: [
    { label: 'Years experience', value: 3, suffix: '+' },
    { label: 'Companies', value: 4 },
    { label: 'Projects delivered', value: 6, suffix: '+' },
    { label: 'Databases (MySQL, MongoDB)', value: 2 },
    { label: 'Java versions', value: null, display: '8 & 17' },
    { label: 'Problem solver', value: null, display: 'Always' },
  ] satisfies ProfileStat[],
}

export const education: EducationEntry[] = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    location: 'Madhya Pradesh, India',
    startDate: '2020',
    endDate: '2022',
    detail: 'Postgraduate study in software engineering, databases, and application development.',
  },
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IES College, Bhopal',
    location: 'Bhopal, Madhya Pradesh, India',
    startDate: '2017',
    endDate: '2020',
    detail: 'Foundation in programming, data structures, and core computer science.',
  },
]
