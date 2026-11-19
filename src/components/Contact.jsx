import { Envelope, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { contact, footer } from '../content.js'
import EnquiryForm from './EnquiryForm.jsx'
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

        <div className="max-w-2xl mx-auto mb-20">
          <EnquiryForm />
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-sm font-semibold uppercase tracking-widest border-t border-white/10 pt-16 mb-20">
          <a
            href={contact.phone.href}
            className="flex items-center gap-3 hover:text-accent transition-colors"
          >
            <Phone className="text-xl h-7" /> {contact.phone.label}
          </a>
          <a
            href={contact.email.href}
            className="flex items-center gap-3 min-w-0 max-w-full hover:text-accent transition-colors"
          >
            <Envelope className="text-xl h-7 shrink-0" />
            <span className="[overflow-wrap:anywhere] max-[379px]:tracking-wider">
              {contact.email.label.split('@')[0]}@<wbr />
              {contact.email.label.split('@')[1]}
            </span>
          </a>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 hover:text-accent transition-colors"
          >
            <LinkedinLogo className="text-xl h-7" /> {contact.linkedin.label}
          </a>
        </div>

        <footer className="text-xs text-white/30 tracking-[0.4em] uppercase">
          {footer.text} · {footer.year}
        </footer>
      </Reveal>
    </section>
  )
}
