# STATE

## Resume point

Cycle: `C1`
Phase: Saved English is applied before first paint. Header links size to the visible language. FAQ is in the header before Contact and in the footer Pages list. The Information column is gone. The footer Office column lists the phone, email, and address, with the social icons underneath. The FAQ page lists 15 questions in a compact list. The slogan is “Partner with BUILD SAFE to turn your vision into reality”. Pull request 6 is on `main`. This FAQ placement is committed on `fix/footer-information` and is not on `main`. Vercel Production follows `main`. A push on `fix/footer-information` stays a Vercel Preview until it is merged. Cloudflare is still the older live site and is managed separately.
Branch: `fix/footer-information` is the only feature branch. Do not open another branch. Older branches were removed after their pull requests merged.
Remote: `https://github.com/arnobt78/Real-State-Consultancy--VanillaJS-HTML5-CSS3.git`
Gate: `GATE-0001` was superseded. Do not wait on token `C1-HG1-7f3a`. Do not revert `public/` because that token is missing.

Next exact action: await authorization to push `fix/footer-information` and open one pull request into `main`. Vercel Production deploys `main`. Do not push new implementation straight to `main`. Do not open another branch. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`. A Vercel test deploy uses output directory `public` with no build command.

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

- Publish root is `public/`. Nine HTML pages share `public/css/site.css` and `public/js/site.js`.
- Bangla is the default. English is in the same file and is shown when `data-lang` is `en`. The choice is stored as `bs-lang`. A head script sets that attribute before first paint when the saved value is `en`. Header links follow the visible words, in the order Home, About, Services, Projects, FAQ, Contact. The phone menu uses that same header. Footer Pages lists those same six links. The Office column lists the phone, `contact.buildsafe@gmail.com`, and the Dilara Tower address, with Facebook, LinkedIn, and YouTube under those lines. At 760px and below, the brand, Pages, and Office each take a full row. The footer address matches the other footer lines. On a phone, the copyright line and the slogan are centered. The slogan is “Partner with BUILD SAFE to turn your vision into reality”, in the same color as the rest of the line. The contact email matches the phone number and has a copy button. The copy notice sits at the bottom right. The FAQ page has 15 bilingual questions drawn from the existing pages, with about 20px of padding per item. Link previews use `public/img/meta-logo.jpg`. The structured-data logo and the header image stay `logo.png`. The home photo stays `hero.jpg`. Terms, Privacy, and Cookies stay public and in the sitemap, and they are not in the footer. The contact service menu is two selects so its label is already in the saved language.
- The contact form validates a name and a Bangladesh mobile number, then prepares a WhatsApp link. It does not post to a server.
- Project cards show a photo only when `public/img/projects/p1.jpg` through `p6.jpg` exist.
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

- The header and the footer Pages list are Home, About, Services, Projects, FAQ, and Contact. The Information column is gone. Social icons stay under the office lines.
- The third footer column is Office: phone, `contact.buildsafe@gmail.com`, and the address. The contact page has a matching email card. Structured data includes that email.
- The slogan is “Partner with BUILD SAFE to turn your vision into reality”, in one color. On a phone those two footer lines are centered.
- The contact email matches the phone number and can be copied. The copy notice sits at the bottom right.
- The FAQ page lists 15 questions from the existing pages. The old short-answers line is gone.

## Active requirement IDs

Baseline, already in `index.html`, not executed in a browser this session:

- `REQ-0001` `REQ-0002` `REQ-0003` `REQ-0004` `REQ-0005` `REQ-0006`

Proposed, blocked on `GATE-0001`:

- `REQ-0007` `REQ-0008` `REQ-0009` `REQ-0010` `REQ-0011` `REQ-0012`

## Files changed this session

- the nine pages in `public/`
- `public/css/site.css`
- `README.md`
- `CLAUDE.md`
- `.agile-v/STATE.md`, `DECISION_LOG.md`, `VALIDATION_SUMMARY.md`, `CHANGELOG.md`

Not changed: `public/sitemap.xml`, `AGENTS.md`, `docs/VERCEL-PLAIN-JS-DEPLOY.md`.

## Validation

No typecheck, lint, test, or build script exists. The FAQ header link and the Pages list were checked in a local browser. See `VALIDATION_SUMMARY.md`.

## Blockers

- `GATE-0001` was superseded. Do not halt new page work on token `C1-HG1-7f3a`.
- Cloudflare is managed outside this repo. Canonical pages use `https://buildsafe.com.bd/`.
- Project photographs `p1.jpg` through `p6.jpg` are still absent (`REQ-0005`). Pull request 6 is on `main`. The FAQ header and Pages change is not.

## Unresolved questions

1. Which proposed requirement IDs are in scope for C1?
2. Theme: follow the system, lock light, or add a toggle? Recommendation is in `REQ-0009`.
3. Without JavaScript, is a phone fallback enough, or should every section stay visible? Recommendation is in `REQ-0008`.
4. What is the public site URL, if any?
5. Will real project photos be supplied, and for which of the six captions?

## Deferred

Recorded in `TASKS.md` as out of scope until a later approval: enquiry storage, a framework or backend, deployment, and git initialization.
