const SupervaisePage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Fullstack Developer</h3>
          <p className="text-lg text-coral">Supervaise</p>
        </div>
        <p className="text-sm text-muted-foreground">June 2024 - Present</p>
      </div>

      {/* Overview */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-base font-semibold">About the Role</h4>
        <p className="text-sm text-muted-foreground">
          Led development of full-stack applications using modern technologies.
          Worked on scalable architecture and team collaboration.
        </p>
      </div>

      {/* Key Achievements / Impact */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">Y%</p>
          <p className="text-xs text-muted-foreground mt-1">User Engagement</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">Zs</p>
          <p className="text-xs text-muted-foreground mt-1">Load Time Reduced</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">3+</p>
          <p className="text-xs text-muted-foreground mt-1">Devs Mentored</p>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Key Responsibilities</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Built and maintained full-stack features using React and Node.js
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Optimized application performance and reduced load times
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Mentored junior developers and conducted code reviews
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Projects</h4>
        <ul className="space-y-3">
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Project A</p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React & Node.js, serving X users
            </p>
          </li>
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Project B</p>
            <p className="text-xs text-muted-foreground mt-1">
              Developed REST API handling Y requests/day
            </p>
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">React</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Node.js</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">TypeScript</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">PostgreSQL</span>
        </div>
      </div>
    </div>
  )
}

export default SupervaisePage
