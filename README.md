# `chrjl.dev`

Single-page version with no routing, using (typed) data imported by [Contentlayer](https://contentlayer.dev/).

## Dev environment

Vite and Contentlayer dev servers are run separately, so live-updating is a two-step process. The two processes are run concurrently using the `concurrently` package.

- [x] The Contentlayer server watches for changes to raw content (Markdown + YAML frontmatter) in `content/` and exports typed data to `.contentlayer/`.

  > [!NOTE]
  > The Contentlayer install requires a workaround because of [dependency issues](https://github.com/contentlayerdev/contentlayer/issues/564).

- The Vite server imports data from `.contentlayer/` and watches for:
  - [x] Changes to app code (`src/`)
  - [ ] Changes to imported data (`.contentlayer/`)
