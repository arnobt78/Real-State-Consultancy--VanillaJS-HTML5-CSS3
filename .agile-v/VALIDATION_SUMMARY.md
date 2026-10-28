# VALIDATION SUMMARY

Cycle: `C1`
Session: 2026-10-27
eval_gate_status: not applicable (no release candidate, Gate 2 not open)

## Executed

| Check | Command | Result |
|---|---|---|
| Repository inventory | `ls`, `find`, `du`, `file`, `sips` | Pass as inspection only. One HTML file, nine images, no `img/projects/`. |
| Version control | `git status -sb` | Not a git repository. This is a fact, not a failed test. |
| Logo alpha | Python PIL sample of `img/logo.png` | RGBA. Corners are transparent. A white logo plate matches the asset. |
| Source read | `index.html`, protocol, `CLAUDE.md`, `AGENTS.md` | Completed. Findings are in `REQUIREMENTS.md` and `RISKS.md`. |

## Not executed

| Check | Reason |
|---|---|
| Browser walkthrough of routing, language, form, copy, placeholders, dark scheme, narrow layout | No implementation was authorized, and behavior was not exercised. `REQ-0012` covers this after approval. |
| typecheck, lint, unit tests, build | No `package.json` and no scripts. |
| Accessibility audit with a tool | Not run. |
| Security audit or dependency audit | No dependencies are declared. Google Fonts is a runtime link (`RISK-0004`). |

Do not read the 2026-10-27 section as evidence that the page works in a browser.

## 2026-10-28 — public site

Local browser checks on a static server rooted at `public/`:

- Nine routes opened. Bangla is the default. English shows the English address and form labels.
- Contact form prepared a `https://wa.me/8801814116677` message for a valid name and mobile number. It does not store the message.
- Footer and contact icons point at Facebook, the founder LinkedIn profile, and `https://www.youtube.com/@BuildSafe-EC`, each with `target="_blank"` and `rel="noopener"`.
- At a 390px width, the contact page and home page did not scroll sideways.
- JSON-LD on the pages parses. `postalCode` is `1205`.
- No typecheck, lint, unit test, or build script exists, so none was run.
- The live host `https://buildsafe.com.bd/` was still the older single page when last checked. This repo has not been deployed.

## 2026-10-28 — language flash

Local browser checks on a static server rooted at `public/`:

- With `bs-lang` set to `en`, reloading `/contact/?service=3` showed **Concrete Mix Design**. The Bangla select was `display: none`.
- Switching to Bangla showed **কংক্রিট মিক্স ডিজাইন** and kept value `3`. Switching back showed the English label again.
- A valid enquiry prepared a WhatsApp message whose service line matched the visible menu in each language.
- `node --check` on `public/js/site.js` passed. No typecheck, lint, unit test, or build script exists.
- Security review of this diff found no exploitable issue. The site has no backend, auth, or package manifest.

## 2026-10-28 — nav label width

Local browser checks on a static server rooted at `public/`:

- Bangla header widths followed the words. The gaps between links were 4px.
- English **About** was 71px, not the width of **আমাদের সম্পর্কে**. The gaps were 4px.
- Hover on **Services** used the soft background at the width of that word plus padding.
- Reload with English saved showed English. `/#services` opened `/services/`.
- All nine routes returned 200. A valid contact enquiry prepared a WhatsApp message for Concrete Mix Design.
- At 390px the menu was one language per full-width row, and the page did not scroll sideways.
- No typecheck, lint, unit test, or build script exists, so none was run.

## 2026-10-28 — footer Information column

Local browser checks on a static server rooted at `public/`:

- At 1280px the columns were brand, Pages, Information, and Contact. Information listed Terms, Privacy, Cookies, and FAQ once.
- The footer address computed to 15px, weight 400, and the same color as the phone line. The contact-page office card stayed 16px and weight 600.
- At 761px the four columns stayed in one row. At 760px and at 390px, Pages and Information shared a row and Contact was full width underneath.
- Checked all nine routes in Bangla and English. The matching Information link kept `aria-current="page"` on Terms, Privacy, Cookies, and FAQ.
- `/#services`, `/#about`, `/#projects`, and `/#contact` opened those routes. A short name was rejected. A valid enquiry, including Bangla digits, prepared `https://wa.me/8801814116677`.
- The only 404 responses were the absent optional files `public/img/projects/p1.jpg` through `p6.jpg`. Placeholders stayed. No page errors.
- No typecheck, lint, unit test, or build script exists, so none was run.

