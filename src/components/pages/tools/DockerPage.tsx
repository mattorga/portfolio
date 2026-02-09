import { SiDocker } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const DockerPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <SiDocker className="w-10 h-10 text-blue-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Docker</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Container Platform
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use Docker For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Lambda Layer Development</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building custom Lambda layers within Amazon Linux environment
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Consistent Dev Environments</p>
            <p className="text-xs text-muted-foreground mt-1">
              Containerized development for cross-platform compatibility
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Serverless Deployment</p>
            <p className="text-xs text-muted-foreground mt-1">
              Packaging dependencies for AWS Lambda functions
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Hino Motors Analytics Platform" year="2025-2026" />
          <RelatedExperienceLink label="AWS Lambda Layers" year="2025-2026" />
          <RelatedExperienceLink label="Serverless Backend Development" year="2025-2026" />
          <RelatedExperienceLink label="Internal QA Tool" year="2025-2026" />
        </div>
      </div>
    </div>
  )
}

export default DockerPage
