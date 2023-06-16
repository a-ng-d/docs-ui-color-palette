# Create the color palette

## Change the layout to display the properties of the color shades

You can choose to display the properties of every color shade. These properties are:

* The color shade name (according to the chosen color system)
* The `hexadecimal code`
* The `LCH` values
* The `WCAG 2.1` contrast score
* The `APCA` contrast score

## Create the palette in one single click

{% embed url="https://drive.google.com/file/d/1u0Z1UE2VkWqQfbRNBohfh2xR0i-DPfxE/view?usp=sharing" %}

The palette is instantly created by clicking on `Create color palette`, according to the `Lightness scale` and the `Palette name`.

{% hint style="info" %}
The palette architecture on the canvas is:

* `paletteName`・`presetName`・`paletteView`
  * \_colors﹒do not edit any layer
    * \_title
    * \_header
      * Source colors
        * \_property
          * \_label
            * \_text
      * `minStopName`
      * …
      * `maxStopName`
    * `layerName`
      * \_source
        * `layerName`
          * \_property
            * \_label
              * \_text
      * \_shades
        * `minStopName`
          * \_properties
            * \_top
              * \_scale
                * \_text
              * \_base
                * \_hex
                  * \_text
                * \_lch
                  * \_text
              * \_bottom
                * \_contrast-scores
                  * \_wcag21-light
                    * \_indicator
                    * \_text
                  * wcag21-dark
                    * \_indicator
                    * \_text
                  * apca-light
                    * \_indicator
                    * \_text
                  * apca-dark
                    * \_indicator
                    * \_text
          * \_status
            * \_close
              * \_indicator
              * \_text
        * …
        * `maxStopName`
    * …
{% endhint %}

{% hint style="danger" %}
Avoid editing the palette directly on the document canvas. The frame named "\_colors﹒do not edit any layer" is by default locked to avoid any update by hand.
{% endhint %}
