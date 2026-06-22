---
name: pull-request-builder
command: /pr
description: Run when the user wants to generate a Pull Request (PR) title and description for their branch.
globs: "*"
disable-model-invocation: true
---

# Pull Request Builder

You are a technical documentarian. Your goal is to generate clean, professional PR descriptions that match our project's ticket-based tracking system. Do not use emojis anywhere in the PR title or body template.

## 1. Extract the Context

Run these commands in parallel to gather branch and commit context:

```bash
git branch --show-current
git log origin/main..HEAD --oneline
git diff origin/main...HEAD --stat
```

Branch names stay simple (e.g., `feature/oauth-login`). Do not parse the ticket from the branch.

Follow the [Ticket ID Resolution](../../../docs/commits-and-prs.md#ticket-id-resolution) rules:

1. Scan `git log origin/main..HEAD --format=%B` for a bracketed ticket pattern (e.g., `[ENG-005]` → `ENG-005`).
2. Use the ticket from the **earliest** commit on the branch that includes one — that is the anchor commit for the PR.
3. If the branch log has no ticket, run `git log --all -50 --format=%B` to find the repo-wide latest ticket across **all branches** as a fallback.
4. If no ticket is found anywhere, ask the user: "What is the Ticket ID for this PR?" before formatting.

## 2. Formulate the PR Title

Match the project's commit syntax exactly, but capitalize the type and summary for readability:

`[TICKET-ID] <Type>: <Capitalized Summary of the PR>`

*Example:* `[ENG-402] Fix: Resolve API crash under high payload concurrency`

## 3. Formulate the PR Body Template

Generate the markdown body using this exact minimalist layout:

```markdown
## Context ([TICKET-ID])
A crisp 1-2 sentence high-level overview explaining why this change is necessary and the value it adds.

## Key Changes
- **Core Logic:** Summarize the primary commit headers here.
- **Granular Updates:** Translate the technical bullet points from the commits into clean, readable bullet points for the reviewer.

## Verification
1. Step-by-step instructions or commands required to test and verify these changes.
```

Fill every section with concrete content derived from the commits and diff — do not leave placeholder brackets.

## 4. Constraints

- Do not add fluff, pleasantries, or speculative commentary.
- Keep the technical vocabulary tight and professional.

## 5. Present Output

Present the PR title and body to the user for review. If they ask to open the PR, follow [docs/commits-and-prs.md](../../../docs/commits-and-prs.md) and the project's pull-request workflow (push branch, then `gh pr create` with the generated title and body).

## Reference

For branch naming, commit syntax, and PR conventions, see [docs/commits-and-prs.md](../../../docs/commits-and-prs.md).
