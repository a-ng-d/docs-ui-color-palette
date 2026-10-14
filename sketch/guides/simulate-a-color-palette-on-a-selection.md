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
The simulation edits your layers directly, nothing is duplicated. Use the undo shortcut to revert it, or run it on a duplicate of your design if you want to keep the original.
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
## What is replaced on Sketch

* the solid fills and borders of every layer;
* the colors of the shadows and inner shadows;
* the color of the text layers.

Gradients and patterns are left untouched.

Hidden and locked layers, and everything they contain, are left untouched.

{% hint style="info" %}
A layer that uses a shared style stays linked to it: its colors are overridden, so Sketch shows the layer as edited compared to its shared style.

The color of a text that mixes several colors, the overrides of symbol instances and the background color of artboards are not replaced.
{% endhint %}
{% endstep %}
{% endstepper %}
