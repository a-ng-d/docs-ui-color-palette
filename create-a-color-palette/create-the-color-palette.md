# Configure and create the color palette

{% embed url="https://drive.google.com/file/d/1u0Z1UE2VkWqQfbRNBohfh2xR0i-DPfxE/view?usp=sharing" fullWidth="true" %}

## Change the palette global settings

You can customize the palette name (limited to 64 characters) and its description. The default name will be UI Color Palette if no custom name exists.

In addition, you can select a specific layout for your palette:

* `Palette with properties` displays a palette composed of shades with a few related metadata:
  * The color shade name (according to the chosen color system).
  * The `hexadecimal code`.
  * The selected `Color space` values (`LCH`, `LAB`, and `HSL`).
  * The `WCAG 2.1` contrast score and the ratio.
  * The `APCA` contrast score and the minimum font size in 400.
* `Palette` displays every shade without any metadata.
* `Color sheet` (Pro) displays a sheet composed of shade with the full related metadata:
  * The color shade name (according to the chosen color system).
  * The color shade description.
  * The `hexadecimal code`.
  * The selected `Color space` values (`LCH`, `LAB`, and `HSL`).
  * The `WCAG 2.1` contrast score and the ratio.
  * The `APCA` contrast score and every minimum font size according to the weight.

{% hint style="danger" %}
`Color sheet` is only available in the Pro plan.
{% endhint %}

## Select a color space

{% hint style="info" %}
The HSL color space is not recommended for good lightness and contrast consistency. This color space allows you to include the source color within the shades.
{% endhint %}

You can change the global color space of your whole palette will be affected. Fortunately, you can browse the available color spaces without impacting the configuration (scale, source colors). Here are the color spaces:

* [`LCH`](../glossary.md#lch) (default color space).
* [`OKLCH`](../glossary.md#oklch).
* [`CIELAB`](../glossary.md#cielab).
* [`OKLAB`](../glossary.md#oklab).
* [`HSL`](../glossary.md#hsl).
* [`HSLuv`](../glossary.md#hsluv).

## Create the palette in one single click

The palette is instantly created close to your view by clicking `Create a UI Color Palette`, according to the `Lightness scale` and the `Settings`.

{% hint style="info" %}
The palette will be named as referred:

`paletteName`・`paletteTheme`・`presetName`・`paletteLayout`
{% endhint %}

{% hint style="danger" %}
Avoid editing the palette directly on the document canvas. The frame named "\_colors﹒do not edit any layer" is by default locked to avoid any update by hand.
{% endhint %}
