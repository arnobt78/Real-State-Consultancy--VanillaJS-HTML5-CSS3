# CLAUDE.md

## Project Overview

Project Name: Build Safe Engineering
Description: Bilingual Bangla/English brochure for Build Safe Engineering & Consultancy. Static pages in `public/`, WhatsApp enquiry handoff.
Current Status: The public site is on `main`. Saved English is applied before first paint. It is not the live Cloudflare site.
Current Agile V Cycle: C1
Current Gate: `GATE-0001` was superseded by later direction to build `public/`. See `.agile-v/STATE.md`.

---

## Tech Stack

Frontend: static HTML in `public/`. Shared `public/css/site.css` and `public/js/site.js`. Images in `public/img/`. Fonts in `public/fonts/`.
Backend: none
Database: none
Authentication: none
Infrastructure: none in the repo
Deployment: none in the repo
Testing: none in the repo. Check behavior in a browser.

---

## Architecture

Keep the static `public/` site. Do not add a framework, backend, database, or TypeScript toolchain for ordinary page work.

Preserve:

- routes `/`, `/services/`, `/about/`, `/projects/`, `/contact/`, `/terms/`, `/privacy/`, `/cookies/`, `/faq/`
- old home hashes `#services`, `#about`, `#projects`, and `#contact` redirect to those routes
- Bangla as the default language, English via `data-lang` and `localStorage` key `bs-lang`
- service images `public/img/s1.jpg` through `s8.jpg` and logos `public/img/logo.png` and `logo-white.png`
- optional project images `public/img/projects/p1.jpg` through `p6.jpg`
- enquiry handoff to WhatsApp number `8801814116677` (no server storage)
- office address at Dilara Tower, Hatirpool, Dhaka-1205
- self-hosted fonts in `public/fonts/`

---

## Rendering

This is not a server-rendered application. Each HTML file is a page. A short script in the page head sets `data-lang` to `en` only when `bs-lang` is already `en`, so the first paint matches the saved language. `public/js/site.js` handles language changes, the menu, old home hashes, the enquiry preview, and copy-to-clipboard. Header links are only as wide as the visible language, with the same padding and a 4px gap. The current page link is slightly bolder. The contact service menu is two selects, one Bangla and one English, so that label does not wait on the bottom script.

Do not split the pages into a component framework. Do not add a copy-to-dist build. Serve `public/` directly.

---

## State Management

The only persisted client value is `bs-lang`.

Enquiry fields are not stored. After a valid submit they are shown in the page and passed to WhatsApp.

Do not add a second copy of the service list, phone number, or language strings.

---

## Coding Rules

Match the current pages: plain HTML, readable selectors, no new build step.

Avoid:

- a parallel implementation of routing, language, or the form
- new marketing claims that are not already on the page
- unrelated redesign
- a Node build, `package.json`, or a rewrite of every route to one `index.html`

---

## Validation

There is no typecheck, lint, test, or build script.

Before calling a behavior done, exercise it in a browser and record the result in:

.agile-v/VALIDATION_SUMMARY.md

---

## Project Memory

Current project state is stored in:

.agile-v/

Always resume from:

.agile-v/STATE.md

---

## Documentation

Update only affected files.

Never duplicate information across:

- CLAUDE.md
- AGENTS.md
- .agile-v/*
- docs/

Detailed requirements, tasks, risks, and the resume point belong in `.agile-v/`, not here.

---

## Session Workflow

Before coding:

1. Analyze
2. Plan
3. Wait for approval

After approval:

1. Implement
2. Validate
3. Update project memory
4. Write resume point

---

## Resume

Always continue from

.agile-v/STATE.md

unless instructed otherwise.

Current stop: header links size to the visible language. That change is on `fix/nav-label-width` and merged to `main` through a pull request. Do not push new implementation straight to `main`. Cloudflare is still managed separately. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`.
