---
description: >-
  Learn how to share a color palette instantly with anyone using a link,
  and how that differs from sharing a palette's permanent ID.
icon: link
---

# Share a color palette via link

{% hint style="warning" %}
This feature is currently available on the Web App only. It is not available on the Figma, Penpot, Sketch, or Framer plugins. See [platform capabilities](../introduction/platform-capabilities.md).
{% endhint %}

Every palette on the Web App has a `Copy link` / `Share` action. It works whether or not you're signed in, and whether or not the palette has ever been published — you don't need an account, and you don't need to publish anything first.

## How the link works

The generated link carries the palette's full data directly inside it. Anyone who opens it — on any device, in any browser — sees that exact palette load immediately, with no account needed and nothing to wait on from a database.

{% hint style="info" %}
Because the palette's data travels inside the link itself, links for palettes with many source colors or color modes can get long. That's expected — it isn't an error.
{% endhint %}

Opening a shared link gives the recipient their own separate, editable local copy of the palette. It never modifies, and is never linked back to, the original palette — the two are independent from the moment the link is opened.

## Links don't expire

Links don't expire and can't be revoked. Treat a link as something you're comfortable sharing indefinitely, not as a private or confidential channel — once you've shared it, you can't take it back or shut off access to it later.

## Copy link vs. copying the URL bar

Separately from the `Copy link`/`Share` action, every palette also has a permanent ID. If you copy the URL straight from your browser's address bar instead of using `Copy link`/`Share`, you get a shorter, ID-only link.

That kind of link behaves differently for a recipient:

* It only opens successfully for someone else if the palette has been published and shared to the community, or if they're signed in as the palette's own creator.
* Otherwise, they'll just see a short message saying the palette isn't accessible.

{% hint style="info" %}
Use `Copy link`/`Share` when you want the palette to open for anyone, immediately, with no publishing or sign-in required. The address-bar URL is only useful once the palette is published and shared to the community, or for the creator's own use.
{% endhint %}
