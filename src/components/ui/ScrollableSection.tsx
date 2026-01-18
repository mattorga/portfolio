import { ReactNode } from 'react'

interface ScrollableSectionProps {
  title: string
  children: ReactNode
  currentPage?: number
  totalPages?: number
  isActive?: boolean
}

const ScrollableSection = ({
  title,
  children,
  currentPage = 1,
  totalPages,
  isActive = false
}: ScrollableSectionProps) => {
  // Only apply max-height and scrolling if there are more than 3 items
  const needsScroll = totalPages && totalPages > 3

  return (
    <fieldset className={`border p-3 space-y-2 relative transition-colors ${isActive ? 'border-[#6B9B9B]' : 'border-border'}`}>
      <legend className={`text-xs px-2 transition-colors ${isActive ? 'text-[#6B9B9B]' : 'text-muted-foreground'}`}>[{title}]</legend>

      {/* Scrollable container - shows 3 items at a time when needed */}
      <div className={`space-y-2 text-sm snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${needsScroll ? 'max-h-[108px] overflow-y-auto overflow-x-hidden px-2 -mx-2' : ''}`}>
        {children}
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
