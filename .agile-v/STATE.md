# STATE

## Resume point

Cycle: `C1`
Phase: The `public/` site is on `main`. Saved English is applied before first paint. Header links size to the visible language. Cloudflare is still the older live site and is managed separately.
Branch: `fix/nav-label-width` (nav label width), merged to `main` by pull request. `fix/language-flash` is the earlier language-flash branch. `feat/public-seo` is the brochure branch.
Remote: `https://github.com/arnobt78/Real-State-Consultancy--VanillaJS-HTML5-CSS3.git`
Gate: `GATE-0001` was superseded. Do not wait on token `C1-HG1-7f3a`. Do not revert `public/` because that token is missing.

Next exact action: none for the nav-width task. Do not push new implementation straight to `main`. Do not follow `docs/VERCEL-PLAIN-JS-DEPLOY.md`. A Vercel test deploy, if wanted, is a separate approval and must use output directory `public` with no build command.

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

## Architecture (current)

- Publish root is `public/`. Nine HTML pages share `public/css/site.css` and `public/js/site.js`.
- Bangla is the default. English is in the same file and is shown when `data-lang` is `en`. The choice is stored as `bs-lang`. A head script sets that attribute before first paint when the saved value is `en`. Header links follow the visible words. The contact service menu is two selects so its label is already in the saved language.
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

- Confirmed `.agile-v/` did not exist. Bootstrapped Cycle `C1`.
- Read `docs/AGILE_V_PROTOCOL.md`, `CLAUDE.md`, `AGENTS.md`, `index.html`, and the image files.
- Reconciled an empty project memory with the static site.
- Wrote planning records only. No implementation change.

## Active requirement IDs

Baseline, already in `index.html`, not executed in a browser this session:

- `REQ-0001` `REQ-0002` `REQ-0003` `REQ-0004` `REQ-0005` `REQ-0006`

Proposed, blocked on `GATE-0001`:

- `REQ-0007` `REQ-0008` `REQ-0009` `REQ-0010` `REQ-0011` `REQ-0012`

## Files changed this session

- `.agile-v/STATE.md`
- `.agile-v/REQUIREMENTS.md`
- `.agile-v/TASKS.md`
- `.agile-v/DECISION_LOG.md`
- `.agile-v/RISKS.md`
- `.agile-v/GATES.md`
- `.agile-v/CHECKPOINTS.md`
- `.agile-v/APPROVALS.md`
- `.agile-v/VALIDATION_SUMMARY.md`
- `.agile-v/CHANGELOG.md`
- `CLAUDE.md`

Not changed: `index.html`, `img/*`, `AGENTS.md`, `README.md`, `docs/AGILE_V_PROTOCOL.md`.

## Validation

No typecheck, lint, test, or build script exists. The page was not opened in a browser. See `VALIDATION_SUMMARY.md`.

## Blockers

- `GATE-0001` is PENDING. Implementation is stopped.
- Production URL is unknown, so canonical and Open Graph URLs cannot be finished (`RISK-0003`).
- Project photographs are not in the repository (`REQ-0005`).

## Unresolved questions

1. Which proposed requirement IDs are in scope for C1?
2. Theme: follow the system, lock light, or add a toggle? Recommendation is in `REQ-0009`.
3. Without JavaScript, is a phone fallback enough, or should every section stay visible? Recommendation is in `REQ-0008`.
4. What is the public site URL, if any?
5. Will real project photos be supplied, and for which of the six captions?

## Deferred

Recorded in `TASKS.md` as out of scope until a later approval: enquiry storage, a framework or backend, deployment, and git initialization.
