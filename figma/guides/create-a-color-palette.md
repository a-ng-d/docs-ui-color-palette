---
description: >-
  Learn how to create a color palette and start managing it right away.
  Use generation tools to define source colors, or start from scratch.
icon: palette
---

# Create a color palette

{% hint style="info" %}
As of version 5.3.0, the UI has been reorganized around a sidebar. Palette management and generation tools (AI, image extraction, color wheel, Color Lovers) are now accessible as first-class navigation items from the sidebar.
{% endhint %}

## Create a blank palette

Click the `+` button in the palette management section of the sidebar. You will be taken directly to the Management service, where you can configure your colors.

Each palette creation costs **100 credits**. You can create as many palettes as you need — the previous one-palette-per-page limit no longer applies.

{% hint style="info" %}
Once in the Management service, you can:

* Add colors from your canvas by selecting filled layers and importing them
* Import color combinations from [`Coolors`](https://coolors.co/) and [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter)
{% endhint %}

## Create from source colors

Four tools let you generate source colors before creating your palette. Once you confirm your selection, a new palette is created and you are taken to the Management service.

{% stepper %}
{% step %}
### Generate colors with AI

On `AI`, generate a color combination by entering a prompt or choosing a preset theme (Cyberpunk, Minimalist, Pastel, Corporate, Nature, and more). The AI will propose five colors, each assigned a role: `Primary`, `Text`, `Success`, `Warning`, or `Alert`.

{% hint style="info" %}
Colors are adapted to their role — an `Alert` color will always be reddish. Generated colors are automatically named based on their appearance (e.g., Crimson Red).
{% endhint %}

Confirm your selection to create the palette and be taken to the Management service.
{% endstep %}

{% step %}
### Extract colors from an image

On `Image`, upload a `PNG` image to extract its 5 dominant colors. Ensure that you upload a `PNG`, as a `JPEG` will result in an error.

Confirm your selection to create the palette and be taken to the Management service.
{% endstep %}

{% step %}
### Create a color harmony

On `Wheel`, generate a color combination from a base color using several color wheel theories:

* `Analogous` — 3 colors that are close
* `Complementary` — 2 colors that are opposite
* `Compound` — 3 colors that are opposite
* `Triadic` — 3 colors that are equally separated
* `Tetradic` — 4 colors that are equally separated

Confirm your selection to create the palette and be taken to the Management service.
{% endstep %}

{% step %}
### Browse community palettes

On `Colour Lovers`, browse 1M+ community palettes directly from the sidebar. Each palette is linked to its original source and credits the author.

Confirm your selection to create the palette and be taken to the Management service.
{% endstep %}
{% endstepper %}

## Choose a lightness scale preset

{% hint style="warning" %}
* You can add up to 8 stops in the `Custom` set on the <mark style="color:yellow;">`/basic`</mark> plan.
* Some presets are only available on the <mark style="color:yellow;">`/pro`</mark> plan.
{% endhint %}

A preset contains a list of stops named from an established nomenclature. These presets are frameworks that can help you build a color scaling:

* Google・<mark style="color:yellow;">`/pro`</mark>:
  * `Material Design`, 10 stops, from 50 to 900
  * `Material 3`, 13 stops, from 0 to 100
* Frameworks:
  * `Tailwind`, 11 stops, from 50 to 950・<mark style="color:yellow;">`/pro`</mark>
  * `Ant Design`, 10 stops, from 1 to 10
  * `Bootstrap`, 9 stops, from 100 to 900
  * `Radix`, 12 stops, from 1 to 12・<mark style="color:yellow;">`/pro`</mark>
  * `Untitled UI`, 12 stops, from 25 to 950・<mark style="color:yellow;">`/pro`</mark>
  * `Open Color`, 10 stops, from 0 to 9
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

Or make your own from 2 to 8 (24 in <mark style="color:yellow;">`/pro`</mark>) stops via the `Custom` set, through those scales:

* `1 - 24`, the default option, increasing by 1
* `10 - 240`, increasing by 10
* `100 - 2400`, increasing by 100

{% hint style="warning" %}
Managing more than 15 stops could complicate the color scaling. It also depends on the number of the `Source colors`.
{% endhint %}

## Rename your palette

You can rename your palette in the bottom bar or via the Settings section. The default name when created is "Untitled," but you can customize the name up to 64 characters. If the name is empty, the palette will be named "UI Color Palette."

{% hint style="info" %}
If logged in, upon publishing, the palette will be automatically renamed "{Your last name}'s UI Color Palette" if "Untitled" is preserved or the name is empty.
{% endhint %}
