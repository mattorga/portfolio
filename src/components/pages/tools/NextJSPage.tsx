import { SiNextdotjs } from 'react-icons/si'

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

      {/* Features I've used */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Features I've Mastered</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            App Router
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Server Components
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            API Routes
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            ISR & SSG
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Middleware
          </div>
          <div className="p-2 bg-accent/5 border border-accent/10 rounded text-xs">
            Image Optimization
          </div>
        </div>
      </div>

      {/* What I've built */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Built With Next.js</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• E-commerce platform with 10K+ monthly visitors</p>
          <p>• SaaS dashboard with real-time analytics</p>
          <p>• Marketing websites with perfect Lighthouse scores</p>
        </div>
      </div>

      {/* Highlight */}
      <div className="p-3 bg-gradient-to-r from-coral/10 to-accent/10 rounded border-l-4 border-coral">
        <p className="text-xs font-semibold mb-1">Why Next.js?</p>
        <p className="text-xs text-muted-foreground">
          Best DX for React apps. Built-in optimization, excellent routing, and seamless
          deployment make it my framework of choice for production apps.
        </p>
      </div>
    </div>
  )
}

export default NextJSPage
