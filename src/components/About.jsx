import { Certificate, Football, GraduationCap, UserFocus } from '@phosphor-icons/react'
import { about } from '../content.js'
import Reveal from './Reveal.jsx'

const badgeIcons = {
  certificate: Certificate,
  'graduation-cap': GraduationCap,
  football: Football,
}

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-accent/10 group-hover:opacity-0 transition-opacity" />
            {about.image ? (
              <img src={about.image} alt={about.imageAlt} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-charcoal">
                <UserFocus weight="duotone" className="text-8xl text-white/20" />
              </div>
            )}
          </div>
        </Reveal>

        <Reveal>
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            {about.label}
          </span>
          <h2 className="font-heading text-6xl md:text-8xl leading-none mb-8">
            {about.headline[0]}
            <br />
            {about.headline[1]}
          </h2>
          <p className="text-xl text-soft-gray leading-relaxed mb-10">{about.body}</p>

          <div className="space-y-4">
            {about.badges.map((badge) => {
              const Icon = badgeIcons[badge.icon]
              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 bg-charcoal p-4 rounded-xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    {Icon && <Icon className="text-accent text-xl" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{badge.title}</p>
                    <p className="text-xs text-soft-gray">{badge.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
