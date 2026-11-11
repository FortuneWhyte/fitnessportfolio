import { results } from '../content.js'
import BeforeAfterSlider from './BeforeAfterSlider.jsx'
import Reveal from './Reveal.jsx'

export default function Results() {
  const { featured } = results

  return (
    <section id="results" className="py-32 px-8 md:px-20 scroll-mt-20">
      <Reveal className="text-center mb-20">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          {results.label}
        </span>
        <h2 className="font-heading text-6xl md:text-9xl leading-none mb-6">
          {results.headline[0]}
          <br />
          {results.headline[1]}
        </h2>
        <p className="text-soft-gray max-w-2xl mx-auto text-lg">{results.intro}</p>
      </Reveal>

      <Reveal className="mb-24">
        <BeforeAfterSlider
          className="rounded-2xl"
          before={featured.before}
          after={featured.after}
          beforeAlt={featured.beforeAlt}
          afterAlt={featured.afterAlt}
        />
      </Reveal>
    </section>
  )
}
