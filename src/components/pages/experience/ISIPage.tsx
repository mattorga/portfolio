const ISIPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Fullstack Developer Intern</h3>
          <p className="text-lg text-coral">Intelligent Systems Innovation Inc.</p>
        </div>
        <p className="text-sm text-muted-foreground">January 2024 - May 2024 • 5 months</p>
      </div>

      {/* Overview */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-base font-semibold">About the Role</h4>
        <p className="text-sm text-muted-foreground">
          Gained hands-on experience in full-stack development, working with senior developers
          on production applications and learning industry best practices.
        </p>
      </div>

      {/* Key Achievements / Impact */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">2</p>
          <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">10+</p>
          <p className="text-xs text-muted-foreground mt-1">API Endpoints</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">5</p>
          <p className="text-xs text-muted-foreground mt-1">Months Experience</p>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Key Responsibilities</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Built dashboard components for customer management system
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Developed API endpoints and database schemas for internal tools
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Collaborated with senior developers using Agile workflow
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Projects</h4>
        <ul className="space-y-3">
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Customer Management System</p>
            <p className="text-xs text-muted-foreground mt-1">
              Built dashboard components with React, integrated with REST APIs
            </p>
          </li>
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Internal Tools</p>
            <p className="text-xs text-muted-foreground mt-1">
              Developed Express API endpoints and MongoDB schemas
            </p>
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">React</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Express</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">MongoDB</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">REST APIs</span>
        </div>
      </div>
    </div>
  )
}

export default ISIPage
