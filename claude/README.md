---
description: >-
  A Claude Code plugin for designing color palettes, auditing contrast,
  generating tokens, and syncing to design tools
icon: hand-wave
---

# UI Color Palette for Claude

**UI Color Palette for Claude** is a [Claude Code](https://code.claude.com) plugin that brings the full color system workflow into your AI-assisted development environment — from generating source colors to pushing tokens to Figma, Penpot, Framer, or Sketch.

## The 4-phase workflow

```
Source → Palette → Deploy → Manage
```

| Phase           | What it does                                                                          | Skills                                                     |
| --------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **1 · Source**  | Generate source colors from an image, a prompt, a harmony, or a design tool selection | `generate-source-colors`                                   |
| **2 · Palette** | Build a shade scale, define a semantic token system, audit contrast                   | `scale-palette`, `build-color-system`, `audit-palette`     |
| **3 · Deploy**  | Push to design tools or export as code                                                | `generate-code`, `generate-semantic-code`, platform skills |
| **4 · Manage**  | Browse, publish, share, update, and delete community palettes                         | `manage-palettes`                                          |

## Installation

**Step 1 — Add the Yelbolt marketplace** (once per machine):

```bash
/plugin marketplace add yelbolt/claude-marketplace
```

**Step 2 — Install the plugin:**

```bash
/plugin install ui-color-palette@yelbolt
```

On first enable, the plugin prompts for optional credentials — Penpot token, Framer MCP URL, GitLab instance URL. These can be skipped and configured later via `/plugin config`.

### Update

```bash
/plugin marketplace update yelbolt
```

### Alternative — direct GitHub install

```bash
/plugin install github:a-ng-d/claude-ui-color-palette
```

## Default agent — uicper

The plugin configures **`uicper`** as the default orchestrator agent. Once the plugin is installed, activate it with:

```bash
/agents
```

From that point, you can describe what you want in plain language — no skill invocation needed:

```
Generate a warm, earthy brand palette and push it to Figma as variables
```

`uicper` coordinates the full 4-phase workflow (Source → Palette → Deploy → Manage), asks only the blocking questions, and delegates heavy work to specialized sub-agents (`palette-auditor`, `palette-codegen`, `palette-color-systemer`, `palette-publisher`, `palette-transitioner`).

Skills remain available at any time for direct, single-step operations. See [Agents](agents.md) for the full sub-agent list and delegation rules.

## Quick start

```
# Get a full walkthrough
/ui-color-palette:help

# Generate source colors from a mood description
/ui-color-palette:generate-source-colors a warm forest at dusk

# Build a Tailwind palette from source colors
/ui-color-palette:scale-palette tailwind-v4

# Export to CSS with OKLCH
/ui-color-palette:generate-code css oklch

# Audit contrast compliance
/ui-color-palette:audit-palette

# Push to Figma
/ui-color-palette:figma variables

# Browse community palettes
/ui-color-palette:manage-palettes
```

## Prerequisites

Some platform integrations require external setup:

| Platform      | Requirement                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| Figma Desktop | Run Figma desktop with MCP enabled                                                            |
| Penpot        | Provide your user token via `/plugin config`                                                  |
| Framer        | Install the [MCP plugin](https://www.framer.com/marketplace/plugins/mcp/) and provide the URL |
| Sketch        | Enable MCP in Sketch preferences                                                              |
