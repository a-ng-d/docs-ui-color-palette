---
description: >-
  Export your Framer color palette to CSS, Less, Tailwind, or design tokens.
icon: code
---

# Export a color palette to code

{% hint style="info" %}
The general mechanics of each export format are documented once, for every UI Color Palette platform — see **[Export a color palette to code](https://docs.ui-color-palette.com/general/guides/export-a-color-palette-to-code)**. Framer's own format list is narrower than Figma, Penpot, and Sketch's — see below.
{% endhint %}

## Formats available on Framer

Unlike Figma, Penpot, and Sketch, Framer does not support every export format. On Framer, you can export a palette to:

* **CSS** — the default export, available on the free `/basic` plan.
* **Less** — `/pro` only.
* **Tailwind**, both v3 and v4 — `/pro` only.
* **JSON design tokens**, both the native format and DTCG — `/pro` only.

Framer does **not** support SCSS, Apple (Swift/UIKit), Android (Kotlin/XML), or spreadsheet (CSV) export — those formats are Figma, Penpot, and Sketch only. See the [platform capabilities](https://docs.ui-color-palette.com/general/introduction/platform-capabilities) matrix.

For what each of these formats actually produces (file structure, examples), see the shared [Export a color palette to code](https://docs.ui-color-palette.com/general/guides/export-a-color-palette-to-code) guide — everything there except the SCSS, Apple, Android, and spreadsheet sections applies to Framer too.
