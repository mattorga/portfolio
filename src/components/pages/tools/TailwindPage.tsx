import { SiTailwindcss } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const TailwindPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cyan-500/10 rounded-lg">
          <SiTailwindcss className="w-10 h-10 text-cyan-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Tailwind CSS</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Utility-First CSS Framework
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use Tailwind For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Rapid UI Development</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building responsive layouts quickly with utility classes
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Design System Consistency</p>
            <p className="text-xs text-muted-foreground mt-1">
              Custom theme configuration for consistent design tokens
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Component Libraries</p>
            <p className="text-xs text-muted-foreground mt-1">
              Creating reusable styled components with dark mode support
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="This Portfolio Website" year="2025" />
          <RelatedExperienceLink label="Health Equity Dashboard" year="2025-2026" />
        </div>
      </div>
    </div>
  )
}

export default TailwindPage
