---
description: >-
  Learn how to create a color palette and start managing it right away.
  Start from a blank palette, or use the Colors combinator to get a ready-made
  palette from AI, an image, a color harmony, or Color Hunt.
icon: palette
---

# Create a color palette

{% hint style="info" %}
Creating a palette is a single step: whichever path you choose, you immediately get a complete palette (source colors, lightness scale, and color modes), opened and ready to be refined. There is no separate "generate the source colors, then build the palette" step anymore.
{% endhint %}

## Create a blank palette

Click the `+` button in the `Palettes manager`. A new palette is created right away with default source colors (or with the colors of the filled layers selected on your canvas) and opened, so you can refine it immediately.

Creating a palette is free. On the <mark style="color:yellow;">`/basic`</mark> plan, you can keep **1 palette** per page (Figma, Penpot) or per document (Sketch, Framer); upgrade to <mark style="color:yellow;">`/pro`</mark> for unlimited palettes. See [Understanding free and Pro](../introduction/free-and-pro.md).

{% hint style="info" %}
Once the palette is open, you can:

* Add colors from your canvas by selecting filled layers and importing them
* Import color combinations from [`Coolors`](https://coolors.co/) and [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter)
{% endhint %}

## Create from the Colors combinator

The `Colors combinator` gathers four tools to find a color combination. Each one previews the full palette it will produce; click `Use this palette` to create it and open it directly — the palette is created and opened in one action.

{% stepper %}
{% step %}
### Generate colors with AI

On `AI Colors`, generate a color combination by entering a prompt or choosing a preset theme (Cyberpunk, Minimalist, Pastel, Corporate, Nature, and more). The AI will propose five colors, each assigned a role: `Primary`, `Text`, `Success`, `Warning`, or `Alert`.

{% hint style="info" %}
Colors are adapted to their role — an `Alert` color will always be reddish. Generated colors are automatically named based on their appearance (e.g., Crimson Red).
{% endhint %}
{% endstep %}

{% step %}
### Extract colors from an image

On `Image palette`, upload a `PNG` image to extract its 5 dominant colors. Ensure that you upload a `PNG`, as a `JPEG` will result in an error.
{% endstep %}

{% step %}
### Create a color harmony

On `Color harmony`, generate a color combination from a base color using several color wheel theories:

* `Analogous` — 3 colors that are close
* `Complementary` — 2 colors that are opposite
* `Compound` — 3 colors that are opposite
* `Triadic` — 3 colors that are equally separated
* `Tetradic` — 4 colors that are equally separated
{% endstep %}

{% step %}
### Explore Color Hunt palettes

On `Explorer`, browse the palettes from [`Color Hunt`](https://colorhunt.co/), a community feed with new palettes published every day. Palettes are sorted from the most recent, and you can filter them by one dominant color at a time (yellow, orange, red, green, violet, or blue).

Each palette links to its original page on Color Hunt, and is automatically named from its dominant colors.
{% endstep %}
{% endstepper %}

## Choose a lightness scale preset

{% hint style="warning" %}
* Named presets (Google, Frameworks, Atlassian, Adobe, and more) are only available on the <mark style="color:yellow;">`/pro`</mark> plan, except `Material 3` and `Tailwind`, which are free. The `Custom` sets are available on every plan.
* You can add up to 6 stops in a `Custom` set on the <mark style="color:yellow;">`/basic`</mark> plan, and up to 24 on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

A preset contains a list of stops named from an established nomenclature. These presets are frameworks that can help you build a color scaling:

* Google:
  * `Material Design`, 10 stops, from 50 to 900・<mark style="color:yellow;">`/pro`</mark>
  * `Material 3`, 13 stops, from 0 to 100
* Frameworks:
  * `Tailwind`, 11 stops, from 50 to 950
  * `Ant Design`, 10 stops, from 1 to 10・<mark style="color:yellow;">`/pro`</mark>
  * `Bootstrap`, 9 stops, from 100 to 900・<mark style="color:yellow;">`/pro`</mark>
  * `Radix`, 12 stops, from 1 to 12・<mark style="color:yellow;">`/pro`</mark>
  * `Untitled UI`, 12 stops, from 25 to 950・<mark style="color:yellow;">`/pro`</mark>
  * `Open Color`, 10 stops, from 0 to 9・<mark style="color:yellow;">`/pro`</mark>
* Atlassian・<mark style="color:yellow;">`/pro`</mark>:
  * `ADS Foundations`, 7 stops, from 50 to 500
  * `ADS Foundations Neutral`, 19 stops, from 0 to 900
* Adobe・<mark style="color:yellow;">`/pro`</mark>:
  * `Spectrum`, 13 stops, from 100 to 1300
  * `Spectrum Neutral`, 11 stops, from 25 to 900
* More・<mark style="color:yellow;">`/pro`</mark>:
  * `Carbon`, 10 stops, from 10 to 100 (IBM)
  * `Base`, 8 stops, from 50 to 700 (Uber)
  * `Polaris`, 16 stops, from 1 to 16 (Shopify)
  * `Fluent`, 16 stops, from 10 to 160 (Microsoft)

Or make your own from 2 to 6 stops (24 in <mark style="color:yellow;">`/pro`</mark>) via the `Custom` set, through those naming conventions:

* `1 - 10`, the default option, increasing by 1
* `10 - 100`, increasing by 10
* `100 - 1000`, increasing by 100

## Rename your palette

You can rename your palette in the bottom bar or via the Settings section. The default name when created is "Untitled," but you can customize the name up to 64 characters. If the name is empty, the palette will be named "UI Color Palette."

{% hint style="info" %}
If logged in, upon publishing, the palette will be automatically renamed "{Your last name}'s UI Color Palette" if "Untitled" is preserved or the name is empty.
{% endhint %}
