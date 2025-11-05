---
description: >-
  Learn how to synchronize your color palette with local styles and variables,
  enabling its publication across projects and teams.
icon: arrows-rotate-reverse
---

# Sync a color palette to the local library

{% stepper %}
{% step %}
## <i class="fa-lock">:lock:</i> Sync to the local styles

{% hint style="danger" %}
Creating and updating local styles are only available in the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

The shades/tints are grouped by source colors, from the darkest to the lightest. If any `Color modes` have been created, the groups will be gathered and named with their related color mode. In addition, if the palette has a custom name, every group is gathered into one with the palette name.

Once the palette is ready, click the `Sync with the local styles` button to add every color shade/tint to the document's local styles. These styles can be published as Team Library.

The description of the `Source colors` is reworked and added to the description of the local styles.

If you update the palette after adding its shades/tints to the local styles, you can click the `Sync with the local styles` button to update the styles that have been edited. The synchronization is not on both sides because you cannot update your palette from the local styles.

{% hint style="info" %}
The synchronization with the local styles is not deep by default, so the styles that do not match the shade/tint of your palette will remain. Read more about the [`Preferences`](../user-management/update-your-preferences.md).
{% endhint %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Sync to the local variables

{% hint style="danger" %}
Creating and updating local variables are only available in the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

Once the palette is ready, click the `Sync with the local variables` button to add every color shade/tint into the document's local variable. These variables can be published as Team Library.

A new collection with the palette's name and a default mode named `Value` is created, and the shades/tints are pushed from the darkest to the lightest and grouped by source colors. If any `Color modes` have been created, they are pushed as variable modes, and the empty cells are filled with shade/tint [`RGB`](../glossary.md#rgb) values.

The description of the `Source colors` is reworked and added to the description of the local variables.

{% hint style="warning" %}
According to your Figma plan:

* In Figma Starter, you cannot add more than 1 variable mode.
* In Figma Professional and Organization, you cannot add more than 10 variable modes.

Learn more by consulting [Figma pricing](https://www.figma.com/pricing/).
{% endhint %}

Suppose you update the palette after adding its shades/tints to the local variables, you can click the `Sync with the local variables` button to update the variables that have been edited. The synchronization is not on both sides because you cannot update your palette from the local variables.

{% hint style="info" %}
The synchronization with the local variables is not deep by default, so the variables that do not match the shade/tint of your palette will remain. Read more about the [`Preferences`](../user-management/update-your-preferences.md).
{% endhint %}
{% endstep %}
{% endstepper %}
