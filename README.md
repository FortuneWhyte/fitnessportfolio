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

## Adding photos and videos

Keep the original, full-size files from your phone in `portfolio_photos/`. That folder is git-ignored, because phone photos contain your GPS location. Then make web-ready copies with the script, which needs `ffmpeg` (`brew install ffmpeg`):

```bash
# Photo: turned upright, resized to 1200px wide, all metadata (including GPS) removed
scripts/optimize-media.sh photo portfolio_photos/IMG_1234.jpeg public/images/my-photo.jpg

# Video: iPhone HDR converted to normal colour, 720p, sound removed, plus a poster frame
scripts/optimize-media.sh video portfolio_photos/IMG_1234.mov public/videos/my-clip.mp4 public/videos/my-clip-poster.jpg
```

Then set the matching field in `src/content.js` to the path, starting from `/`:

| Where on the page                | Field in `content.js`                                         |
| -------------------------------- | ------------------------------------------------------------- |
| Hero background (video or photo) | `hero.video` + `hero.videoPoster`, or `hero.image`            |
| About portrait                   | `about.image`                                                 |
| Transformation slider            | `results.featured.before`, `results.featured.after`           |
| Transformation timeline          | `results.featured.timeline[n].image`                          |
| Client result cards (×3)         | `results.cards[n].before`, `results.cards[n].after`           |
| Inside a Session                 | `approach.session.video`, `approach.session.photos[n].image`  |

```js
export const hero = {
  // ...
  video: '/videos/hero-session.mp4',
  videoPoster: '/videos/hero-session-poster.jpg',
}
```

Images are cropped to fill their frame (`object-cover`). When a field is left as `''`, the design placeholder shows instead.

- **Before/after pairs** look best when both photos have the same framing. The script's optional 5th argument crops a photo before resizing it, for example `"iw*0.6:ih*0.6:iw*0.2:ih*0.4"` (width:height:x:y).
- **Videos** play muted and on a loop, and only while they're on screen. Visitors whose device is set to reduce motion see the poster image instead.

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
scripts/              optimize-media.sh for preparing photos and videos
public/               Static files served from / (images/, videos/)
variant-export.html   Original design-tool export, kept for reference
```
