# Export the palette

{% hint style="danger" %}
Some file formats are only available in the Pro plan.
{% endhint %}

The palette can be exported in several file formats to be transferred to a dev environment or reworked with another tool.

{% hint style="info" %}
* The source colors are always included within the exported files.
* The file models are arranged to keep a correct structure for other tools if `Color themes` are enabled.
{% endhint %}

## Export as global tokens to a JSON file

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

## Export as tokens for Amazon Style Dictionary・Pro

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

## Export as tokens for Tokens Studio・Pro

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

## Export as Custom Properties to CSS

You can export every color shade to a CSS file on your computer. Learn more about CSS4 Custom Properties on the [Mozilla Developer Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using\_CSS\_custom\_properties).

The export file follows this model:

{% code overflow="wrap" %}
```css
:root {
  /* themeName - sourceColorName */
  --themeName-sourceColorName-stopName: rgb(207, 205, 255);
  ...
}
```
{% endcode %}

{% hint style="info" %}
You can switch the [`RGB`](../glossary.md#rgb) color space into `hexadecimal code,` [`LCH`](../glossary.md#lch)`,` or [`P3`](../glossary.md#p3) values.
{% endhint %}

## Export as config for Tailwind・Pro

You can export every color shade and theme to a JSON file on your computer. This file can be used to complete the Tailwind CSS framework config file. Learn more about customizing colors on the [Tailwind Documentation](https://tailwindcss.com/docs/customizing-colors).

The export file follows this model:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  "theme": {
    "colors": {
      "sourceColorName": {
        "themeName": {
          "stopName": "#e9f4f6",
          ...
        },
        ...
      },
      ...
    }
  }
}
```

## Export for Apple apps (SwiftUI and UIKit)・Pro

You can export every color shade to a Swift file on your computer, regarding the framework you use for building UI in your Xcode project. Learn more about Color Structure on the [Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/color).

The export files follow these models:

### SwiftUI

<pre class="language-swift" data-overflow="wrap"><code class="lang-swift">import SwiftUI

<strong>public extension Color {
</strong>  static let Token = Color.TokenColor() 
  struct TokenColor {
    // themeName - sourceColorName
    public let themeNameSourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>

### UIKit

<pre class="language-swift" data-overflow="wrap"><code class="lang-swift">import UIKit

<strong>struct Color {
</strong>  struct ThemeName {
    // sourceColorName
    public let SourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>

## Export for Android apps (Compose and Resources)・Pro

You can export every color shade to Kotlin or an XML file on your computer regarding how you want to develop your Android project. Learn more about [App Resources](https://developer.android.com/guide/topics/resources/providing-resources) and [Jetpack Compose](https://developer.android.com/jetpack/compose) on the Android Developer Documentation.

The export files follow these models:

### Compose

```kotlin
import androidx.compose.ui.graphics.Color

// themeName - sourceColorName
val themeName_sourceColorName_stopName = Color(0XFF1D3A3E)
...
```

### Resources

{% code overflow="wrap" %}
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <!--themeName - sourceColorName-->
  <color name="themeName_sourceColorName_stopName">#2254f5</color>
  ...
</resources>
```
{% endcode %}

## Export the LCH values to CSV・Pro

You can export every color shade to CSV files on your computer.

The export file follows this model (the files are compressed into a zip):

{% code overflow="wrap" %}
```csv
SourceColorName,Lightness,Chroma,Hue
stopName,43,94,297
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
