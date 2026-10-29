# CLAUDE.md

## Project Overview

Project Name: Build Safe Engineering
Description: Bilingual Bangla/English brochure for Build Safe Engineering & Consultancy. Static pages in `public/`, WhatsApp enquiry handoff.
Current Status: Saved English is applied before first paint. The header and the footer Pages list include FAQ, and the Information column is gone. That change ships from pull request 7 into `main`. English for this work uses consult, consulting, or consultancy. That wording, and the teaching README, are on `fix/footer-information` and are not yet on `main`. Vercel Production follows `main`. This repo is not the live Cloudflare site.
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
- service images `public/img/s1.jpg` through `s8.jpg`, the header logos `public/img/logo.png` and `logo-white.png`, the home photo `public/img/hero.jpg`, and the share picture `public/img/meta-logo.jpg`
- optional project images `public/img/projects/p1.jpg` through `p6.jpg`
- enquiry handoff to WhatsApp number `8801814116677` (no server storage)
- office address at Dilara Tower, Hatirpool, Dhaka-1205
- public email `contact.buildsafe@gmail.com`
- self-hosted fonts in `public/fonts/`

---

## Rendering

This is not a server-rendered application. Each HTML file is a page. A short script in the page head sets `data-lang` to `en` only when `bs-lang` is already `en`, so the first paint matches the saved language. `public/js/site.js` handles language changes, the menu, old home hashes, the enquiry preview, and copy-to-clipboard. Header links are only as wide as the visible language, with the same padding and a 4px gap. Their order is Home, About, Services, Projects, FAQ, Contact. The current page link is slightly bolder. The contact service menu is two selects, one Bangla and one English, so that label does not wait on the bottom script. The footer columns are brand, Pages, and Office. Pages lists Home, About, Services, Projects, FAQ, and Contact. Office lists the phone, `contact.buildsafe@gmail.com`, and the address, with the social icons under those lines. At 760px and below, brand, Pages, and Office each take a full row. The footer address uses the same size, weight, and color as the other footer lines. The contact page email uses the same size, weight, and color as the phone number, and it has the same copy button. The copy notice sits at the bottom right. On a phone, the two footer lines are centered. The slogan is “Partner with BUILD SAFE to turn your vision into reality”, in one color. The FAQ page lists 15 questions from the existing pages in a compact list. Link previews use `meta-logo.jpg`. The structured-data logo and the header image stay `logo.png`. The home photo stays `hero.jpg`.

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

Current stop: English for this work uses consult, consulting, or consultancy. The teaching README is on the same branch. Both are committed on `fix/footer-information` and are not on `main`. Pull request 7 already carries the FAQ header and Pages list into `main`. Vercel Production follows `main`. Do not open another branch. Do not push new implementation straight to `main`. Cloudflare is still managed separately. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`.
