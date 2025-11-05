---
description: >-
  Learn how to master a color palette to adjust every parameter to create the
  best color palette that suits your organisation's culture and brand's
  language.
icon: palette
---

# Master a color palette

{% stepper %}
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
## Adjust the colors configuration

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

You can simulate a specific vision disability to gain insight into how people living with those troubles perceive the world. The contrast between the `Light foreground color`/`Dark foreground color` and the color shades/tints are also simulated. In that way, the contrast might be managed for every perception of colors. Here are the vision simulations:

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

{% hint style="info" %}
Use the `Preview` to observe and manage the color scaling in real-time. You can:&#x20;

* Adjust the view's height by grabbing the top edge
* Expand and collapse the view
* Show the contrast score ([`WCAG 2.1`](../glossary.md#wcag-2.1) and [`APCA`](../glossary.md#apca))
{% endhint %}

You can customize the foreground colors to simulate contrast between the color shade/tint and accompanying foreground element. This allows you to compare differences using colors more relevant to your brand guidelines. While pure black `#000` and white `#FFF` are the default colors, you can now tailor them to suit your needs better.

The contrast scores will help you achieve sufficient readability of the information on the foreground. [`APCA`](../glossary.md#apca) is a powerful tool that indicates the minimum typographic contrast needed for effective readability.
{% endstep %}
{% endstepper %}

Click the `Save the UI Color Palette` button to save your palette! You can retrieve it in the `Local` section on the selected document.
