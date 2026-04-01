---
name: cleanup-structure
description: Clean the Studio B0ucher project structure, verify orphan files, and keep only the files that actively support the static site. Use for repository cleanup, file triage, and structural maintenance.
argument-hint: "[objectif optionnel]"
disable-model-invocation: true
context: fork
agent: structure-cleaner
---

Clean the Studio B0ucher repository structure.

Scope:
- Review the current project tree.
- Confirm which files are active in production.
- Identify orphan files, drafts, and misplaced working assets.
- Remove or relocate only the files that are confirmed safe to change.

Rules:
1. Verify references before deleting or moving anything.
2. Keep the live site working from the root entry points.
3. Prefer a clearer structure over a larger structure.
4. If a file may still be useful, move it to a more explicit location instead of deleting it.

Expected output:
- A short summary of active files vs legacy files.
- The cleanup edits.
- A final verification pass on the main HTML entry points.
