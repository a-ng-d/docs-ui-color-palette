# Redirects

How old docs URLs are handled after a restructure. Nothing in this folder is published.

## What is in place

GitBook site redirects are a paid feature, so only free **in-space redirects** are used. Each `.gitbook.yaml` holds a `redirects:` block, and every redirect stays within its own space.

| Space | File | Redirects |
|---|---|---|
| General (served at the root) | [`../general/.gitbook.yaml`](../general/.gitbook.yaml) | 79 |
| Legal | [`../legal/.gitbook.yaml`](../legal/.gitbook.yaml) | 1 |
| Claude | [`../claude/.gitbook.yaml`](../claude/.gitbook.yaml) | 1 |

Format: `old/path/relative/to/the/space: current/page.md`. The target is a file of the same space.

**After the first sync, check that GitBook applies them.** Each of these must redirect to a 200 page:

```sh
curl -sI https://docs.ui-color-palette.com/create-a-color-palette/overview | grep -iE '^(HTTP|location)'
curl -sI https://docs.ui-color-palette.com/legal/cookie-policy | grep -iE '^(HTTP|location)'
```

If they still answer 404, the site-level Git Sync (`gitbook-docs.yaml`) may be ignoring per-space `.gitbook.yaml` files. In that case, remove the files.

## What cannot be redirected

**106 old URLs moved to another space.** Examples:
- `/framer/guides/create-a-color-palette` → General;
- `/others/release-notes/*` → Figma.

They stay 404. Google drops them from its index within a few weeks, and the new pages are indexed through the sitemap.

[`site-redirects.csv`](site-redirects.csv) keeps the complete map (187 rows, cross-space included). It is ready to import in **Settings → Redirects** if site redirects ever become available.

## Rules

- **Before any restructure, check the cost of the move.** A page that changes space cannot be redirected for free. Keep URLs stable when possible.
- **Every restructure ships with its in-space redirects.** Never move or delete a page without them.
- **Closest topic, never the home page.** No chains.
- **Link across spaces with the final URL.** Never use a `/general/...` URL: it answers a temporary redirect (307). The General space is served at the root.
- Credits are inactive. Old credit pages point to `/user-management/plans`.

## Regenerate

[`build_redirects.py`](build_redirects.py) rebuilds the complete map. It works in three steps:
1. collect candidate URLs from every Markdown path in the git history, plus the docs URLs seen in Search Console;
2. keep the ones that return 404 today;
3. map each one to the closest live page from the docs sitemaps.

It needs two inputs in the directory passed as its argument:
- `live.txt`: the paths of the live sitemaps;
- `allpaths.txt`: `git log --all --name-only --format= | grep '\.md$' | grep -v -E 'SUMMARY|^README' | sort -u`.

Then copy the rows whose source and destination are in the same space into that space's `.gitbook.yaml`.
