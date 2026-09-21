---
description: >-
  Why keeping a design system's tokens, styles, or variables in sync with a
  UI Color Palette matters, and where to find the steps for your platform.
icon: arrows-rotate-reverse
---

# Sync a color palette to the local library

Once a palette is finished, it's still just data living inside `UI Color Palette` until it becomes something your design tool's components can actually reference — a style, a variable, or a design token. Syncing pushes every shade/tint from the palette into your design tool's own local library, so the rest of your design system (and, on some platforms, your whole team via a published library) can use them like any other native color asset.

Two things are true everywhere:

* The sync is one-way, from the palette to the local library. If you update the palette, you re-run the sync to push the changes; editing the local styles/variables/tokens directly does not update the palette back.
* The sync is not "deep" by default — items in the local library that no longer match a shade/tint of your palette are left alone rather than deleted, to avoid silently breaking references elsewhere in your file. See [Update your preferences](../user-management/update-your-preferences.md).

## The mechanism is genuinely platform-specific

{% hint style="warning" %}
Unlike most of the rest of this space, this is one area where the underlying mechanism — and the vocabulary — differs enough between platforms that there is no single set of steps to document generally. Each design tool has its own concept of a "local library" (styles, variables, tokens), and `UI Color Palette` syncs to whichever ones that platform natively supports.
{% endhint %}

* **Figma** — syncs to both local styles and local variables (with color-mode-per-variable-mode support, capped by your Figma plan). See [Sync a color palette to the local library on Figma](../../figma/guides/sync-a-color-palette-to-the-local-library.md).
* **Penpot** — syncs to local styles, and separately to Penpot's native design tokens via the plugin API. See [Sync a color palette to the local library on Penpot](../../penpot/guides/sync-a-color-palette-to-the-local-library.md) and [Sync a color palette to tokens on Penpot](../../penpot/guides/sync-a-color-palette-to-tokens.md).
* **Sketch** — syncs to both local styles and local variables (note: updating previously-synced variables currently breaks their link to the earlier published ones — see the platform guide for details). See [Sync a color palette to the local library on Sketch](../../sketch/guides/sync-a-color-palette-to-the-local-library.md).
* **Framer** — syncs to local color styles only; Framer has no variables concept in the same sense as the other platforms. See [Sync a color palette to the local library on Framer](../../framer/guides/sync-a-color-palette-to-the-local-library.md).

For the exact buttons, naming rules, and caveats on your platform, follow the link above for the tool you're using.
