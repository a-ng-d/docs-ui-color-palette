---
icon: lock
---

# Export for Apple apps (SwiftUI and UIKit)・Pro

You can export every color shade to a Swift file on your computer, regarding the framework you use for building UI in your Xcode project. Learn more about Color Structure on the [Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/color).

The export file follows this model:

{% tabs %}
{% tab title="SwiftUI" %}
<pre class="language-swift"><code class="lang-swift">import SwiftUI

<strong>public extension Color {
</strong>  static let Token = Color.TokenColor() 
  struct TokenColor {
    // themeName - sourceColorName
    public let themeNameSourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>
{% endtab %}

{% tab title="UIKit" %}
<pre class="language-swift" data-overflow="wrap"><code class="lang-swift">import UIKit

<strong>struct Color {
</strong>  struct ThemeName {
    // sourceColorName
    public let SourceColorNameStopName = Color(red: 0.133, green: 0.329, blue: 0.961)
    ...
  }
}
</code></pre>
{% endtab %}
{% endtabs %}
