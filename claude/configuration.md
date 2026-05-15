---
description: >-
  User configuration, MCP servers, and settings for the UI Color Palette Claude
  plugin
icon: sliders
---

# Configuration

## User config

The plugin prompts for these values on first enable. You can update them at any time with `/plugin config`.

| Key              | Type     | Sensitive                | Required | Description                                                                                               |
| ---------------- | -------- | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------- |
| `penpot_token`   | `string` | Yes — stored in keychain | No       | Your Penpot user token. Find it in Penpot → Account → Integrations → MCP Server                           |
| `framer_mcp_url` | `string` | No                       | No       | Your Framer MCP URL from the [Framer marketplace plugin](https://www.framer.com/marketplace/plugins/mcp/) |
| `gitlab_url`     | `string` | No                       | No       | Your GitLab instance URL (e.g. `https://gitlab.company.com`) — leave empty if not using GitLab            |

Sensitive values are stored in the system keychain and never written to `settings.json`.

## MCP servers

The plugin connects to the following MCP servers automatically when enabled:

| Server               | Transport | URL                                                | Auth                     |
| -------------------- | --------- | -------------------------------------------------- | ------------------------ |
| **UI Color Palette** | HTTP      | `https://mcp-uicp.yelbolt.workers.dev/mcp`         | OAuth 2.0 (optional)     |
| **Figma**            | HTTP      | `https://mcp.figma.com/mcp`                        | OAuth                    |
| **Figma Desktop**    | HTTP      | `http://127.0.0.1:3845/mcp`                        | Local                    |
| **Penpot**           | HTTP      | `https://design.penpot.app/mcp/stream?userToken=…` | Token via `penpot_token` |
| **Sketch**           | HTTP      | `http://localhost:31126/mcp`                       | Local                    |
| **Framer**           | HTTP      | URL via `framer_mcp_url`                           | Token in URL             |
| **GitHub**           | HTTP      | `https://api.githubcopilot.com/mcp/`               | OAuth                    |
| **GitLab**           | HTTP      | `${gitlab_url}/api/v4/mcp`                         | OAuth                    |

## Default agent

The plugin sets `color-systemer` as the default agent in `settings.json`:

```json
{
  "agent": "color-systemer"
}
```

This means multi-step requests that don't specify a skill are handled by the orchestrator. See [Agents](agents.md) for details.
