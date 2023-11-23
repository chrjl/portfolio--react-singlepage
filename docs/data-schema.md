# Metadata schema

- `title`: required, array.

  Title should be provided as an array (max length 2, unenforced), and is rendered as an array of `span` elements. The idea is that the first desired line break point can be specified. A maximum of two segments should be provided and the title should be kept short, as the combination of internal line breaks with the specified break will probably start to get buggy.

  - [ ] enforce max length of array
  - [ ] use HTML to suggest a line break point without separate elements

- `isPublished`: boolean
- `keywords`: array
- `body` (required), `headnote`: `Markdown`
- `links`

  - `repo`: array (of URL)
  - `documentation`: array (of URL)
  - `assets`: array of `DescribedLink`s

## Utility types

`DescribedLink`

- `description`: intended for use as anchor text
- `href`: URL
- `icon`: name of [heroicons](https:/heroicons.com) glyph (Pascal Case, ending in `Icon`)

`Markdown`: mirrors the type provided by Contentlayer

- `raw`: markdown
- `html`
