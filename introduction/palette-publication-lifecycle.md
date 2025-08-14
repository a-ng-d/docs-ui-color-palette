---
icon: arrows-spin
---

# Palette publication lifecycle

{% hint style="info" %}
An account is required to publish palettes.
{% endhint %}

With our color palette management tool, you can publish any color palette remotely for reuse across multiple documents. This feature enhances your efficiency and productivity, allowing you to store your work securely, collaborate with your team, and maintain synchronization. The concept is similar to Git:

* A `Local Master` palette
* A `Remote Master` palette

***

Select a palette, click `Publish palette`. A dialog shows you the palette's status on the remote and a couple of brief information:

* Its shades/tints
* Its name
* Its status
* Its source colors, themes, shades/tints included
* Eventually, the provider, if it is already published

About the status, it indicates at a glance the action to take to manage the palette lifecycle:

* `No changes`: It is up-to-date
* `Local changes`: The palette has been managed on the document
* `Remote changes`: A new version has been published, and the local version can be updated
* `Unpublished`: It can be published remotely
* `Not found`: The remote master may be unpublished
* `Waiting…`: The communication with the remote Master is ongoing, but it can result in an error
