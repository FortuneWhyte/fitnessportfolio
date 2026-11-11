import useInView from '../hooks/useInView.js'

/**
 * Renders `as` (a div by default) with the .reveal class and adds .active
 * the first time it scrolls into view. `delay` is a transition delay in ms.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const classes = ['reveal', inView && 'active', className].filter(Boolean).join(' ')
  const mergedStyle = delay ? { transitionDelay: `${delay}ms`, ...style } : style

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  )
}
