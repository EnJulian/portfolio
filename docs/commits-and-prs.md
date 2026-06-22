# Repository Workflow Guide: Commits and Pull Requests

This guide outlines the unified tracking and messaging protocol for project development. All branch creation, code commits, and pull requests must adhere to this system to maintain clean historical records and smooth project management integration.

## 1. Branch Naming Syntax

Keep branch names short and descriptive. The Ticket ID lives in commit messages and PR titles — not in the branch name.

```text
<type>/<short-description>
```

| Type | Description | Example |
| :--- | :--- | :--- |
| `feature` | New feature implementations | `feature/oauth-login` |
| `fix` | Bug fixes and hotfixes | `fix/api-timeout` |
| `refactor` | Code restructuring without behavior changes | `refactor/db-client` |

Automation tools (`/commit`, `/pr`) resolve Ticket IDs from commit history — not branch names. See [Ticket ID Resolution](#ticket-id-resolution) below.

---

## Ticket ID Resolution

Ticket IDs use a sequential `PREFIX-NUMBER` format (e.g., `ENG-005`, `ENG-006`). Numbering is **global across all branches** — not per-branch.

### Resolution order

1. **Current branch first** — scan commits on the active branch for a bracketed ticket (e.g., `[ENG-005]`).
   - **Follow-up commits:** reuse the ticket from the most recent commit on this branch that includes one. All commits for the same work item share the same ID.
   - **First commit on a new branch:** if no ticket exists on this branch yet, continue to step 2.

2. **Repo-wide fallback** — scan commit history across **all branches** (`git log --all`) for the chronologically latest ticket ID.

3. **New work on a new branch** — when step 1 finds nothing but step 2 finds a ticket (e.g., `ENG-005`), increment the numeric suffix for the new work item (`ENG-006`). Present the proposed ID to the user for confirmation before committing.

4. **No history** — if no ticket exists anywhere in the repo, ask the user for the Ticket ID.

### Git commands

```bash
# Commits on the current branch only
git log HEAD -50 --format=%B

# Latest ticket across all branches (repo-wide)
git log --all -50 --format=%B

# Commits on this branch not yet in main (for PRs)
git log origin/main..HEAD --oneline
```

### Examples

| Scenario | Lookup | Result |
| :--- | :--- | :--- |
| Branch `feature/oauth-login`, 3rd commit, prior commits use `ENG-005` | Current branch | Reuse `ENG-005` |
| New branch `fix/api-timeout`, no commits yet, repo latest is `ENG-005` | Repo-wide → increment | Propose `ENG-006` |
| New branch, repo has no ticket commits | Ask user | User provides ID |

When incrementing, preserve the prefix and zero-padding width (e.g., `ENG-005` → `ENG-006`, `ENG-099` → `ENG-100`).

---

## 2. Commit Message Protocol

Commit messages must be concise, written in the present tense, and prefixed with the designated Ticket ID. No emojis are permitted.

### Structure
```text
[TICKET-ID] <type>: <short lowercase action sentence>

- Optional technical point
- Optional technical point
```

### Constraints
* **Header Case:** Everything following the `[TICKET-ID]` prefix must be entirely lowercase.
* **Tense:** Use imperative present tense ("add", "fix", "resolve" instead of "added", "fixes", "resolved").
* **Length:** Keep the first line under 50 characters.
* **Minimalist Bullets:** Use bullet points only when a commit bundles multiple distinct, minor adjustments that require historical context. Keep them short and technical.

### Single-Line Example
```text
[ENG-402] feat: add oauth2 token validation middleware
```

### Multi-Line Example
```text
[ENG-511] fix: resolve database connection timeout leak

- Close connection pools explicitly inside the error catch block
- Reduce retry limit from 5 attempts down to 2
- Inject environmental timeout fallback variable
```

---

## 3. Pull Request Protocol

Pull Requests serve as the macro overview of code changes. They maintain the same ticket prefix as commits but use capitalized formatting for high-level visibility on GitHub/GitLab. No emojis are permitted.

### PR Title Syntax
```text
[TICKET-ID] <Type>: <Capitalized Summary>
```
*Example:* `[ENG-402] Feat: Implement multi-provider OAuth2 authentication`

### PR Body Template
Copy and paste this empty template into your PR body:

```markdown
## Context ([TICKET-ID])
[Provide a brief 1-2 sentence high-level overview explaining why this change is necessary and the user/system value it adds.]

## Key Changes
- **Core Logic:** [Summarize the primary code logic additions or structural shifts]
- **Granular Updates:** [Translate individual technical commit bullets into clear structural improvements]

## Verification
1. [Step 1 to reproduce/verify the change]
2. [Step 2 to reproduce/verify the change]
```