# Fortune Whyte — Fitness Coach

Landing page for Fortune Whyte, a fitness coach in Regina, SK. Built with Vite, React 18, Tailwind CSS v3 and Phosphor Icons.

## Running it

You need Node.js 20.19 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing the copy

All text on the site lives in [`src/content.js`](src/content.js): headlines, stats, services, results, approach steps, strengths, testimonials and contact details. Change a string there and the page updates; you don't need to touch the components.

- **Stats**: an entry with `count` animates up from 0 (`{ count: 3, suffix: '+' }`). An entry with `value` is shown as-is (`{ value: '10–12' }`).
- **Icons**: services and About badges take an `icon` key. The keys you can use are listed in a comment above each section.
- **Placeholders**: the testimonials and two of the result cards still have placeholder text (`[Client testimonial here.]`, `[Result]`, `[describe goal]`). Replace these with real, client-approved content before launch.

## Adding images

1. Put the image files in [`public/images/`](public/images/), for example `public/images/hero.jpg`.
2. Set the matching field in `src/content.js` to the path, starting from `/`:

| Image                     | Field in `content.js`                            |
| ------------------------- | ------------------------------------------------ |
| Hero action photo         | `hero.image`                                     |
| About portrait            | `about.image`                                    |
| Featured before / after   | `results.featured.before`, `results.featured.after` |
| Result cards (×3)         | `results.cards[n].before`, `results.cards[n].after` |

```js
export const hero = {
  // ...
  image: '/images/hero.jpg',
}
```

Images are cropped to fill their frame (`object-cover`). When a field is left as `''`, the design placeholder shows instead. Before/after pairs look best when both photos are taken from the same angle and framing.

## Project structure

```
src/
  main.jsx            React entry
  App.jsx             Page composition
  index.css           Tailwind directives + custom component styles
  content.js          All editable copy and image paths
  hooks/useInView.js  IntersectionObserver hook (fires once)
  components/         One component per section, plus Reveal, Counter
                      and BeforeAfterSlider
public/               Static files served from /
variant-export.html   Original design-tool export, kept for reference
```
