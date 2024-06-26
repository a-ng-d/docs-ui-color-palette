# 👐 Why should you avoid RBG and HSL color spaces?

[`RGB`](glossary.md#rgb) color space is undoubtedly the most used color model to display a specific color from the monitor. It is directly related to the 3 LEDs showing a color the human eye can perceive with the additive mixing. Easy to pick a random color but frankly terrible to create darker or lighter declination of a color.

[`HSL`](glossary.md#hsl) color space is less used, yet obtaining a darker or lighter variant of color is more effortless; a color can be darkish or lightish by adjusting the lightness axis.

What are these models problematic? The Human eye cannot perceive the whole white light gamut, just a tiny portion. Both [`RGB`](glossary.md#rgb) and [`HSL`](glossary.md#hsl) operate beyond their perception. Every monitor works with a specific technology to make every color perceivable ([`sRGB`](glossary.md#srgb), [`P3`](glossary.md#p3), or [`D65`](glossary.md#d65)) and avoid getting "dead pixels". Nevertheless, the monitor uses its calibration tools, and the results may differ from one monitor to another.

Contrast is one of the levers to guarantee an accessible User Interface. If the monitor calibrates a variety of colors beyond its scope, enough contrast will not be ensured. It may be worse: a weak contrast between an alert text and the background, leaving the user confused…

In addition, creating a color system using the [`HSL`](glossary.md#hsl) might occur a color scale with brutal stops and oversaturated shades.

Several alternatives and less common color spaces keep the color within a specific gamut and ensure the correct contrast of the information. [`LCH`](glossary.md#lch), [`OKLCH`](glossary.md#oklch), [`CIELAB`](glossary.md#cielab), [`OKLAB`](glossary.md#oklab), [`HSLuv`](glossary.md#hsluv), and `CIELuv` are designed to display every color the human eye can perceive without any calibration (except if you target the [`P3`](glossary.md#p3) on a [`sRBG`](glossary.md#srgb) monitor).

This article compares [`LCH`](glossary.md#lch) and [`HSL`](glossary.md#hsl) color model usage: [LCH is the best color space for UI](https://atmos.style/blog/lch-color-space).

