import { SiTypescript } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const TypeScriptPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <SiTypescript className="w-10 h-10 text-blue-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">TypeScript</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Typed Superset of JavaScript
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use TypeScript For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Enterprise Web Applications</p>
            <p className="text-xs text-muted-foreground mt-1">
              Type-safe frontend development for analytics platforms at Supervaise
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">API Integration</p>
            <p className="text-xs text-muted-foreground mt-1">
              Strongly typed interfaces for AWS Lambda and REST API responses
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Complex Data Models</p>
            <p className="text-xs text-muted-foreground mt-1">
              Type definitions for AI inference results and business intelligence data
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
          <RelatedExperienceLink label="This Portfolio Website" year="2025" />
        </div>
      </div>
    </div>
  )
}

export default TypeScriptPage
