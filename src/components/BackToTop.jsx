import { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react'

// Floating button that appears once the visitor has scrolled past the hero.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(window.scrollY > window.innerHeight)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 w-12 h-12 rounded-full bg-charcoal/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl shadow-lg hover:bg-accent hover:border-accent transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp weight="bold" />
    </a>
  )
}
