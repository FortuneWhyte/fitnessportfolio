import { ArrowRight, Barbell, ClipboardText, UsersThree } from '@phosphor-icons/react'
import { services } from '../content.js'
import Reveal from './Reveal.jsx'

const serviceIcons = {
  barbell: Barbell,
  'users-three': UsersThree,
  'clipboard-text': ClipboardText,
}

export default function Services() {
  return (
    <section id="coaching" className="py-32 px-8 md:px-20 bg-black/30 scroll-mt-20">
      <Reveal className="flex justify-between items-end mb-16">
        <div>
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            {services.label}
          </span>
          <h2 className="font-heading text-6xl md:text-8xl leading-none">{services.headline}</h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.items.map((service) => {
          const Icon = serviceIcons[service.icon]
          return (
            <Reveal
              key={service.title}
              className="bg-charcoal p-10 rounded-2xl border border-white/5 hover:-translate-y-2 transition-all group"
            >
              {Icon && <Icon className="text-5xl text-accent mb-8 block" />}
              <h3 className="font-heading text-3xl mb-4">{service.title}</h3>
              <p className="text-soft-gray mb-8 leading-relaxed">{service.description}</p>
              <a
                href={services.linkHref}
                className="flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all"
              >
                {services.linkLabel} <ArrowRight />
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
