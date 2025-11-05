---
description: >-
  Learn how to publish and synchronize a color palette for seamless integration
  across design tools supported by UI Color Palette, and to hunt shared
  palettes.
icon: newspaper
---

# Publish and synchronize a color palette

{% stepper %}
{% step %}
## Publish palettes

If the palette is yours, you can:

* `Publish`: It makes it enter a lifecycle. If an update is detected, you can publish a new version
* `Unpublish`: Remove it from the remote to make it local. The other instances will lose the link with the master and must be detached to remove the remote flag
* `Revert`: Roll it back to the `Master`
* `Synchronize`: Update it from the last version on the remote
* `Detach`: Remove the link with the `Master` and make it local
* `Share with the community`: The palette can be added by other members of `UI Color Palette`
{% endstep %}

{% step %}
## Synchronize palettes

If the palette is not yours, you can:

* `Synchronize`: Update it from the last version on the remote
* `Revert`: Roll it back to the `Master`
* `Detach`: Remove the link with the `Master` and make it local
{% endstep %}

{% step %}
## Reuse your palettes&#x20;

You can go to `Library` then `My palettes`. This list gathers all the live palettes you have published. From this list, you can:

* `Unpublish`: Remove the Master palette from the remote. This action is irreversible
* `Share with the community` or `Remove from the community`: You allow other users to add your palette to their files
* `Add to file`: A palette instance is pushed to the document. It can be updated and republished later
* `Search palettes…`: Quickly go to a palette that is precisely known

{% hint style="info" %}
You can use a UI color palette across **Sketch**, **Figma**, and **Penpot**. Palettes created in **Sketch** are compatible with **Figma**, and those made in **Figma** can be used in **Penpot**.
{% endhint %}
{% endstep %}

{% step %}
## Hunt palettes from the community&#x20;

You can go to `Library`, then `Community`, to retrieve a list of shared palettes provided by `UI Color Palette` Users. These palettes keep a link to their `Master` and can be synchronized if the user publishes a new version. You must click `Synchronize palette` to check the status.

From the list, you can:

* `Add to local`: A palette instance is pushed to the document, and it can be updated, but cannot be republished later
* `Glance palette`: A quick look at a palette's properties, where you can add it to your starred or local
* `Search palettes…`: Quickly go to a specific palette or a group of palettes
{% endstep %}

{% step %}
## Explore resource palettes from mature organizations

You can go to `Library`, then `Organization`, to retrieve a list of palettes inspired by well-known organizations such as Adobe, Microsoft, Radix, Tailwind, etc.

From the list, you can:

* `Add to local`: A palette instance is pushed to the document, and it can be updated, but cannot be republished later
* `Glance palette`: A quick look at a palette's properties, where you can add it to your starred or local
* `Search palettes…`: Quickly go to a specific palette or a group of palettes
{% endstep %}
{% endstepper %}
