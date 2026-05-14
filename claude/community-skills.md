---
description: Third-party skills bundled with the plugin for design tool and developer workflows
icon: users
layout: editorial
---

# Community skills

The plugin bundles five community skills. They are installed and locked via `skills-lock.json` and namespaced separately from the core UI Color Palette skills.

---

## figma-variables-tokens-generator

**Source**: [shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator)\
**Invocation**: `/figma-variables-tokens-generator`

Generate a fully connected Figma design token system — variables, modes, and aliases — from a natural language description. Complements the native `ui-color-palette:figma` skill for token-first workflows.

---

## penpot-uiux-design

**Source**: [github/awesome-copilot](https://github.com/github/awesome-copilot)\
**Invocation**: `/penpot-uiux-design`

Create professional UI/UX designs in Penpot using MCP tools. Useful for building screens and components around a palette that has already been pushed to Penpot.

---

## sketch-implement-design

**Source**: [sketch-hq/skills](https://github.com/sketch-hq/skills)\
**Invocation**: `/sketch-implement-design`

Translate Sketch layers into production-ready code with visual fidelity. Works alongside `ui-color-palette:sketch` for full design-to-code workflows.

---

## gh-cli

**Source**: [github/awesome-copilot](https://github.com/github/awesome-copilot)\
**Invocation**: `/gh-cli`

Comprehensive GitHub CLI (`gh`) reference — issues, PRs, releases, and repository operations. Useful for committing and opening PRs after exporting generated token files.

---

## gitlab-cli-skills

**Source**: [vince-winkintel/gitlab-cli-skills](https://github.com/vince-winkintel/gitlab-cli-skills)\
**Invocation**: `/gitlab-cli-skills`

GitLab CLI (`glab`) command reference and workflows. Requires `gitlab_url` configured via `/plugin config`.

---

## Managing community skills

Community skills are pinned by content hash in `skills-lock.json`. To update them:

```bash
claude /plugin update ui-color-palette
```

To add a new community skill to the plugin, add an entry to `skills-lock.json` with the GitHub source and run `/plugin update`.
