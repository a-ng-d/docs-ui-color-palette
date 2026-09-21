---
icon: ballot-check
---

# Update your preferences

You can configure your `Preferences` in the <i class="fa-user">:user:</i> `User menu`.

The preferences available depend on which local library mechanisms your platform supports (see [Sync a color palette to the local library](../guides/sync-a-color-palette-to-the-local-library.md)):

* **The synchronization behavior between the palette and local styles** (all platforms).\
  If enabled, the styles in the group matching the shades/tints in the palette are updated, and every style that does not match a shade/tint is deleted. The group name will be the palette one.\
  If disabled, every style that does not match a shade/tint is preserved.
* **The synchronization behavior between the palette and local variables** ([Figma](../../figma/user-management/update-your-preferences.md) and [Sketch](../../sketch/user-management/update-your-preferences.md) only — Penpot and Framer don't expose this preference, since Penpot syncs to design tokens instead and Framer has no variables concept).\
  If enabled, the variables in the collection matching the shades/tints in the palette are updated, and every variable that does not match a shade/tint is deleted. The collection name will be the palette one.\
  If disabled, every variable that does not match a shade/tint is preserved.

  {% hint style="warning" %}
  On Sketch specifically, the current behavior cannot replace previous variables with the new ones. So, the new variables will lose the link with the previously published ones. See [Update your preferences on Sketch](../../sketch/user-management/update-your-preferences.md).
  {% endhint %}
* The language of the UI:
  * English (US)
  * French (France)
  * Portuguese (Brazil)
  * Chinese (Simplified)
  * Japanese (Japan)
  * Korean (Korea)
  * Spanish (Spain)
