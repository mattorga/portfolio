import { SiJavascript } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const JavaScriptPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-yellow-400/10 rounded-lg">
          <SiJavascript className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">JavaScript</h3>
          <p className="text-sm text-muted-foreground mt-1">
            The Language of the Web (ES6+)
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use JavaScript For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Client-Side Rendering</p>
            <p className="text-xs text-muted-foreground mt-1">
              Optimized React Router implementations reducing page load times
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Desktop Application UI</p>
            <p className="text-xs text-muted-foreground mt-1">
              Frontend interfaces for 3D pose estimation desktop applications
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">API Integration</p>
            <p className="text-xs text-muted-foreground mt-1">
              GraphQL and REST API consumption with AWS AppSync
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Hino Motors Analytics Platform" year="2025-2026" />
          <RelatedExperienceLink label="ISI Traffic Analytics Internship" year="2024" />
          <RelatedExperienceLink label="GaitScape Thesis Application" year="2023-2025" />
          <RelatedExperienceLink label="Component Borrowing System" year="2023" />
        </div>
      </div>
    </div>
  )
}

export default JavaScriptPage
