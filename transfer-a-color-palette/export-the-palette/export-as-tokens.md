# Export as tokens

{% tabs %}
{% tab title="Global" %}
{% hint style="success" %}
The JSON file format is ideal for design tokens because it can be easily handled.
{% endhint %}

You can export every color shade (including the source color) to a JSON file on your computer. This file includes every color space value to enable a large gamut of handling.

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "themeName": {
    "sourceColorName": {
      "stopName": {
        "rgb": {
          "r": 196,
          "g": 187,
          "b": 255
        },
        "gl": {
          "r": 0.769,
          "g": 0.733,
          "b": 1
        },
        "lch": {
          "l": 78,
          "c": 36,
          "h": 297
        },
        "oklch": {
          "l": 0.823,
          "c": 0.095,
          "h": 290
        },
        "lab": {
          "l": 78,
          "a": 17,
          "b": -33
        },
        "oklab": {
          "l": 0.823,
          "a": 0.033,
          "b": -0.089
        },
        "hsl": {
          "h": 247,
          "s": 100,
          "l": 86
        },
        "hsluv": {
          "h": 270,
          "s": 99,
          "l": 78
        },
        "hex": "#ffeeee",
        "description": "Shade color with 80.2% of lightness",
        "type": "color shade"
      },
      ...
      "type": "color"
    },
    ...
    "type": "color theme"
  },
  ...
  "type": "color palette"
}
```
{% endcode %}
{% endtab %}

{% tab title="Amazon Style Dictionary・Pro" %}
You can export every color shade (including the source color) to a JSON file on your computer. This file is compliant with a basic configuration of the Amazon Style Dictionary tool. The purpose is to generate stylesheets from token files. Learn more about [Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/README).

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "color": {
    "sourceColorName": {
      "themeName": {
        "stopName": {
          "value": "#c4bbff",
          "comment": "Shade color with 80.2% of lightness"
        },
        ...
      },
      ...
    },
    ...
  }
}
```
{% endcode %}
{% endtab %}

{% tab title="Tokens Studio・Pro" %}
You can export every color shade (including the source color) to a JSON file on your computer. This file can be imported to Tokens Studio, a Figma plugin to manage design tokens. The purpose is to add more semantics to the shades. Learn more about [Tokens Studio](https://tokens.studio/).

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "paletteName - themeName": {
    "sourceColorName": {
      "stopName": {
        "value": "#c4bbff",
        "description": "Shade color with 80.2% of lightness",
        "type": "color"
      },
      ...
    },
    ...
  },
  ...
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
