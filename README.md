# Build Safe Engineering & Consultancy - JavaScript, HTML, CSS Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A bilingual Bangla and English brochure for Build Safe Engineering & Consultancy in Dhaka. The pages are static files. There is no framework, no build step, and no server.

The consultancy owner is Md Mamunoor Rasid ([LinkedIn](https://www.linkedin.com/in/md-mamunoor-rashid/)). Questions about this repository can go to [contact@arnobmahmud.com](mailto:contact@arnobmahmud.com) or [arnobmahmud.com](https://www.arnobmahmud.com).

---

## What you get

Nine real addresses. Bangla is the language on screen until the visitor chooses English. Both languages are written in the same HTML file. A small script shows one of them.

The contact form checks the name and mobile number in the browser, then prepares a WhatsApp message. The site does not store that message.

---

## How to open it

The publish folder is `public/`. Open `public/index.html` in a browser for a quick look. Root-absolute links such as `/css/site.css` work when a local server is rooted at `public/`:

```bash
cd public
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

There is no `package.json`, so there is nothing to install.

---

## Environment

No `.env` file is required. The phone number, email `contact.buildsafe@gmail.com`, Facebook page, and LinkedIn profile are written in the HTML because they are already public on the site.

You do not need to set any environment variable to run these pages.

---

## Routes

| Path         | File                         | What it is                             |
| ------------ | ---------------------------- | -------------------------------------- |
| `/`          | `public/index.html`          | Home                                   |
| `/services/` | `public/services/index.html` | Eight services                         |
| `/about/`    | `public/about/index.html`    | About the firm                         |
| `/projects/` | `public/projects/index.html` | Project slots                          |
| `/contact/`  | `public/contact/index.html`  | Enquiry form                           |
| `/terms/`    | `public/terms/index.html`    | Terms of use                           |
| `/privacy/`  | `public/privacy/index.html`  | How the form is used                   |
| `/cookies/`  | `public/cookies/index.html`  | What the site saves                    |
| `/faq/`      | `public/faq/index.html`      | Questions already answered on the site |

`public/sitemap.xml` lists those nine addresses. `public/robots.txt` allows crawlers and points at the sitemap.

An old home link such as `/#services` is sent to `/services/`. The same happens for about, projects, and contact.

---

## How a page is built

Every page uses the same shell:

- `public/css/site.css` for layout, color, language, and fonts
- `public/js/site.js` for the menu, language, form, and project photos
- `public/img/` for the logo, hero, favicon, and service pictures
- `public/fonts/` for the typefaces

There are no shared components, hooks, or a component library. To reuse a page in another static site, copy the HTML file and keep the same `/css`, `/js`, `/img`, and `/fonts` paths, or change those paths in that copy.

The header and the footer Pages list are Home, About, Services, Projects, FAQ, and Contact. The office column shows the phone, email, address, and the social icons. The FAQ page answers 15 questions taken from those pages.

---

## Language

The buttons are বাংলা and EN. The choice is saved in the browser under the key `bs-lang`. It is not sent to a server.

CSS hides the language that is not active:

```css
html:not([data-lang="en"]) [lang="en"],
html[data-lang="en"] [lang="bn"] {
  display: none;
}
```

Text that must change inside a form field uses `data-bn` and `data-en`. The script copies the active value into the placeholder or the option label.

---

## Enquiry

`/contact/?service=3` opens the form with service 3 selected. The allowed values are `0` through `8`.

The script accepts a name of more than one character and a Bangladesh mobile number. Bangla digits are converted first. A valid form writes the message with `textContent` and sets a link to `https://wa.me/8801814116677`. The visitor still sends the message. Nothing is posted to this site.

---

## Fonts and pictures

Headings use Anek Bangla. Body text uses Hind Siliguri. Small labels use IBM Plex Mono. The files are in `public/fonts/` and are licensed under the SIL Open Font License in that folder.

The home photo is `public/img/hero.jpg`. The header uses `public/img/logo.png`. Chat and email previews use `public/img/meta-logo.jpg`. Service pictures below the first screen use `loading="lazy"`. On the projects page, a photo appears only when `img/projects/p1.jpg` through `p6.jpg` exist. Missing files stay as placeholders.

---

## Search files

Each page has its own title, description, canonical URL, and social tags. The address used there is `https://buildsafe.com.bd/`. The share picture is `https://buildsafe.com.bd/img/meta-logo.jpg`. The structured-data logo is `https://buildsafe.com.bd/img/logo.png`. The FAQ page also has structured data for the questions printed on that page.

Keywords are the ordinary words already on the pages: engineering consultancy, design, testing, material advice, Dhaka, and Bangladesh. There is no keywords meta tag.

---

## Words used here

- **Static site.** The HTML files are the pages. A host only has to serve the `public/` folder.
- **Canonical URL.** The preferred address of a page, so a crawler does not treat copies as different pages.
- **JSON-LD.** A block of structured data in the page head. It describes the business. It is not a database.
- **localStorage.** A small store in the browser. This site uses it for the language choice only.

There is no API, backend, database, or foreign key.

---

## Security

See [SECURITY.md](SECURITY.md). Report a vulnerability privately to [contact@arnobmahmud.com](mailto:contact@arnobmahmud.com).

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

The font files keep their own SIL Open Font License. See `public/fonts/`.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).
