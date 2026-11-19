# violetumleditor.github.io

Website of **Violet**, the free diagram editor: product page and user guide, in English and French.

Live at <https://violetumleditor.github.io> — the online editor itself is at <https://violetumleditor.github.io/product> (served from the [product](https://github.com/violetumleditor/product) repository).

## Structure

| Path | Content |
|---|---|
| `index.html`, `fr/index.html` | Product page (EN / FR) |
| `docs/`, `fr/docs/` | User guide (EN / FR) |
| `assets/css`, `assets/js` | Styles and the small script (mobile menu, window scaling, ad slot) |
| `assets/img`, `assets/video` | Logo, screenshots of Violet 2.3, demo recording |
| `ads.txt` | AdSense publisher declaration |
| `sitemap.xml`, `robots.txt`, `404.html` | Search engines and error page |

Plain static HTML, no build step: GitHub Pages serves the files as they are (`.nojekyll` disables Jekyll).

## Advertising

The Google AdSense unit sits in a band right under the top navigation. Its publisher id and slot are in each page's `<ins class="adsbygoogle">` element. The band hides itself when no ad is served.
