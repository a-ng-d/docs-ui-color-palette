---
description: >-
  Learn how to create comprehensive documentation of your color palette (or
  primitives) accessible from your Figma document.
icon: file-lines
---

# Generate a color palette documentation

{% stepper %}
{% step %}
## Generate a document of the palette

Once the palette is finished, you can generate complete documentation of every shade and tint. Click the <i class="fa-ellipsis">:ellipsis:</i> icon in the bottom bar, then select `Generate a document` to access the available document types.

{% hint style="info" %}
As many documents as color modes will be generated.
{% endhint %}

You have 3 types of documents:

* `Palette with properties` displays a palette composed of shades/tints with a few related metadata:
  * The color shade/tint name (according to the chosen lightness scale preset)
  * The `hexadecimal code`
  * The selected `Color space` values
  * The [`WCAG 2.1`](../glossary.md#wcag-2.1) contrast score with a recommendation
  * The [`APCA`](../glossary.md#apca) contrast score with a recommendation
* `Palette` displays every shade/tint without any metadata
* `Color sheet` displays a sheet composed of shade/tint with the full related metadata:
  * The color shade/tint name (according to the chosen lightness scale preset)
  * The color shade/tint description
  * The `hexadecimal code`
  * The selected `Color space` values
  * The [`WCAG 2.1`](../glossary.md#wcag-2.1) contrast score with a recommendation
  * The [`APCA`](../glossary.md#apca) contrast score with a recommendation and every minimum font size according to the weight

The palette is instantly created close to your view.

{% hint style="danger" %}
Avoid editing the palette directly on the document canvas. The frame named "\_colors﹒do not edit any layer" is by default locked to avoid any updates by hand.
{% endhint %}

{% hint style="info" %}
The palette will be named as referred:

`paletteName`・`paletteColorMode`・`presetName`・`colorSpace`
{% endhint %}
{% endstep %}

{% step %}
## Update a document if the palette has been too

Once you update your palette, click the <i class="fa-ellipsis">:ellipsis:</i> icon in the bottom bar, then `Push updates to the document`. The document will receive the updated metadata, shades, and tints.

{% hint style="info" %}
Each time you update, each time you store an updated backup.
{% endhint %}
{% endstep %}

{% step %}
## Update the document layout

When a document is selected on the canvas and recognized as a "UI Color Palette", you can choose another layout of the list of 3 types (see [Generate a document of the palette](generate-a-color-palette-documentation.md#generate-a-document-of-the-palette)). Once selected, the document will transform its layout.&#x20;
{% endstep %}

{% step %}
## Open a palette from a select document

When a document is selected on the canvas and recognized as a "UI Color Palette", the controller allows you to access the related palette by clicking the `Open document` button.

{% hint style="info" %}
Keep in mind, this is a shortcut because a document is an instance of the palette. It works like the Figma component flow model (master-instance).
{% endhint %}
{% endstep %}

{% step %}
## Restore a palette

When a document is selected on the canvas and recognized as a "UI Color Palette", but the `Local Master` palette has not been found on the current page, you can store the palette from a backup stored in the document by clicking the `Restore palette` button.
{% endstep %}
{% endstepper %}
