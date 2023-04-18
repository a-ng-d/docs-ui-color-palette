# Export the palette

## Export to JSON

{% hint style="success" %}
The JSON file format is ideal for design tokens because it can be handled with ease.
{% endhint %}

You can export every color shade to a JSON file on your local machine, according to this model:

{% code overflow="wrap" %}
```json
{
  "Source color 1": {
    "minStopName": {
      "rgb": {
        "r": 207,
        "g": 205,
        "b": 255
      },
      "lch": {
        "l": 84,
        "c": 26,
        "h": 294
      },
      "hex": "#d0cdff",
      "type": "color"
    },
    …
    "maxStopName": {
      "rgb": {
        "r": 0,
        "g": 16,
        "b": 150
      },
      "lch": {
        "l": 18,
        "c": 84,
        "h": 304
      },
      "hex": "#001097"
      "type": "color"
    },
  },
  …
  "Source color N": {
    "minStopName": {
      "rgb": {
        "r": 255,
        "g": 178,
        "b": 89
      },
      "lch": {
        "l": 78,
        "c": 58,
        "h": 70
      },
      "hex": "#ffb359",
      "type": "color"
    },
    …
    "maxStopName": {
      "rgb": {
        "r": 95,
        "g": 0,
        "b": 0
      },
      "lch": {
        "l": 17,
        "c": 47,
        "h": 35
      },
      "hex": "#600000",
      "type": "color"
    }
  }
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
sourceColorName,Lightness,Chroma,Hue
900,21,42,22
800,30,55,22
700,38,63,22
600,46,67,22
500,54,67,22
400,63,63,22
300,70,50,21
200,77,35,22
100,86,20,22
50,93,10,23
```
{% endcode %}
