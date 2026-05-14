---
description: Data structures used across MCP tool inputs
icon: brackets-curly
layout: editorial
---

# Schemas

Most tools share the same core data structures. This page describes each one so you can build valid inputs without trial and error.

---

## Base

The `base` object is the palette's root configuration. It is required by `get_palette`, `get_color_system`, and `generate_code`.

| Field | Type | Description |
|---|---|---|
| `name` | `string` (optional) | Palette name |
| `description` | `string` (optional) | Palette description |
| `preset` | [`Preset`](#preset) | Shade stop configuration |
| `shift` | `{ chroma: number, hue: number }` | Global chroma and hue shift applied to all colors. Use `{ chroma: 100, hue: 0 }` for no shift |
| `areSourceColorsLocked` | `boolean` (optional) | Lock source colors (default: `false`) |
| `colors` | [`Color[]`](#color) | Source colors — at least one required |
| `colorSpace` | `enum` | Color space for shade interpolation (default: `LCH`) |
| `algorithmVersion` | `"v1" \| "v2" \| "v3"` | Algorithm version — use `v3` for best results |

**Supported color spaces:** `LCH`, `OKLCH`, `LAB`, `OKLAB`, `HSL`, `HSLUV`, `HSV`, `CMYK`, `RGB`, `HEX`, `P3`

---

## Theme

A `theme` defines the lightness scale for one mode (e.g. Light or Dark). At least one theme is required.

| Field | Type | Description |
|---|---|---|
| `id` | `string` (optional) | Random 11-character lowercase hex string. Use `"00000000000"` for the default theme |
| `name` | `string` | Theme name, e.g. `"Light"`, `"Dark"`. Use `"None"` if not applicable |
| `description` | `string` (optional) | Theme description |
| `scale` | `Record<string, number>` (optional) | Maps each stop name to a lightness percentage (0–100). If omitted, a linear scale is auto-generated from the preset |
| `visionSimulationMode` | `enum` (optional) | Color vision deficiency simulation (default: `NONE`) |
| `textColorsTheme` | `{ lightColor: hex, darkColor: hex }` (optional) | Contrast text colors — use `{ lightColor: "#FFFFFF", darkColor: "#000000" }` by default |
| `paletteBackground` | `hex` (optional) | Canvas background — use `"#FFFFFF"` by default |
| `isEnabled` | `boolean` (optional) | Whether this theme is active — use `true` |
| `type` | `"default theme" \| "custom theme"` (optional) | Theme type |

**Vision simulation modes:** `NONE`, `PROTANOMALY`, `PROTANOPIA`, `DEUTERANOMALY`, `DEUTERANOPIA`, `TRITANOMALY`, `TRITANOPIA`, `ACHROMATOMALY`, `ACHROMATOPSIA`

---

## Color

A `color` defines a single source color from which shades are generated.

| Field | Type | Description |
|---|---|---|
| `id` | `string` (optional) | Random 11-character lowercase hex string. Referenced in bindings as `"colorId:shadeName"` — must stay consistent within the same request |
| `name` | `string` | Display name |
| `description` | `string` (optional) | Optional description |
| `rgb` | `{ r, g, b, a? }` | Normalized RGB values 0.0–1.0 (divide 0–255 by 255). Not an array, not integers |
| `hue` | `{ shift: number, isLocked: boolean }` | Hue shift in degrees (−360–360). Use `{ shift: 0, isLocked: false }` for no adjustment |
| `chroma` | `{ chroma: number, isLocked: boolean }` | Chroma shift (−100–100). Use `{ chroma: 100, isLocked: false }` for no adjustment |
| `alpha` | `{ isEnabled: boolean, backgroundColor: hex }` | Alpha config. Use `{ isEnabled: false, backgroundColor: "#FFFFFF" }` unless transparency is needed |

---

## Preset

A `preset` defines the shade stops and lightness range for the palette.

| Field | Type | Description |
|---|---|---|
| `id` | `PresetId` | One of the supported preset identifiers (see table below) |
| `name` | `string` | Human-readable name matching the chosen id |
| `stops` | `number[]` | Ordered list of shade stops — must match the canonical stops for the chosen id |
| `min` | `number` | Minimum lightness percentage — must match the canonical value for the chosen id |
| `max` | `number` | Maximum lightness percentage — must match the canonical value for the chosen id |
| `easing` | `enum` | Easing curve — must match the canonical value for the chosen id |
| `family` | `string` (optional) | Preset family label (e.g. `"Google"`, `"Framework"`) |

**Preset reference:**

| ID | Stops | Min | Max | Easing |
|---|---|---|---|---|
| `CUSTOM_1_10` | 1–6 | 10 | 90 | LINEAR |
| `CUSTOM_10_100` | 10–60 | 10 | 90 | LINEAR |
| `CUSTOM_100_1000` | 100–600 | 10 | 90 | LINEAR |
| `MATERIAL` | 50, 100–900 | 24 | 96 | LINEAR |
| `MATERIAL_3` | 100, 99, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0 | 0 | 100 | NONE |
| `TAILWIND` | 50, 100–900, 950 | 16 | 96 | LINEAR |
| `ANT` | 1–10 | 24 | 96 | LINEAR |
| `BOOTSTRAP` | 100–900 | 15 | 95 | LINEAR |
| `RADIX` | 1–12 | 5 | 95 | LINEAR |
| `UNTITLED_UI` | 25, 50, 100–900, 950 | 5 | 100 | LINEAR |
| `OPEN_COLOR` | 0–9 | 15 | 100 | LINEAR |
| `ADS` | 100–1000 | 24 | 96 | LINEAR |
| `ADS_NEUTRAL` | 0, 100–1100 | 8 | 100 | LINEAR |
| `SPECTRUM` | 100–1300 | 16 | 96 | LINEAR |
| `SPECTRUM_NEUTRAL` | 50, 75, 100–900 | 0 | 100 | LINEAR |
| `CARBON` | 10–100 (step 10) | 24 | 96 | LINEAR |
| `BASE` | 50, 100–700 | 24 | 96 | LINEAR |
| `POLARIS` | 1–16 | 16 | 100 | EASEOUT_QUAD |
| `FLUENT` | 10–160 (step 10) | 10 | 90 | LINEAR |

**Easing options:** `NONE`, `LINEAR`, `EASEIN_SINE`, `EASEOUT_SINE`, `EASEINOUT_SINE`, `EASEIN_QUAD`, `EASEOUT_QUAD`, `EASEINOUT_QUAD`, `EASEIN_CUBIC`, `EASEOUT_CUBIC`, `EASEINOUT_CUBIC`

---

## Color system

A color system adds a semantic layer on top of the primitive palette. It is used by `get_color_system` and optionally by `generate_code`.

### Schema

Defines the taxonomy — the groups and members whose cartesian product forms the token paths.

```json
{
  "groups": [
    {
      "id": "4a7f2c1e09b",
      "name": "Role",
      "members": [
        { "id": "9e3d5b0f12a", "name": "Background" },
        { "id": "2c8d4e1f05b", "name": "Foreground" }
      ]
    },
    {
      "id": "7b1e3a9c04d",
      "name": "State",
      "members": [
        { "id": "5f2a8d0e11c", "name": "Default" },
        { "id": "3e7b1c9f08a", "name": "Hover" }
      ]
    }
  ]
}
```

### Bindings

Map taxonomy paths to primitive color refs. A ref is formatted as `"colorId:shadeName"` (e.g. `"blue:500"`).

```json
[
  {
    "path": ["9e3d5b0f12a", "5f2a8d0e11c"],
    "ref": "blue:100",
    "overrides": {
      "darkThemeId": "blue:900"
    }
  }
]
```

| Field | Type | Description |
|---|---|---|
| `path` | `string[]` | Ordered member IDs — one per group |
| `ref` | `string` | Default primitive ref (`"colorId:shadeName"`) |
| `description` | `string` (optional) | Token description |
| `overrides` | `Record<themeId, ref>` (optional) | Per-theme ref overrides |
| `isExcluded` | `boolean` (optional) | Present in output but excluded from code generation |
