import { useEffect, useRef, useState } from 'react'

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.(reducedMotionQuery).matches,
  )

  useEffect(() => {
    const media = window.matchMedia?.(reducedMotionQuery)
    if (!media) return
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Muted, looping, inline video that only plays while on screen.
 * Shows the poster image instead when the visitor prefers reduced motion.
 */
export default function VideoLoop({ src, poster, label, className = '', preload = 'metadata' }) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = ref.current
    if (!video || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [reducedMotion])

  if (reducedMotion) {
    return <img src={poster} alt={label} className={className} />
  }

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      preload={preload}
      muted
      loop
      playsInline
      disablePictureInPicture
    />
  )
}
