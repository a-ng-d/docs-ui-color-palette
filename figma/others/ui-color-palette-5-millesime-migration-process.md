---
icon: megaphone
---

# UI Color Palette 5 Millésime migration process

{% hint style="warning" %}
This document must be read by all the users who have created a palette before August.
{% endhint %}

The UI Color Palette has been significantly enhanced to operate effectively under technical constraints, following a new Figma constraint. However, the palettes are limited in the amount of data they can store for security reasons. So, the palettes are no longer managed through the generated document on the canvas; they are handled directly on the selected page.

When opening the plugin, a migration script will be executed to get each palette on the current page and turn them into a simple gateway to the palettes stored on the page. While selecting a palette, the changes are not automatically replicated on the generated palette, but you can update it on demand. The synchronization with the local styles and variables is preserved.

In version 5 (aka Millésime), the palette documentation is only permitted on demand. To learn more, see [Generate a color palette documentation](../guides/generate-a-color-palette-documentation.md).

{% hint style="info" %}
* The migration script is executed on the selected page of your document after running the plugin and after changing the page
* Be sure to use the /Figma plugin to execute the migration, as it can recognize the palette you created before version 5
{% endhint %}

Figma documents are versioned, and if you encounter any problems after the migration, please reach out to us for further assistance.

<a href="https://uicp.ylb.lt/contact" class="button primary" data-icon="bell-concierge">Contact support</a>
