---
icon: arrows-spin
---

# Palette publication lifecycle

{% hint style="info" %}
An account is required to publish palettes. Editing a palette never requires one.
{% endhint %}

A palette is born local: it lives in your Figma or Penpot page, in your Sketch document, in your Framer project, or in your browser on the Web App. That is enough as long as you work in one place. As soon as a palette needs to travel — to another file, another design tool, or the Web App — you publish it.

**Publishing is how a palette moves from one platform to another.** The published palette becomes the single source of truth, and every platform can pull it, edit it, and push it back.

## Two copies of the same palette

The model is close to Git:

* The `Local Master` is the palette stored where you work (a page, a document, a browser). You edit it freely, offline, without an account.
* The `Remote Master` is the published version, stored in the cloud. It is the reference every platform compares itself to.

A local palette that has been published or added from the `Library` keeps a link to its `Remote Master`. That link is what lets UI Color Palette tell you whether your copy is ahead, behind, or in sync.

## The Web App as a hub

The Web App runs in any browser, with no install and no account needed to edit. Once you are signed in, it gives you access to the same `Library` as the plugins. This makes it the natural meeting point between tools:

* Start a palette on the Web App, publish it, then add it from the `Library` in Figma, Penpot, Sketch, or Framer.
* Pull a palette published from a design tool into the Web App to review it, share it via link, or keep refining it without opening the design tool.
* Move a palette from one design tool to another (e.g., Figma → Penpot) by publishing it on one side and adding it on the other — with or without the Web App in between.

Whichever platform publishes it, the `Remote Master` is the same. There is no "Figma palette" or "Penpot palette" once it is published, only one palette and as many local copies as you need.

{% hint style="warning" %}
What travels is the palette itself: source colors, scale, color modes, and settings. What each design tool produces from it — local styles, variables, tokens, and generated documents — stays on that platform. After adding a palette to a new platform, run the [synchronization with the local library](../guides/sync-a-color-palette-to-the-local-library.md) there again.
{% endhint %}

{% hint style="info" %}
Sharing a palette [via a link](../guides/share-a-color-palette-via-link.md) on the Web App is a different thing: the recipient gets an independent copy with no link to any `Remote Master`. Publish when you want copies to stay in sync; share a link when you only want to hand a palette over.
{% endhint %}

## A typical lifecycle

{% stepper %}
{% step %}
### Create locally

Create the palette on any platform. It only exists as a `Local Master` — status `Unpublished`.
{% endstep %}

{% step %}
### Publish

Click `Publish…`. The palette becomes a `Remote Master` and your local copy is linked to it — status `No change`.
{% endstep %}

{% step %}
### Reuse it elsewhere

On another platform (or another file), open the `Library` > `My palettes` and add the palette. You now have a second `Local Master` linked to the same `Remote Master`.
{% endstep %}

{% step %}
### Edit and push

Edit the palette on any of its copies. That copy shows `Local changes`; publish it again to update the `Remote Master`.
{% endstep %}

{% step %}
### Pull the update

Every other copy now shows `Remote changes`. Click `Synchronize…` to pull the latest version — or keep your local version and `Detach` it if it should live its own life.
{% endstep %}
{% endstepper %}

## Statuses

Select a palette and click `Publish…` (or `Synchronize…`). A dialog shows the palette's shades/tints, name, source colors, color modes, and its status, which tells you the next action to take:

| Status            | Meaning                                                                    | Typical action                       |
| ----------------- | -------------------------------------------------------------------------- | ------------------------------------ |
| `Unpublished`     | The palette only exists locally                                            | `Publish…`                           |
| `No change`       | The local copy and the `Remote Master` are identical                       | Nothing to do                        |
| `Local changes`   | The palette has been edited locally since the last publication            | `Publish…` or `Revert`               |
| `Remote changes`  | A newer version has been published from another copy                     | `Synchronize…` or `Detach`           |
| `Not found`       | The `Remote Master` has been unpublished                                   | `Detach` to keep it as a local palette |
| `Pending…`        | The communication with the `Remote Master` is in progress                 | Wait — it may end with an error      |

Two extra badges can be shown: `Published`, and `Shared` if the palette is also available to the community.

## Who can do what

* **Your own palettes** can be published, updated, reverted, synchronized, detached, unpublished, and shared with the community.
* **Palettes from someone else** (community or organization) can be added, synchronized, reverted, and detached, but not republished: your edits stay on your local copy.

See [Publish and synchronize a color palette](../guides/publish-and-synchronize-a-color-palette.md) for the step-by-step actions.
