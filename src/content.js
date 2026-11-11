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
    'Personalized strength, conditioning and nutrition coaching that gets real results in 10–12 weeks.',
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
  // Large draggable before/after comparison
  featured: {
    before: '',
    after: '',
    beforeAlt: 'Client before',
    afterAlt: 'Client after',
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
    value: '6–8',
    unit: 'Weeks',
    caption: 'Average time for clients to reach their target weight-loss range',
  },
}

// Replace the placeholders with real, client-approved testimonials.
export const testimonials = {
  headline: 'SUCCESS STORIES.',
  items: [
    {
      quote: '[Client testimonial here.]',
      name: '[Client name]',
      program: 'One-on-One Coaching',
    },
    {
      quote: '[Client testimonial here.]',
      name: '[Client name]',
      program: 'Group Boot Camp',
    },
    {
      quote: '[Client testimonial here.]',
      name: '[Client name]',
      program: 'Nutrition & Accountability',
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
