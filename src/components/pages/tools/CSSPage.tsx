import { SiCss3 } from 'react-icons/si'

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

      {/* What I know */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Flexbox</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Grid Layout</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Animations</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Custom Properties</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Pseudo-elements</span>
        </div>
      </div>

      {/* Learning journey */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Currently Learning</h4>
        <p className="text-sm text-muted-foreground">
          Deepening my understanding of responsive design patterns, CSS architecture
          methodologies (BEM, CUBE CSS), and advanced layout techniques.
        </p>
      </div>

      {/* Approach */}
      <div className="p-3 bg-accent/5 rounded border-l-4 border-accent">
        <h4 className="text-xs font-semibold mb-2">My Approach</h4>
        <p className="text-xs text-muted-foreground">
          I combine vanilla CSS knowledge with utility-first frameworks like Tailwind.
          Understanding CSS fundamentals helps me write better, more maintainable styles.
        </p>
      </div>

      {/* Tools I use with CSS */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">CSS Ecosystem</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Tailwind CSS for rapid development</p>
          <p>• CSS Modules for component-scoped styles</p>
          <p>• PostCSS for transformations</p>
        </div>
      </div>
    </div>
  )
}

export default CSSPage
