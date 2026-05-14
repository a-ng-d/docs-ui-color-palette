---
description: How to authenticate with the MCP server to access community tools
icon: lock
layout: editorial
---

# Authentication

Palette generation tools work without any credentials. Community tools — publishing, updating, deleting, or listing your own palettes — require a valid UI Color Palette account.

## How it works

The server implements **OAuth 2.0** with dynamic client registration. The authorization server is Supabase, proxied through the MCP worker so that MCP clients see a single issuer.

| Endpoint | Path |
|---|---|
| Discovery | `/.well-known/oauth-authorization-server` |
| Client registration | `/oauth/register` |
| Token exchange | `/oauth/token` |
| MCP | `/mcp` |

MCP clients that support OAuth 2.0 (Claude Desktop, Cursor, etc.) handle the full flow automatically — you just sign in when prompted.

## Bearer token

If your client does not handle OAuth automatically, you can pass an access token directly:

```http
Authorization: Bearer <your-access-token>
```

The token is read from the `Authorization` header on the `/mcp` request and stored in durable state for the duration of the session.

## Which tools require authentication

| Tool | Auth required |
|---|---|
| `get_palette` | No |
| `get_color_system` | No |
| `create_color_harmony` | No |
| `extract_dominant_colors` | No |
| `generate_code` | No |
| `generate_colors_from_prompt` | No |
| `preview_palette` | No |
| `list_published_palettes` | No |
| `list_my_published_palettes` | **Yes** |
| `get_published_palette` | No |
| `publish_palette` | **Yes** |
| `update_published_palette` | **Yes** |
| `share_published_palette` | **Yes** |
| `unshare_published_palette` | **Yes** |
| `unpublish_palette` | **Yes** |

When a tool requires authentication and no token is present, the server returns:

```json
{ "error": "Authentication required. Please sign in via OAuth to use this tool." }
```
