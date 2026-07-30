# Abhishek Rajput — Portfolio

A premium, production-ready developer portfolio.

- **Frontend:** React 19, Vite, TypeScript, MUI, Framer Motion, React Router
- **Backend:** Spring Boot 3, Java 21, REST API (contact form + email delivery)
- **Deployment:** Docker, Nginx, Docker Compose

## Monorepo layout

```
.
├── frontend/   React + Vite + TypeScript client
├── backend/    Spring Boot 3 REST API
└── docker-compose.yml
```

## Local development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`. Copy `frontend/.env.example` to `frontend/.env` to point at a local backend.

### Backend

```bash
cd backend
./mvnw spring-boot:run   # or mvnw.cmd on Windows
```

Runs at `http://localhost:8080`. Copy `.env.example` (repo root) to `.env` and export the SMTP variables, or set them directly in your environment — see [backend/README](backend/src/main/resources/application.yml) for the full list.

## Docker (full stack)

```bash
cp .env.example .env   # fill in SMTP + recipient details
docker compose up --build
```

Frontend served at `http://localhost`, proxying contact-form submissions to the backend at `http://localhost:8080`.

## Placeholder content

This build ships with clearly-marked placeholder content (career history, projects, resume, headshot, GitHub URL) since it was generated without access to real profile data. **See [PLACEHOLDER_CONTENT.md](PLACEHOLDER_CONTENT.md) for the full swap-in checklist before shipping to production.**

## Scripts

| Command | Location | Purpose |
|---|---|---|
| `npm run dev` | `frontend/` | Start Vite dev server |
| `npm run build` | `frontend/` | Type-check + production build |
| `npm run lint` | `frontend/` | ESLint |
| `./mvnw spring-boot:run` | `backend/` | Run API locally |
| `./mvnw test` | `backend/` | Run backend test suite |
| `docker compose up --build` | repo root | Build + run full stack |
