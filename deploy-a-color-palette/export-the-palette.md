# Export the palette

## Export to JSON

{% hint style="success" %}
The JSON file format is ideal for design tokens because it can be handled with ease.
{% endhint %}

You can export every color shade (including the source color) to a JSON file on your local machine, according to this model:

{% code overflow="wrap" %}
```json
{
  "Source color 1": {
    "maxStopName": {
      "rgb": {
        "r": 255,
        "g": 238,
        "b": 237
      },
      "gl": {
        "r": 1,
        "g": 0.934,
        "b": 0.932
      },
      "lch": {
        "l": 95,
        "c": 6,
        "h": 22
      },
      "oklch": {
        "l": 0.963,
        "c": 0.018,
        "h": 19
      },
      "lab": {
        "l": 95,
        "a": 5,
        "b": 2
      },
      "oklab": {
        "l": 0.963,
        "a": 0.017,
        "b": 0.006
      },
      "hsl": {
        "h": 1,
        "s": 100,
        "l": 96
      },
      "hex": "#ffeeee",
      "type": "color"
    },
    […]
    "minStopName": {
      "rgb": {
        "r": 115,
        "g": 12,
        "b": 33
      },
      "gl": {
        "r": 0.455,
        "g": 0.049,
        "b": 0.132
      },
      "lch": {
        "l": 24,
        "c": 46,
        "h": 21
      },
      "oklch": {
        "l": 0.362,
        "c": 0.134,
        "h": 17
      },
      "lab": {
        "l": 24,
        "a": 43,
        "b": 17
      },
      "oklab": {
        "l": 0.362,
        "a": 0.128,
        "b": 0.041
      },
      "hsl": {
        "h": 347,
        "s": 80,
        "l": 25
      },
      "hex": "#740d22",
      "type": "color"
    },
    "source": {
      "rgb": {
        "r": 232,
        "g": 70,
        "b": 90
      },
      "gl": {
        "r": 0.91,
        "g": 0.275,
        "b": 0.353
      },
      "lch": {
        "l": 54,
        "c": 67,
        "h": 21
      },
      "oklch": {
        "l": 0.631,
        "c": 0.197,
        "h": 18
      },
      "lab": {
        "l": 54,
        "a": 63,
        "b": 25
      },
      "oklab": {
        "l": 0.631,
        "a": 0.188,
        "b": 0.061
      },
      "hsl": {
        "h": 352,
        "s": 77,
        "l": 59
      },
      "hex": "#e8465a",
      "type": "color"
    },
  },
  […]
}
```
{% endcode %}

## Export to CSS Custom Properties

You can export every color shade to a CSS file on your local machine, according to this model:

<pre class="language-css" data-overflow="wrap"><code class="lang-css">:root {
  /* Source color 1 */
<strong>  --source-color-1-source: rgb(207, 205, 255);
</strong>  --source-color-1-min-stop-name: rgb(115, 12, 33);
  […]
  --source-color-1-max-stop-name: rgb(255, 238, 237);
  […]
  /* Source color N */
  --source-color-N-source: rgb(34, 84, 245);
  --source-color-N-min-stop-name: rgb(12, 45, 145);
  […]
  --source-color-N-min-stop-name: rgb(244, 240, 255);
}
</code></pre>

## Export the LCH values to CSV

You can export every color shade to CSV files on your local machine, according to this model (the files are compressed into a zip):

{% code overflow="wrap" %}
```csv
Source color,Lightness,Chroma,Hue
source,43,94,297
10,24,64,297
9,32,80,297
8,40,90,297
7,47,92,297
6,54,79,295
5,61,65,295
4,70,51,296
3,78,36,297
2,87,22,299
1,95,7,301
```
{% endcode %}
