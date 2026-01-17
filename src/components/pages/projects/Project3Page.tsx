import { SiTypescript, SiPython, SiReact } from 'react-icons/si'

const Project3Page = () => {
  return (
    <div className="space-y-5">
      {/* Card-style header */}
      <div className="bg-gradient-to-r from-accent/10 to-coral/10 p-4 rounded-lg">
        <h3 className="text-2xl font-bold">Project 3</h3>
        <p className="text-sm text-muted-foreground mt-1">
          E-commerce Platform with Advanced Search
        </p>
      </div>

      {/* Timeline/Process view */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Development Journey</h4>

        <div className="space-y-3 relative pl-6 border-l-2 border-accent/30">
          <div className="relative">
            <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-accent"></div>
            <div>
              <p className="text-sm font-medium">Phase 1: Planning & Design</p>
              <p className="text-xs text-muted-foreground mt-1">
                Created wireframes, defined data models, designed the architecture
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-accent"></div>
            <div>
              <p className="text-sm font-medium">Phase 2: Core Development</p>
              <p className="text-xs text-muted-foreground mt-1">
                Built product catalog, shopping cart, and checkout flow
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-accent"></div>
            <div>
              <p className="text-sm font-medium">Phase 3: Search Integration</p>
              <p className="text-xs text-muted-foreground mt-1">
                Implemented Elasticsearch for advanced product search and filtering
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-coral"></div>
            <div>
              <p className="text-sm font-medium">Phase 4: Launch & Optimization</p>
              <p className="text-xs text-muted-foreground mt-1">
                Performance tuning, SEO optimization, and user testing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack badges */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Built With</h4>
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs">
            <SiReact className="w-3 h-3" />
            React
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-xs">
            <SiPython className="w-3 h-3" />
            Python
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full text-xs">
            <SiTypescript className="w-3 h-3" />
            TypeScript
          </span>
          <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-xs">
            Elasticsearch
          </span>
          <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs">
            Stripe API
          </span>
        </div>
      </div>

      {/* Challenges overcome */}
      <div className="bg-coral/5 p-3 rounded border-l-4 border-coral">
        <h4 className="text-sm font-semibold mb-2">Challenge Solved</h4>
        <p className="text-xs text-muted-foreground">
          Optimized search queries to handle 10,000+ products with sub-100ms response times
          by implementing smart caching and query optimization strategies.
        </p>
      </div>
    </div>
  )
}

export default Project3Page
