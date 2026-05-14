---
description: Core skills for the UI Color Palette workflow — source colors, palette building, code export, auditing, and palette management
icon: wand-magic-sparkles
layout: editorial
---

# Skills

All skills are namespaced under `ui-color-palette`. Invoke them with `/ui-color-palette:<skill-name>`.

---

## generate-source-colors

Generate source colors to seed a palette. Supports four modes:

| Mode | How to invoke | What happens |
|---|---|---|
| **Image** | Pass a public image URL | Extracts dominant colors using k-means clustering |
| **Prompt** | Describe a mood or brand in natural language | Generates colors via Mistral AI |
| **Harmony** | Pass a base hex color and an optional harmony type | Derives complementary, analogous, triadic, tetradic, compound, or square harmonies |
| **Design tool** | No argument — select layers in Figma, Penpot, Sketch, or Framer | Extracts fill colors from the current selection via MCP |

**Output**: a set of named `ColorConfiguration` objects ready to pass to `scale-palette`.

```bash
/ui-color-palette:generate-source-colors https://example.com/photo.jpg 6
/ui-color-palette:generate-source-colors a warm terracotta brand
/ui-color-palette:generate-source-colors #E63946 triadic
```

---

## scale-palette

Build a complete shade scale from source colors. Calls `get_palette`, then renders an inline visual preview.

Code export is handled by `generate-code`. Design tool deployment is handled by the [platform skills](platforms.md).

**Arguments**: optional color space (e.g. `oklch`, `lch`)

```bash
/ui-color-palette:scale-palette
/ui-color-palette:scale-palette oklch
```

**Session state**: if `PaletteData` is already in context, the skill offers to reuse it rather than rebuilding.

---

## build-color-system

Define a semantic token taxonomy and resolve bindings against a generated palette via `get_color_system`. Produces a `SystemData` object for use in semantic code export or design tool deployment.

Use this when you need semantic token names (role, prominence, state) mapped to primitive shades — for example `Background/Default → blue:100`.

```bash
/ui-color-palette:build-color-system role/state/prominence
```

**Session state**: skips taxonomy questions if `PaletteData` or `SystemConfiguration` is already in context.

---

## audit-palette

Audit color pairs for WCAG 2.1 and APCA contrast compliance. Reads pre-computed scores from `get_palette` output — no recalculation needed.

**Output**: per-shade pass/fail table, global contrast score, risky pair list, and remediation suggestions.

```bash
/ui-color-palette:audit-palette
/ui-color-palette:audit-palette #1E293B #F8FAFC #3B82F6
```

{% hint style="info" %}
Themes must include `textColorsTheme: { lightColor: "#FFFFFF", darkColor: "#000000" }` for `textContrast` fields to be populated.
{% endhint %}

---

## generate-code

Export palette configuration as code or design tokens via `generate_code`. Does not require a prior `get_palette` call — takes `base` and `themes` directly.

**Arguments**: `<format> [color-space]`

| Format | Description |
|---|---|
| `css` | CSS custom properties |
| `scss` | SCSS variables |
| `less` | LESS variables |
| `tailwind-v3` | Tailwind v3 config |
| `tailwind-v4` | Tailwind v4 CSS |
| `swift-ui` | SwiftUI Color assets |
| `ui-kit` | UIKit Color extension |
| `compose` | Jetpack Compose |
| `resources` | Android XML resources |
| `csv` | CSV spreadsheet |
| `native-tokens` | Native tokens JSON |
| `dtcg-tokens` | W3C DTCG format |
| `style-dictionary-v3` | Style Dictionary v3 |
| `universal-json` | Universal JSON |

```bash
/ui-color-palette:generate-code css
/ui-color-palette:generate-code tailwind-v4
/ui-color-palette:generate-code dtcg-tokens oklch
```

---

## generate-semantic-code

Generate a **primitives file and a semantics file** together by passing a `SystemConfiguration` to `generate_code`. Requires `build-color-system` to have been run first, or a `SystemConfiguration` in context.

```bash
/ui-color-palette:generate-semantic-code css
/ui-color-palette:generate-semantic-code dtcg-tokens
```

---

## manage-palettes

Manage the full lifecycle of published palettes on the UI Color Palette platform.

| Action | Auth | Description |
|---|---|---|
| Browse | No | Search and page through community palettes |
| Get | No | Fetch a specific palette by ID |
| Publish | Yes | Save a palette to the database (private by default) |
| Share | Yes | Make a palette publicly visible |
| Unshare | Yes | Make a palette private |
| Update | Yes | Update name, description, colors, or themes |
| Delete | Yes | Permanently delete a palette |

```bash
/ui-color-palette:manage-palettes
/ui-color-palette:manage-palettes sunset warm
/ui-color-palette:manage-palettes <palette-id>
```

---

## help

Display a quick-start guide and list all available commands.

```bash
/ui-color-palette:help
/ui-color-palette:help audit
```
