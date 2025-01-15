# Select a velocity

You can select how the chroma is calculated through the color scaling. Chroma define the saturation of color within a specific color gamut ([`P3`](../../glossary.md#p3), [`sRGB`](../../glossary.md#srgb), [`D65`](../../glossary.md#d65)). The ultimate purpose is to simulate a consistent and smooth chroma variation to avoid shades from overshifting in lightness.

Here are the velocity:

* `Linear`: lighter shades appear more saturated.
* `Sinusoidal`: shades appear less saturated at both ends.
* `Sinusoidal and hyperbolic`: shades maintain consistent saturation.

