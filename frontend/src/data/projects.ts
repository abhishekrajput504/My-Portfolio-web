import type { Project } from '@/types/project'

/** PLACEHOLDER — replace with real projects, screenshots, and repo/demo links. See PLACEHOLDER_CONTENT.md. */
export const projects: Project[] = [
  {
    slug: 'inventory-microservice-platform',
    title: 'Inventory Microservice Platform',
    summary:
      'A multi-tenant inventory and order management backend built as independently deployable Spring Boot microservices.',
    description: [
      'A backend platform that splits inventory, ordering, and notification concerns into separate Spring Boot services communicating over REST, backed by MySQL with per-service schemas.',
      'Focused on operational maturity: structured logging, health/readiness probes, and containerized deployment behind an Nginx reverse proxy, so the system behaves predictably under real traffic and is easy to reason about when something breaks.',
    ],
    features: [
      'JWT-based authentication and role-based authorization via Spring Security',
      'Service-to-service communication with resilient REST clients and timeouts',
      'Centralized exception handling with consistent JSON error contracts',
      'Dockerized services orchestrated with Docker Compose for local + staging parity',
    ],
    architecture:
      'API Gateway (Nginx) → Auth Service, Inventory Service, Order Service (Spring Boot, MySQL each) → async email notifications via a dedicated worker. Each service owns its schema; cross-service reads go through REST, not shared tables.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Nginx'],
    image: '/images/projects/inventory-platform.svg',
    githubUrl: 'https://github.com/abhishek-rajput/inventory-microservice-platform', // PLACEHOLDER
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: 'iot-telemetry-dashboard',
    title: 'IoT Telemetry Dashboard',
    summary:
      'End-to-end pipeline streaming ESP8266 sensor telemetry through MQTT into a Spring Boot backend, visualized in a live React dashboard.',
    description: [
      'ESP8266 nodes read environmental sensor data and publish it over MQTT. A Spring Boot service subscribes to the broker, validates and persists readings, and exposes them through a REST + WebSocket API.',
      'A React + TypeScript dashboard subscribes to live updates and renders per-device telemetry, historical trends, and offline-device alerts — built to be legible at a glance during an incident, not just pretty on a demo.',
    ],
    features: [
      'MQTT ingestion with schema validation and de-duplication',
      'Real-time dashboard updates via WebSocket, no polling',
      'Per-device offline detection and alerting',
      'Historical telemetry stored and queryable by time range',
    ],
    architecture:
      'ESP8266 devices → MQTT broker (Mosquitto) → Spring Boot MQTT consumer → MySQL (time-series-style storage) → REST/WebSocket API → React dashboard.',
    techStack: ['Java', 'Spring Boot', 'MQTT', 'ESP8266', 'React', 'TypeScript', 'MySQL'],
    image: '/images/projects/iot-dashboard.svg',
    githubUrl: 'https://github.com/abhishek-rajput/iot-telemetry-dashboard', // PLACEHOLDER
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: 'devportfolio-api',
    title: 'This Portfolio’s Backend',
    summary:
      'The Spring Boot 3 API powering this site’s contact form — validated, containerized, and CORS-locked to the frontend origin.',
    description: [
      'A small but production-shaped API: a single well-tested endpoint with real input validation, structured error responses, and a clean separation between controller, service, and mail-sending concerns.',
      'Built to demonstrate the same engineering habits used on larger services — records over boilerplate DTOs, a global exception handler instead of scattered try/catch, and a multi-stage Docker build for a lean runtime image.',
    ],
    features: [
      'Jakarta Bean Validation on all inbound fields with structured 400 responses',
      'JavaMailSender-based email delivery with a dedicated exception path',
      'CORS locked to the deployed frontend origin via environment configuration',
      'MockMvc + Mockito test coverage for the controller and service layers',
    ],
    architecture:
      'React contact form → POST /api/contact → Jakarta-validated DTO → ContactService (JavaMailSender) → SMTP. Errors normalized through a @RestControllerAdvice into a consistent JSON shape.',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Nginx'],
    image: '/images/projects/portfolio-api.svg',
    githubUrl: 'https://github.com/abhishek-rajput/portfolio', // PLACEHOLDER
    liveUrl: undefined,
    featured: false,
  },
]
