# STATE

## Resume point

Cycle: `C1`
Phase: The home frame is 4:3. From 861px up the diamond row and the caption share one line, and the frame sits just above that line. It crossfades `public/img/home-hero/hero-1.jpeg` through `hero-5.jpeg`, and each picture fades its own Bangla and English caption. `hero-2.jpeg` through `hero-5.jpeg` are 1024×768. `hero-1.jpeg` is 1024×678, so the frame still crops a little of each side. The side rules follow the current line. The office-photo caption stays. The other four are the licensed-partner, construction-support, test-report, and inside-the-home slogans. Detail pages keep 28px above and below the two buttons. The hold is 3 seconds. The next picture is decoded before it fades in. The cycle pauses on hover and while the tab is hidden. Reduced motion keeps the first picture and its caption. The projects intro is the showcase line in both languages. Concrete, interior, assessment, and fire cards use `project-1-card.jpeg`, `project-5-card.jpeg`, `project-3-card.jpeg`, and `poster-6-card.jpeg`. Design and solar cards still use their posters. Each detail page opens with a 16:9 banner, then the existing title. The facts list stays in the HTML and is hidden. Gallery pictures keep their own ratio. The design banner is `hero-1.png`. The other five banners are their posters, and those posters are not repeated in the gallery. A picture line appears only for design, concrete, and solar, and those lines no longer say “this”. Each detail page’s opening paragraph describes the category. Pull requests 11, 12, and 13 are on `main`. Pull request 14 carries the category wording into `main`. Vercel Production follows `main`. Cloudflare is still managed separately.
Branch: `fix/footer-information` is the only feature branch. Do not open another branch. Older branches were removed after their pull requests merged.
Remote: `https://github.com/arnobt78/Real-State-Consultancy--VanillaJS-HTML5-CSS3.git`
Gate: `GATE-0001` was superseded. Do not wait on token `C1-HG1-7f3a`. Do not revert `public/` because that token is missing.

Next exact action: after pull request 14 is on `main`, merge `main` back into `fix/footer-information` and leave that branch in place. Do not push new implementation straight to `main`. Do not open another branch. Design and solar card pictures stay until the client supplies new 4:3 files. `hero-1.jpeg` is 1024×678, so the home frame still crops a little of each side. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`. A Vercel test deploy uses output directory `public` with no build command.

## What the project is

Verified from the repository on 2026-10-28:

Build Safe Engineering & Consultancy is a bilingual Bangla/English brochure. The pages are static files in `public/`. Shared files are `public/css/site.css` and `public/js/site.js`. There is no package manager, backend, database, authentication, test runner, or build step.

The 2026-10-27 notes below describe the old single `index.html`. That file is no longer the site.

Public contact data in the pages (intentional, not a secret):

- Phone and WhatsApp: `+880 1814-116677` / `https://wa.me/8801814116677`
- Office: Dilara Tower, 77 Sonargaon Road, Hatirpool, Dhaka-1205
- Facebook: `https://www.facebook.com/buildsafe.ec`
- LinkedIn: `https://www.linkedin.com/in/md-mamunoor-rashid/`
- YouTube: `https://www.youtube.com/@BuildSafe-EC`
- Messenger: `https://m.me/buildsafe.ec`
- Email: `contact.buildsafe@gmail.com`

## Architecture (current)

