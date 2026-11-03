import type { ExperienceEntry } from '@/types/experience'

/**
 * Companies, dates, and bullets come from the resume (public/resume/Abhishek_Rajput_Resume.pdf).
 */
export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-energasia',
    role: 'Application Engineer',
    company: 'Energasia Smart Poles Pvt. Ltd.',
    companyUrl: undefined,
    location: 'New Delhi, India',
    employmentType: 'Full-time',
    startDate: 'Jan 2026',
    endDate: 'Present',
    current: true,
    summary:
      'Building backend microservices, enterprise portals, and IoT integrations for smart-city systems — from real-time PA audio broadcasting to secure jail monitoring.',
    impact: [
      'Designed and developed backend microservices using Java 8 and Spring Boot for an integrated Public Address (PA) Audio System, enabling real-time audio broadcasting and scheduling',
      'Developed a highly secure Jail Monitoring System leveraging MongoDB and MySQL for robust real-time logs, CCTV feed tracking, and data isolation',
      'Built the enterprise Energasia Portal from scratch, integrating AWS S3 for secure file storage and optimizing database interactions via Hibernate JPA',
    ],
    responsibilities: [
      'Configured Arduino Uno and deployed edge-level code via Arduino IDE to interface smart hardware sensors with cloud infrastructure',
      'Integrated continuous security scanning using Snyk and Black Duck to eliminate open-source vulnerabilities in code dependencies',
    ],
    technologies: ['Java 8', 'Spring Boot', 'Microservices', 'Hibernate JPA', 'MySQL', 'MongoDB', 'AWS S3', 'Arduino', 'Snyk', 'Black Duck'],
  },
  {
    id: 'exp-ust',
    role: 'Software Developer 2 (SDE 2)',
    company: 'UST Global',
    companyUrl: undefined,
    location: 'Bengaluru, Karnataka, India',
    employmentType: 'Full-time',
    startDate: 'Mar 2025',
    endDate: 'Jul 2025',
    current: false,
    summary:
      'Backend development for a hospital management system covering patients, appointments, doctors, staff, billing, payments, and inventory.',
    impact: [
      'Maintained patient profiles including personal details, medical history, and treatment records',
      'Enabled patients to book, reschedule, or cancel appointments with doctors, backed by time-slot management',
      'Integrated payment gateways for online transactions',
    ],
    responsibilities: [
      'Managed doctor schedules, specialties, and availability, plus staff details for nurses and administrative personnel',
      'Generated bills for treatments, lab tests, and medications',
      'Tracked and managed stock of medicines and hospital supplies',
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate JPA', 'REST APIs', 'MySQL', 'Payment Gateway'],
  },
  {
    id: 'exp-7edge',
    role: 'Java Developer',
    company: '7Edge Pvt. Ltd.',
    companyUrl: undefined,
    location: 'Bengaluru, Karnataka, India',
    employmentType: 'Full-time',
    startDate: 'Sep 2023',
    endDate: 'Feb 2025',
    current: false,
    summary:
      'Built RESTful web services for a hotel booking platform — authentication, search, reviews, bookings, PDF tickets, and payments.',
    impact: [
      'Developed Sign-Up and Sign-In modules with Email OTP verification and authentication',
      'Implemented booking functionality with PDF ticket generation using iTextPDF and integrated payment gateway services',
    ],
    responsibilities: [
      'Analyzed project requirements and ER diagrams and developed RESTful web services using Java 8 and Spring Boot',
      'Developed Hotel, Search, User, Review, and Booking modules with CRUD operations and JPQL queries using Hibernate/JPA',
    ],
    technologies: ['Java 8', 'Spring Boot', 'Hibernate JPA', 'JPQL', 'REST APIs', 'iTextPDF', 'MySQL'],
  },
  {
    id: 'exp-nobroker',
    role: 'Java Developer Intern',
    company: 'NoBroker Technologies',
    companyUrl: undefined,
    location: 'Bengaluru, Karnataka, India',
    employmentType: 'Internship',
    startDate: 'Feb 2023',
    endDate: 'Aug 2023',
    current: false,
    summary:
      'Backend for a property platform — property listings, buyer/seller/admin users, transactions, and role-based API access.',
    impact: [
      'Implemented role-based access control to restrict access to APIs for buyer, seller, and admin roles',
      'Developed dynamic queries for filtering properties by location, price range, property type, and amenities',
    ],
    responsibilities: [
      'Modelled Property, User, and Transaction (payments, bookings, inquiries) entities',
      'Used Spring Data JPA with Hibernate for ORM',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
  },
]
