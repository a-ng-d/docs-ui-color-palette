---
icon: lock
---

# Export for Android apps (Compose and Resources)・Pro

You can export every color shade to Kotlin or an XML file on your computer regarding how you want to develop your Android project. Learn more about [App Resources](https://developer.android.com/guide/topics/resources/providing-resources) and [Jetpack Compose](https://developer.android.com/jetpack/compose) on the Android Developer Documentation.

The export file follows this model:

{% tabs %}
{% tab title="Compose" %}
```kotlin
import androidx.compose.ui.graphics.Color

// themeName - sourceColorName
val themeName_sourceColorName_stopName = Color(0XFF1D3A3E)
...
```
{% endtab %}

{% tab title="Resources" %}
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <!--themeName - sourceColorName-->
  <color name="themeName_sourceColorName_stopName">#2254f5</color>
  ...
</resources>
```
{% endtab %}
{% endtabs %}
