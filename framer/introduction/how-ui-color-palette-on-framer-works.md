---
icon: bolt-lightning
---

# How UI Color Palette on Framer works

Framer's UI Color Palette stores color palettes in your personal local storage. These palettes are strictly linked to your browser, so they cannot be shared with the other members of your team, unless you publish the palette in the cloud.

## Local Master

The palettes stored in your browser act as `Local Masters`. This setup provides real-time updates to the color scheme, ensuring any modifications are immediately reflected.

## Local Instance

Palettes can generate documents within a Framer document as `Local Instances`. This offers a quick view of the color shades and tints, complete with their properties. Note that these documents are shortcuts to the `Local Master` that can be updated. Changes must be manually replicated to the generated document on demand as they are not automatically updated.

## Remote Master

Palettes can be saved in the cloud for use across different Framer documents and supported platforms like [Penpot](https://penpot.app/) and [Sketch](https://www.sketch.com/). A saved palette acts as the `Remote Master`. To update a saved palette, it must be added to the local selected page, and any changes must be published.

In summary, a saved palette is the `Remote Master`, a local palette is a `Local Master`, and a generated document is a `Local Instance`.

To learn more, see [Palette publication lifecycle](palette-publication-lifecycle.md).
