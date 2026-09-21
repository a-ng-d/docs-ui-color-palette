---
icon: unlock
---

# Understanding free and Pro

UI Color Palette is free to explore. Credits are gone, and so are per-action fees — every feature is now open, so you can try it before subscribing, even the ones that require a subscription to apply. The line between free and Pro is drawn along three axes: **volume**, **synchronization**, and **refinement**.

This applies the same way on every surface — Figma, Penpot, Sketch, Framer, and the Web App — only the vocabulary for a few items changes from one platform to another, as noted below.

## Discover everything for free

There are no more credits and no per-action costs. On the free `/basic` plan, you can:

* create palettes, generate colors with AI, extract colors from an image, and build color harmonies;
* preview the color modes — light, dark, and color-blindness variants — with a call to action to create one;
* preview the full palette (six steps, five source colors) from the AI, Image Palette, color wheel, and exploration tools before creating it;
* use the color spaces, chroma velocity, vision simulation, and foreground colors;
* fine-tune with chroma and hue shifting, the source colors lock, and the alpha mode;
* publish palettes to the community;
* export to CSS.

## Volume — capped on the free plan

Free palettes are limited by volume. Upgrade to `/pro` to lift every cap.

| Item              | `/basic` | `/pro`    |
| ------------------ | -------- | --------- |
| Palettes per page or document (see below) | 3        | Unlimited |
| Source colors      | 5        | Unlimited |
| Steps               | 6        | Unlimited |
| Color modes         | 2        | Unlimited |

{% hint style="info" %}
The cap is the same everywhere (3 on `/basic`, unlimited on `/pro`), but what it's scoped *to* is a genuine structural difference, not just naming:

* On [Figma](https://docs.ui-color-palette.com/figma/introduction/free-and-pro) and [Penpot](https://docs.ui-color-palette.com/penpot/introduction/free-and-pro): palettes are scoped **per page** — switching page gives you a different palette set.
* On [Sketch](https://docs.ui-color-palette.com/sketch/introduction/free-and-pro) and [Framer](https://docs.ui-color-palette.com/framer/introduction/free-and-pro): palettes are scoped **per document** — the whole file/project shares one set, with no page-level partitioning.

This follows each platform's own document model rather than being an arbitrary choice — see [platform capabilities](platform-capabilities.md).
{% endhint %}

## Synchronization — reserved for Pro

Applying a palette to your workspace and shipping it as assets requires `/pro`. The exact mechanism and vocabulary vary per platform — see the [platform capabilities](platform-capabilities.md) page for the full matrix:

* sync with your design tool's own tokens/styles/variables system — see [Sync a color palette to the local library](../guides/sync-a-color-palette-to-the-local-library.md) for what this means on each platform (local variables and styles on Figma and Sketch, tokens and styles on Penpot, color styles on Framer);
* generate the palette documentation (see [Generate a color palette documentation](../guides/generate-a-color-palette-documentation.md)) — inserted as frames on Figma, boards on Penpot, artboards on Sketch, or directly in the document on Framer;
* [export to code](../guides/export-a-color-palette-to-code.md) in every format except CSS (native and DTCG tokens, Tailwind, SCSS, Less, Apple, Android, spreadsheets…) on Figma, Penpot, and Sketch.

{% hint style="warning" %}
Framer supports export to code too, but a narrower format set: CSS, Less, Tailwind (v3 and v4), and JSON tokens (native and DTCG) — no SCSS, Apple, Android, or spreadsheet export. See [Export a color palette to code](../guides/export-a-color-palette-to-code.md) and [platform capabilities](platform-capabilities.md).
{% endhint %}

## Refinement — reserved for Pro

Advanced fine-tuning that isn't about volume also stays on `/pro`:

* the accessibility tools — contrast report, contrast intervals, and the color-blindness filter;
* the lightness and contrast presets.
