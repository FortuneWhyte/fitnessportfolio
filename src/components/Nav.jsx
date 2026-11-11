import { nav } from '../content.js'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-ink/80 backdrop-blur-md border-b border-white/5 py-4 px-8 md:px-20 flex justify-between items-center">
      <a href={nav.logo.href} className="font-heading text-3xl tracking-tighter">
        {nav.logo.first}
        <span className="text-accent">{nav.logo.accent}</span>
      </a>

      <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-widest">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors duration-300 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href={nav.cta.href}
        className="bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:scale-105 transition-transform duration-300"
      >
        {nav.cta.label}
      </a>
    </nav>
  )
}
