import type { Project } from '@/types/project'

/**
 * Projects are the systems described on the resume (public/resume/Abhishek_Rajput_Resume.pdf).
 * Feature lists and tech stacks come straight from it; the problem/solution/architecture/challenges
 * narrative is a reasonable expansion — review and tighten. Cover images are abstract placeholders.
 * These are company projects, so no public repo/demo links. See PLACEHOLDER_CONTENT.md.
 */
export const projects: Project[] = [
  {
    slug: 'pa-audio-system',
    title: 'Integrated Public Address (PA) Audio System',
    summary:
      'Backend microservices for an integrated PA audio system, enabling real-time audio broadcasting and scheduled announcements across smart-pole hardware.',
    description: [
      'Backend microservices built with Java 8 and Spring Boot that power an integrated Public Address audio system at Energasia Smart Poles — handling real-time audio broadcasting and scheduling of announcements.',
      'Edge-level hardware is driven by Arduino Uno boards programmed through the Arduino IDE, interfacing smart hardware sensors with the cloud-side services.',
    ],
    problem: [
      'Announcements across distributed PA hardware needed to be triggered live and on a schedule from a central system.',
      'Smart hardware sensors in the field had to be connected to cloud infrastructure.',
    ],
    solution: [
      'Designed Spring Boot microservices that expose broadcasting and scheduling over REST APIs.',
      'Configured Arduino Uno and deployed edge-level code via Arduino IDE to bridge sensors and hardware with the backend.',
    ],
    features: [
      'Real-time audio broadcasting',
      'Scheduled announcements',
      'Arduino Uno edge integration with cloud services',
      'Microservice-based backend built on Java 8 and Spring Boot',
    ],
    architecture:
      'Operator console → Spring Boot microservices (broadcast + scheduling, REST) → PA hardware in the field; Arduino Uno edge nodes interface sensors with the cloud backend.',
    techStack: ['Java 8', 'Spring Boot', 'Microservices', 'REST APIs', 'Arduino Uno', 'Arduino IDE'],
    businessImpact: [
      'Enabled real-time audio broadcasting and scheduling from one central backend',
      'Connected field hardware sensors to cloud infrastructure',
    ],
    challenges: [
      'Coordinating real-time broadcast commands with hardware at the edge — handled by separating scheduling and broadcast concerns into dedicated services',
    ],
    image: '/images/projects/iot-dashboard.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: 'jail-monitoring-system',
    title: 'Jail Monitoring System',
    summary:
      'A highly secure monitoring platform with real-time logs, CCTV feed tracking, and strict data isolation, backed by MongoDB and MySQL.',
    description: [
      'A security-critical monitoring system built at Energasia Smart Poles, combining MongoDB for high-volume real-time logs with MySQL for structured, relational records.',
      'Designed around data isolation and secure access, with continuous dependency scanning in the pipeline.',
    ],
    problem: [
      'Correctional facilities need reliable, tamper-resistant real-time logs and CCTV feed tracking.',
      'Sensitive data must stay isolated and protected.',
    ],
    solution: [
      'Used MongoDB for fast, append-heavy real-time logging and MySQL for structured relational data.',
      'Enforced data isolation in the backend and scanned dependencies with Snyk and Black Duck to eliminate open-source vulnerabilities.',
    ],
    features: [
      'Real-time activity logs',
      'CCTV feed tracking',
      'Data isolation for sensitive records',
      'Continuous security scanning of dependencies (Snyk, Black Duck)',
    ],
    architecture:
      'Spring Boot services → MongoDB (real-time logs, CCTV feed events) + MySQL (structured records), with Snyk and Black Duck scanning in the build pipeline.',
    techStack: ['Java', 'Spring Boot', 'MongoDB', 'MySQL', 'Snyk', 'Black Duck'],
    businessImpact: [
      'Robust real-time logs and CCTV feed tracking for a high-security environment',
      'Open-source vulnerabilities in code dependencies eliminated through continuous scanning',
    ],
    challenges: [
      'Balancing a high-volume log store with relational records — solved by splitting workloads between MongoDB and MySQL',
    ],
    image: '/images/projects/inventory-platform.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: 'energasia-portal',
    title: 'Energasia Enterprise Portal',
    summary:
      'An enterprise portal built from scratch, with AWS S3 for secure file storage and Hibernate JPA-optimized data access.',
    description: [
      'The Energasia Portal is an enterprise web application built from scratch on Spring Boot, using AWS S3 for secure file storage.',
      'Database interactions were optimized through Hibernate JPA mappings and queries.',
    ],
    problem: ['The company needed a central enterprise portal with secure document and file handling.'],
    solution: [
      'Built a Spring Boot backend from the ground up with AWS S3 integration for file storage.',
      'Optimized persistence through Hibernate JPA.',
    ],
    features: [
      'Secure file upload and storage on AWS S3',
      'Optimized data access via Hibernate JPA',
      'RESTful APIs for portal modules',
    ],
    architecture: 'Portal frontend → Spring Boot REST APIs → Hibernate JPA → MySQL; files stored in AWS S3.',
    techStack: ['Java', 'Spring Boot', 'Hibernate JPA', 'AWS S3', 'MySQL', 'REST APIs'],
    businessImpact: ['Delivered the enterprise portal end to end, from an empty repository to production'],
    challenges: ['Keeping file storage secure — handled by storing files in AWS S3 rather than on application servers'],
    image: '/images/projects/portfolio-api.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    summary:
      'Backend for patients, appointments, doctors, staff, billing, payments, and medical inventory — built at UST Global.',
    description: [
      'A hospital management backend covering patient profiles with medical history and treatment records, appointment booking with time-slot management, and doctor and staff management.',
      'Includes billing for treatments, lab tests, and medications, online payments, and inventory tracking for medicines and supplies.',
    ],
    problem: ['Hospital operations — patients, appointments, staff, billing, and stock — needed to live in one consistent system.'],
    solution: [
      'Built modules for patients, appointments, doctors, staff, billing, and inventory with Spring Boot and Hibernate JPA.',
      'Integrated payment gateways for online transactions.',
    ],
    features: [
      'Patient profiles with medical history and treatment records',
      'Book, reschedule, or cancel appointments with time-slot management',
      'Doctor schedules, specialties, and availability',
      'Staff management for nurses and administrative personnel',
      'Billing for treatments, lab tests, and medications',
      'Payment gateway integration',
      'Medicine and hospital supply inventory tracking',
    ],
    architecture:
      'Spring Boot REST APIs → service modules (Patient, Appointment, Doctor, Staff, Billing, Inventory) → Hibernate JPA → MySQL; payment gateway for online transactions.',
    techStack: ['Java', 'Spring Boot', 'Hibernate JPA', 'REST APIs', 'MySQL', 'Payment Gateway'],
    businessImpact: ['Patients can self-serve appointment booking, rescheduling, and cancellation'],
    challenges: ['Preventing double-booked appointments — handled with time-slot management per doctor'],
    image: '/images/projects/inventory-platform.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false,
  },
  {
    slug: 'hotel-booking-platform',
    title: 'Hotel Booking Platform',
    summary:
      'RESTful services for hotel search, reviews, and bookings with Email OTP authentication, PDF tickets, and payments — built at 7Edge.',
    description: [
      'RESTful web services built with Java 8 and Spring Boot after analyzing project requirements and ER diagrams.',
      'Covers Sign-Up/Sign-In with Email OTP verification, Hotel, Search, User, Review, and Booking modules, PDF ticket generation, and payment gateway integration.',
    ],
    problem: ['Users needed to securely sign up, find hotels, book rooms, pay online, and receive a booking ticket.'],
    solution: [
      'Implemented Email OTP-based sign-up and sign-in.',
      'Built CRUD modules with JPQL queries in Hibernate/JPA, PDF tickets with iTextPDF, and payment gateway integration.',
    ],
    features: [
      'Sign-Up and Sign-In with Email OTP verification',
      'Hotel, Search, User, Review, and Booking modules',
      'CRUD operations and JPQL queries with Hibernate/JPA',
      'PDF ticket generation with iTextPDF',
      'Payment gateway integration',
    ],
    architecture:
      'Client → Spring Boot REST APIs (Auth, Hotel, Search, User, Review, Booking) → Hibernate JPA / JPQL → MySQL; iTextPDF for tickets, payment gateway for checkout.',
    techStack: ['Java 8', 'Spring Boot', 'Hibernate JPA', 'JPQL', 'iTextPDF', 'MySQL', 'REST APIs'],
    businessImpact: ['End-to-end booking flow from search to payment to a downloadable PDF ticket'],
    challenges: ['Securing account access — solved with Email OTP verification on sign-up and sign-in'],
    image: '/images/projects/portfolio-api.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false,
  },
  {
    slug: 'property-listing-platform',
    title: 'Property Listing Platform',
    summary:
      'Property platform backend with role-based access control and dynamic filtering by location, price, type, and amenities — NoBroker internship.',
    description: [
      'Backend for a property platform with Property (title, location, price, description), User (buyer, seller, admin), and Transaction (payments, bookings, inquiries) domains.',
      'Built with Spring Data JPA and Hibernate, with role-based access control on APIs and dynamic property search queries.',
    ],
    problem: ['Buyers needed flexible property search, and APIs had to be restricted by user role.'],
    solution: [
      'Implemented role-based access control for buyer, seller, and admin.',
      'Built dynamic queries to filter properties by location, price range, property type, and amenities.',
    ],
    features: [
      'Property, User, and Transaction domain model',
      'Role-based access control (buyer, seller, admin)',
      'Dynamic filtering by location, price range, type, and amenities',
      'Spring Data JPA with Hibernate ORM',
    ],
    architecture: 'Spring Boot REST APIs with role-based access → Spring Data JPA / Hibernate → MySQL.',
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    businessImpact: ['Flexible multi-criteria property search for buyers'],
    challenges: ['Supporting many optional filter combinations — handled with dynamic query building'],
    image: '/images/projects/iot-dashboard.svg',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false,
  },
]
