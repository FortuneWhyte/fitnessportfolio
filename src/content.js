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

// `count` animates up from 0 when visible; `value` is shown as-is.
export const stats = [
  { count: 3, suffix: '+', label: 'Years Coaching' },
  { count: 6, suffix: '+', label: 'Years Athletic Training' },
  { value: '6–8', label: 'Week Transformations' },
  { value: 'YES', label: 'CPR/AED Certified' },
]

// Badge icons: 'certificate' | 'graduation-cap' | 'football'
export const about = {
  label: 'Section 01',
  headline: ['ATHLETE FIRST.', 'COACH ALWAYS.'],
  body: "I've trained consistently for 6+ years as a football and track & field athlete. Since 2023 I've coached clients one-on-one and led small-group boot camps, building programs around each person's goals, fitness level and injury history.",
  image: '',
  imageAlt: 'Portrait of Fortune Whyte',
  badges: [
    {
      icon: 'certificate',
      title: 'Standard First Aid + CPR Level C & AED',
      subtitle: 'Valid to 2028',
    },
    {
      icon: 'graduation-cap',
      title: 'Personal Trainer Certification',
      subtitle: 'In Progress',
    },
    {
      icon: 'football',
      title: 'Football & Track & Field Athlete',
      subtitle: '6+ Years Strength & Conditioning',
    },
  ],
}
