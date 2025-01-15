---
icon: book-open
---

# Glossary

## Concepts

<details>

<summary>Primitive colors</summary>

Color scaling is the declination of a source color to make it darker or lighter. These shades, aka Primitive colors, are consistent in contrast and lightness but still abstract and complex when applied to UI components. They can be bound as aliases in a more structured way, aka [`Semantic colors`](glossary.md#semantic-colors).

</details>

<details>

<summary>Semantic colors</summary>

A color system is an architecture in which each color serves a particular purpose. For example, red could warn a user, and grey could structure a layout. [`Primitive colors`](glossary.md#primitive-colors) are picked and bound to this architecture to create Semantic ones.

</details>

## Color spaces gamuts

<details>

<summary>sRGB</summary>

The sRGB gamut is a color space standard used in monitors, printers, and the internet. It defines a range of colors for accurate and consistent display. It is widely accepted and compatible with existing technologies.

</details>

<details>

<summary>P3</summary>

The P3 gamut is a color space that has more colors than sRGB and is used in high-end displays like Apple's Retina. It displays vibrant and accurate colors in movies, photos, and visual content.

</details>

<details>

<summary>D65</summary>

The D65 color space gamut is used in photography, printing, and video. It's based on CIE 1931, with a wide range of colors. D65 white point is daylight's average color, preferred for calibration. Its gamut allows for accurate and vibrant color reproduction, which is useful for visual arts professionals.

</details>

## Color spaces models

<details>

<summary>CIELAB</summary>

CIELAB is a color space model based on human perception. It includes Lightness (L), red-green (A\* axis), and yellow-blue (B\* axis) attributes. It's used in printing, textiles, and painting for accurate color reproduction.

</details>

<details>

<summary>HSL</summary>

The HSL color space model is a type of color space commonly used in graphic design and web development. It has three axes, two of which represent Saturation (S\* axis) and Lightness (L\* axis), while the other represents Hue (H\* axis). The hue axis is circular, which enables a full range of colors to be displayed.

</details>

<details>

<summary>HSLuv</summary>

The HSLuv color space model works similarly with [HSL](glossary.md#hsl) but with improved perceptual uniformity and a more comprehensive range of chroma values. The chroma in HSLuv is adaptive and changes depending on the lightness value, providing a more consistent and natural-looking color representation.

</details>

<details>

<summary>LCH</summary>

The LCH color space model works similarly with [HSL](glossary.md#hsl) but with improved perceptual uniformity and a more comprehensive range of chroma values. The chroma in LCH is adaptive and changes depending on the lightness value, providing a more consistent and natural-looking color representation.

</details>

<details>

<summary>OKLAB</summary>

The OKLAB color space is a popular model for digital media that provides consistent results across devices and platforms. It's based on [CIELAB](glossary.md#cielab) and closely matches human vision, making it useful for image processing and color grading.

</details>

<details>

<summary>OKLCH</summary>

The OKLCH color space model is a highly accurate color space that utilizes two Chroma (C\* axis) and Lightness (L\* axis) axes and one Hue rotation (H\* axis), surpassing the accuracy of the [LCH](glossary.md#lch) color space model. It allows for precise color representation and is commonly used in color management applications.

</details>

<details>

<summary>RGB</summary>

Computers and TVs use RGB color space with primary red, green, and blue colors. Other colors are created by changing their intensity. RGB is popular in digital imaging and graphic design.

</details>

## Color vision deficiencies

<details>

<summary>Protanomaly</summary>

Protanomaly is a type of color vision deficiency, often referred to as red-green color blindness. People with protanomaly have a reduced sensitivity to red light

</details>

<details>

<summary>Protanopia</summary>

Protanopia is a type of color blindness that affects the perception of red and green colors. People with protanopia have difficulty distinguishing between red, green, and brown hues

</details>

<details>

<summary>Deuteranomaly</summary>

Deuteranomaly is a type of red-green color blindness in which the green cones in the eye detect too much red light, making it difficult to distinguish between certain shades of red and green.

</details>

<details>

<summary>Deuteranopia</summary>

Deuteranopia is a type of color vision deficiency characterized by the inability to perceive green light. People with deuteranopia are unable to distinguish between green and red colors.

</details>

<details>

<summary>Tritanomaly</summary>

Tritanomaly is a type of color vision deficiency which affects a person's ability to see the color blue. It is caused by an anomaly in the "S" cone cells of the retina. People with tritanomaly have difficulty distinguishing between blue and green hues, and they may also have trouble recognizing purples.

</details>

<details>

<summary>Tritanopia</summary>

Tritanopia is a type of color blindness characterized by the inability to perceive the color blue. It is a rare form of color blindness, and those affected may have difficulty differentiating between shades of blue, yellow, and green.

</details>

<details>

<summary>Achromatomaly</summary>

Achromatomaly is a type of color vision deficiency characterized by a reduced sensitivity to light in the red and green parts of the spectrum. This condition makes it difficult to distinguish between certain colors, particularly red and green.

</details>

<details>

<summary>Achromatopsia</summary>

Achromatopsia, also known as total color blindness, is a rare, non-progressive visual disorder characterized by a complete inability to perceive colors. Individuals with achromatopsia typically experience extreme sensitivity to light and have difficulty seeing in bright environments.

</details>

## Contrast ratio models

<details>

<summary>WCAG 2.1</summary>

The WCAG 2.1 defines contrast ratio as the luminance difference between colors, ensuring text readability. It mandates a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text,

</details>

<details>

<summary>APCA</summary>

The Advanced Perceptual Contrast Algorithm (APCA) calculates contrast ratios based on human visual perception, focusing on text readability by considering font weight and viewing conditions. This method aims to improve accessibility and visual comfort.

</details>
