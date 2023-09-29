# Troubleshooting

{% hint style="info" %}
The real-time edit is relatively slow: It depends on the number of color shades in the palette. Dealing with hundreds of shades may slow your Figma and cause UI freezes. Hiding the properties may improve the performance.
{% endhint %}

<details>

<summary><code>Your UI Color Palette seems corrupted. Do not edit any layer within it.</code></summary>

The palette has been manually edited and may occur troubles and errors. So the plugin avoids executing editing while the palette does not seem compliant with the architecture.

</details>

<details>

<summary><code>The layer 'foo' must get at least one solid color</code></summary>

You have selected a layer without any solid color

</details>

<details>

<summary><code>Your UI Color Palette is up-to-date or local color styles must be created</code></summary>

Several cases may explain the issue:

* The styles do not exist in the document.
* The styles and the palette are unlinked.
* The lightness scale has not been edited.
* No source color has been edited.
* No color theme has been edited.

</details>

<details>

<summary><code>Your UI Color Palette is up-to-date or local color variables and variable modes must be created</code></summary>

Several cases may explain the issue:

* The variable collection does not exist in the document.
* The variables and the palette are unlinked.
* The lightness scale has not been edited.
* No source color has been edited.
* No color theme has been edited.

</details>

<details>

<summary><code>You cannot create more than 4 variable modes</code></summary>

According to your Figma plan:

* In Figma Starter, you cannot add more than 1 variable mode.
* In Figma Professional and Organization, you cannot add more than 4 variable modes.

Learn more by consulting [Figma pricing](https://www.figma.com/pricing/).

</details>
