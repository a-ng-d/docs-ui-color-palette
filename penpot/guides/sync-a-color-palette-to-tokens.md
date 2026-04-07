---
description: >-
  Learn how to synchronize your color palette with Penpot design tokens
  directly, without any manual export or import.
icon: coins
---

# Sync a color palette to tokens

{% stepper %}
{% step %}
## Sync to tokens

Once the palette is ready, click the `Synchronize` button, then select `Synchronize with tokens`. This creates or updates design tokens directly in Penpot using the plugin API — no manual export or import required.

Tokens are organized by source color and, if color modes have been defined, by theme. They are fully decoupled from the palette: updating the palette does not automatically update the tokens; you need to click `Synchronize with tokens` again to propagate changes.

{% hint style="info" %}
Unlike local styles synchronization, token synchronization uses Penpot's native token API and can be used across any project.
{% endhint %}
{% endstep %}

{% step %}
## Sync with themes

If your palette includes `Color modes`, each mode is reflected as a separate theme in the token set. Click `Synchronize with tokens` to generate or update the token sets for each theme.

Tokens without themes are placed in a single default set. Tokens with themes are placed in separate sets, one per color mode.
{% endstep %}

{% step %}
## Remove tokens no longer linked to the palette

A preference option controls whether tokens that no longer exist in the palette are automatically removed from their sets after synchronization.

To enable it, go to `Preferences` and toggle the relevant option. When enabled, any token previously created from the palette but no longer part of it will be deleted on the next synchronization.

{% hint style="warning" %}
Use this option carefully if you have manually added tokens to the same sets — they could be removed unintentionally.
{% endhint %}
{% endstep %}
{% endstepper %}
