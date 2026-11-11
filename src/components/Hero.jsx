import { Barbell } from '@phosphor-icons/react'
import { hero } from '../content.js'
import Reveal from './Reveal.jsx'

function withBreaks(lines) {
  return lines.map((line, i) => (
    <span key={line}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ))
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-20 scroll-mt-20"
    >
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="z-10 relative">
          <Reveal
            as="p"
            className="text-accent font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            {hero.eyebrow}
          </Reveal>
          <Reveal
            as="h1"
            className="font-heading text-[12vw] lg:text-[100px] leading-[0.9] mb-6"
          >
            {withBreaks(hero.headline)}
          </Reveal>
          <Reveal
            as="p"
            className="text-soft-gray text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            {hero.subheading}
          </Reveal>
          <Reveal className="flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="bg-accent text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,61,0,0.3)]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="border border-white/20 hover:border-accent px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
            >
              {hero.secondaryCta.label}
            </a>
          </Reveal>
        </div>

        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full opacity-40 lg:opacity-100 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ink z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-10" />
          {hero.image ? (
            <img src={hero.image} alt={hero.imageAlt} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Barbell weight="duotone" className="text-[200px] text-white/10" />
                <span className="text-white/20 uppercase tracking-[1em] text-xs">
                  {hero.imagePlaceholder}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
