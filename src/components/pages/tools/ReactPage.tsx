import { SiReact } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const ReactPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cyan-400/10 rounded-lg">
          <SiReact className="w-10 h-10 text-cyan-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">React</h3>
          <p className="text-sm text-muted-foreground mt-1">
            JavaScript Library for UIs
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use React For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Analytics Dashboards</p>
            <p className="text-xs text-muted-foreground mt-1">
              Real-time AI-driven business intelligence interfaces at Supervaise
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Responsive Web Apps</p>
            <p className="text-xs text-muted-foreground mt-1">
              Multiple UI pages with enhanced UX for traffic analytics
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Data Visualization</p>
            <p className="text-xs text-muted-foreground mt-1">
              Health disparity dashboards for government stakeholders
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
          <RelatedExperienceLink label="ISI Traffic Analytics Internship" year="2024" />
          <RelatedExperienceLink label="This Portfolio Website" year="2025" />
        </div>
      </div>
    </div>
  )
}

export default ReactPage
