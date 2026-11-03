# Placeholder content checklist

All site content (profile, experience, projects, skills, education) now follows the resume at `frontend/public/resume/Abhishek_Rajput_Resume.pdf`. Remaining gaps are listed below.

## Photo

`frontend/public/images/profile.webp` is your real headshot (resized to 900px wide and re-encoded as WebP — down from a 1.8MB source PNG to ~24KB, since it's the hero's likely LCP element), rendered in both the hero's glass photo card and the About section's photo card. If either loses the file it gracefully falls back to an "AR" monogram rather than a broken image. `HeroPhoto.tsx` (4:5) and `About.tsx` (1:1) both use `object-fit: cover` — swap the file or adjust `object-position` there for a different crop. If you replace it, re-compress (900px wide, WebP ~80% quality) rather than dropping in a multi-MB file straight from a camera/export.

## Content data (`frontend/src/data/`)

| File | What to tighten |
|---|---|
| `profile.ts` | MCA university name is blank (`education[0].institution`) — not on the resume. `socials.github` — confirm your actual GitHub handle |
| `experience.ts` | Role titles for UST Global and 7Edge are not on the resume (set to "Java Developer") — confirm. UST Global location set to "India" |
| `certificates.ts` | Still sample data — the Certificates section is removed from `HomePage.tsx` and the nav. Add real certifications and re-enable it if you have any |
| `projects.ts` | The six projects come from the resume. The problem/solution/architecture/challenges narrative expands on the resume bullets — review it |

## Assets

| File | Action |
|---|---|
| `frontend/public/resume/Abhishek_Rajput_Resume.pdf` | Real resume. The hero "Download Resume" button downloads it directly. To update it, replace the file and keep the same filename |
| `frontend/public/images/projects/*.svg` | Abstract architecture-diagram cover art standing in for real screenshots — swap for actual product/dashboard screenshots when available |
| `frontend/public/favicon.svg` | Simple "AR" monogram mark, works as-is. For full social/OG compatibility generate PNG/ICO variants (e.g. realfavicongenerator.io) |
| `frontend/public/og-image.png` | **Missing** — referenced by `index.html`/`SeoHead.tsx` for social share previews. Add a 1200×630 PNG before relying on link-preview cards on Twitter/LinkedIn |

## Domain / URLs

| Where | What |
|---|---|
| `frontend/src/utils/constants.ts` (`SITE_URL`), `frontend/index.html`, `frontend/public/robots.txt`, `frontend/public/sitemap.xml` | All use `https://abhishekrajput.dev` as a placeholder domain — replace once you have a real one |
| `frontend/public/sitemap.xml` | Hand-maintained project URLs — update slugs if projects change |

## Backend configuration (required, not just placeholder)

The contact form won't deliver email until real SMTP credentials are set — see `.env.example` at the repo root and `frontend/.env.example`:

- `SMTP_USERNAME` / `SMTP_PASSWORD` — for Gmail, use an [App Password](https://myaccount.google.com/apppasswords)
- `CONTACT_RECIPIENT_EMAIL` — defaults to `rupesh.ar33@gmail.com`
- `CORS_ALLOWED_ORIGIN` — must match wherever the frontend actually gets deployed

## GitHub repository links

`profile.ts` and `projects.ts` reference `https://github.com/abhishek-rajput/...` — confirm this is your actual handle, or update every occurrence.
