# DECISION LOG

Append-only. Do not rewrite earlier entries.

## DEC-0001 — Bootstrap Cycle C1

- Date: 2026-10-27
- Agent: Agile V orchestrator (Cursor)
- Decision: Create `.agile-v/` and start Cycle `C1`.
- Rationale: `.agile-v/` was absent. `AGILE_V_PROTOCOL.md` says to bootstrap `C1` in that case. There is no git history and no earlier checkpoint to resume.
- Linked: `GATE-0001`

## DEC-0002 — Keep the static page

- Date: 2026-10-27
- Agent: Agile V orchestrator (Cursor)
- Decision: Ordinary C1 work stays inside `index.html`, `img/`, `README.md`, and `.agile-v/`. No framework, backend, database, or TypeScript toolchain.
- Rationale: The repository’s only application is a finished single-file brochure. `CLAUDE.md` previously required TypeScript and server components, which contradicted the code. Code is the source of truth.
- Linked: `REQ-0001` through `REQ-0006`
- Revisit when: a human approves a new requirement that cannot be met in the static page.

## DEC-0003 — Requirements are proposals

- Date: 2026-10-27
- Agent: Agile V orchestrator (Cursor)
- Decision: Baseline requirements record existing behavior. Proposed requirements are not approved. Implementation waits on `GATE-0001` and resume token `C1-HG1-7f3a`.
- Rationale: This session was analysis and planning only. The human has not chosen a scope.
- Linked: `GATE-0001`, `REQ-0007` through `REQ-0012`

## DEC-0004 — No separate architecture document

- Date: 2026-10-27
- Agent: Agile V orchestrator (Cursor)
- Decision: Do not add `docs/architecture.md`, `docs/api.md`, `docs/deployment.md`, or `docs/testing.md` in this session.
- Rationale: There is no API, deployment, or test suite. An architecture file would repeat `STATE.md`. `docs/AGILE_V_PROTOCOL.md` stays the workflow protocol.
- Linked: `DEC-0002`

## DEC-0005 — The site lives in public/

- Date: 2026-10-28
- Agent: Cursor
- Decision: The brochure is the nine static pages under `public/`, with shared CSS and JavaScript, self-hosted fonts, sitemap, robots, the Dilara Tower address, and Facebook, LinkedIn, and YouTube icon links. No framework, backend, database, or build step. `docs/VERCEL-PLAIN-JS-DEPLOY.md` is not the deploy method.
- Rationale: The human directed this structure after the C1 planning notes. Those notes still describe a single `index.html`, which is no longer the site.
- Linked: `GATE-0001`

## DEC-0006 — Language is chosen before first paint

- Date: 2026-10-28
- Agent: Cursor
- Decision: Each page sets `data-lang` in the head when `bs-lang` is `en`. Header labels keep one width. The contact service control is two selects, one per language. The bottom script no longer rewrites option text.
- Rationale: The bottom script ran after first paint, so English visitors briefly saw Bangla, and the navbar shifted.
- Linked: `DEC-0005`

## DEC-0007 — Nav links follow the visible words

- Date: 2026-10-28
- Agent: Cursor
- Decision: A header link is only as wide as the language on screen. Links share one padding and a 4px gap. The current page is weight 600 and the others stay 500. The Consultation button still keeps both labels so its width does not jump.
- Rationale: Reserving the longer language made short English titles sit in wide boxes. A small shift when the current title is bolder is acceptable.
- Linked: `DEC-0006`
