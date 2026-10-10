# sumi 墨

A distraction-free Markdown writing app from xvoidsx. No clutter, no account, no network — just writing.

## The desktop app

sumi is a proper **Electron desktop app**. It ships as a `.deb` with native open/save file dialogs, so saving and opening real `.md` files just works — no browser permissions, no File System Access API workarounds.

```sh
sudo dpkg -i sumi_*_amd64.deb
sumi
```

Releases are cut by tag — see the `.deb` assets on each [release](../../releases).

## The web version

`sumi.html` is the whole app in a single file. Open it in any Chromium browser and write. This is what the Electron app loads — one codebase, two homes. On navi, the web version is kept around for browsers, but the desktop app is the real deal.

```sh
chromium --app=file:///path/to/sumi.html
```

## Features

- **Two views** — `md` shows dimmed Markdown delimiters, `rich` hides them for true WYSIWYG formatting. Toggle anytime.
- **Real formatting** — bold, italic, strikethrough, code, links, quotes, lists, headers, fenced code blocks with syntax highlighting.
- **Focus mode** — dim everything but your current paragraph.
- **Typewriter mode** — the caret line stays vertically centered.
- **Word goals** — click the word count to set a target; reading-time estimate included.
- **Autosave** — your scratch is kept in localStorage; open and save real `.md` files anywhere.
- **Offline-first** — works with no network at all.
- **Native caret, always** — single-layer `contenteditable` over a Markdown source model. No overlay drift, ever.

## Files

- `sumi.html` — the whole app
- `sumi.svg` — the 墨 mark
- `electron/` — the Electron shell (main process, preload bridge, deb packaging)

## License

MIT — see [LICENSE](LICENSE).
