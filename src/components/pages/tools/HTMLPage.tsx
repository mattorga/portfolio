import { SiHtml5 } from 'react-icons/si'

const HTMLPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with icon */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-500/10 rounded-lg">
          <SiHtml5 className="w-10 h-10 text-orange-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">HTML5</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Markup Language for Web Structure
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Experience</h4>
        <p className="text-sm text-muted-foreground">
          5+ years building semantic, accessible web applications. Deep understanding of
          HTML5 APIs, forms, and modern best practices.
        </p>
      </div>

      {/* Key Skills */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Key Skills</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Semantic HTML</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Accessibility (A11y)</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">SEO Optimization</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Forms & Validation</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Canvas API</span>
        </div>
      </div>

      {/* Projects using this */}
      <div className="p-3 bg-accent/5 border-l-4 border-accent rounded">
        <h4 className="text-xs font-semibold mb-2">Used In</h4>
        <p className="text-xs text-muted-foreground">
          Every web project I've built - Portfolio, E-commerce platforms, Dashboards
        </p>
      </div>
    </div>
  )
}

export default HTMLPage