## 2026-10-28 — nav link order

Local browser checks on a static server rooted at `public/`:

- All nine routes, in Bangla and English, showed Home, About, Services, Projects, Contact in the header and in the footer Pages list.
- At 1280px those links ran left to right in that order. At 390px the open phone menu ran them top to bottom in that order.
- `/about/` marked About. `/services/` marked Services. Legal pages did not mark a header link.
- The home button still said আমাদের সেবাসমূহ / Our services.
- No typecheck, lint, unit test, or build script exists, so none was run.

## 2026-10-28 — office footer and share picture

Local browser checks on a static server rooted at `public/`, after the footer change and again after the picture split:

- All nine routes, in Bangla and English, at 1280px and 390px, showed Pages as Home, About, Services, and Projects. Information showed FAQ and Contact. Office showed the phone, `contact.buildsafe@gmail.com`, and the Dilara Tower address.
- The contact page email card used `mailto:contact.buildsafe@gmail.com`. Structured data on every page included that email.
- The slogan was “Partner with build safe to turn your vision into reality”. The words vision and reality computed to `rgb(227, 146, 114)` and weight 600 in the dark footer.
- On every page, `og:image`, `twitter:image`, and the structured-data image were `https://buildsafe.com.bd/img/meta-logo.jpg`, with width 2000, height 2000, and type `image/jpeg`. The structured-data logo was `https://buildsafe.com.bd/img/logo.png`.
- The header image was `/img/logo.png` and had a visible width. The home photo was `/img/hero.jpg` with the engineers alt text. Other pages had no hero image. The favicon and apple-touch icon were unchanged.
- `meta-logo.jpg` measured 2000 by 2000 JPEG and returned HTTP 200. `public/sitemap.xml` still listed nine page URLs and no images.
- The only 404 responses were the absent optional files `public/img/projects/p1.jpg` through `p6.jpg`.
- No typecheck, lint, unit test, or build script exists, so none was run.

## 2026-10-29 — FAQ list and contact copy

Local browser checks on a static server rooted at `public/`:

- The FAQ title stayed `প্রশ্নোত্তর | Build Safe Engineering & Consultancy`. The visible heading was “বাড়ি নির্মাণের আগে যে প্রশ্ন আসে” in Bangla and “Frequently asked questions” in English. The old short-answers line was absent.
- Fifteen visible questions matched the Bangla `FAQPage` structured data, including the answers. The first item had 20px of padding and an 8px gap before the answer. The heading weight was 700.
- The home page still had three `.q` items. The global section padding rule was still present, and the FAQ items were not `section` elements.
- At 1280px the footer row kept space between the copyright and the slogan “Partner with BUILD SAFE to turn your vision into reality”. At 390px both lines were centered.
- The contact email matched the phone number at 19px and weight 600, kept `mailto:contact.buildsafe@gmail.com`, and copied that address. The notice sat 16px from the right edge.
- No unexpected failed requests. The only known 404s remain the absent optional files `public/img/projects/p1.jpg` through `p6.jpg`.
- No typecheck, lint, unit test, or build script exists, so none was run.

## 2026-10-29 — FAQ in the header and Pages

Local browser checks on a static server rooted at `public/`:

- All nine routes, in Bangla and English, showed Home, About, Services, Projects, FAQ, Contact in the header and in Pages. Footer headings were Pages and Office. There was no Information column.
- At 1280px the footer was three columns. At 760px and at 390px the brand, Pages, and Office each filled the row.
- At 390px the open phone menu listed those six links top to bottom. `/faq/` marked FAQ in the header and on the Pages link. `/contact/` marked Contact the same way. Legal pages did not mark a header link.
- Facebook, LinkedIn, and YouTube stayed inside the office column.
- The only 404 responses were the absent optional files `public/img/projects/p1.jpg` through `p6.jpg`. No page errors.
- No typecheck, lint, unit test, or build script exists, so none was run. An independent file check matched the same header, Pages list, `aria-current` placement, and three-column footer.
