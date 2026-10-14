---
description: >-
  Learn how to preview your color palette on your own designs by replacing the
  colors of the selected layers with the closest ones from the palette.
icon: wand-magic-sparkles
---

# Simulate a color palette on a selection

{% hint style="danger" %}
Simulating a color palette on a selection is only available on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

{% stepper %}
{% step %}
## <i class="fa-lock">:lock:</i> Simulate the palette on a selection

Select one or more layers on the canvas, open the palette, then click the `Simulate on selection` button. Every color of the selection is replaced, in place, by the closest color of the palette, so you can see how the palette behaves on your own design before committing to it.

When the plugin window is too narrow to display the button, the action is the first entry of the `…` menu.

{% hint style="warning" %}
The simulation edits your layers directly, nothing is duplicated. Use the undo shortcut to revert it — the changes are undone layer by layer — or run it on a duplicate of your design if you want to keep the original.
{% endhint %}

If nothing is selected, a warning invites you to select at least one layer.
{% endstep %}

{% step %}
## How the closest color is picked

For each color, the plugin first looks for the palette color whose hue is the closest, then picks, within it, the shade/tint whose lightness is the closest.

Colors without a real hue — white, grays and black — are matched with the most neutral color of the palette, so a white background does not turn pink.

If the palette has `Color modes`, the first one is used as the reference.
{% endstep %}

{% step %}
## What is replaced on Framer

* the solid background, the gradient background and the border of every frame;
* the colors of the vectors (SVG), in fills, strokes and gradient stops;
* the color of the texts.

Colors bound to a color style are replaced by plain colors, which detaches them from the style. Images are left untouched.

Hidden and locked layers, and everything they contain, are left untouched.

{% hint style="info" %}
A text color belongs to its text style, which is shared across the project. To avoid restyling layers outside your selection, the plugin creates a copy of the text style with the simulated color, and applies it to the layer. Only the color changes: font, size, spacing and the other parameters are kept.

These copies are added to the `UI Color Palette Simulation` folder of your project's text styles, and can be deleted once you are done. Texts are only simulated if your project allows the plugin to create text styles.
{% endhint %}

{% hint style="warning" %}
The Framer plugin API does not expose effects such as shadows or blurs, nor the content of component instances: their colors are not replaced.
{% endhint %}
{% endstep %}
{% endstepper %}
