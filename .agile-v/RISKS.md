# RISKS

Cycle: `C1`. Reviewed 2026-10-27 against `index.html` and `img/`.

| ID | Level | Risk | Evidence | Related |
|---|---|---|---|---|
| RISK-0001 | Medium | An enquiry exists only in the visitor’s WhatsApp or Messenger draft. Refresh, a blocked popup, or abandoning the handoff loses it. There is no server record. | Form handler writes `wa.me` and `textContent` only. | `REQ-0004` |
| RISK-0002 | Medium | With JavaScript off, Services, About, Projects, and Contact stay `hidden`. The form has no `action`. | `hidden` on non-home `.page`. | `REQ-0008`, `TASK-0002` |
| RISK-0003 | Medium | Hash URLs are a poor fit for a shared or indexed page, and there is no canonical origin. Social preview URLs cannot be set honestly yet. | Router uses `location.hash`. No host in the repo. | `REQ-0001`, `REQ-0007` |
| RISK-0004 | Low | Intended type uses Google Fonts (`Anek Bangla`, `Hind Siliguri`, `IBM Plex Mono`). The page still renders with system fonts if that request fails. The request discloses a visit to Google. | Font `<link>` in `index.html`. | `REQ-0007` |
| RISK-0005 | Low | Copy states that the team is licensed and that advice is based on test reports. This repository cannot prove those operational claims. | About and Home copy. | `REQ-0003` |
| RISK-0006 | Low | Projects are placeholders, so the page does not yet show completed work. | `img/projects/` is absent. Probe in the script. | `REQ-0005` |
| RISK-0007 | Low | Dark theme is unverified. The first style block sets `color-scheme: light` and `body { background:#fff }`. Later rules may override it. | Two `<style>` blocks. | `REQ-0009` |
| RISK-0008 | Low | `img/s2.jpg` is photoreal. `s1` and `s3`–`s8` are stylized 3D. The set looks inconsistent. | Image inspection, 2026-10-27. | `REQ-0003` |
| RISK-0009 | Low | The folder is not a git repository, so there is no revision history. | `git status` returned “not a git repository”. | `DEC-0001` |
| RISK-0010 | Low | Service-detail images carry visible labels but `alt=""`, so a screen-reader user gets the heading and not the diagram labels. Card images are less of a gap because the heading is inside the link. | `alt=""` on `.svc-row-img img` and `.svc-img img`. | `REQ-0010` |

Not treated as a secret leak: the phone number and social URLs are the published contact path (`REQ-0006`).

Enquiry text is assigned with `textContent` and `encodeURIComponent`. That avoids HTML injection in the preview. Not a penetration test.
