import { SiJavascript } from 'react-icons/si'

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
            The Language of the Web
          </p>
        </div>
      </div>

      {/* Foundation */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">My Foundation</h4>
        <p className="text-sm text-muted-foreground">
          JavaScript is where my web development journey began. Deep understanding of
          its quirks, patterns, and modern features (ES6+) enables me to write
          clean, performant code.
        </p>
      </div>

      {/* Core concepts */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Core Concepts Mastered</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Closures & Scope
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Async/Await
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Promises
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Event Loop
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Prototypes
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Modules (ESM)
          </div>
        </div>
      </div>

      {/* Modern features */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">ES6+ Features I Love</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Destructuring & spread operators</p>
          <p>• Arrow functions & implicit returns</p>
          <p>• Optional chaining & nullish coalescing</p>
          <p>• Array methods (map, filter, reduce)</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">5+</p>
          <p className="text-xs text-muted-foreground mt-1">Years Coding</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">50+</p>
          <p className="text-xs text-muted-foreground mt-1">Projects</p>
        </div>
      </div>
    </div>
  )
}

export default JavaScriptPage
