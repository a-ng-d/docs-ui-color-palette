---
description: >-
  Third-party skills bundled with the plugin for design tool and developer
  workflows
icon: users
---

# Community skills

The plugin bundles five community skills. They are installed and locked via `skills-lock.json` and namespaced separately from the core UI Color Palette skills.

***

## gh-cli

**Source**: [github/awesome-copilot](https://github.com/github/awesome-copilot)\
**Invocation**: `/gh-cli`

Comprehensive GitHub CLI (`gh`) reference — issues, PRs, releases, and repository operations. Useful for committing and opening PRs after exporting generated token files.

***

## gitlab-cli-skills

**Source**: [vince-winkintel/gitlab-cli-skills](https://github.com/vince-winkintel/gitlab-cli-skills)\
**Invocation**: `/gitlab-cli-skills`

GitLab CLI (`glab`) command reference and workflows. Requires `gitlab_url` configured via `/plugin config`.

***

## Managing community skills

Community skills are pinned by content hash in `skills-lock.json`. To update them:

```bash
/plugin update ui-color-palette
```

To add a new community skill to the plugin, add an entry to `skills-lock.json` with the GitHub source and run `/plugin update ui-color-palette`.
