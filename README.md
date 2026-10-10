# sumi 墨

A minimal, beautiful writing space for navi.

One HTML file. No build, no server, no account. Open it in any Chromium browser and write.

## Run it

```sh
chromium --app=file:///path/to/sumi.html
```

Or just double-click it. On navi it ships as a default webapp.

## Features

- **Two views** — `md` shows dimmed Markdown delimiters, `rich` hides them for true WYSIWYG formatting. Toggle anytime.
- **Real formatting** — bold, italic, strikethrough, code, links, quotes, lists, headers, fenced code blocks with syntax highlighting.
- **Focus mode** — dim everything but your current paragraph.
- **Typewriter mode** — the caret line stays vertically centered.
- **Word goals** — click the word count to set a target; reading-time estimate included.
- **Autosave** — your scratch is kept in localStorage; open and save real `.md` files anywhere.
- **Native caret, always** — single-layer `contenteditable` over a Markdown source model. No overlay drift, ever.

## Files

- `sumi.html` — the whole app
- `sumi.svg` — the 墨 mark

## License

MIT — see [LICENSE](LICENSE).
