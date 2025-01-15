# Export as Custom Properties to CSS

You can export every color shade to a CSS file on your computer. Learn more about CSS4 Custom Properties on the [Mozilla Developer Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

The export file follows this model:

{% code overflow="wrap" %}
```css
:root[data-theme="themeName"] {
  /* sourceColorName */
  --sourceColorName-stopName: rgb(207, 205, 255);
  ...
}
```
{% endcode %}

{% hint style="info" %}
You can switch the [`RGB`](../../glossary.md#rgb) color space into `hexadecimal code,` [`LCH`](../../glossary.md#lch)`,` or [`P3`](../../glossary.md#p3) values.
{% endhint %}

## Export as config for `Tailwind` <mark style="color:yellow;">`Pro`</mark>
