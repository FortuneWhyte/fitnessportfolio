import { useCallback, useEffect, useRef, useState } from 'react'
import { Image as ImageIcon } from '@phosphor-icons/react'

const clamp = (value) => Math.min(100, Math.max(0, value))

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = 'Before',
  afterAlt = 'After',
  className = '',
}) {
  const sliderRef = useRef(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [width, setWidth] = useState(0)

  // Track the slider width so the before image is clipped rather than squashed
  useEffect(() => {
    const node = sliderRef.current
    if (!node || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const moveTo = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }, [])

  const handlePointerDown = (event) => {
    // Primary mouse button, any touch or pen contact
    if (event.pointerType === 'mouse' && event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
    moveTo(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!dragging) return
    moveTo(event.clientX)
  }

  const stopDragging = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setDragging(false)
  }

  return (
    <div
      ref={sliderRef}
      className={['comparison-slider', dragging && 'is-dragging', className]
        .filter(Boolean)
        .join(' ')}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      style={width ? { '--ba-width': `${width}px` } : undefined}
    >
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
