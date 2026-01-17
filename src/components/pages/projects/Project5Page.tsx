import { SiTypescript, SiPython, SiReact } from 'react-icons/si'

const Project5Page = () => {
  return (
    <div className="space-y-6">
      {/* Visual-focused header */}
      <div className="relative overflow-hidden rounded-lg border border-border p-6 bg-gradient-to-br from-accent/5 via-coral/5 to-transparent">
        <h3 className="text-2xl font-bold">Project 5</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Smart Task Automation Platform
        </p>
      </div>

      {/* Quick facts */}
      <div className="flex justify-between text-center">
        <div>
          <p className="text-xs text-muted-foreground">Duration</p>
          <p className="text-sm font-semibold text-accent mt-0.5">3 months</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Team Size</p>
          <p className="text-sm font-semibold text-accent mt-0.5">Solo</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Users</p>
          <p className="text-sm font-semibold text-accent mt-0.5">1,000+</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm text-muted-foreground">
          An automation platform that lets users create custom workflows without code.
          Supports 50+ integrations including Slack, Gmail, Notion, and more.
        </p>
      </div>

      {/* Highlights in cards */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Project Highlights</h4>
        <div className="space-y-2">
          <div className="flex gap-3 p-3 border border-border rounded-lg hover:border-accent/50 transition-colors">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-xs font-bold">1</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium">Visual Workflow Builder</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Drag-and-drop interface for creating automation flows
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 border border-border rounded-lg hover:border-accent/50 transition-colors">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-xs font-bold">2</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium">Smart Triggers</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                AI-powered trigger suggestions based on user behavior
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 border border-border rounded-lg hover:border-accent/50 transition-colors">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-xs font-bold">3</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium">Execution Analytics</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Detailed logs and performance metrics for each workflow
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech icons with labels */}
      <div className="pt-2 border-t border-border">
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">Technologies:</span>
          <div className="flex items-center gap-3">
            <SiReact className="w-4 h-4 text-cyan-400" title="React" />
            <SiTypescript className="w-4 h-4 text-blue-400" title="TypeScript" />
            <SiPython className="w-4 h-4 text-yellow-400" title="Python" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project5Page
