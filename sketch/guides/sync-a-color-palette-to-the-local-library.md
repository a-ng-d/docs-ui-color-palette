---
description: >-
  Learn how to synchronize your color palette with local styles and variables,
  enabling its publication across documents and workspaces.
icon: arrows-rotate-reverse
---

# Sync a color palette to the local library

{% stepper %}
{% step %}
## <i class="fa-lock">:lock:</i> Sync to the local styles

{% embed url="https://drive.google.com/file/d/1R9L9ZT0Ka2I3FYbr0B8XtoFLN-wc8222/view?usp=sharing" %}

{% hint style="danger" %}
Creating and updating local styles are only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

The shades/tints are grouped by source colors, from the darkest to the lightest. If any `Color modes` have been created, the groups will be gathered and named with their related color theme. In addition, if the palette has a custom name, every group is gathered into one with the palette name.

Once the palette is ready, click the `Sync with the local styles` button to add every color shade/tint to the document's local styles. These styles can be published in the Team Library.

If you update the palette after adding its shades/tints to the local styles, you can click the `Sync with the local styles` button to update the styles that have been edited. The synchronization is not on both sides because you cannot update your palette from the local styles.

{% hint style="info" %}
The synchronization with the local styles is not deep by default, so the styles that do not match the shade/tint of your palette will remain. Read more about the [`Preferences`](../user-management/update-your-preferences.md).
{% endhint %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Sync to the local variables

{% embed url="https://drive.google.com/open?id=1dkhiDqUXReZrAWddrHcJnaV5r_shcatu&usp=drive_fs" %}

{% hint style="danger" %}
Creating and updating local variables are only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

The shades/tints are grouped by source colors, from the darkest to the lightest. If any `Color modes` have been created, the groups will be gathered and named with their related color theme. In addition, if the palette has a custom name, every group is gathered into one with the palette name.

Once the palette is ready, click the `Sync with the local variables` button to add every color shade/tint to the document's local variables. These variables can be published as Team Library.

If you update the palette after adding its shades/tints to the local variables, you can click the `Sync with the local variables` button to update the variables that have been edited. The synchronization is not on both sides because you cannot update your palette from the local variables.

{% hint style="warning" %}
The current behavior of Sketch cannot allow you to replace the previous variables with the new ones. So, the new variables will lose the link with the published ones.
{% endhint %}

{% hint style="info" %}
The synchronization with the local styles is not deep by default, so the variables that do not match the shade/tint of your palette will remain. Read more about the [`Preferences`](../user-management/update-your-preferences.md).
{% endhint %}
{% endstep %}
{% endstepper %}
