# CHANGELOG

## 2026-10-27 — C1 planning baseline

- Bootstrapped `.agile-v/` because no project memory existed.
- Recorded the static brochure as the source of truth.
- Drafted baseline and proposed requirements. No requirement is approved.
- Opened `GATE-0001` (`C1-HG1-7f3a`).
- Corrected `CLAUDE.md` so it no longer requires a TypeScript or server-rendered stack.
- Did not change `index.html`, `img/`, or `README.md`.

## 2026-10-28 — public site

- Replaced the single page with nine static pages in `public/`.
- Added the office address, social icons, self-hosted fonts, sitemap, robots, README, license, and security contact.
- Checked the contact form, language switch, icons, and phone-width footer in a local browser.
- Did not deploy. Cloudflare still serves the older site.

## 2026-10-28 — language flash

- Set the saved language in each page head before first paint.
- Kept header labels one width, and stopped the active nav link from changing weight.
- Gave the contact form a Bangla service menu and an English service menu.
- Checked `/contact/` in a local browser in both languages, including a prepared WhatsApp message.

## 2026-10-28 — nav label width

- Sized each header link to the visible language, with the same padding and a 4px gap.
- Made only the current page link bolder.
- Kept the Consultation button one width, with its label centered.
- Rechecked both languages, the nine routes, the old home hash, and one contact enquiry in a local browser.

## 2026-10-28 — footer Information column

- Added an Information column between Pages and Contact on all nine pages.
- Moved Terms, Privacy, Cookies, and FAQ into that column and removed the old legal row.
- On a phone, Pages and Information sit side by side and Contact stays full width.
- Matched the footer address to the other footer lines. Left the contact-page office card as it was.

## 2026-10-28 — nav link order

- Put About before Services in the header and in the footer Pages list.
- Left the Information column, breadcrumbs, and the home services button unchanged.

## 2026-10-28 — office footer and share picture

- Listed FAQ and Contact in Information. Left Terms, Privacy, and Cookies out of the footer.
- Renamed the third footer column to Office and listed the phone, email, and address. Added the email on the contact page and in structured data.
- Set the slogan to “Partner with build safe to turn your vision into reality”, with vision and reality marked.
- Removed Contact from the Pages column. Left it in the header and in Information.
- Pointed link previews at `meta-logo.jpg`. Kept the site logo as `logo.png` and the home photo as `hero.jpg`.

## 2026-10-29 — FAQ list and contact copy

- Replaced the six short FAQ items with 15 questions drawn from the existing pages.
- Removed the wide gap by listing the questions as articles instead of padded sections.
- Set the slogan to “Partner with BUILD SAFE to turn your vision into reality”, in one color, and centered those footer lines on a phone.
- Matched the contact email to the phone number and added the same copy button. Moved the copy notice to the bottom right.

## 2026-10-29 — FAQ in the header and Pages

Pull request 7.

- Removed the Information column and listed FAQ and Contact in Pages, after Projects.
- Added FAQ immediately before Contact in the header. The phone menu uses that same list.
- Stacked the brand, Pages, and Office on full rows at 760px and below. Left the social icons under the office lines.

## 2026-10-29 — teaching README

Pull request 8.

- Rewrote `README.md` as a guide to the nine static pages, the language switch, the form, and the share tags.
- Left the title and `SECURITY.md` unchanged. Added the Diploi badge for this repository.

## 2026-10-29 — consult, consulting, and consultancy

Pull request 8.

- Replaced the previous English guidance noun and verb with consult, consulting, or consultancy.
- Left Bangla unchanged. Left buttons that already said “Consultation”.

## 2026-10-29 — project cards and detail pages

- Replaced the six placeholders with posters, badges, and the existing service lines.
- Added a static detail page for each card. Interior and fire use their new posters. Assessment, interior, and fire have no extra gallery pictures.
- Renamed the solar service title to Solar System Design & Installation. Left the FAQ solar question unchanged.
- Stopped requesting the missing `p1.jpg` through `p6.jpg` files.
