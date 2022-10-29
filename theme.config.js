export default {
  github: 'https://github.com/inVoltag/figma-ui-color-palette',
  docsRepositoryBase: 'https://github.com/inVoltag/figma-ui-color-palette-docs',
  titleSuffix: ' – Documentation',
  logo: (
    <>
      <img src="/plugin-icon.svg" width="32" alt="UI Color Palette icon" className="mr-2" />
      <span className="mr-2 font-extrabold hidden md:inline">UI Color Palette on Figma</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="UI Color Palette on Figma: Documentation for creating and deploying accessible UI Color Palettes on Figma" />
      <meta name="og:description" content="UI Color Palette on Figma: Documentation for creating and deploying accessible UI Color Palettes on Figma" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://ui-color-palette.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="ui-color-palette.vercel.app" />
      <meta name="twitter:url" content="https://ui-color-palette.vercel.app" />
      <meta name="og:title" content="UI Color Palette on Figma: Documentation for creating and deploying accessible UI Color Palettes on Figma" />
      <meta name="og:image" content="https://ui-color-palette.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="UI Color Palette on Figma" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} CC-BY Aurélien Grimaud.</>,
  unstable_faviconGlyph: '👋',
}
