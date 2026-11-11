import { useState } from 'react'
import { Image as ImageIcon } from '@phosphor-icons/react'

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = 'Before',
  afterAlt = 'After',
  className = '',
}) {
  const [position] = useState(50)

  return (
    <div className={`comparison-slider ${className}`.trim()}>
      <div className="absolute top-4 left-4 z-30 bg-black/60 px-4 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 z-30 bg-accent px-4 py-1 text-[10px] text-white font-bold tracking-widest uppercase rounded">
        After
      </div>

      <div className="ba-before" style={{ width: `${position}%` }}>
        {before ? (
          <img src={before} alt={beforeAlt} draggable={false} />
        ) : (
          <div className="w-full h-full bg-[#1A1B1E] flex items-center justify-center grayscale">
            <div className="text-center">
              <ImageIcon className="inline-block text-8xl text-white/5" />
              <p className="text-white/10 uppercase font-heading text-2xl mt-4">Before Image</p>
            </div>
          </div>
        )}
      </div>

      {after ? (
        <img src={after} alt={afterAlt} draggable={false} />
      ) : (
        <div className="w-full h-full bg-[#25262B] flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="inline-block text-8xl text-accent/10" />
            <p className="text-accent/20 uppercase font-heading text-2xl mt-4">After Image</p>
          </div>
        </div>
      )}

      <div className="ba-handle" style={{ left: `${position}%` }} />
    </div>
  )
}
