import { ReactNode } from 'react'

interface ScrollableSectionProps {
  title: string
  children: ReactNode
  currentPage?: number
  totalPages?: number
}

const ScrollableSection = ({
  title,
  children,
  currentPage = 1,
  totalPages
}: ScrollableSectionProps) => {
  // Only apply max-height and scrolling if there are more than 3 items
  const needsScroll = totalPages && totalPages > 3

  return (
    <fieldset className="border border-border p-3 space-y-2 relative">
      <legend className="text-xs text-muted-foreground px-2">[{title}]</legend>

      {/* Scrollable container - shows 3 items at a time when needed */}
      <div className={`space-y-2 text-sm snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${needsScroll ? 'max-h-[108px] overflow-y-auto overflow-x-hidden' : ''}`}>
        {children}
      </div>

      {/* Dynamic counter */}
      {totalPages && (
        <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
          {currentPage} of {totalPages}
        </div>
      )}
    </fieldset>
  )
}

export default ScrollableSection
