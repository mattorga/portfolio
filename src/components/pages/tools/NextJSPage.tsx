import { SiNextdotjs } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const NextJSPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/10 rounded-lg">
          <SiNextdotjs className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Next.js</h3>
          <p className="text-sm text-muted-foreground mt-1">
            React Framework for Production
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use Next.js For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Greenfield Analytics Platform</p>
            <p className="text-xs text-muted-foreground mt-1">
              Built Hino Motors AI-driven analytics web application from scratch
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Serverless Backend Integration</p>
            <p className="text-xs text-muted-foreground mt-1">
              API routes connected to AWS Lambda for real-time AI inference workloads
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Full-Stack CI/CD</p>
            <p className="text-xs text-muted-foreground mt-1">
              Managed deployment lifecycles via AWS Amplify with multi-tenant scaling
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Hino Motors Analytics Platform" year="2025-2026" />
          <RelatedExperienceLink label="Supervaise Software Engineer" year="2025-2026" />
          <RelatedExperienceLink label="AWS Amplify Deployments" year="2025-2026" />
        </div>
      </div>
    </div>
  )
}

export default NextJSPage
