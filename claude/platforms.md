---
description: Push palettes to Figma, Penpot, Framer, and Sketch via MCP
icon: vector-square
layout: editorial
---

# Platform integrations

Platform skills handle the final step of the workflow: pushing a generated palette into a design tool. They all follow the same rule — if `PaletteData` is already in session context, it is reused directly without rebuilding.

---

## Figma

**Skill**: `/ui-color-palette:figma`\
**Argument**: `variables` or `styles`\
**Requires**: Figma Desktop running with MCP enabled

| Sub-workflow | What it does |
|---|---|
| `variables` | Creates local variables with modes — one mode per theme |
| `variables` (semantic) | Creates a semantic variable collection on top of primitive variables, referencing `SystemData` bindings |
| `styles` | Creates paint styles — one style per shade |
| `preview` | Renders a swatch board frame in the current Figma document |
| `extract-source-colors` | Extracts fill colors from the current Figma selection as source colors |

```bash
/ui-color-palette:figma variables
/ui-color-palette:figma styles
```

---

## Penpot

**Skill**: `/ui-color-palette:penpot`\
**Argument**: `tokens`, `styles`, or `preview`\
**Requires**: `penpot_token` configured via `/plugin config`

| Sub-workflow | What it does |
|---|---|
| `tokens` | Creates a token collection with per-theme overrides |
| `tokens` (semantic) | Adds a semantic token layer referencing primitive tokens |
| `styles` | Creates color styles in the current file |
| `preview` | Renders a swatch board in the current Penpot document |
| `extract-source-colors` | Extracts fill colors from the current Penpot selection |

```bash
/ui-color-palette:penpot tokens
/ui-color-palette:penpot preview
```

---

## Framer

**Skill**: `/ui-color-palette:framer`\
**Argument**: `styles` or `preview`\
**Requires**: `framer_mcp_url` configured via `/plugin config`

| Sub-workflow | What it does |
|---|---|
| `styles` | Creates color styles in the Framer project |
| `preview` | Renders a swatch board in the current Framer canvas |
| `extract-source-colors` | Extracts fill colors from the current Framer selection |

```bash
/ui-color-palette:framer styles
/ui-color-palette:framer preview
```

---

## Sketch

**Skill**: `/ui-color-palette:sketch`\
**Argument**: `variables`, `styles`, `tokens`, or `preview`\
**Requires**: MCP enabled in Sketch preferences

| Sub-workflow | What it does |
|---|---|
| `variables` | Creates Sketch swatches (document colors) |
| `styles` | Creates shared layer styles |
| `tokens` | Exports design tokens compatible with Sketch token plugins |
| `preview` | Renders a swatch board artboard in the current Sketch document |
| `extract-source-colors` | Extracts fill colors from the current Sketch selection |

```bash
/ui-color-palette:sketch variables
/ui-color-palette:sketch tokens
```

---

## Typical end-to-end workflow

```
1. /ui-color-palette:generate-source-colors  →  source colors
2. /ui-color-palette:scale-palette           →  palette built + previewed
3. /ui-color-palette:figma variables         →  pushed to Figma
4. /ui-color-palette:generate-code css       →  CSS tokens exported
```

The palette built in step 2 is reused in steps 3 and 4 — no rebuild.
