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
  eyebrow: 'Great-Fortune Whyte — Fitness Coach · Regina, SK',
  headline: ['STRONGER.', 'FITTER.', 'ACCOUNTABLE.'],
  subheading:
    'Personalized strength, conditioning and nutrition coaching that gets real results in 10–12 weeks.',
  primaryCta: { label: 'Book a Session', href: '#contact' },
  secondaryCta: { label: 'See Results', href: '#results' },
  // Background media: a video (with poster) takes priority over a still image.
  video: '/videos/hero-session.mp4',
  videoPoster: '/videos/hero-session-poster.jpg',
  image: '',
  imageAlt: 'Fortune Whyte coaching a client through a kneeling cable crunch',
  imagePlaceholder: 'High Contrast Action Photo',
}

// `count` animates up from 0 when visible; `value` is shown as-is.
export const stats = [
  { count: 3, suffix: '+', label: 'Years Coaching' },
  { count: 6, suffix: '+', label: 'Years Athletic Training' },
  { value: '10–12', label: 'Week Transformations' },
  { value: 'YES', label: 'CPR/AED Certified' },
]

// Badge icons: 'certificate' | 'graduation-cap' | 'football'
export const about = {
  label: 'Section 01',
  headline: ['ATHLETE FIRST.', 'COACH ALWAYS.'],
  body: "I've trained consistently for 6+ years as a football and track & field athlete. Since 2023 I've coached clients one-on-one and led small-group boot camps, building programs around each person's goals, fitness level and injury history.",
  image: '/images/about-portrait.jpg',
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

// Service icons: 'barbell' | 'users-three' | 'clipboard-text'
export const services = {
  label: 'Section 02',
  headline: 'CORE SERVICES.',
  linkLabel: 'Learn more',
  linkHref: '#contact',
  items: [
    {
      icon: 'barbell',
      title: 'One-on-One Coaching',
      description:
        'Custom programs that combine strength, conditioning and mobility, adapted to your specific injury history and personal milestones.',
    },
    {
      icon: 'users-three',
      title: 'Small-Group Boot Camps',
      description:
        'High-energy circuit and HIIT sessions for groups of 4–5, scaled for every fitness level to ensure everyone gets a push.',
    },
    {
      icon: 'clipboard-text',
      title: 'Nutrition & Accountability',
      description:
        'Structured diet guidance, progress tracking and weekly check-ins to ensure your kitchen habits match your gym performance.',
    },
  ],
}

export const results = {
  label: 'Section 03',
  headline: ['REAL CLIENTS.', 'REAL RESULTS.'],
  intro: 'Documented progress from structured training paired with nutrition guidance.',
  // Large draggable before/after comparison: Fortune's own transformation
  featured: {
    eyebrow: "Coach's own transformation",
    headline: ['PRACTICE WHAT', 'I PREACH.'],
    body: 'I hold myself to the same standard I set for my clients. These are my own progress photos from August 2024 to July 2026: same training, same nutrition principles, same accountability.',
    before: '/images/slider-before-2024-08.jpg',
    after: '/images/slider-after-2026-07.jpg',
    beforeLabel: 'Aug 2024',
    afterLabel: 'Jul 2026',
    beforeAlt: 'Fortune Whyte in August 2024',
    afterAlt: 'Fortune Whyte in July 2026',
    hint: 'Drag to compare',
    timeline: [
      { image: '/images/transformation-2024-08.jpg', label: 'Aug 2024' },
      { image: '/images/transformation-2026-03.jpg', label: 'Mar 2026' },
      { image: '/images/transformation-2026-07.jpg', label: 'Jul 2026' },
    ],
  },
  cards: [
    {
      duration: '7 Weeks',
      goal: 'Weight Loss',
      result: 'Reached target range',
      clientGoal: 'Burn fat & tone muscle',
      before: '',
      after: '',
    },
    {
      duration: '8 Weeks',
      goal: 'Strength',
      result: '[Result]',
      clientGoal: '[describe goal]',
      before: '',
      after: '',
    },
    {
      duration: '6 Weeks',
      goal: 'Mobility',
      result: '[Result]',
      clientGoal: '[describe goal]',
      before: '',
      after: '',
    },
  ],
  disclaimer: 'Shared with client permission.',
}

export const approach = {
  label: 'Section 04',
  headline: 'THE BLUEPRINT.',
  steps: [
    {
      number: '01',
      title: 'Assess',
      description: 'Understanding your goals, current fitness level, and detailed injury history.',
    },
    {
      number: '02',
      title: 'Program',
      description: 'Personalized strength, conditioning and mobility plan tailored to your data.',
    },
    {
      number: '03',
      title: 'Coach',
      description: 'High-energy sessions with expert form cueing and dynamic scaling.',
    },
    {
      number: '04',
      title: 'Track',
      description: 'Nutrition guidance, documented progress and absolute accountability.',
    },
  ],
  // Real footage from a one-on-one session (shared with the client's permission)
  session: {
    eyebrow: 'Inside a session',
    headline: ['HANDS-ON.', 'EVERY REP.'],
    body: 'Real footage from a one-on-one session: demonstrating the movement, cueing form in real time and adjusting as the client works.',
    video: '/videos/session-cueing.mp4',
    videoPoster: '/videos/session-cueing-poster.jpg',
    videoLabel: 'Fortune coaching a client through kneeling cable crunches',
    photos: [
      { image: '/images/session-cueing.jpg', caption: 'Form cueing', alt: 'Fortune cueing a client mid-rep' },
      { image: '/images/session-coaching.jpg', caption: 'One-on-one', alt: 'Fortune watching a client complete a set' },
    ],
  },
}

export const strengths = {
  title: 'Coaching Strengths',
  items: [
    'Form Cueing',
    'Scaling for All Levels',
    'Circuit Training',
    'HIIT',
    'Program Design',
    'Strength & Conditioning',
    'Mobility',
    'Nutrition Guidance',
    'Motivation & Accountability',
  ],
  highlight: {
    value: '10–12',
    unit: 'Weeks',
    caption: 'Average time for clients to reach their target weight-loss range',
  },
}

// Each testimonial: quote, name, and optionally age and/or program (shown as "Age 23 · Program").
export const testimonials = {
  headline: 'SUCCESS STORIES.',
  items: [
    {
      quote:
        'Coach Whyte changed my life for the good.',
      name: 'Maxwell Ajibona',
      age: 23,
    },
    {
      quote:
        'From the history you can tell he knows his craft better than others. Experience is the best teacher.',
      name: 'Dolapo Akindele',
      age: 23,
    },
    {
      quote:
        "I've been training with Fortune for about 2 years now. I play football with him, even after becoming a father. His level of discipline is exceptional, not just with fitness, but it will influence other areas of your life.",
      name: 'Emenike Chukwodi',
      age: 38,
    },
  ],
}

export const contact = {
  headline: ['READY TO', 'START?'],
  subheading: "Let's build a plan around your goals.",
  cta: { label: 'Book a Session', href: 'mailto:greatfortunewhyte@yahoo.com' },
  phone: { label: '306-510-6235', href: 'tel:3065106235' },
  email: { label: 'greatfortunewhyte@yahoo.com', href: 'mailto:greatfortunewhyte@yahoo.com' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/great-fortune-abiye-whyte' },
}

export const footer = {
  text: '© Fortune Whyte · Regina, SK',
  year: 2026,
}
