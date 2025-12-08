---
description: >-
  Learn how to create a color palette and save it successfully to your current
  page. Also, discover how to adjust several parameters to enhance your scaling
  proficiency.
icon: palette
---

# Create a color palette

{% stepper %}
{% step %}
## Select and/or import the source colors

{% hint style="warning" %}
You can select and import up to 5 colors on the <mark style="color:yellow;">`/basic`</mark> plan.
{% endhint %}

{% hint style="info" %}
The imported, created, or generated color will adopt a name based on its appearance. So, a redish could be named Crimson Red
{% endhint %}

### Select colors from the document canvas

Select one or more filled layers. You might rename these layers because the palette will use the layer name as a color name.

If no color is selected or imported, a default color is set and can be named and edited.

{% hint style="info" %}
Only frames, shapes are allowed to be turned into source colors if they have at least a solid color as `Fill`.
{% endhint %}

### Import colors from external palette tools

{% hint style="info" %}
One palette per tool is permitted
{% endhint %}

The color combinations can be edited using tailored tools such as [`Coolors`](https://coolors.co/), [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter), and [`Colour Lovers`](https://www.colourlovers.com/).&#x20;

For [`Coolors`](https://coolors.co/) and [`Realtime Colors`](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff\&fonts=Inter-Inter), you can copy the URL and paste it into the appropriate field. The URL will be parsed, and each color will be added to the source colors.

For [`Colour Lovers`](https://www.colourlovers.com/), you can browse the palettes provided by the community directly from the controller. Each palette is linked to the original one, and the author is mentioned. In case of adding, you will be redirected to the `Overview` context.

### Generate colors with AI

On `AI`, if you’re looking for a color combination, you can generate it by sending a prompt to the AI. There are several prompt templates to help you get started. Once you request a color combination, the AI will propose five colors, each flagged with a `Primary`, `Text`, `Success`, `Warning`, or `Alert` role.

The colors are adapted to the role they refer to, so an `Alert` color would always be redish. Then, you can add these colors to the sources, and you will be redirected to the `Overview` context.

### Extract colors from an image

On `Image`, when uploading a `PNG` image, 5 dominant colors are extracted from it. Ensure that you upload a `PNG`, as a `JPEG` will result in an error.

Then, you can add these colors to the sources, and you will be redirected to the `Overview` context.

### Create a color harmony

On `Wheel`, you can obtain from a base color a combination of colors using several color wheel theories:

* `Analogous`, 3 colors that are close
* `Complementary`, 2 colors that are opposite
* `Compound`, 3 colors that  are opposite
* `Triadic`, 3 colors that are equally separated
* `Tetradic`, 4 colors that are equally separated

Then, you can add these colors to the sources, and you will be redirected to the `Overview` context.
{% endstep %}

{% step %}
## Choose a lightness scale preset

{% hint style="warning" %}
You can add up to 8 stops in the `Custom` set on the <mark style="color:yellow;">`/basic`</mark> plan.
{% endhint %}

A preset contains a list of stops named from an established nomenclature. These presets are frameworks that can help you build a color scaling:

* Google:
  * `Material Design`, 10 stops, from 50 to 900
  * `Material 3`, 13 stops, from 0 to 100
* Frameworks:
  * `Tailwind`, 11 stops, from 50 to 950
  * `Ant Design`, 10 stops, from 1 to 10
  * `Bootstrap`, 9 stops, from 100 to 900
  * `Radix`, 12 stops, from 1 to 12
  * `Untitled UI`, 12 stops, from 25 to 950
  * `Open Color`, 10 stops, from 0 to 9
* Atlassian:
  * `ADS Foundations`, 7 stops, from 50 to 500
  * `ADS Foundations Neutral`, 19 stops, from 0 to 900
* Adobe:
  * `Spectrum`, 13 stops, from 100 to 1300
  * `Spectrum Neutral`, 11 stops, from 25 to 900
* More:
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
{% endstep %}

{% step %}
## Rename your palette

You can rename your palette in the bottom bar or via the Settings section. The default name when created is "Untitled," but you can customize the name up to 64 characters. If the name is empty, the palette will be named "UI Color Palette."

{% hint style="info" %}
If logged in, upon publishing, the palette will be automatically renamed "{Your last name}'s UI Color Palette" if "Untitled" is preserved or the name is empty.
{% endhint %}
{% endstep %}
{% endstepper %}

Click the `Create the UI Color Palette` button to save your palette and create a document in your current page! You can retrieve it in the `Local` section.
