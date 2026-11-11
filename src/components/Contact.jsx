import { Envelope, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { contact, footer } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-16 px-8 md:px-20 text-center scroll-mt-20">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="font-heading text-8xl md:text-[12vw] leading-[0.8] mb-8">
          {contact.headline[0]}
          <br />
          {contact.headline[1]}
        </h2>
        <p className="text-2xl text-soft-gray mb-12">{contact.subheading}</p>

        <a
          href={contact.cta.href}
          className="inline-block bg-accent text-white px-16 py-8 rounded-full font-heading text-3xl hover:scale-105 transition-transform duration-300 mb-20 shadow-[0_0_50px_rgba(255,61,0,0.3)]"
        >
          {contact.cta.label}
        </a>

        <div className="flex flex-wrap justify-center gap-12 text-sm font-semibold uppercase tracking-widest border-t border-white/10 pt-16 mb-20">
          <a
            href={contact.phone.href}
            className="flex items-center gap-3 hover:text-accent transition-colors"
          >
            <Phone className="text-xl" /> {contact.phone.label}
          </a>
          <a
            href={contact.email.href}
            className="flex items-center gap-3 hover:text-accent transition-colors"
          >
            <Envelope className="text-xl" /> {contact.email.label}
          </a>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 hover:text-accent transition-colors"
          >
            <LinkedinLogo className="text-xl" /> {contact.linkedin.label}
          </a>
        </div>

        <footer className="text-xs text-white/30 tracking-[0.4em] uppercase">
          {footer.text} · {footer.year}
        </footer>
      </Reveal>
    </section>
  )
}
