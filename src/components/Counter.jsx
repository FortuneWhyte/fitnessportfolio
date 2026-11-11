import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

/** Counts from 0 up to `target` over `duration` ms once fully in view. */
export default function Counter({ target, duration = 2000 }) {
  const [ref, inView] = useInView({ threshold: 1 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return <span ref={ref}>{value}</span>
}
