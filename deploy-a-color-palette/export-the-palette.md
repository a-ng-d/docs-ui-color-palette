# Export the palette

## Export to JSON

{% hint style="success" %}
The JSON file format is ideal for design tokens because it can be handled with ease.
{% endhint %}

You can export every color shade (including the source color) to a JSON file on your local machine, according to this model:

{% code overflow="wrap" %}
```json
{
  "Source color 1": [
    {
      "name": "source",
      "rgb": {
        "r": 34,
        "g": 84,
        "b": 245
      },
      "lch": {
        "l": 43,
        "c": 94,
        "h": 297
      },
      "hex": "#2254f5",
      "type": "color"
    },
    {
      "name": "minStopName",
      "rgb": {
        "r": 12,
        "g": 45,
        "b": 145
      },
      "lch": {
        "l": 24,
        "c": 64,
        "h": 297
      },
      "hex": "#0c2e92",
      "type": "color"
    },
    …
    {
      "name": "maxStopName",
      "rgb": {
        "r": 244,
        "g": 240,
        "b": 255
      },
      "lch": {
        "l": 95,
        "c": 7,
        "h": 301
      },
      "hex": "#f5f1ff",
      "type": "color"
    }
  ],
  …
    "Source color N": [
    {
      "name": "source",
      "rgb": {
        "r": 232,
        "g": 70,
        "b": 90
      },
      "lch": {
        "l": 54,
        "c": 67,
        "h": 21
      },
      "hex": "#e8465a",
      "type": "color"
    },
    {
      "name": "minStopName",
      "rgb": {
        "r": 115,
        "g": 12,
        "b": 33
      },
      "lch": {
        "l": 24,
        "c": 46,
        "h": 21
      },
      "hex": "#740d22",
      "type": "color"
    },
    …
    {
      "name": "maxStopName",
      "rgb": {
        "r": 255,
        "g": 238,
        "b": 237
      },
      "lch": {
        "l": 95,
        "c": 6,
        "h": 22
      },
      "hex": "#ffeeee",
      "type": "color"
    }
  ]
}
```
{% endcode %}

## Export to CSS Custom Properties

You can export every color shade to a CSS file on your local machine, according to this model:

{% code overflow="wrap" %}
```css
:root {
  --source-color-1-min-stop-name: rgb(207, 205, 255);
  …
  --source-color-1-max-stop-name: rgb(0, 16, 150);
  
  …
  
  --source-color-N-min-stop-name: rgb(255, 178, 89);
  …
  --source-color-N-min-stop-name: rgb(95, 0, 0);
}
```
{% endcode %}

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
