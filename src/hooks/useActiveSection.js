import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently being read: the one that crosses
 * a line 40% of the way down the viewport. Returns '' when that line is over
 * a section not in `ids` (e.g. the hero). At the very bottom of the page the
 * last id wins, since a short final section may never reach the line.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')
  const key = ids.join(',')

  useEffect(() => {
    const list = key.split(',')
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.4
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = atBottom ? list[list.length - 1] : ''

      if (!atBottom) {
        for (const id of list) {
          const el = document.getElementById(id)
          if (!el) continue
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= line && bottom > line) {
            current = id
            break
          }
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key])

  return active
}
