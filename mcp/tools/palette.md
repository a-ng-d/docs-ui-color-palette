---
description: >-
  Tools for generating, previewing, and exporting color palettes — no
  authentication required
icon: palette
---

# Palette tools

These tools are available without authentication. They cover the full palette generation workflow: build → preview → export.

***

## get\_palette

Generate a complete color palette from a base configuration and theme configurations.

Returns a flat array of shade rows by default (`compact: true`) — one object per shade. This is the preferred format for audits, previews, and design handoffs.

**Input**

| Parameter | Type                             | Required | Description                                                                                                                                                             |
| --------- | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `base`    | [`Base`](../schemas.md#base)     | Yes      | Palette root configuration                                                                                                                                              |
| `themes`  | [`Theme[]`](../schemas.md#theme) | Yes      | At least one theme (e.g. a `"Light"` default)                                                                                                                           |
| `compact` | `boolean`                        | No       | When `true` (default), returns only `theme`, `color`, `shade`, `hex`, `contrast`, `textContrast`. Set to `false` only when raw color space values are explicitly needed |

**Compact output shape (per shade)**

```json
{
  "theme": "Light",
  "color": "Blue",
  "shade": "500",
  "hex": "#3B82F6",
  "contrast": 4.52,
  "textContrast": "#000000"
}
```

**Example prompt**

> _"Generate a Tailwind palette for a deep forest green (#2D6A4F) with Light and Dark themes."_

***

## get\_color\_system

Build a semantic color system by resolving taxonomy bindings against a generated palette. Returns a `SystemData` object with all tokens and their per-theme primitive refs.

Use this after defining your palette structure when you need semantic tokens (e.g. `Background/Default`, `Foreground/Hover`) that reference primitive shades.

**Input**

| Parameter         | Type                                   | Required | Description                                    |
| ----------------- | -------------------------------------- | -------- | ---------------------------------------------- |
| `base`            | [`Base`](../schemas.md#base)           | Yes      | Palette root configuration                     |
| `themes`          | [`Theme[]`](../schemas.md#theme)       | Yes      | At least one theme                             |
| `system.schema`   | [`SystemSchema`](../schemas.md#schema) | Yes      | Taxonomy groups and members                    |
| `system.bindings` | [`Bindings`](../schemas.md#bindings)   | No       | Mappings from taxonomy paths to primitive refs |

***

## create\_color\_harmony

Generate color harmonies from a base color. Supports complementary, analogous, triadic, tetradic, compound, and square harmonies.

**Input**

| Parameter         | Type                       | Required | Description                                                                 |
| ----------------- | -------------------------- | -------- | --------------------------------------------------------------------------- |
| `baseColor`       | `[r, g, b]`                | Yes      | Base color as an RGB integer tuple (0–255 each)                             |
| `type`            | `enum`                     | No       | Harmony type (default: `ALL`)                                               |
| `analogousSpread` | `number`                   | No       | Spread angle in degrees for analogous harmonies (default: 30, range: 0–180) |
| `returnFormat`    | `"rgb" \| "hex" \| "both"` | No       | Output format (default: `both`)                                             |

**Harmony types:** `ALL`, `COMPLEMENTARY`, `ANALOGOUS`, `TRIADIC`, `TETRADIC`, `SQUARE`, `COMPOUND`

**Example prompt**

> _"What are the triadic harmonies of #E63946?"_

***

## extract\_dominant\_colors

Extract the dominant colors from a publicly accessible JPEG or PNG image using k-means clustering.

**Input**

| Parameter         | Type           | Required | Description                                                                              |
| ----------------- | -------------- | -------- | ---------------------------------------------------------------------------------------- |
| `imageUrl`        | `string (URL)` | Yes      | Publicly accessible JPEG or PNG image URL                                                |
| `colorCount`      | `number`       | No       | Number of dominant colors to extract (default: 5, range: 1–16)                           |
| `maxIterations`   | `number`       | No       | Maximum k-means iterations (default: 50, range: 1–500)                                   |
| `tolerance`       | `number`       | No       | Convergence tolerance — lower = more precise, higher = faster (default: 1, range: 0–100) |
| `skipTransparent` | `boolean`      | No       | Skip transparent pixels (default: `true`)                                                |

**Example prompt**

> _"Extract the 6 dominant colors from this brand image and build a palette from them."_

***

## generate\_code

Generate design tokens or design system variables from a palette in multiple output formats.

**Input**

| Parameter    | Type                             | Required | Description                                                          |
| ------------ | -------------------------------- | -------- | -------------------------------------------------------------------- |
| `base`       | [`Base`](../schemas.md#base)     | Yes      | Palette root configuration                                           |
| `themes`     | [`Theme[]`](../schemas.md#theme) | Yes      | At least one theme                                                   |
| `format`     | `enum`                           | No       | Output format (default: `css`)                                       |
| `colorSpace` | `enum`                           | No       | Color space for output values (default: `RGB`)                       |
| `system`     | `{ schema, bindings }`           | No       | When provided, generates a semantic tokens file alongside primitives |

**Output formats:** `css`, `scss`, `less`, `tailwind-v3`, `tailwind-v4`, `swift-ui`, `ui-kit`, `compose`, `resources`, `csv`, `native-tokens`, `dtcg-tokens`, `style-dictionary-v3`, `universal-json`

**Output color spaces:** `RGB`, `LCH`, `OKLCH`, `LAB`, `OKLAB`, `HSL`, `HSLUV`, `HSV`, `CMYK`, `HEX`, `P3`

**Example prompt**

> _"Export this palette as CSS custom properties in OKLCH."_

***

## generate\_colors\_from\_prompt

Generate source colors from a natural language description using AI (Mistral). Returns colors ready to use as input for `get_palette`.

**Input**

| Parameter | Type     | Required | Description                                            |
| --------- | -------- | -------- | ------------------------------------------------------ |
| `prompt`  | `string` | Yes      | Description of the desired palette, max 500 characters |

**Example prompts**

> _"A warm sunset palette with oranges and pinks"_
>
> _"A corporate SaaS palette — trustworthy blues and neutral greys"_

***

## preview\_palette

Build a preview image URL from compact palette data and return it as a markdown image link. The image renders inline in Claude, Cursor, and other MCP clients.

Call this after `get_palette` (with `compact: true`) to give the user an instant visual.

**Input**

| Parameter | Type    | Required | Description                                                                                        |
| --------- | ------- | -------- | -------------------------------------------------------------------------------------------------- |
| `cells`   | `array` | Yes      | Compact palette cells from `get_palette`. Each cell must have `theme`, `color`, `shade`, and `hex` |

**Output**

A markdown image link:

```markdown
![palette preview](https://api-uicp.yelbolt.workers.dev/v1/preview?data=...)
```

**Typical workflow**

```
1. generate_colors_from_prompt  →  source colors
2. get_palette (compact: true)  →  shade rows
3. preview_palette              →  inline image
4. generate_code                →  CSS / tokens
```
