---
icon: list-check
---

# Platform capabilities

UI Color Palette ships the same core product everywhere, but not every surface supports every capability. This page is the canonical reference for what's available where — the per-platform spaces link back here instead of repeating these caveats inline.

## Capability matrix

| Capability | Figma | Penpot | Sketch | Framer | Web App |
| --- | --- | --- | --- | --- | --- |
| Create / manage / master a palette | Yes | Yes | Yes | Yes | Yes |
| Publish & synchronize / hunt community palettes | Yes | Yes | Yes | Yes | ⚠️ Unconfirmed |
| Generate a palette documentation | Yes (as frames) | Yes (as boards) | Yes (as artboards) | Yes (in the document) | ⚠️ Unconfirmed |
| Export to code | Yes (full format set) | Yes (full format set) | Yes (full format set) | **Yes — limited** (CSS, Less, Tailwind v3/v4, JSON tokens only) | ⚠️ Unconfirmed |
| Palette scope | Per page | Per page | Per document | Per document | N/A (no page/document concept) |
| Sync to local styles | Yes | Yes | Yes | Yes (styles only) | N/A |
| Sync to local variables | Yes | **No** (see tokens) | Yes | **No** | N/A |
| Sync to design tokens | **No** | Yes (native Penpot tokens) | **No** | **No** | N/A |
| `HSV` / `CMYK` color spaces | Yes | **No** | Yes | Yes | ⚠️ Unconfirmed |
| `/one` account-based Pro subscription | Yes | Yes | Yes | Yes | ⚠️ Unconfirmed |
| `/team` license-based seats | Yes | **No, Figma-only for now** | **No** | **No** | **No** |
| In-app purchase of Pro (via platform marketplace) | Yes (Figma Community) | **No** | **No** | **No** | N/A |
| Dev mode / VS Code plugin / FigJam / Buzz nuances | Yes — Figma-only products, each its own reduced set (see below) | N/A | N/A | N/A | N/A |
| Share a palette via link | **No** | **No** | **No** | **No** | Yes — see [Share a color palette via link](../guides/share-a-color-palette-via-link.md) |

{% hint style="info" %}
**N/A** means the concept doesn't apply to that platform (e.g. the Web App is a browser tool with no document-level "local library" the way a design tool has). **No** means the concept applies there in principle but isn't currently supported. **⚠️ Unconfirmed** marks a cell that couldn't be verified against existing documentation — there is no `web/` GitBook space yet, so most Web-App-only rows here are inferred rather than sourced; confirm before relying on them.
{% endhint %}

## Capabilities can also differ *within* a platform

Figma in particular ships UI Color Palette across several distinct products — Figma Design, Dev mode, the VS Code Figma plugin, FigJam, and Buzz — and each gets a different, intentionally reduced capability set. For example, Dev mode and the VS Code plugin are limited to browsing local palettes, exporting to code, previewing properties/scores, switching the contrast ratio score, and authentication; FigJam and Buzz can't sync to local styles or local variables at all, and Buzz additionally has no export and no color modes. This is a pattern worth knowing about in general — a platform's capabilities aren't always uniform across every product/mode it ships in — but the specifics (FigJam, Dev mode, Buzz, VS Code) are Figma-only products, not shared across platforms, so they stay documented in the Figma space rather than here. See [Plugin capabilities on Figma products](../../figma/introduction/plugin-capabilities-on-figma-products.md).

{% hint style="warning" %}
This matrix was compiled by reading each platform's existing guides as of this writing (see the source guides linked throughout this space). It does not cover every minor feature — only the capabilities called out while merging the shared guides into `general/`. If you find a gap or an error, update this table rather than repeating the caveat elsewhere.
{% endhint %}
