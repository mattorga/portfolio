import { SiReact } from 'react-icons/si'

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

      {/* Why React */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">My Go-To Framework</h4>
        <p className="text-sm text-muted-foreground">
          React is my primary tool for building UIs. Its component-based architecture,
          virtual DOM, and rich ecosystem make it perfect for everything from simple
          sites to complex applications.
        </p>
      </div>

      {/* Advanced patterns */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Advanced Patterns & Hooks</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="text-xs font-mono text-coral mt-0.5">hooks:</span>
            <div className="flex-1 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useState</span>
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useEffect</span>
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useContext</span>
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useReducer</span>
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useMemo</span>
              <span className="px-2 py-0.5 bg-accent/10 text-xs rounded">useCallback</span>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xs font-mono text-coral mt-0.5">patterns:</span>
            <div className="flex-1 text-xs text-muted-foreground">
              Compound components, Render props, HOCs, Custom hooks
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">React Ecosystem</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-accent/5 rounded">React Router</div>
          <div className="p-2 bg-accent/5 rounded">React Query</div>
          <div className="p-2 bg-accent/5 rounded">Zustand</div>
          <div className="p-2 bg-accent/5 rounded">React Hook Form</div>
        </div>
      </div>

      {/* This portfolio note */}
      <div className="p-3 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded border-l-4 border-cyan-400">
        <p className="text-xs font-semibold mb-1">Meta</p>
        <p className="text-xs text-muted-foreground">
          You're looking at a React app right now! This portfolio showcases React with
          Vite, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </div>
  )
}

export default ReactPage
