import { SiTypescript, SiPython, SiReact } from 'react-icons/si'

const Project4Page = () => {
  return (
    <div className="space-y-6">
      {/* Compact header */}
      <div>
        <h3 className="text-xl font-bold">Project 4</h3>
        <p className="text-coral text-sm mt-0.5">Real-time Collaboration Tool</p>
      </div>

      {/* Feature grid */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Features</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Live Cursors</p>
            <p className="text-xs text-muted-foreground mt-1">
              See collaborators' cursors in real-time
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Presence</p>
            <p className="text-xs text-muted-foreground mt-1">
              Know who's viewing the document
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Comments</p>
            <p className="text-xs text-muted-foreground mt-1">
              Thread-based discussions
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Version History</p>
            <p className="text-xs text-muted-foreground mt-1">
              Track all document changes
            </p>
          </div>
        </div>
      </div>

      {/* Architecture overview */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral">Frontend:</span>
            <span>React + TypeScript with Yjs for CRDT-based sync</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral">Backend:</span>
            <span>Python WebSocket server with Redis pub/sub</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral">Database:</span>
            <span>PostgreSQL for persistence, Redis for session state</span>
          </div>
        </div>
      </div>

      {/* Tech stack simple list */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Stack</h4>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <SiReact className="w-4 h-4 text-cyan-400" />
            <span className="text-muted-foreground">React</span>
          </div>
          <div className="flex items-center gap-1.5">
            <SiTypescript className="w-4 h-4 text-blue-400" />
            <span className="text-muted-foreground">TypeScript</span>
          </div>
          <div className="flex items-center gap-1.5">
            <SiPython className="w-4 h-4 text-yellow-400" />
            <span className="text-muted-foreground">Python</span>
          </div>
        </div>
      </div>

      {/* Learning outcome */}
      <div className="mt-4 p-3 bg-gradient-to-r from-accent/10 to-transparent rounded">
        <p className="text-xs font-medium text-accent mb-1">Key Learning</p>
        <p className="text-xs text-muted-foreground">
          Deep dive into conflict-free replicated data types (CRDTs) and operational
          transformation algorithms for real-time collaboration.
        </p>
      </div>
    </div>
  )
}

export default Project4Page
