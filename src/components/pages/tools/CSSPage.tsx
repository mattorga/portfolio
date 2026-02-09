import { SiCss3 } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const CSSPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-600/10 rounded-lg">
          <SiCss3 className="w-10 h-10 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">CSS3</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Styling Language for the Web
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use CSS For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Dashboard Layouts</p>
            <p className="text-xs text-muted-foreground mt-1">
              Responsive grid systems for analytics and data visualization interfaces
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">UI Component Styling</p>
            <p className="text-xs text-muted-foreground mt-1">
              Custom styling for enterprise applications with Flexbox and Grid
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Interactive Animations</p>
            <p className="text-xs text-muted-foreground mt-1">
              Transitions and animations for enhanced user experience
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Hino Motors Analytics Platform" year="2025-2026" />
          <RelatedExperienceLink label="Health Equity Dashboard" year="2025-2026" />
          <RelatedExperienceLink label="ISI Traffic Analytics App" year="2024" />
          <RelatedExperienceLink label="Component Borrowing System" year="2023" />
        </div>
      </div>
    </div>
  )
}

export default CSSPage
