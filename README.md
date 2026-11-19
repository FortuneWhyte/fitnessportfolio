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

## Deployment

The site is hosted on Vercel at **https://fitnessportfolio.vercel.app**.

- **Automatic:** every push to `main` on GitHub builds and deploys to production. Pushes to other branches get their own preview URL.
- **Manual:** run `vercel --prod` from the project folder. You need the Vercel CLI (`npm i -g vercel`) and `vercel login`.
- **Settings:** build settings and cache headers live in [`vercel.json`](vercel.json). Images and videos in `public/` are cached for a week. The hashed JS and CSS in `dist/assets/` are cached permanently.

If you replace a photo or video but keep the same filename, visitors may see the old one for up to a week. Give the new file a new name and update `content.js` instead.

## Editing the copy

All text on the site lives in [`src/content.js`](src/content.js): headlines, stats, services, results, approach steps, strengths, testimonials, packages, the enquiry form and contact details. Change a string there and the page updates; you don't need to touch the components.

- **Stats**: an entry with `count` animates up from 0 (`{ count: 3, suffix: '+' }`). An entry with `value` is shown as-is (`{ value: '10–12' }`).
- **Icons**: services and About badges take an `icon` key. The keys you can use are listed in a comment above each section.
- **Prices**: each package in `packages.items` has a `price` (e.g. `'$60'`) and `priceNote` (e.g. `'per session'`). While `price` is `''` the card shows "Ask for pricing".
- **Client result cards**: add entries to `results.cards` as clients share results. The grid adapts: one card is centred, two share a row, three or more use three columns.

## Enquiry form

The contact form posts to a Vercel serverless function, [`api/enquiry.js`](api/enquiry.js), which emails the enquiry to you via [Resend](https://resend.com) (free tier: 100 emails a day).

**Until it's set up, the form still works.** It opens the visitor's own email app with their enquiry already written, addressed to you. The same happens in local development (`npm run dev` doesn't run the `api/` folder).

To have enquiries emailed straight to your inbox:

1. Sign up at resend.com **using the email address that should receive enquiries**, and create an API key.
2. In Vercel, open the project → **Settings → Environment Variables** and add `RESEND_API_KEY` with that key.
3. Redeploy (Deployments → ⋯ → Redeploy), or push any commit.

Optional variables:

| Variable       | Default                                     | Purpose                                                                              |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ |
| `ENQUIRY_TO`   | `greatfortunewhyte@yahoo.com`               | Inbox that receives enquiries                                                        |
| `ENQUIRY_FROM` | `Website enquiry <onboarding@resend.dev>`   | Sender. Resend's test sender only delivers to the Resend account's own email, so to use another `ENQUIRY_TO`, verify a domain in Resend and send from it |

Replying to an enquiry email replies directly to the visitor (when they left an email address).

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
  hooks/useActiveSection.js  Which section is on screen (nav highlight)
  components/         One component per section, plus Reveal, Counter,
                      BeforeAfterSlider, EnquiryForm and BackToTop
api/enquiry.js        Serverless function that emails form enquiries
scripts/              optimize-media.sh for preparing photos and videos
public/               Static files served from / (images/, videos/)
variant-export.html   Original design-tool export, kept for reference
```
