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
