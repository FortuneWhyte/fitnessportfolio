import { approach } from '../content.js'
import Reveal from './Reveal.jsx'
import VideoLoop from './VideoLoop.jsx'

export default function Approach() {
  const { session } = approach

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

      {session && (
        <Reveal className="mt-24 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {session.eyebrow}
            </span>
            <h3 className="font-heading text-5xl md:text-7xl leading-none mb-6">
              {session.headline[0]}
              <br />
              {session.headline[1]}
            </h3>
            <p className="text-soft-gray text-lg leading-relaxed">{session.body}</p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            <figure className="relative col-span-2 sm:col-span-1 aspect-[4/5] sm:aspect-[9/16] rounded-2xl overflow-hidden border border-accent/40 bg-charcoal">
              <VideoLoop
                src={session.video}
                poster={session.videoPoster}
                label={session.videoLabel}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Session footage
              </span>
            </figure>

            {session.photos.map((photo) => (
              <figure
                key={photo.image}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-charcoal"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent pt-12 pb-4 px-4 text-[10px] font-bold uppercase tracking-widest">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  )
}
