---
description: >-
  Learn how to create a color palette and save it successfully to your current
  Penpot page. Also, discover how to adjust several parameters to enhance your
  scaling proficiency.
icon: palette
---

# Create a color palette

{% stepper %}
{% step %}
## Select and/or import the source colors

{% embed url="https://drive.google.com/file/d/1ur6wYlTk7WX0gjb9MbrPcoml-gLvQrKp/view?usp=sharing" %}

{% hint style="warning" %}
You can select and import up to 5 colors on the <mark style="color:yellow;">`/basic`</mark> plan.
{% endhint %}

### Select colors from the document canvas

Select one or more filled layers. You might rename these layers because the palette will use the layer name as a color name.

If no color is selected or imported, a default color is set and can be named and edited.

{% hint style="info" %}
Only frames, shapes are allowed to be turned into source colors if they have at least a solid color as `Fill`.
{% endhint %}

### Import colors from external palette tools

The color combinations can be edited using tailored tools such as [`Coolors`](https://coolors.co/), [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter), and [`Colour Lovers`](https://www.colourlovers.com/).&#x20;

For [`Coolors`](https://coolors.co/) and [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter), you can copy the URL and paste it into the appropriate field. The URL will be parsed, and each color will be added to the source colors. The imported color will take its hex code as its name.

For [`Colour Lovers`](https://www.colourlovers.com/), you can browse the palettes provided by the community directly from the controller. Each palette is linked to the original one, and the author is mentioned. In case of adding, you will be redirected to the `Overview` context.

{% hint style="info" %}
One palette per tool is permitted.
{% endhint %}
{% endstep %}

{% step %}
## Choose a lightness scale preset

{% embed url="https://drive.google.com/file/d/12f7kqCiDjvqGRbm3OD4NYAK7lxbvsDzp/view?usp=sharing" %}

{% hint style="warning" %}
Some presets are only available in the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

A preset contains a list of stops named from an established nomenclature. These presets are frameworks that can help you build a color scaling:

* `Material Design`, 10 stops, from 50 to 900 (Google)
* `Material 3`, 13 stops, from 0 to 100 (Google)・<mark style="color:yellow;">`/pro`</mark>
* `Tailwind`, 11 stops, from 50 to 950 (Google)・<mark style="color:yellow;">`/pro`</mark>
* `Ant Design`, 10 stops, from 1 to 10
* `ADS Foundations` (Atlassian)・<mark style="color:yellow;">`/pro`</mark>:
  * 7 stops, from 50 to 500
  * 19 stops (for neutral colors), from 0 to 900
* `Carbon`, 10 stops, from 10 to 100 (IBM)・<mark style="color:yellow;">`/pro`</mark>
* `Base`, 8 stops, from 50 to 700 (Uber)・<mark style="color:yellow;">`/pro`</mark>
* `Polaris`, 16 stops, from 1 to 16 (Shopify)・<mark style="color:yellow;">`/pro`</mark>

Or make your own from 2 to 8 (24 in <mark style="color:yellow;">`/pro`</mark>) stops via the `Custom` preset. The stop's naming convention can be edited to meet your needs, only available with this preset when creating a palette:

* `1 - 24`, the default option, increasing by 1
* `10 - 240`, increasing by 10
* `100 - 2400`, increasing by 100

{% hint style="warning" %}
Managing more than 15 stops could complicate the color scaling. It also depends on the number of the `Source colors`.
{% endhint %}
{% endstep %}

{% step %}
## Adjust the lightness scale

{% hint style="info" %}
Use the `Preview` to observe and manage the color scaling in real-time. You can:&#x20;

* Adjust the view's height by grabbing the top edge
* Expand and collapse the view
* Show the contrast score ([`WCAG 2.1`](../glossary.md#wcag-2.1) and [`APCA`](../glossary.md#apca))
{% endhint %}

Update a stop by sliding its knob on the range. You can slide every knob by using these shortcuts:

* <kbd>Cmd ⌘</kbd> (macOS) or <kbd>Ctrl ⌃</kbd> (Windows/Linux) while sliding any knob to move each of them in the desired direction
* <kbd>Shift ⇪</kbd> while sliding the first or the last stop to distribute each of them equally on the range
* <i class="fa-arrow-right-arrow-left">:arrow-right-arrow-left:</i> button to reverse the stops
* <i class="fa-arrow-rotate-left">:arrow-rotate-left:</i> button to reset to the default scale

In addition, you can adjust the `Chroma` of every scaled color from 0% (unsaturated) to 200% (oversaturated).

{% hint style="info" %}
You can tweak a stop with more accuracy:

* Select the stop and press the arrow keys. The default nudge amount is 1%, decreased to 0.1% if the <kbd>Cmd ⌘</kbd> (macOS) or <kbd>Ctrl ⌃</kbd> (Windows/Linux)
* Double-click the stop and change the value
{% endhint %}

### Use the contrast mode

This `Contrast mode` specifically adjusts the lightness scale more precisely. Instead of adjusting just the lightness, you adjust the contrast ratio score of every color source's shade or tint. The adjustment works like the lightness scale; however, it recalculates the other stops to prevent any disharmonious scaling.

{% hint style="info" %}
The `Contrast mode` works very well with the [`HSLuv`](../glossary.md#hsluv) color space.
{% endhint %}

### <i class="fa-lock">:lock:</i> Adjust the chroma

{% hint style="danger" %}
Setting the `Chroma` is only available on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

You can adjust the `Chroma` of every scaled color from 0% (unsaturated) to 200% (oversaturated).

{% hint style="info" %}
You can tweak a stop with more accuracy:

* Select the stop and press the arrow keys. The default nudge amount is 1%, increased to 10% if the <kbd>Shift ⇧</kbd> is pressed
* Double-click the stop and change the value
{% endhint %}

### Distribute the stops

The `Distribution easing` drives how the stops are distributed in the range. `Linear` is the default option and allows you to bring an equivalent gap between the stops, but you can select:

* `Ease in` for a quick acceleration at the end
* `Ease out` for a quick acceleration at the start
* `Ease in and out` for quick acceleration at the start and the end

The easings are varied in three ways:

* `Sine`
* `Regular`
* `Cubic`

{% hint style="info" %}
You can apply the distribution directly on the current scale by clicking the <i class="fa-arrow-rotate-right">:arrow-rotate-right:</i> button.
{% endhint %}
{% endstep %}

{% step %}
## Rename your palette

You can rename your palette in the bottom bar or via the Settings section. The default name when created is "Untitled," but you can customize the name up to 64 characters. If the name is empty, the palette will be named "UI Color Palette."

{% hint style="info" %}
If logged in, upon publishing, the palette will be automatically renamed "{Your last name}'s UI Color Palette" if "Untitled" is preserved or the name is empty.
{% endhint %}
{% endstep %}

{% step %}
## Adjust the colors configuration

{% embed url="https://drive.google.com/file/d/1oQ1m3tIgGshSXLdLSzG3_3s4b213-Gqv/view?usp=sharing" %}

{% hint style="info" %}
Use the `Preview` to observe and manage the color scaling in real-time. You can:&#x20;

* Adjust the view's height by grabbing the top edge
* Expand and collapse the view
* Show the contrast score ([`WCAG 2.1`](../glossary.md#wcag-2.1) and [`APCA`](../glossary.md#apca))
{% endhint %}

### Select a color space

{% hint style="info" %}
The HSL color space is not recommended for good lightness and contrast consistency. This color space allows you to include the source color within the shades/tints.
{% endhint %}

You can change the global color space of your whole palette, which will be affected. Fortunately, you can browse the available color spaces without impacting the configuration (scale, source colors). Here are the color spaces:

* [`LCH`](../glossary.md#lch) (default color space)
* [`OKLCH`](../glossary.md#oklch)
* [`CIELAB`](../glossary.md#cielab)
* [`OKLAB`](../glossary.md#oklab)
* [`HSL`](../glossary.md#hsl)
* [`HSLuv`](../glossary.md#hsluv)

### <i class="fa-lock">:lock:</i> Select a vision simulation

{% hint style="danger" %}
The vision impairments are only available on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

You can simulate a specific vision disability to gain insight into how people living with those troubles perceive the world. The contrast between the `Text light color`/`Text dark color` and the color shades/tints are also simulated. In that way, the contrast might be managed for every perception of colors. Here are the vision simulations:

* [`Protanomal`](../glossary.md#protanomaly)
* [`Protanopia`](../glossary.md#protanopia)
* [`Deuteranomaly`](../glossary.md#deuteranomaly)
* [`Deuteranopia`](../glossary.md#deuteranopia)
* [`Tritanomaly`](../glossary.md#tritanomaly)
* [`Tritanopia`](../glossary.md#tritanopia)
* [`Achromatomaly`](../glossary.md#achromatomaly)
* [`Achromatopsia`](../glossary.md#achromatopsia)

### Select a velocity

You can select how the chroma is calculated through the color scaling. Chroma defines the saturation of color within a specific color gamut ([`P3`](../glossary.md#p3), [`sRGB`](../glossary.md#srgb), [`D65`](../glossary.md#d65)). The ultimate purpose is to simulate a consistent and smooth chroma variation to avoid shades/tints from overshifting in lightness.

Here are the velocities:

* `Linear`: lighter shades/tints appear more saturated
* `Sinusoidal`: shades/tints appear less saturated at both ends
* `Sinusoidal and hyperbolic`: shades/tints maintain consistent saturation

### <i class="fa-lock">:lock:</i> Lock the source colors

{% hint style="danger" %}
Locking the source colors is only available on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

The color scaling can include every source color instead of the closest shade/tint to this one. It will preserve the brand language despite a weaker contrast consistency.
{% endstep %}

{% step %}
## Adjust the contrast configuration

{% embed url="https://drive.google.com/file/d/1oQ1m3tIgGshSXLdLSzG3_3s4b213-Gqv/view?usp=sharing" %}

{% hint style="info" %}
Use the `Preview` to observe and manage the color scaling in real-time. You can:&#x20;

* Adjust the view's height by grabbing the top edge
* Expand and collapse the view
* Show the contrast score ([`WCAG 2.1`](../glossary.md#wcag-2.1) and [`APCA`](../glossary.md#apca))
{% endhint %}

You can customize the text colors to simulate contrast between the color shade/tint and accompanying text. This allows you to compare differences using colors more relevant to your brand guidelines. While pure black `#000` and white `#FFF` are the default colors, you can now tailor them to suit your needs better.

The contrast scores will help you achieve sufficient readability of the information on the foreground. [`APCA`](../glossary.md#apca) is a powerful tool that indicates the minimum typographic contrast needed for effective readability.
{% endstep %}
{% endstepper %}

Click the `Save the UI Color Palette` button to save your palette! You can retrieve it in the `Local` section on the current page.
