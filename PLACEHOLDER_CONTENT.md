# Placeholder content checklist

LinkedIn couldn't be scraped when this site was generated (blocked, HTTP 999), so all career content is realistic **sample** data — clearly marked inline with `// PLACEHOLDER` comments. Real values already wired in: name, email (`rupesh.ar33@gmail.com`), and the LinkedIn URL you provided.

Work through this list before shipping to production.

## Content data (`frontend/src/data/`)

| File | What to replace |
|---|---|
| `profile.ts` | `location`, `bio` paragraphs, `currentCompany`, `yearsExperience`, `stats`, and `socials.github` (confirm your real GitHub handle) |
| `profile.ts` (`education` export) | Degree, institution name, dates |
| `experience.ts` | Full job history — roles, companies, dates, responsibilities, achievements |
| `certificates.ts` | Real certifications, or remove the section from `HomePage.tsx` / `Navbar` nav links if you don't have any yet |
| `projects.ts` | Real project details, `githubUrl`, `liveUrl`. The `description`/`features`/`architecture` fields are written in your voice as examples — rewrite for your actual projects |

## Assets

| File | Action |
|---|---|
| `frontend/public/resume/Abhishek_Rajput_Resume.pdf` | This is a **hand-generated placeholder PDF** (valid, downloadable, says "placeholder" inside it) — replace with your real resume, same filename (or update `profile.resumeUrl` in `profile.ts`) |
| `frontend/public/images/projects/*.svg` | Abstract architecture-diagram cover art generated for each project card, standing in for real screenshots — swap for actual product/dashboard screenshots when available |
| `frontend/src/sections/About/About.tsx` | The "photo" is currently a monogram card (grid background + "AR" gradient text), a deliberate design choice rather than a broken image. Swap in a real headshot via `LazyImage` if/when you want one |
| `frontend/public/favicon.svg` | Simple "AR" monogram mark. Works as-is (all modern browsers support SVG favicons), but for full social/OG compatibility generate PNG/ICO variants (e.g. via realfavicongenerator.io) — raster image generation wasn't possible in the environment this was built in |
| `frontend/public/og-image.png` | **Missing** — `index.html` and `SeoHead.tsx` reference `/og-image.png` for social share previews, but no raster image tool was available to generate one. Add a 1200×630 PNG here before relying on link-preview cards on Twitter/LinkedIn/etc. |

## Domain / URLs

| Where | What |
|---|---|
| `frontend/src/utils/constants.ts` (`SITE_URL`), `frontend/index.html`, `frontend/public/robots.txt`, `frontend/public/sitemap.xml` | All use `https://abhishekrajput.dev` as a placeholder domain — replace with your real domain everywhere once you have one |
| `frontend/public/sitemap.xml` | Hand-maintained project URLs — update slugs if you add/remove/rename projects in `projects.ts` |

## Backend configuration (required, not just placeholder)

The contact form won't actually deliver email until you set real SMTP credentials — see `.env.example` at the repo root and `frontend/.env.example`:

- `SMTP_USERNAME` / `SMTP_PASSWORD` — for Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your regular password
- `CONTACT_RECIPIENT_EMAIL` — defaults to `rupesh.ar33@gmail.com`, already correct if that's where you want submissions delivered
- `CORS_ALLOWED_ORIGIN` — must match wherever the frontend actually gets deployed

## GitHub repository links

`profile.ts` and `projects.ts` reference `https://github.com/abhishek-rajput/...` — confirm this is your actual GitHub username, or update every occurrence.
