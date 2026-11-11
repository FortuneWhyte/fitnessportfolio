/**
 * All editable copy for the site lives here.
 *
 * Image fields take a path relative to /public (e.g. '/images/hero.jpg').
 * Leave an image field as an empty string to show the design placeholder.
 */

export const site = {
  name: 'Fortune Whyte',
  location: 'Regina, SK',
}

export const nav = {
  logo: { first: 'F', accent: 'W', href: '#top' },
  links: [
    { label: 'About', href: '#about' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Results', href: '#results' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Book a Session', href: '#contact' },
}

export const hero = {
  eyebrow: 'Fortune Whyte — Fitness Coach · Regina, SK',
  headline: ['STRONGER.', 'FITTER.', 'ACCOUNTABLE.'],
  subheading:
    'Personalized strength, conditioning and nutrition coaching that gets real results in 6–8 weeks.',
  primaryCta: { label: 'Book a Session', href: '#contact' },
  secondaryCta: { label: 'See Results', href: '#results' },
  image: '',
  imageAlt: 'Fortune Whyte training',
  imagePlaceholder: 'High Contrast Action Photo',
}
