---
icon: bolt-lightning
---

# How UI Color Palette works

UI Color Palette stores your color palettes locally in your design tool (or, on the Web App, in your browser), and lets you optionally save a copy to the cloud so it can be reused elsewhere. Three concepts describe this flow, and they apply the same way on every platform:

## Local Master

The palette stored locally — on the selected document or page in Figma, Penpot, and Sketch — acts as the `Local Master`. This setup provides real-time updates to the color scheme, ensuring any modifications are immediately reflected.

{% hint style="warning" %}
On Framer, palettes are stored in your browser's local storage rather than inside a document. They're strictly linked to that browser and can't be shared with teammates unless you publish the palette to the cloud. Framer's `Local Master` is otherwise the same concept — just stored differently. See [How UI Color Palette on Framer works](../../framer/introduction/how-ui-color-palette-on-framer-works.md).
{% endhint %}

## Local Instance

Palettes can generate documentation within your design tool's document as a `Local Instance`. This offers a quick view of the color shades and tints, complete with their properties. Note that these generated documents are shortcuts to the `Local Master` that can be updated, but changes must be manually replicated to them on demand — they are not automatically kept in sync.

## Remote Master

Palettes can be saved in the cloud for use across different documents and across every supported platform — Figma, Penpot, Sketch, Framer, and the Web App. A saved palette acts as the `Remote Master`. To update it, the change must be made to a local palette on any platform and then published.

In summary: a saved palette is the `Remote Master`, a local palette is a `Local Master`, and a generated document is a `Local Instance`.

To learn more, see [Palette publication lifecycle](palette-publication-lifecycle.md).
