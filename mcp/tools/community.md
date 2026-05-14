---
description: >-
  Tools for publishing and managing palettes in the community — authentication
  required
icon: users
---

# Community tools

These tools interact with the UI Color Palette database. They require authentication — see [Authentication](../authentication.md).

***

## list\_published\_palettes

List publicly shared palettes from the community. No authentication required.

**Input**

| Parameter | Type     | Required | Description                                                                    |
| --------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `page`    | `number` | No       | Page number (default: 1)                                                       |
| `limit`   | `number` | No       | Results per page, max 50 (default: 20, recommended: 5 to avoid large payloads) |
| `search`  | `string` | No       | Filter by palette name                                                         |

***

## list\_my\_published\_palettes

List the authenticated user's own published palettes. Requires authentication.

**Input**

| Parameter | Type     | Required | Description                                            |
| --------- | -------- | -------- | ------------------------------------------------------ |
| `page`    | `number` | No       | Page number (default: 1)                               |
| `limit`   | `number` | No       | Results per page, max 50 (default: 20, recommended: 5) |
| `search`  | `string` | No       | Filter by palette name                                 |

***

## get\_published\_palette

Fetch a specific palette by its ID. No authentication required.

**Input**

| Parameter   | Type     | Required | Description                      |
| ----------- | -------- | -------- | -------------------------------- |
| `paletteId` | `string` | Yes      | Unique identifier of the palette |

***

## publish\_palette

Save a new palette to the database. Requires authentication.

The palette is private by default (`is_shared: false`). Call `share_published_palette` afterwards to make it public.

**Input**

| Parameter                  | Type                              | Required | Description                                                |
| -------------------------- | --------------------------------- | -------- | ---------------------------------------------------------- |
| `name`                     | `string`                          | Yes      | Palette name                                               |
| `description`              | `string`                          | No       | Optional description                                       |
| `preset`                   | [`Preset`](../schemas.md#preset)  | Yes      | Shade stop configuration                                   |
| `shift`                    | `{ chroma: number, hue: number }` | Yes      | Global shift adjustments                                   |
| `are_source_colors_locked` | `boolean`                         | No       | Lock source colors (default: `false`)                      |
| `colors`                   | [`Color[]`](../schemas.md#color)  | Yes      | Source colors — at least one required                      |
| `themes`                   | [`Theme[]`](../schemas.md#theme)  | Yes      | Theme configurations — at least one required               |
| `color_space`              | `enum`                            | Yes      | Color space for shade interpolation (e.g. `"LCH"`)         |
| `algorithm_version`        | `"v1" \| "v2" \| "v3"`            | Yes      | Algorithm version — use `"v3"`                             |
| `is_shared`                | `boolean`                         | No       | Whether the palette is publicly visible (default: `false`) |

***

## update\_published\_palette

Update an existing published palette. Requires authentication. Only the fields you provide are updated.

**Input**

| Parameter                  | Type      | Required | Description                  |
| -------------------------- | --------- | -------- | ---------------------------- |
| `paletteId`                | `string`  | Yes      | ID of the palette to update  |
| `name`                     | `string`  | No       | Updated name                 |
| `description`              | `string`  | No       | Updated description          |
| `preset`                   | `object`  | No       | Updated preset configuration |
| `shift`                    | `object`  | No       | Updated shift configuration  |
| `are_source_colors_locked` | `boolean` | No       | Updated lock state           |
| `colors`                   | `array`   | No       | Updated color definitions    |
| `themes`                   | `array`   | No       | Updated theme configurations |
| `color_space`              | `string`  | No       | Updated color space          |
| `algorithm_version`        | `string`  | No       | Updated algorithm version    |
| `is_shared`                | `boolean` | No       | Updated sharing visibility   |

***

## share\_published\_palette

Make a published palette publicly visible in the community. Requires authentication.

**Input**

| Parameter   | Type     | Required | Description                |
| ----------- | -------- | -------- | -------------------------- |
| `paletteId` | `string` | Yes      | ID of the palette to share |

***

## unshare\_published\_palette

Remove a palette from the public community listing while keeping it in the database. Requires authentication.

**Input**

| Parameter   | Type     | Required | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| `paletteId` | `string` | Yes      | ID of the palette to make private |

***

## unpublish\_palette

Permanently delete a published palette from the database. This action is irreversible. Requires authentication.

**Input**

| Parameter   | Type     | Required | Description                 |
| ----------- | -------- | -------- | --------------------------- |
| `paletteId` | `string` | Yes      | ID of the palette to delete |

{% hint style="danger" %}
`unpublish_palette` is a destructive operation. The palette cannot be recovered after deletion.
{% endhint %}

***

## Typical publish workflow

```
1. get_palette             →  generate & review shades
2. publish_palette         →  save to database (private)
3. share_published_palette →  make it public
```

To update later:

```
1. list_my_published_palettes  →  find the palette ID
2. update_published_palette    →  apply changes
```
