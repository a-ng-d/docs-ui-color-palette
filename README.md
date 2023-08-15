---
description: Get started quickly!
---

# Welcome aboard!

<figure><img src=".gitbook/assets/plugin-cover.png" alt=""><figcaption></figcaption></figure>

UI Color Palette is a Figma and FigJam plugin creating consistent and accessible color palettes specifically for UI. The plugin uses the alternative color space from [`RGB`](glossary.md#rgb) and [`HSL`](glossary.md#hsl), like [`LCH`](glossary.md#lch), [`OKLCH`](glossary.md#oklch), [`CIELAB`](glossary.md#cielab), [`OKLAB`](glossary.md#oklab), and [`HSLuv`](glossary.md#hsluv), to create color shades according to the chosen lightness scale. These spaces are relevant to make these shades compliant with the [WCAG standards](https://www.w3.org/WAI/standards-guidelines/wcag/) and guarantee enough contrast between the information and its background color. The idea to make this Figma plugin comes from the article: [Accessible Palette: stop using HSL for color systems](https://wildbit.com/blog/accessible-palette-stop-using-hsl-for-color-systems).

This plugin will allow you to:

* Create a complete palette from any existing color to help you build a color system.
* Adjust the color palette in real-time to control the contrast.
* Deploy the color palette by publishing it as local styles and variables or exporting it as code for several platforms.

{% hint style="info" %}
To provide users with a quality experience, we want to inform them that source colors may not be included in the color palette due to the color spaces compliant with accessibility. The [`HSL`](glossary.md#hsl) color space can be selected if you need to have those, but it is not ideal for creating a palette with adequate compliance with accessibility.

The palette can still acknowledge if a color shade is close to the source to preserve the color language of your brand.
{% endhint %}
