# UI Color Palette Docs

Documentation mono-repo for **UI Color Palette** — a plugin available on Figma, Framer, Penpot, and Sketch that generates consistent, accessible color palettes using perceptual color spaces (LCH, OKLCH, CIELAB, OKLAB, HSLuv).

Each folder is a standalone [GitBook](https://gitbook.com) space synced to its own documentation site.

## Structure

| Folder | Content |
|---|---|
| [`figma/`](figma/) | Documentation for the Figma & FigJam plugin |
| [`framer/`](framer/) | Documentation for the Framer plugin |
| [`penpot/`](penpot/) | Documentation for the Penpot plugin |
| [`sketch/`](sketch/) | Documentation for the Sketch plugin |
| [`mcp/`](mcp/) | MCP server — connect any AI assistant to the palette engine |
| [`api/`](api/) | API reference (OpenAPI spec) |
| [`legal/`](legal/) | Legal documents shared across all platforms |

## Organization

Each plugin space follows the same content structure:

- **Introduction** — how the plugin works, color space rationale, capabilities per product
- **Guides** — step-by-step walkthroughs (create, manage, sync, export, publish)
- **User management** — account, plans, and license management
- **Others** — migration guides and release notes

The `legal/` folder is platform-agnostic and covers Terms and Conditions, Privacy Policy, Cookies Policy, Terms of Sale, and the MIT License.

## Contributing

Edit the Markdown files directly in the relevant folder. Each space has its own `SUMMARY.md` that defines the navigation tree — update it when adding or removing pages.

Images go in the `.gitbook/assets/` folder of the corresponding space.

## License

MIT — see [LICENSE](LICENSE).
