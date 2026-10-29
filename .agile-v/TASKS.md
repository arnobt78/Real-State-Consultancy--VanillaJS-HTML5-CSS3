# TASKS

Cycle: `C1`. No task may start until `GATE-0001` is approved for that task’s requirement IDs.

Recommended order if the full proposed set is approved. Wave 2 waits for Wave 1 because verification has to cover the finished page.

## Wave 1 — page and README

| ID | Requirement | Priority | Work | Files |
|---|---|---|---|---|
| TASK-0001 | REQ-0007 | P1 | Move metadata into `<head>`, set initial `lang="bn"`, add the specified description and a favicon link. Do not invent a canonical URL. | `index.html` |
| TASK-0002 | REQ-0008 | P1 | Keep one-page hash routing when JavaScript runs. Without it, show every section and a `tel:` link. Do not let the form pretend to submit. | `index.html` |
| TASK-0003 | REQ-0009 | P2 | Make the existing dark tokens follow the system preference. Keep the white logo plate. Add no toggle unless the gate says otherwise. | `index.html` |
| TASK-0004 | REQ-0010 | P2 | Apply the alt-text rules. Do not rewrite headings. | `index.html` |
| TASK-0005 | REQ-0011 | P3 | Replace the empty README with the short operating note in REQ-0011. | `README.md` |

`TASK-0001` through `TASK-0004` touch the same file. Do them in the order above, in one pass, so the hash router and the no-JS path are not edited twice.

## Wave 2 — evidence

| ID | Requirement | Priority | Work | Files |
|---|---|---|---|---|
| TASK-0006 | REQ-0012, and REQ-0001–REQ-0006 | P1 | Open the page. Walk nav, both languages, reload, an invalid enquiry, a valid WhatsApp preview, copy, project placeholders, the no-JS path, and light/dark scheme at desktop and narrow widths. Record commands and results. | `.agile-v/VALIDATION_SUMMARY.md` |

## Do not schedule

| Item | Why it is waiting |
|---|---|
| Project photo drop-in | Done for the six posters, the three galleries, and the concrete, interior, assessment, and fire cards. Design and solar cards, and the five home pictures, wait until the client supplies new 4:3 files. |
| Canonical URL and social preview image | No production origin in the repo (`RISK-0003`). |
| Enquiry database or email | Changes the architecture. Current design hands the message to WhatsApp. |
| Framework, TypeScript, or bundler | `DEC-0002`. The working page is one HTML file. |
| Git init or deployment | Not requested. |
| Messenger prefilled text | `m.me/buildsafe.ec` has no message parameter. The page already tells the visitor to copy the message. |

## Suggested gate choice

Approve `REQ-0007`, `REQ-0008`, `REQ-0009`, `REQ-0010`, `REQ-0011`, and `REQ-0012` together. That hardens the current site without a new stack.

Rejecting the whole proposed set is also coherent: the baseline page is already a complete brochure, and only browser evidence (`REQ-0012`) would then be worth doing.
