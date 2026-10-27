# REQUIREMENTS

Cycle: `C1`
Status of this file: drafted from the repository on 2026-10-27. Nothing here is approved. See `GATES.md` / `GATE-0001`.

Parent product intent, inferred from the page copy and not from a separate brief: a public brochure that explains Build Safe’s services in Bangla and English and lets a visitor start an enquiry on WhatsApp.

## Baseline — already in the source

These requirements describe behavior present in `index.html`. They are preservation requirements. Do not rebuild them. They are not marked done, because this session did not run the page.

### REQ-0001 Five-page brochure

The site exposes Home, Services, About, Projects, and Contact as hash targets `home`, `services`, `about`, `projects`, and `contact`. Only one page is visible after the script runs. In-page service links use `data-goto` to scroll to `svc-1` … `svc-8`.

Acceptance: from Home, each nav target shows that page and marks the matching nav link. A service card opens Services and scrolls to the matching article. A direct load of `#contact` shows Contact.

Evidence: `index.html` header nav, `.page` blocks, and the `show` function. Browser evidence: none (`VAL` not run).

### REQ-0002 Bangla and English

Bangla is the default. A control switches the visible language to English and stores the choice in `localStorage` under `bs-lang`. Both languages exist in the DOM; CSS hides the inactive one.

Acceptance: first visit with empty storage shows Bangla. Choosing EN shows English copy and survives a reload. Choosing বাংলা restores Bangla.

Evidence: language CSS, `setLang`, buttons `#lang-bn` and `#lang-en`. Browser evidence: none.

### REQ-0003 Eight services

The page presents these services, each with `img/sN.jpg` and a contact link that preselects that service:

| ID | Bangla | English | Image |
|---|---|---|---|
| svc-1 | ডিজাইন ও কারিগরি সহায়তা | Design & Technical Support | `img/s1.jpg` (also the hero) |
| svc-2 | ইন্টেরিয়র ডিজাইন | Interior Design | `img/s2.jpg` |
| svc-3 | কংক্রিট মিক্স ডিজাইন | Concrete Mix Design | `img/s3.jpg` |
| svc-4 | কংক্রিট টেস্টিং সেবা | Concrete Testing | `img/s4.jpg` |
| svc-5 | ভবনের নিরাপত্তা মূল্যায়ন (DEA) | Detailed Engineering Assessment | `img/s5.jpg` |
| svc-6 | ফায়ার সেফটি ও HVAC | Fire Safety & HVAC | `img/s6.jpg` |
| svc-7 | সোলার সিস্টেম | Solar Systems | `img/s7.jpg` |
| svc-8 | নির্মাণসামগ্রী বাছাইয়ে পরামর্শ | Material Selection Advice | `img/s8.jpg` |

Service 8 is marked free. Illustrations were inspected on 2026-10-27 and match those topics. `img/s2.jpg` is a photoreal interior; the other service images are stylized 3D scenes (`RISK-0008`).

Acceptance: all eight articles render with their image, heading, and “ask about this service” control. Choosing that control opens Contact with the matching `<select>` value.

### REQ-0004 WhatsApp enquiry

The contact form requires a name longer than one character and a mobile number matching `01[3-9]` plus 8 digits, after Bangla digits are converted and a leading `880` is removed. A valid submit replaces the form with the message text, a WhatsApp link to `8801814116677` that includes the text, a Messenger link, copy, and a way back to the form. Invalid fields show the existing error text and do not leave the form.

The form has `novalidate` and no `action`. Nothing is stored on a server.

Acceptance: invalid name or phone keeps the form and shows the matching error. A valid submit shows the entered name, phone, service, and stage in the preview and in the WhatsApp URL. Reload does not retain the enquiry.

### REQ-0005 Project placeholders

Six project slots use captions for residential design, concrete testing, DEA, interior, solar installation, and fire safety. Each shows a placeholder until `img/projects/p1.jpg` … `p6.jpg` loads. Those files are not in the repository.

Acceptance: with the files absent, six placeholders remain visible and no broken-image icon replaces them. Adding a file later, without further markup changes, shows that image and hides its placeholder.

### REQ-0006 Public contact details

