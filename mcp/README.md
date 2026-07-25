---
description: Connect any AI assistant to UI Color Palette via the Model Context Protocol
icon: hand-wave
---

# UI Color Palette MCP

The **UI Color Palette MCP** is a [Model Context Protocol](https://modelcontextprotocol.io) server that exposes the UI Color Palette engine to any MCP-compatible AI assistant — Claude, Cursor, Windsurf, and others.

It lets an AI generate, preview, audit, and publish color palettes without opening a design tool.

## Endpoint

```
https://mcp.ui-color-palette.com/mcp
```

The server runs on [Cloudflare Workers](https://workers.cloudflare.com) with durable state per session.

## Tools at a glance

### Palette tools — no authentication required

| Tool                                                                          | Description                                                            |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`get_palette`](tools/palette.md#get_palette)                                 | Generate a complete color palette from a base configuration and themes |
| [`get_color_system`](tools/palette.md#get_color_system)                       | Build a semantic color system from taxonomy bindings                   |
| [`create_color_harmony`](tools/palette.md#create_color_harmony)               | Generate color harmonies from a base color                             |
| [`extract_dominant_colors`](tools/palette.md#extract_dominant_colors)         | Extract dominant colors from an image URL                              |
| [`generate_code`](tools/palette.md#generate_code)                             | Export palette tokens in CSS, SCSS, Tailwind, Swift, and more          |
| [`generate_colors_from_prompt`](tools/palette.md#generate_colors_from_prompt) | Generate source colors from a natural language description             |
| [`preview_palette`](tools/palette.md#preview_palette)                         | Render a palette as an inline image                                    |

### Community tools — authentication required

| Tool                                                                          | Description                            |
| ----------------------------------------------------------------------------- | -------------------------------------- |
| [`list_published_palettes`](tools/community.md#list_published_palettes)       | Browse publicly shared palettes        |
| [`list_my_published_palettes`](tools/community.md#list_my_published_palettes) | List your own published palettes       |
| [`get_published_palette`](tools/community.md#get_published_palette)           | Fetch a specific palette by ID         |
| [`publish_palette`](tools/community.md#publish_palette)                       | Save a palette to the database         |
| [`update_published_palette`](tools/community.md#update_published_palette)     | Update a published palette             |
| [`share_published_palette`](tools/community.md#share_published_palette)       | Make a palette public in the community |
| [`unshare_published_palette`](tools/community.md#unshare_published_palette)   | Make a palette private                 |
| [`unpublish_palette`](tools/community.md#unpublish_palette)                   | Permanently delete a published palette |

## Installation

### Claude Desktop

Add the server to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "url": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

### Claude Code

Add the server to `~/.claude/settings.json` (user-wide) or `.claude/settings.json` (project-level):

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "type": "http",
      "url": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

Or use the CLI directly:

```bash
claude mcp add --transport http ui-color-palette https://mcp.ui-color-palette.com/mcp
```

### VS Code

Add the server to `.vscode/mcp.json` in your project (or the equivalent user-level config):

```json
{
  "servers": {
    "ui-color-palette": {
      "type": "http",
      "url": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

### Cursor

Add the server to `~/.cursor/mcp.json` (user-wide) or `.cursor/mcp.json` (project-level):

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "url": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

### Windsurf

Add the server to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "serverUrl": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

### OpenAI Codex

Add the server to `~/.codex/config.json`:

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "url": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

### Gemini CLI

Add the server to `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "ui-color-palette": {
      "httpUrl": "https://mcp.ui-color-palette.com/mcp"
    }
  }
}
```

***

## Quick start

**1. Add the server to your client** — see [Installation](#installation) above.

**2. Authenticate (optional)**

Community tools require a UI Color Palette account. The server implements OAuth 2.0 — your MCP client will handle the flow automatically when you first call an authenticated tool. See [Authentication](authentication.md) for details.

**3. Generate a palette**

Ask your AI assistant:

> _"Generate a Tailwind palette from a deep forest green (#2D6A4F), light and dark themes, and show me a preview."_

The assistant will call `get_palette`, then `preview_palette` to render the result inline.
