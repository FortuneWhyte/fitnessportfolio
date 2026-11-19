import { Barbell, Check, ClipboardText, UsersThree } from '@phosphor-icons/react'
import { packages } from '../content.js'
import { INTEREST_EVENT } from './EnquiryForm.jsx'
import Reveal from './Reveal.jsx'

const packageIcons = {
  barbell: Barbell,
  'users-three': UsersThree,
  'clipboard-text': ClipboardText,
}

// Preselect this package in the enquiry form, then let the #contact link scroll there
const selectInterest = (interest) =>
  window.dispatchEvent(new CustomEvent(INTEREST_EVENT, { detail: interest }))

export default function Packages() {
  return (
    <section id="packages" className="py-32 px-8 md:px-20 bg-ink scroll-mt-20">
      <Reveal className="mb-16">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          {packages.label}
        </span>
        <h2 className="font-heading text-6xl md:text-8xl leading-none mb-6">{packages.headline}</h2>
        <p className="text-soft-gray text-lg max-w-xl">{packages.intro}</p>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-8">
        {packages.items.map((item, i) => {
          const Icon = packageIcons[item.icon]
          return (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="bg-charcoal p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-4xl">{item.title}</h3>
                {Icon && <Icon className="text-4xl text-accent" />}
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                {item.price ? (
                  <p>
                    <span className="font-heading text-6xl">{item.price}</span>
                    {item.priceNote && (
                      <span className="ml-2 text-sm text-soft-gray uppercase tracking-widest">
                        {item.priceNote}
                      </span>
                    )}
                  </p>
                ) : (
                  <p className="font-heading text-3xl text-soft-gray">{packages.askLabel}</p>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-soft-gray">
                    <Check weight="bold" className="text-accent text-lg shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => selectInterest(item.interest)}
                className="block text-center border border-white/20 hover:border-accent hover:bg-accent rounded-full py-4 font-bold uppercase text-xs tracking-widest transition-colors"
              >
                {packages.ctaLabel}
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
