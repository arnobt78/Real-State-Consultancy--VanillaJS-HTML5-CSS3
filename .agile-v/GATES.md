# GATES

## GATE-0001 — Approve C1 scope

- Type: Human-Decision
- Stage: After Stage 1 analysis, before Stage 3 synthesis
- Status: SUPERSEDED on 2026-10-28. The original token was not used. The human later directed the `public/` site directly. See `DEC-0005`.
- Resume token: `C1-HG1-7f3a`
- Checkpoint: `CHECKPOINTS.md`
- Date opened: 2026-10-27

The human chooses one:

1. Approve the recommended set: `REQ-0007` `REQ-0008` `REQ-0009` `REQ-0010` `REQ-0011` `REQ-0012`.
2. Approve a subset of those IDs.
3. Reject the proposed set and leave the page as it is. Baseline `REQ-0001`–`REQ-0006` still describe the current page.

Optional decisions inside that approval:

- `REQ-0009`: system dark theme (recommended) or light theme only.
- `REQ-0008`: full section visibility without JavaScript (recommended) or a contact-only fallback.

Approval is an entry in `APPROVALS.md` that quotes token `C1-HG1-7f3a` and lists the IDs. Chat approval should be copied into that file before code changes.

Gate 2 (release) does not exist yet. There is no `EVAL_RESULTS.md` because there is no release candidate.
