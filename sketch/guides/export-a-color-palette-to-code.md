---
description: >-
  Learn how to export your color palette to a batch of formats, from agnostic
  data to a specific one suitable for frameworks and libraries.
icon: code
---

# Export a color palette to code

{% stepper %}
{% step %}
## Export as design tokens (JSON)

{% tabs %}
{% tab title="Native tokens" %}
You can export every color shade/tint (including the source color) to a **JSON** file on your computer. This file can be imported to **Tokens Studio** or **Penpot**. The purpose is to add more semantics to the shades/tints. Learn more about [Tokens Studio](https://tokens.studio/studio) and [Penpot](https://penpot.app/collaboration/design-tokens).

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "$themes": [],
  "$metadata": {
    "activeThemes": [],
    "tokenSetOrder": [],
    "activeSets": []
  },
  // "Color Mode Name/Source Color Name" if there is any color mode
  "Palette Name/Source Color Name": {
    "Stop Name": {
      "$type": "color",
      "$value": "#f4f1b1",
      "$description": "Shade/Tint color with 96.0% of lightness"
    },
    ...
  },
  ...
}
```
{% endcode %}
{% endtab %}

{% tab title="DTCG tokens" %}
**DTCG** is a W3C group working on standardizing and stabilizing the token format across platforms, tools, technologies, etc. The format is nowadays the most agnostic one and will be in the future an indispensable one; however, it is an ongoing project.

{% hint style="info" %}
You can switch the [`RGB`](../glossary.md#rgb) values into [`OKLCH`](../glossary.md#oklch) values.
{% endhint %}

The export file follows this model (that can be used for [Terrazzo](https://terrazzo.app/) or [Style Dictionary v4](https://styledictionary.com/)):

```json
{
  "Source Color Name": {
    "Stop Name": {
      "$type": "color",
      "$value": {
        "colorSpace": "srgb",
        "components": [
          0.957,
          0.945,
          0.694
        ],
        "hex": "#f4f1b1"
      },
      "$description": "Shade/Tint color with 96.0% of lightness",
      // If there is any color mode
      "$extentions": {
        "mode": {
          "Color Mode Name": {
            "$value": {
              "colorSpace": "srgb",
              "components": [
                0.91,
                0.886,
                0.243
              ],
              "hex": "#e8e23e"
            },
            "$description": "Shade/Tint color with 88.0% of lightness"
          },
          ...
        },
      },
    },
    ...
  },
  ...
}
```
{% endtab %}

{% tab title="Style Dictionary v3" %}
You can export every color shade/tint (including the source color) to a **JSON** file on your computer. This file is compliant with a basic configuration of the **Style Dictionary v3** tool. It is a legacy format because [Style Dictionary v4 has introduced the DTCG format](https://styledictionary.com/info/tokens/), so you can refer to the **DTCG** tokens in order to use them on **Style Dictionary v4**.

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "color": {
    "Source Color Name": {
      "Color Mode Name": {
        "Stop Name": {
          "value": "#c4bbff",
          "comment": "Shade/Tint color with 80.2% of lightness",
          "type": "color"
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

{% tab title="Universal" %}
{% hint style="success" %}
The JSON file format is ideal for design tokens because it can be easily handled.
{% endhint %}

You can export every color shade/tint (including the source color) to a **JSON** file on your computer. This file includes every color space value to enable a large gamut of handling.

The export file follows this model:

{% code overflow="wrap" %}
```json
{
  "Color Mode Name": {
    "Source Color Name": {
      "Stop Name": {
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
        "description": "Shade/Tint color with 80.2% of lightness",
        "type": "color shade/tint"
      },
      ...
      "type": "color"
    },
    ...
    "type": "color mode"
  },
  ...
  "type": "color palette"
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## Export as stylesheet (CSS, SCSS, LESS)

{% tabs %}
{% tab title="CSS Custom Properties" %}
You can export every color shade/tint to a **CSS** file on your computer. The modes can be applied via the `:root` selector. Learn more about CSS4 Custom Properties on the [Mozilla documentation.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)

{% hint style="info" %}
You can switch the [`RGB`](../glossary.md#rgb) values into `HEX`, [`HSL`](../glossary.md#hsl), [`LCH`](../glossary.md#lch), or [`P3`](../glossary.md#p3) values.
{% endhint %}

The export file follows this model:

{% code overflow="wrap" %}
```css
/* Color Mode Name */
:root[data-theme="color-mode-name"] {
  /* Source Color Name */
  --source-color-name-stop-name: rgb(207, 205, 255);
  ...
  --source-color-name-source: rgb(255, 247, 0);
}
...
```
{% endcode %}
{% endtab %}

{% tab title="SCSS・Pro" %}
{% hint style="danger" %}
Exporting SCSS variables is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can export every color shade/tint to a **SCSS** file on your computer. The color modes can be applied via the `:root` or a specific class selector. Learn more about **Sass** variables on the [official documentation](https://sass-lang.com/documentation/variables/).

{% hint style="info" %}
You can switch the [`RGB`](../glossary.md#rgb) values into `HEX`, [`HSL`](../glossary.md#hsl), [`LCH`](../glossary.md#lch), or [`OKLCH`](../glossary.md#oklch) values.
{% endhint %}

The export file follows this model:

{% code overflow="wrap" %}
```scss
// Color Mode Name
@mixin color-mode-name {
  // Source Color Name
  --source-color-name-stop-name: rgb(255, 250, 17);
  ...
  --source-color-name-source: rgb(255, 247, 0);
}
...

// Source Color Name
$source-color-name-stop-name: var(--source-color-name-stop-name);
...
$source-color-name-source: var(--source-color-name-source);


:root {
  &[data-theme="color-mode-name"] {
    @include color-mode-name;
  }
  ...
}

.color-mode-name {
  @include color-mode-name;
}
```
{% endcode %}
{% endtab %}

{% tab title="Less・Pro" %}
{% hint style="danger" %}
Exporting Less variables is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can export every color shade/tint to a **Less** file on your computer. The color modes can be applied via the `:root` or a specific class selector. Learn more about **Less** variables on the [official documentation](https://lesscss.org/features/#variables-feature).

{% hint style="info" %}
You can switch the [`RGB`](../glossary.md#rgb) values into `HEX`, [`HSL`](../glossary.md#hsl), [`LCH`](../glossary.md#lch), or [`OKLCH`](../glossary.md#oklch) values.
{% endhint %}

The export file follows this model:

{% code overflow="wrap" %}
```less
// Color Mode Name
.color-mode-name() {
  // Source Color Name
  @source-color-name-stop-name: rgb(255, 250, 17);
  ...
  @source-color-name-source: rgb(255, 247, 0);

  // ...
  ...
}
...

:root {
  &[data-theme="color-mode-name"] {
    .color-mode-name();
  }
  ...
}

.color-mode-name {
  .color-mode-name();
}
...
```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Export for Tailwind (JS, CSS)

{% hint style="danger" %}
Exporting for Tailwind v3 and v4 is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

{% tabs %}
{% tab title="Tailwind v3" %}
You can export every color shade/tint to a config file (**JS**) for **Tailwind v3** on your computer. Learn more about setting a theme with [Tailwind 3](https://v3.tailwindcss.com/docs/theme).&#x20;

The export file follows this model:

<pre class="language-javascript" data-overflow="wrap"><code class="lang-javascript"><strong>/** @type {import('tailwindcss').Config} */
</strong>
<strong>module.exports = {
</strong>  "theme": {
    "colors": {
      "sourceColorName": {
        "colorModeName": {
          "stopName": "#fffa11",
          ...
          "source": "#fff700"
        },
        ...
      },
      ...
    }
  }
}
</code></pre>
{% endtab %}

{% tab title="Tailwind v4" %}
You can export every color shade/tint to a config file (**CSS**) for **Tailwind v4** on your computer. Learn more about setting a theme with [Tailwind v4](https://tailwindcss.com/docs/theme).&#x20;

The export file follows this model:

{% code overflow="wrap" %}
```css
@import "tailwindcss";

@theme {
  --color-*: initial;

  /* Color Mode Name - Source Color Name */
  --color-color-mode-name-source-color-name-source: #fff700;
  ...
  --color-color-mode-name-source-color-name-stop-name: #fffa11;

  /* ... */
  ...
}

```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Export for Apple apps (Swift)

{% hint style="danger" %}
Exporting for Apple apps is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can export every color shade/tint to a Swift file on your computer, depending on the framework you use for building UI in your Xcode project. Learn more about Color Structure on the [Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/color).

The export file follows this model:

{% tabs %}
{% tab title="SwiftUI" %}
<pre class="language-swift"><code class="lang-swift">import SwiftUI

<strong>public extension Color {
</strong>  static let Token = Color.TokenColor() 
  struct TokenColor {
    // modeName - sourceColorName
    public let ColorModeNameSourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>
{% endtab %}

{% tab title="UIKit" %}
<pre class="language-swift" data-overflow="wrap"><code class="lang-swift">import UIKit

<strong>struct Color {
</strong>  struct ColorModeName {
    // sourceColorName
    public let SourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Export for Android apps (KT and XML)

{% hint style="danger" %}
Exporting for Android apps is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can export every color shade/tint to Kotlin or an XML file on your computer, depending on how you want to develop your Android project. Learn more about [App Resources](https://developer.android.com/guide/topics/resources/providing-resources) and [Jetpack Compose](https://developer.android.com/jetpack/compose) on the Android Developer Documentation.

The export file follows this model:

{% tabs %}
{% tab title="Compose" %}
```kotlin
import androidx.compose.ui.graphics.Color

// colorModeName - sourceColorName
val colorModeName_sourceColorName_stopName = Color(0XFF1D3A3E)
...
```
{% endtab %}

{% tab title="Resources" %}
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <!--modeName - sourceColorName-->
  <color name="colorModeName_sourceColorName_stopName">#2254f5</color>
  ...
</resources>
```
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## <i class="fa-lock">:lock:</i> Export the LCH as spreadsheets (CSV)

{% hint style="danger" %}
Exporting as spreadsheets is only available in the <mark style="color:yellow;">`Pro`</mark> plan.
{% endhint %}

You can export every color shade/tint to CSV files on your computer.

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
1,95,7,30
```
{% endcode %}
{% endstep %}
{% endstepper %}
