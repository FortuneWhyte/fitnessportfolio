import { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { nav } from '../content.js'
import useActiveSection from '../hooks/useActiveSection.js'

const sectionIds = nav.links.map((link) => link.href.slice(1))

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const isActive = (link) => link.href === `#${active}`

  // Close the phone menu with Escape, or when the screen grows past the lg breakpoint
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 1024px)')
    const onResize = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-ink/80 backdrop-blur-md border-b border-white/5 py-4 px-8 md:px-20 flex justify-between items-center">
      <a href={nav.logo.href} onClick={close} className="font-heading text-3xl tracking-tighter">
        {nav.logo.first}
        <span className="text-accent">{nav.logo.accent}</span>
      </a>

      <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-semibold uppercase tracking-widest">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive(link) ? 'location' : undefined}
            className={`transition-colors duration-300 hover:text-accent ${isActive(link) ? 'text-accent' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={nav.cta.href}
          onClick={close}
          className="bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:scale-105 transition-transform duration-300"
        >
          {nav.cta.label}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden -mr-2 p-2 text-2xl hover:text-accent transition-colors"
        >
          {open ? <X /> : <List />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden absolute top-full left-0 w-full bg-ink border-b border-white/10 shadow-2xl"
      >
        <ul className="flex flex-col px-8 py-4">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                aria-current={isActive(link) ? 'location' : undefined}
                className={`block py-4 font-heading text-3xl tracking-tight border-b border-white/5 hover:text-accent transition-colors ${isActive(link) ? 'text-accent' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