The page shows `+880 1814-116677`, a copy control for `+8801814116677`, and links to the Facebook page and Messenger thread named above. The footer repeats the phone and Facebook link.

Acceptance: the phone can be copied, and the Facebook and Messenger links open the stated URLs in a new tab.

## Proposed — needs GATE-0001

### REQ-0007 Document head

`index.html` puts `<title>` and the font stylesheets in the body. `<html>` has no `lang` until the script runs. There is no meta description and no favicon.

Done when:

- `<title>`, charset, viewport, description, and font links are in `<head>`.
- The title remains `Build Safe Engineering`.
- `<html lang="bn">` is in the initial markup. The script may change it to `en`.
- The description is the existing offer, not new marketing copy: `Build Safe Engineering & Consultancy. ডিজাইন থেকে টেস্টিং ও নির্মাণসামগ্রী বাছাই — বাড়ি নির্মাতাদের জন্য। Design, testing, and material advice for home builders.`
- A favicon points at `img/logo.png`.
- Canonical and `og:image` URLs are omitted until a production origin is known.

Traceability: `TASK-0001`. Affected file: `index.html`.

### REQ-0008 Page usable without JavaScript

Non-home pages are `hidden` in HTML, and the form does nothing useful without the script. A visitor with JavaScript disabled cannot reach Services or Contact.

Done when:

- With JavaScript, behavior in `REQ-0001` and `REQ-0004` stays the same.
- Without JavaScript, Home, Services, About, Projects, and Contact content are all in the page, in that order.
- The phone number is a `tel:+8801814116677` link in Contact, visible without script.
- The enquiry form is not presented as a successful send when script is unavailable. The phone, WhatsApp, and Facebook links are the fallback.

Traceability: `TASK-0002`. Affected file: `index.html`.

### REQ-0009 System color scheme

Dark tokens already exist. The first style block also sets `color-scheme: light` and a white body background. There is no theme button. The logo sits on a white plate (`.logo-plate`); the logo PNG is transparent, so that plate is intentional.

Done when, unless the human picks a different option at `GATE-0001`:

- The light theme remains the default for `prefers-color-scheme: light`.
- A dark system preference uses the existing dark tokens, including form controls (`color-scheme: dark`).
- No theme toggle is added.
- The logo plate stays white in both themes.

Alternative, only if the human chooses it: lock the light theme and delete the unused dark rules.

Traceability: `TASK-0003`. Affected file: `index.html`.

### REQ-0010 Alternative text

The hero image has alternative text. Service and project images use `alt=""`. Service cards also contain a heading, so the empty card alt avoids a repeated name. The large service images contain visible labels (materials, UPV, DEA, HVAC, the free-advice seal).

Done when:

- Hero alt stays `Two engineers reviewing drawings beside a model apartment building`.
- Service-card images stay `alt=""` because the card heading names the service.
- Each service-detail image gets one short alt in the active page language’s meaning, taken from the article heading (for example the design image: `Design and technical support`).
- Placeholder project images stay unlabeled. A loaded project image uses its caption as alt.
- Decorative SVG icons stay `aria-hidden="true"` as they are now.

Traceability: `TASK-0004`. Affected file: `index.html`.

### REQ-0011 README

`README.md` is empty. There is no install step.

Done when `README.md` states, in under a page: what the site is, that it is opened as `index.html`, the `img/projects/` optional filenames, and that enquiries are not stored on a server. It must not duplicate `.agile-v/` history.

Traceability: `TASK-0005`. Affected file: `README.md`.

### REQ-0012 Browser verification of the baseline

Done when a browser session records pass or fail in `VALIDATION_SUMMARY.md` for `REQ-0001` through `REQ-0006`, plus any approved proposed requirement, on a desktop width and a narrow width. A screenshot alone does not satisfy this requirement.

Traceability: `TASK-0006`. Affected files: none in the product source; `VALIDATION_SUMMARY.md` only.

## Explicitly not requirements

Not in C1 unless a new requirement is approved:

- A backend, database, email gateway, or saved enquiry inbox.
- A JavaScript framework, TypeScript, or a build step.
- Replacing illustrations or writing new marketing claims.
- Publishing the site or choosing a domain.
- Initializing git.
