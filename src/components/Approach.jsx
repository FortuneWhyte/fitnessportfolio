import { approach } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Approach() {
  return (
    <section id="approach" className="py-32 px-8 md:px-20 bg-ink scroll-mt-20">
      <Reveal className="mb-20">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          {approach.label}
        </span>
        <h2 className="font-heading text-6xl md:text-8xl leading-none">{approach.headline}</h2>
      </Reveal>

      <div className="grid md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0" />

        {approach.steps.map((step, i) => (
          <Reveal key={step.number} className="relative z-10" delay={i * 100}>
            <div className="font-heading text-7xl md:text-8xl outline-text mb-4">{step.number}</div>
            <h4 className="font-bold text-xl mb-4 text-accent uppercase">{step.title}</h4>
            <p className="text-soft-gray text-sm leading-relaxed">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
