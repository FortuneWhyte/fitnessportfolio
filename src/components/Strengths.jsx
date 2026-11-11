import { strengths } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Strengths() {
  const { highlight } = strengths

  return (
    <section className="py-32 px-8 md:px-20 scroll-mt-20">
      <Reveal className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-charcoal p-12 rounded-2xl border border-white/5">
          <h3 className="font-heading text-4xl mb-8">{strengths.title}</h3>
          <div className="flex flex-wrap gap-3">
            {strengths.items.map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-black rounded-full text-xs font-semibold border border-white/10 hover:border-accent transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-accent p-12 rounded-2xl flex flex-col justify-center items-center text-white text-center shadow-[0_0_50px_rgba(255,61,0,0.2)]">
          <p className="font-heading text-7xl min-[380px]:text-8xl sm:text-9xl leading-none whitespace-nowrap">{highlight.value}</p>
          <p className="font-heading text-5xl leading-none mb-4 uppercase">{highlight.unit}</p>
          <p className="text-sm font-bold uppercase tracking-widest max-w-xs">{highlight.caption}</p>
        </div>
      </Reveal>
    </section>
  )
}
