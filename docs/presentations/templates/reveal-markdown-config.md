# Configuring Markdown Rendering in Reveal.js

Reveal.js uses the `marked` library for markdown parsing. Configure it via a `markdown` key in `Reveal.initialize()`.

## Common Options

```js
Reveal.initialize({
  markdown: {
    smartypants: true,   // curly quotes, em-dashes from --
    gfm: true,           // GitHub Flavored Markdown (tables, etc.)
    breaks: true,        // line breaks become <br>
  },
  plugins: [RevealMarkdown, RevealNotes],
});
```

## Custom Renderer

Override how specific elements (images, headings, links) are processed:

```js
markdown: {
  renderer: {
    image(href, title, text) {
      return `<figure><img src="${href}" alt="${text}"><figcaption>${title || ''}</figcaption></figure>`;
    }
  }
}
```
