import { results } from '../content.js'
import BeforeAfterSlider from './BeforeAfterSlider.jsx'
import Reveal from './Reveal.jsx'

function ResultCard({ card }) {
  return (
    <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/5">
      <div className="flex h-48">
        <div className="w-1/2 bg-gray-900 border-r border-white/5 flex items-center justify-center">
          {card.before ? (
            <img
              src={card.before}
              alt={`Before: ${card.goal}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
              Before
            </span>
          )}
        </div>
        <div className="w-1/2 bg-gray-800 flex items-center justify-center">
          {card.after ? (
            <img
              src={card.after}
              alt={`After: ${card.goal}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[10px] text-accent/40 font-bold uppercase tracking-widest">
              After
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold tracking-tighter text-accent uppercase">
            {card.duration}
          </span>
          <span className="text-[10px] text-soft-gray uppercase tracking-widest">
            Goal: {card.goal}
          </span>
        </div>
        <p className="text-sm font-semibold mb-2">{card.result}</p>
        <p className="text-[10px] text-soft-gray italic">Client goal: {card.clientGoal}</p>
      </div>
    </div>
  )
}

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

      <Reveal className="grid md:grid-cols-3 gap-8">
        {results.cards.map((card) => (
          <ResultCard key={`${card.duration}-${card.goal}`} card={card} />
        ))}
      </Reveal>
    </section>
  )
}
