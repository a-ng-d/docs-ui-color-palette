---
icon: ballot-check
---

# Update your preferences

You can configure your `Preferences` in the <i class="fa-user">:user:</i> `User menu`.

{% hint style="danger" %}
The synchronization behavior preferences (deep sync of styles, variables, and tokens) are only available on the <mark style="color:yellow;">`/pro`</mark> plan, like the synchronization itself.
{% endhint %}

The preferences available depend on which local library mechanisms your platform supports (see [Sync a color palette to the local library](../guides/sync-a-color-palette-to-the-local-library.md)):

* **The synchronization behavior between the palette and local styles** (all platforms).\
  If enabled, the styles in the group matching the shades/tints in the palette are updated, and every style that does not match a shade/tint is deleted. The group name will be the palette one.\
  If disabled, every style that does not match a shade/tint is preserved.
* **The synchronization behavior between the palette and local variables** ([Figma](https://docs.ui-color-palette.com/figma/user-management/update-your-preferences) and [Sketch](https://docs.ui-color-palette.com/sketch/user-management/update-your-preferences) only — Penpot and Framer don't expose this preference, since Penpot syncs to design tokens instead and Framer has no variables concept).\
  If enabled, the variables in the collection matching the shades/tints in the palette are updated, and every variable that does not match a shade/tint is deleted. The collection name will be the palette one.\
  If disabled, every variable that does not match a shade/tint is preserved.

  {% hint style="warning" %}
  On Sketch specifically, variables are matched by their name, not by an identifier: after renaming a source color, the next sync creates new variables, which lose the link with the published ones. See [Update your preferences on Sketch](https://docs.ui-color-palette.com/sketch/user-management/update-your-preferences).
  {% endhint %}
* The language of the UI:
  * English (US)
  * French (France)
  * Portuguese (Brazil)
  * Chinese (Simplified)
  * Japanese (Japan)
  * Korean (Korea)
  * Spanish (Spain)