- Publish root is `public/`. Nine HTML pages, plus six project detail pages, share `public/css/site.css` and `public/js/site.js`.
- Bangla is the default. English is in the same file and is shown when `data-lang` is `en`. The choice is stored as `bs-lang`. A head script sets that attribute before first paint when the saved value is `en`. Header links follow the visible words, in the order Home, About, Services, Projects, FAQ, Contact. The phone menu uses that same header. Footer Pages lists those same six links. The Office column lists the phone, `contact.buildsafe@gmail.com`, and the Dilara Tower address, with Facebook, LinkedIn, and YouTube under those lines. At 760px and below, the brand, Pages, and Office each take a full row. The footer address matches the other footer lines. On a phone, the copyright line and the slogan are centered. The slogan is “Partner with BUILD SAFE to turn your vision into reality”, in the same color as the rest of the line. The contact email matches the phone number and has a copy button. The copy notice sits at the bottom right. The FAQ page has 15 bilingual questions drawn from the existing pages, with about 20px of padding per item. Link previews use `public/img/meta-logo.jpg`. The structured-data logo and the header image stay `logo.png`. The home frame starts with `hero.jpg` and then cycles the four `public/img/home-hero/` pictures. Without JavaScript, only the first picture shows. Terms, Privacy, and Cookies stay public and in the sitemap, and they are not in the footer. The contact service menu is two selects so its label is already in the saved language.
- The contact form validates a name and a Bangladesh mobile number, then prepares a WhatsApp link. It does not post to a server.
- Project cards link to `/projects/design-technical-support/`, `/projects/concrete-mix-design-testing/`, `/projects/detailed-engineering-assessment/`, `/projects/interior-design/`, `/projects/solar-system-design-installation/`, and `/projects/fire-safety-hvac/`. The concrete, interior, assessment, and fire card images are `project-1-card.jpeg`, `project-5-card.jpeg`, `project-3-card.jpeg`, and `poster-6-card.jpeg`. Those card files are not on the detail pages. The old `p1.jpg` through `p6.jpg` probes are gone. `hero-1.png` is the design-page banner only. The home frame uses `hero-1.jpeg` through `hero-5.jpeg`.
- Dark colors follow the system. Fonts are files in `public/fonts/`.
- Serve `public/` with no build command. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`.

## Architecture (2026-10-27, historical)

- Hash pages: `home`, `services`, `about`, `projects`, `contact`. Non-home pages start with the `hidden` attribute.
- Default language is Bangla, because CSS hides `[lang="en"]` until `data-lang="en"`. The script then sets `data-lang` from `localStorage` key `bs-lang`, falling back to `bn`.
- Eight services (`svc-1` through `svc-8`) use `img/s1.jpg` through `img/s8.jpg`. The hero also uses `img/s1.jpg`.
- The enquiry form does not post to a server. It validates name and an 11-digit BD mobile number, builds a message, and opens WhatsApp with that text. Messenger is a plain link and does not receive the message.
- Project cards look for `img/projects/p1.jpg` through `p6.jpg` and keep the “photo coming soon” placeholder when the file is absent. That directory is absent.
- Dark-theme tokens exist for `prefers-color-scheme: dark` and `[data-theme="dark"]`. No control sets `data-theme`.

`CLAUDE.md` was a blank template that told agents to use TypeScript and server components. That conflicted with the code. It now records this static architecture. `AGENTS.md` still matches the workflow and was left unchanged. `docs/architecture.md` was not added; this file is the architecture record for C1.

## Completed this session

- Each project detail page describes its category in one short paragraph, in Bangla and English.
- The picture lines are “Pictures from ongoing work.”, “Pictures from on-site work.”, and “Pictures of proposed system.”

## Active requirement IDs

Baseline, already in `index.html`, not executed in a browser this session:

- `REQ-0001` `REQ-0002` `REQ-0003` `REQ-0004` `REQ-0005` `REQ-0006`

Proposed, blocked on `GATE-0001`:

- `REQ-0007` `REQ-0008` `REQ-0009` `REQ-0010` `REQ-0011` `REQ-0012`

## Files changed this session

- `public/projects/design-technical-support/index.html`
- `public/projects/concrete-mix-design-testing/index.html`
- `public/projects/detailed-engineering-assessment/index.html`
- `public/projects/interior-design/index.html`
- `public/projects/solar-system-design-installation/index.html`
- `public/projects/fire-safety-hvac/index.html`
- `CLAUDE.md`
- `.agile-v/STATE.md`, `CHANGELOG.md`, `VALIDATION_SUMMARY.md`, `DECISION_LOG.md`

Not changed: `AGENTS.md` and `docs/VERCEL-PLAIN-JS-DEPLOY.md`.

## Validation

No typecheck, lint, test, or build script exists. The home cycle, the project pages, the contact form, and the other routes were checked in a local browser. See `VALIDATION_SUMMARY.md`.

## Blockers

- `GATE-0001` was superseded. Do not halt new page work on token `C1-HG1-7f3a`.
- Cloudflare is managed outside this repo. Canonical pages use `https://buildsafe.com.bd/`.
- `REQ-0005` now uses the six named project folders. The old `p1.jpg` through `p6.jpg` names are not requested.

## Unresolved questions

1. Which proposed requirement IDs are in scope for C1?
2. Theme: follow the system, lock light, or add a toggle? Recommendation is in `REQ-0009`.
3. Without JavaScript, is a phone fallback enough, or should every section stay visible? Recommendation is in `REQ-0008`.
4. What is the public site URL, if any?
5. Design and solar cards still use posters that are not 4:3. The five home pictures are not all 4:3 either. Do not replace those until the client supplies the new files.

## Deferred

Recorded in `TASKS.md` as out of scope until a later approval: enquiry storage, a framework or backend, deployment, and git initialization.
