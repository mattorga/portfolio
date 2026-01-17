import { SiTypescript, SiPython, SiReact } from 'react-icons/si'

const Project2Page = () => {
  return (
    <div className="space-y-6">
      {/* Minimal header style */}
      <div className="border-b border-border pb-3">
        <h3 className="text-3xl font-bold">Project 2</h3>
        <p className="text-sm text-coral mt-1">AI-Powered Analytics Dashboard</p>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-accent mb-2">Overview</h4>
            <p className="text-xs text-muted-foreground">
              Machine learning dashboard that analyzes user behavior patterns
              and provides predictive insights for business decisions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent mb-2">My Role</h4>
            <p className="text-xs text-muted-foreground">
              Lead Developer - Architected the ML pipeline, built the React
              frontend, and integrated with Python backend services.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs">
                <SiReact className="w-4 h-4" />
                <span className="text-muted-foreground">React + Vite</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <SiPython className="w-4 h-4" />
                <span className="text-muted-foreground">FastAPI + Scikit-learn</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <SiTypescript className="w-4 h-4" />
                <span className="text-muted-foreground">TypeScript</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent mb-2">Impact</h4>
            <p className="text-xs text-muted-foreground">
              Improved decision-making speed by 40% and reduced manual
              analysis time from hours to minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Full width stats */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">10K+</p>
          <p className="text-xs text-muted-foreground mt-1">Data Points/Day</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">95%</p>
          <p className="text-xs text-muted-foreground mt-1">Prediction Accuracy</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">500+</p>
          <p className="text-xs text-muted-foreground mt-1">Active Users</p>
        </div>
      </div>
    </div>
  )
}

export default Project2Page
