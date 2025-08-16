---
description: >-
  Learn how to manage and save a palette, iterate, and create modes to divide
  the palette for specific needs (e.g., light, dark, protanomaly).
icon: sliders-up
---

# Manage a color palette

{% stepper %}
{% step %}
## Adjust the lightness scale

The slider allows you to change the `Lightness scale` and the global `Chroma` in real-time. You can use the same keyboard shortcuts as the [creation](create-a-color-palette.md#set-the-scale).

The changes will be reflected in the `Preview`.

{% hint style="info" %}
An acknowledgment is appointed if the color shade/tint is close to the source color:

* `Closest to source` if the `Source colors` are not locked
* `Locked source colors` if the `Source colors` are locked
{% endhint %}

### Add or remove stops in the Custom preset

Click on the range to add a new stop. Select a stop, then press `Backspace ⌫` to remove it. The stops are renamed to keep a consistent order.

{% hint style="info" %}
Adding or removing only works in the `Custom` preset.
{% endhint %}
{% endstep %}

{% step %}
## Change the source colors

{% embed url="https://drive.google.com/file/d/1PbGyLkK5qY402VLbmYBTawPdXoOFIoNQ/view?usp=sharing" %}

### Add or remove a color

Click on the <i class="fa-plus">:plus:</i> icon to add a new color to the `Source colors`. There is a <i class="fa-minus">:minus:</i> icon at each color to remove it definitively from the palette.

{% hint style="info" %}
The default name of a new color is `New UI Color`.
{% endhint %}

### Change a color's parameters

{% hint style="warning" %}
The Alpha mode is only available on the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can change in real-time the name of the color and its hexadecimal code (via the color picker or the text input). The `Chroma` range can also be shifted to adjust the saturation of the shades/tints' scale. If adjusted, the global `Chroma` of palette cannot override this value. If reset, the global `Chroma` value is restored.

There are more advanced options (expand first by clicking the <i class="fa-ellipsis">:ellipsis:</i> icon):

* The [`LCH`](../glossary.md#lch) values, which might be changed directly to update the color
* The `Hue` range can also be shifted to adjust the hue of the shades/tints' scale (handy for the yellow colors)
* The `Alpha mode` makes the source color's scaling transparent instead of creating shades/tints and tints. The contrast is determined by mixing the alpha color with the `Background color` you set (default is white `#FFF`). The lightness stops' values are used to set the alpha
* The description can help you organize the shades/tints and bring semantics

### Reorder the colors

You can reorder the colors list by dragging an item and dropping it above or below another.
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Create color modes

{% embed url="https://drive.google.com/file/d/1S5kuk1scwk6tvBs32ZIOWk4zdaiJeL7n/view?usp=sharing" %}

{% hint style="danger" %}
Managing `Color modes` is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

{% hint style="info" %}
* The default color mode is named `None`
* The properties are hidden during the adjustment to provide exemplary performance in editing
{% endhint %}

### Add or remove a mode

Click on the <i class="fa-plus">:plus:</i> icon to add a new color in the `Color modes`. Each mode has a <i class="fa-minus">:minus:</i> icon to remove it definitively from the palette (but it can be redone on the canvas).

{% hint style="info" %}
The default name of a new color is `New UI Mode`.
{% endhint %}

{% hint style="warning" %}
You can create as many color modes as you need; nevertheless, the more modes you manage, the more limits you might meet in creating local variables. According to your Figma plan:

* In Figma Starter, you cannot add more than 1 variable mode
* In Figma Professional and Organization, you cannot add more than 4 variable modes

Learn more by consulting [Figma pricing](https://www.figma.com/pricing/).
{% endhint %}

### Change a mode's parameters

Select a previously created mode via the list at the top-right, and then you can change:

* Its `Lightness scale`
* Its `Vision simulation mode`
* Its `Dark text color`
* Its `Light text color`

These parameters are connected to the chosen mode. When you select a different mode, these parameters update to match the new mode.

In addition, in the `Colors modes`, you can change the following:

* Color mode name
* Palette background color (can be darker for a dark mode)
* Color mode description (expand first by clicking the <i class="fa-ellipsis">:ellipsis:</i> icon)

### Reorder the modes

You can reorder the modes list by dragging an item and dropping it above or below another.
{% endstep %}

{% step %}
## Adjust colors and contrast

You can refer to the creation guide to learn how to adjust the [colors](create-a-color-palette.md#adjust-the-colors-configuration) and the [contrast](create-a-color-palette.md#adjust-the-contrast-configuration).

The changes will be reflected in the `Preview`.

{% hint style="info" %}
An acknowledgment is appointed if the color shade/tint is close to the source color:

* `Closest to source` if the `Source colors` are not locked
* `Locked source colors` if the `Source colors` are locked
{% endhint %}
{% endstep %}
{% endstepper %}
