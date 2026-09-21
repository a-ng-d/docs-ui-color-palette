---
icon: unlock
---

# Understanding free and Pro

{% hint style="info" %}
The `/basic` vs `/pro` split — what's free, what needs a subscription, and why — is documented once for every UI Color Palette platform: see **[Understanding free and Pro](https://docs.ui-color-palette.com/general/introduction/free-and-pro)**. The volume limits and synchronization targets below are Framer's own.
{% endhint %}

## Volume — capped on the free plan

| Item                       | `/basic` | `/pro`    |
| -------------------------- | -------- | --------- |
| Palettes per document      | 3        | Unlimited |
| Source colors              | 5        | Unlimited |
| Steps                      | 6        | Unlimited |
| Color modes                | 2        | Unlimited |

{% hint style="info" %}
Unlike Figma and Penpot (which scope palettes **per page**), Framer scopes palettes **per document** — the whole project shares the same set, there's no page-level partitioning. Sketch works the same way, per document.
{% endhint %}

## Synchronization — reserved for Pro

On Framer, synchronization applies to:

* [sync with the color styles](../guides/sync-a-color-palette-to-the-local-library.md);
* [generate the palette documentation](https://docs.ui-color-palette.com/general/guides/generate-a-color-palette-documentation) in the document;
* [export to code](../guides/export-a-color-palette-to-code.md), limited to CSS, Less, Tailwind (v3 and v4), and JSON tokens (native and DTCG) — Framer doesn't support the SCSS, Apple, Android, or spreadsheet formats available on Figma, Penpot, and Sketch.
