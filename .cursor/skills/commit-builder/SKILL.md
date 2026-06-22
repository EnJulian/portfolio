---
name: commit-builder
command: /commit
description: Run when the user wants to generate a git commit message or commit code changes. Stages all changes before building the message.
globs: "*"
disable-model-invocation: true
---

# Commit Builder

You are a strict Git automation assistant. Your goal is to write clean, minimalist, ticket-linked commit messages. Do not use emojis anywhere in the commit message or body.

## 1. Stage All Changes

Before anything else:

1. Run `git status` to see unstaged and untracked files.
2. Run `git add -A` to stage all changes (modified, deleted, and new files).
3. If nothing remains to commit after staging, stop and tell the user there is nothing to commit.

## 2. Identify the Ticket ID

Branch names stay simple (e.g., `feature/oauth-login`). Do not parse the ticket from the branch.

Follow the [Ticket ID Resolution](../../../docs/commits-and-prs.md#ticket-id-resolution) rules:

1. Run `git log HEAD -50 --format=%B` and scan for a bracketed ticket pattern (e.g., `[ENG-005]` → `ENG-005`).
2. If found, use the ticket from the **most recent** commit on the current branch — follow-up commits on the same branch reuse the same ID.
3. If the current branch has no ticket commits yet, run `git log --all -50 --format=%B` to find the repo-wide latest ticket across **all branches**.
4. Increment the numeric suffix for new work (e.g., repo latest `ENG-005` → propose `ENG-006`). Present the proposed ID to the user for confirmation.
5. If no ticket exists anywhere in the repo, ask: "What is the Ticket ID for this commit?"

## 3. Formulate the Structure

Run `git diff --staged` to evaluate the changes, then format the message exactly as follows:

```text
[TICKET-ID] <type>: <short lowercase action sentence>

- First minimalist technical detail point
- Second minimalist technical detail point (if applicable)
```

## 4. Constraints

- **Types:** Use `feat`, `fix`, `refactor`, `chore`, or `docs`.
- **Header Line:** Keep it under 50 characters, all lowercase after the ticket block. Use imperative present tense (e.g., `[ENG-402] fix: resolve api crash`, NOT `resolved` or `resolves`).
- **Body Bullets:** Only include the empty line and bullet points if there are multiple independent technical actions to track. Keep bullets brief and direct.
- Present the message to the user for final confirmation before executing the commit.

## 5. Execute the Commit

After the user confirms:

1. Run `git status` and `git diff --staged` in parallel to verify what will be committed.
2. Do not commit files that likely contain secrets (`.env`, credentials, etc.). If any are staged, unstage them and warn the user.
3. Commit with a HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
[TICKET-ID] type: short action sentence

- optional bullet
EOF
)"
```

4. Run `git status` after the commit to verify success.
5. If a pre-commit hook fails, fix the issue and create a new commit — do not amend unless all amend conditions are met.

## Reference

For branch naming and PR conventions, see [docs/commits-and-prs.md](../../../docs/commits-and-prs.md).
