---
description: Version history of the UI Color Palette Claude plugin
icon: clock-rotate-left
layout: editorial
---

# Changelog

## 1.0.0 — Initial release

_Current version_

### Added

#### Skills

- `generate-source-colors` — generate source colors from an image URL (k-means), a natural language prompt (Mistral AI), a harmony type, or a design tool selection
- `scale-palette` — build a full shade scale via `get_palette` with inline visual preview
- `build-color-system` — define a semantic token taxonomy and resolve bindings via `get_color_system`
- `audit-palette` — WCAG 2.1 and APCA contrast audit with global scoring and remediation guidance
- `generate-code` — export palette tokens in 14 formats (CSS, SCSS, Tailwind v3/v4, SwiftUI, UIKit, Compose, DTCG, Style Dictionary, …)
- `generate-semantic-code` — export primitives and semantics files together using a `SystemConfiguration`
- `manage-palettes` — browse, publish, share, update, and delete palettes on the platform
- `help` — quick-start guide and command list

#### Platform integration skills

- `ui-color-palette-figma` — variables (with semantic layer), styles, swatch preview, and source color extraction via Figma Desktop MCP
- `ui-color-palette-penpot` — tokens (with semantic layer), styles, swatch preview, and source color extraction via Penpot MCP
- `ui-color-palette-framer` — styles, swatch preview, and source color extraction via Framer MCP
- `ui-color-palette-sketch` — variables, styles, tokens, swatch preview, and source color extraction via Sketch MCP

#### Agents

- `color-systemer` — top-level orchestrator for multi-step workflows, configured as the default agent
- `palette-auditor` — WCAG/APCA audits, risk detection, and remediation guidance
- `palette-codegen` — code and token export with optional git commit
- `palette-publisher` — palette retrieval, publication, visibility, and deletion
- `palette-transitioner` — transition from `PaletteData` to variables, tokens, styles, and previews in design tools

#### Community skills (bundled)

- `figma-variables-tokens-generator` — [shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator)
- `penpot-uiux-design` — [github/awesome-copilot](https://github.com/github/awesome-copilot)
- `sketch-implement-design` — [sketch-hq/skills](https://github.com/sketch-hq/skills)
- `gh-cli` — [github/awesome-copilot](https://github.com/github/awesome-copilot)
- `gitlab-cli-skills` — [vince-winkintel/gitlab-cli-skills](https://github.com/vince-winkintel/gitlab-cli-skills)

#### MCP servers

- UI Color Palette, Figma, Figma Desktop, Penpot, Sketch, Framer, GitHub, GitLab

#### Configuration

- `penpot_token` (sensitive) — stored in system keychain
- `framer_mcp_url` — Framer MCP endpoint
- `gitlab_url` — GitLab instance URL

[1.0.0]: https://github.com/a-ng-d/claude-ui-color-palette/releases/tag/v1.0.0
