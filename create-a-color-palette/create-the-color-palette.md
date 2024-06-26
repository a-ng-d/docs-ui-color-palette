# 4️⃣ Configure the palette

{% embed url="https://drive.google.com/file/d/1u0Z1UE2VkWqQfbRNBohfh2xR0i-DPfxE/view?usp=sharing" fullWidth="true" %}

## Change the palette global settings

{% hint style="danger" %}
`Color sheet` is only available in the Pro plan.
{% endhint %}

You can customize the palette name (limited to 64 characters) and its description. The default name will be UI Color Palette if no custom name exists.

In addition, you can select a specific layout for your palette:

* `Palette with properties` displays a palette composed of shades with a few related metadata:
  * The color shade name (according to the chosen color system).
  * The `hexadecimal code`.
  * The selected `Color space` values (`LCH`, `LAB`, and `HSL`).
  * The `WCAG 2.1` contrast score and the ratio.
  * The `APCA` contrast score and the minimum font size in 400.
* `Palette` displays every shade without any metadata.
* `Color sheet` <mark style="color:yellow;">`Pro`</mark> displays a sheet composed of shade with the full related metadata:
  * The color shade name (according to the chosen color system).
  * The color shade description.
  * The `hexadecimal code`.
  * The selected `Color space` values (`LCH`, `LAB`, and `HSL`).
  * The `WCAG 2.1` contrast score and the ratio.
  * The `APCA` contrast score and every minimum font size according to the weight.

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

## Select a vision simulation

You can simulate a specific vision disability to get a perception through the eyes of people living with those troubles. The contrast between the `Text light color`/`Text dark color` and the color shades are also simulated. In that way, the contrast might be managed for every perception of colors. Here are the vision simulations:

* [`Protanomal`](../glossary.md#protanomaly).
* [`Protanopia`](../glossary.md#protanopia).
* [`Deuteranomaly`](../glossary.md#deuteranomaly) <mark style="color:yellow;">`Pro`</mark>.
* [`Deuteranopia`](../glossary.md#deuteranopia) <mark style="color:yellow;">`Pro`</mark>.
* [`Tritanomaly`](../glossary.md#tritanomaly) <mark style="color:yellow;">`Pro`</mark>.
* [`Tritanopia`](../glossary.md#tritanopia) <mark style="color:yellow;">`Pro`</mark>.
* [`Achromatomaly`](../glossary.md#achromatomaly) <mark style="color:yellow;">`Pro`</mark>.
* [`Achromatopsia`](../glossary.md#achromatopsia) <mark style="color:yellow;">`Pro`</mark>.
