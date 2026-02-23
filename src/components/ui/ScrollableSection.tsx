import { ReactNode, useRef, useState, useEffect, useCallback } from 'react'

interface ScrollableSectionProps {
  title: string
  children: ReactNode
  currentPage?: number
  totalPages?: number
  isActive?: boolean
  flexGrow?: boolean
}

const ScrollableSection = ({
  title,
  children,
  currentPage = 1,
  totalPages,
  isActive = false,
  flexGrow = false
}: ScrollableSectionProps) => {
  // Only apply max-height and scrolling if there are more than 3 items
  const needsScroll = totalPages && totalPages > 3
  const scrollRef = useRef<HTMLDivElement>(null)
  const [topFadeOpacity, setTopFadeOpacity] = useState(0)
  const [bottomFadeOpacity, setBottomFadeOpacity] = useState(0)

  const updateFadeVisibility = useCallback(() => {
    const el = scrollRef.current
    if (!el || !needsScroll) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const isScrollable = scrollHeight > clientHeight

    if (!isScrollable) {
      setTopFadeOpacity(0)
      setBottomFadeOpacity(0)
      return
    }

    const fadeDistance = 24
    const distanceFromBottom = scrollHeight - clientHeight - scrollTop

    const maxOpacity = 0.6
    setTopFadeOpacity(Math.min(scrollTop / fadeDistance, maxOpacity))
    setBottomFadeOpacity(Math.min(distanceFromBottom / fadeDistance, maxOpacity))
  }, [needsScroll])

  useEffect(() => {
    updateFadeVisibility()
  }, [currentPage, totalPages, updateFadeVisibility])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !needsScroll) return

    el.addEventListener('scroll', updateFadeVisibility)
    return () => el.removeEventListener('scroll', updateFadeVisibility)
  }, [needsScroll, updateFadeVisibility])

  return (
    <fieldset className={`border p-2 lg:p-3 space-y-1.5 lg:space-y-2 relative transition-colors ${isActive ? 'border-[#6B9B9B]' : 'border-border'} ${flexGrow && needsScroll ? 'flex-1 min-h-0 flex flex-col' : ''}`}>
      <legend className={`text-xs px-2 transition-colors ${isActive ? 'text-[#6B9B9B]' : 'text-muted-foreground'}`}>[{title}]</legend>

      {/* Scrollable container - shows 3 items at a time when needed */}
      <div className={`relative overflow-hidden -mx-2 ${flexGrow && needsScroll ? 'flex-1 min-h-0' : ''}`}>
        <div
          ref={scrollRef}
          className={`space-y-2 text-sm snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 ${needsScroll ? (flexGrow ? 'h-full overflow-y-auto overflow-x-hidden' : 'max-h-[clamp(3.5rem,12vh,108px)] overflow-y-auto overflow-x-hidden') : ''}`}
        >
          {children}
        </div>

        {/* Scroll fade indicators - only when scrollable */}
        {needsScroll && (
          <>
            <div
              className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background to-transparent pointer-events-none"
              style={{ opacity: topFadeOpacity }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none"
              style={{ opacity: bottomFadeOpacity }}
            />
          </>
        )}
      </div>

      {/* Dynamic counter */}
      {totalPages && (
        <div className={`absolute -bottom-2 right-3 bg-background px-2 text-xs transition-colors ${isActive ? 'text-[#6B9B9B]' : 'text-muted-foreground'}`}>
          {currentPage} of {totalPages}
        </div>
      )}
    </fieldset>
  )
}

export default ScrollableSection
