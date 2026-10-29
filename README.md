# Build Safe Engineering & Consultancy - JavaScript, HTML, CSS Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A bilingual Bangla and English brochure for Build Safe Engineering & Consultancy in Dhaka. The pages are static files in `public/`. There is no framework, no build step, no package install, and no server.

Bangla is the language on screen until the visitor chooses English. Both languages are written in the same HTML file. A small script shows one of them. The contact form checks the name and mobile number in the browser, then prepares a WhatsApp message. The site does not store that message.

The consultancy owner is Md Mamunoor Rasid ([LinkedIn](https://www.linkedin.com/in/md-mamunoor-rashid/)). Questions about this repository can go to [Arnob Mahmud](https://www.arnobmahmud.com/) at [contact@arnobmahmud.com](mailto:contact@arnobmahmud.com).

- **Test site:** [https://build-safe-testing.vercel.app/](https://build-safe-testing.vercel.app/) serves this folder. Vercel Production follows `main`.
- **Official site address:** the pages name `https://buildsafe.com.bd/` in their canonical and share tags. Cloudflare is managed outside this repository and may still be an older copy.
- **Security:** private reports go to [SECURITY.md](SECURITY.md).

---

## Table of contents

- [Project summary](#project-summary)
- [What you will learn](#what-you-will-learn)
- [How to open it](#how-to-open-it)
- [Environment](#environment)
- [Project structure](#project-structure)
- [Routes](#routes)
- [How a page is built](#how-a-page-is-built)
- [Language](#language)
- [Header, footer, and the phone menu](#header-footer-and-the-phone-menu)
- [Enquiry](#enquiry)
- [Copy and the notice](#copy-and-the-notice)
- [Fonts and pictures](#fonts-and-pictures)
- [Search and link previews](#search-and-link-previews)
- [Words used here](#words-used-here)
- [Reusing a page](#reusing-a-page)
- [Security](#security)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project summary

This repository is the brochure. A host only has to serve the `public/` folder. Each HTML file is one page. Shared files are `public/css/site.css` and `public/js/site.js`.

What a visitor can do:

1. Read the home page, eight services, the about page, six project cards, and 15 questions on the FAQ page.
2. Switch between Bangla and English. The choice stays on that device.
3. Open the phone menu on a narrow screen. It is the same header list.
4. Send an enquiry by preparing a WhatsApp message to `+880 1814-116677`. Nothing is posted to this site.
5. Copy the phone number or `contact.buildsafe@gmail.com` from the contact page.

There is no account, database, API, or admin screen.

---

## What you will learn

| Topic                                      | Where it lives                                            |
| ------------------------------------------ | --------------------------------------------------------- |
| One HTML file per route                    | `public/` and `public/*/index.html`                       |
| Shared layout, color, and type             | `public/css/site.css`                                     |
| Menu, language, form, copy, home photo cycle | `public/js/site.js`                                |
| Two languages in one file                  | `lang="bn"` and `lang="en"` spans, plus `data-lang`       |
| Saved language before first paint          | The short script in each page `<head>`                    |
| Browser-only form check                    | The `#enq` block in `public/js/site.js`                   |
| Old home links                             | `/#services` and the other home hashes                    |
| Share tags                                 | `og:` and `twitter:` tags, plus JSON-LD in each page head |
| Crawl hints                                | `public/robots.txt` and `public/sitemap.xml`              |

---

## How to open it

Root-absolute links such as `/css/site.css` need a server whose root is `public/`. Opening `index.html` as a file makes those links miss.

```bash
cd public
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

There is no `package.json`, so there is nothing to install and no `npm run` script. There is no lint, typecheck, unit test, or production build in this repository.

---

## Environment

No `.env` file is required. You do not need to set any environment variable to run these pages.

The phone number, the email `contact.buildsafe@gmail.com`, the office address, and the Facebook, LinkedIn, YouTube, and Messenger links are written in the HTML because they are already public on the site. Do not treat those lines as secrets.

---

## Project structure

```bash
public/
├── index.html              # Home, route /
├── about/index.html
├── services/index.html
├── projects/index.html
├── contact/index.html
├── faq/index.html
├── terms/index.html
├── privacy/index.html
├── cookies/index.html
├── css/site.css            # Layout, color, language, footer, toast
├── js/site.js              # Menu, language, form, copy, home photo cycle
├── img/                    # logo.png, hero.jpg, home-hero/, meta-logo.jpg, s1.jpg–s8.jpg
├── fonts/                  # Self-hosted faces and their SIL licenses
├── robots.txt
└── sitemap.xml             # The nine page addresses only
```

`README.md`, `LICENSE`, and `SECURITY.md` sit at the repository root. `docs/` and `.agile-v/` are project notes. They are not part of the published site.

---

## Routes

| Path         | File                         | What it is                                        |
| ------------ | ---------------------------- | ------------------------------------------------- |
| `/`          | `public/index.html`          | Home                                              |
| `/about/`    | `public/about/index.html`    | About the firm                                    |
| `/services/` | `public/services/index.html` | Eight services, anchors `#svc-1` through `#svc-8` |
| `/projects/` | `public/projects/index.html` | Six project cards                                 |
| `/faq/`      | `public/faq/index.html`      | 15 questions taken from the other pages           |
| `/contact/`  | `public/contact/index.html`  | Enquiry form                                      |
| `/terms/`    | `public/terms/index.html`    | Terms of use                                      |
| `/privacy/`  | `public/privacy/index.html`  | How the form is used                              |
| `/cookies/`  | `public/cookies/index.html`  | What the site saves                               |

`public/sitemap.xml` lists those nine addresses. `public/robots.txt` allows crawlers and points at the sitemap. Terms, Privacy, and Cookies stay public. They are not links in the footer.

An old home link is sent to the real page:

| Old link     | Opens        |
| ------------ | ------------ |
| `/#services` | `/services/` |
| `/#about`    | `/about/`    |
| `/#projects` | `/projects/` |
| `/#contact`  | `/contact/`  |

That redirect is in `public/js/site.js`. It runs only on the home page, then stops the rest of the script with `return`.

---

## How a page is built

Every page uses the same shell:

- `public/css/site.css` for layout, color, language, and fonts
- `public/js/site.js` for the menu, language, form, copy, and the home photo cycle
- `public/img/` for the logo, hero, favicon, share picture, and service pictures
- `public/fonts/` for the typefaces

`body` carries `data-page`. The script marks the header link whose `data-nav` matches that value. There is one `nav.main`. The phone menu is that same list, opened by the menu button. There is no second menu and no router.

There are no shared components, hooks, or a component library. The HTML is repeated on each page so a host can serve the files as they are.

---

## Language

The buttons are বাংলা and EN. The choice is saved in the browser under the key `bs-lang`. It is not sent to a server.

Bangla is the default. A short script in each page head runs before the first paint. It sets `lang` and `data-lang` to `en` only when the saved value is already `en`:

```html
<script>
  try {
    if (localStorage.getItem("bs-lang") === "en") {
      document.documentElement.lang = "en";
      document.documentElement.setAttribute("data-lang", "en");
    }
  } catch (e) {}
</script>
```

CSS then hides the language that is not active:

```css
html:not([data-lang="en"]) [lang="en"],
html[data-lang="en"] [lang="bn"] {
  display: none;
}
```

`public/js/site.js` updates `data-lang`, the pressed state of the two buttons, and `localStorage` when a button is clicked. Text that must change inside a form field uses `data-bn` and `data-en`. The script copies the active value into the placeholder.

The contact service menu is two `<select>` elements, one Bangla and one English, so the visible label does not wait on the bottom script. Choosing a language copies the selected index from one menu to the other.

---

## Header, footer, and the phone menu

Header order, and the footer Pages list, are:

Home, About, Services, Projects, FAQ, Contact

The current page link is slightly bolder. Header links are only as wide as the visible language. They share the same padding and a 4px gap.

The footer has three columns: the logo and tagline, Pages, and Office. Office lists the phone, `contact.buildsafe@gmail.com`, and the Dilara Tower address. Facebook, LinkedIn, and YouTube sit under those lines.

At 760px and below, the brand, Pages, and Office each take a full row. On a phone, the copyright line and the slogan are centered. The slogan is “Partner with BUILD SAFE to turn your vision into reality”, in one color.

The FAQ page marks the FAQ link in the header and in Pages. The contact page marks Contact the same way. `aria-current="page"` is on that footer link only.

---

## Enquiry

`/contact/?service=3` opens the form with service 3 selected. The allowed values are `0` through `8`. Any other value is ignored.

The script accepts a name of more than one character and a Bangladesh mobile number. Bangla digits are converted first. A leading `880` is removed. The number must match `01` then `3`–`9`, then eight more digits.

A valid form writes the message with `textContent` and sets a link to `https://wa.me/8801814116677`. The visitor still sends the message. The site does not call `window.open`, does not post the form, and does not store the fields. Submitting does not create a contract. Scope, fee, and deliverables are agreed separately. This site has no fee table.

---

## Copy and the notice

The contact page shows the phone number and `contact.buildsafe@gmail.com` at the same size and weight. Each has a copy button. The button’s `data-copy` value is what gets copied. If the clipboard is blocked, the script selects that button’s own text.

The notice sits at the bottom right. On a phone it stays above the Call us / Consultation bar. A short fade-and-rise runs unless the visitor has asked the system to reduce motion.

---

## Fonts and pictures

Headings use Anek Bangla. Body text uses Hind Siliguri. Small labels use IBM Plex Mono. The files are in `public/fonts/` and are licensed under the SIL Open Font License in that folder.

| File                                          | Role                                                       |
| --------------------------------------------- | ---------------------------------------------------------- |
| `public/img/logo.png`                         | Header logo and the structured-data logo                   |
| `public/img/logo-white.png`                   | Logo on the dark header                                    |
| `public/img/hero.jpg`                         | First picture in the home frame                           |
| `public/img/meta-logo.jpg`                    | Picture named in the share tags (2000×2000 JPEG)           |
| `public/img/favicon.png`                      | Browser icon                                               |
| `public/img/icon-180.png`                     | Apple touch icon                                           |
| `public/img/s1.jpg` through `s8.jpg`          | Service pictures. Later ones use `loading="lazy"`          |
| `public/img/home-hero/hero-1.png` through `hero-4.png` | The other four pictures in the home frame. `hero-1.png` is also the design detail banner |
| `public/img/projects/`                    | Card pictures, banners, and gallery pictures for the six jobs |

The home frame is 4:3. It shows `hero.jpg` and its caption when JavaScript is off or motion is reduced. The other four pictures fade in with their own caption, and the side rules follow that line. They hold for 3 seconds, and the next file is decoded before it fades. From 861px up, the diamond row and the caption share one line. Concrete, interior, assessment, and fire cards use 4:3 pictures. Their detail pages keep the poster banners, with the same space above and below the two buttons.

---

## Search and link previews

Each page has its own title, description, canonical URL, and social tags. The address written there is `https://buildsafe.com.bd/`. The share picture is `https://buildsafe.com.bd/img/meta-logo.jpg`. The structured-data logo is `https://buildsafe.com.bd/img/logo.png`. The FAQ page also has structured data for the questions printed on that page. The sitemap lists pages only, not images.

Chat and email apps read the address written in the tags. They do not run the page script. The picture file is in this folder, but the tags name it on `buildsafe.com.bd`. A preview of [https://build-safe-testing.vercel.app/](https://build-safe-testing.vercel.app/) stays without that picture until Cloudflare serves this same `public/` folder and a fresh share of `https://buildsafe.com.bd/` is fetched. An older saved card can linger until the app fetches again.

Keywords are the ordinary words already on the pages: engineering consultancy, design, testing, material consultancy, Dhaka, and Bangladesh. There is no keywords meta tag.

---

## Words used here

- **Static site.** The HTML files are the pages. A host only has to serve the `public/` folder.
- **Canonical URL.** The preferred address of a page, so a crawler does not treat copies as different pages.
- **JSON-LD.** A block of structured data in the page head. It describes the business, and on the FAQ page the questions. It is not a database.
- **localStorage.** A small store in the browser. This site uses it for the language choice only.
- **Share tags.** `og:` and `twitter:` lines that chat apps read when someone pastes a link.

There is no API, backend, database, or foreign key.

---

## Reusing a page

Copy the HTML file into another static site and keep the same `/css`, `/js`, `/img`, and `/fonts` paths, or change those paths in that copy. The script looks up elements by id (`enq`, `nav`, `menu-btn`, `toast`). A copied contact page needs those ids if the form and the copy buttons should keep working.

There is no package to import and no component to drop into a React or Next.js app.

---

## Security

See [SECURITY.md](SECURITY.md). Report a vulnerability privately to [contact@arnobmahmud.com](mailto:contact@arnobmahmud.com). Do not open a public GitHub issue for it.

The public contact details in the HTML are intentional. The form never sends those fields to a server of this site.

---

## Keywords

engineering consultancy, structural design, material testing, concrete testing, material consultancy, Dilara Tower, Hatirpool, Dhaka, Bangladesh, bilingual brochure, static HTML, WhatsApp enquiry, Build Safe Engineering

---

## Conclusion

This project is a small static brochure you can read from top to bottom. Serve `public/`, switch the language, open the phone menu, and submit the contact form with a short name and a Bangladesh mobile number. The useful behavior is in two shared files, `public/css/site.css` and `public/js/site.js`, plus the nine HTML pages.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

The font files keep their own SIL Open Font License. See `public/fonts/`.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).
