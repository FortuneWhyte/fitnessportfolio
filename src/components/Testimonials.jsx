import { Quotes } from '@phosphor-icons/react'
import { testimonials } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Testimonials() {
  return (
    <section className="py-32 px-8 md:px-20 bg-black/30 scroll-mt-20">
      <Reveal className="text-center mb-16">
        <h2 className="font-heading text-6xl md:text-7xl">{testimonials.headline}</h2>
      </Reveal>

      <Reveal className="grid md:grid-cols-3 gap-8">
        {testimonials.items.map((item, i) => (
          <div key={i} className="bg-charcoal p-10 rounded-2xl relative border border-white/5">
            <Quotes className="text-6xl text-accent mb-6 block opacity-50" />
            <p className="text-lg leading-relaxed mb-8 italic">"{item.quote}"</p>
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-xs text-soft-gray uppercase tracking-widest">
                {[item.age && `Age ${item.age}`, item.program].filter(Boolean).join(' · ')}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
