---
description: >-
  Learn how to synchronize your color palette with document styles and
  variables, enabling its publication across projects and teams.
icon: arrows-rotate-reverse
---

# Sync a color palette to the local library

{% stepper %}
{% step %}
## <i class="fa-lock">:lock:</i> Sync to the local styles

{% hint style="danger" %}
Creating and updating local styles are only available in the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

The shades/tints are grouped by source colors, from the darkest to the lightest. If any `Color mode` have been created, the groups will be gathered and named with their related color mode. In addition, if the palette has a custom name, every group is gathered into one with the palette name.

Once the palette is ready, click the `Sync with the local styles` button to add every color shade/tint to the document's local styles. These styles can be published as Team Library.

If you update the palette after adding its shades/tints to the local styles, you can click the `Sync with the local styles` button to update the styles that have been edited. The synchronization is not on both sides because you cannot update your palette from the local styles.

{% hint style="info" %}
The synchronization with the local styles is not deep by default, so the styles that do not match the shade/tint of your palette will remain. Read more about the [`Preferences`](../user-management/update-your-preferences.md).
{% endhint %}
{% endstep %}

{% step %}
## Export tokens and import them as tokens

Once the palette is ready, you can export it as Native tokens to import with the Penpot import. See more on the [Export a color palette to code](export-a-color-palette-to-code.md#export-as-design-tokens-json).

{% hint style="info" %}
The sync is not possible for now, but this will be an improvement for the future. Be aware that importing new tokens will erase the previous ones. See more on the [Penpot official document](https://help.penpot.app/user-guide/design-tokens/).
{% endhint %}
{% endstep %}
{% endstepper %}
