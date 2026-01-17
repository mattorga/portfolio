const DLSUAccessPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Committee Officer</h3>
          <p className="text-lg text-coral">DLSU Association of Computer Engineering Students</p>
        </div>
        <p className="text-sm text-muted-foreground">August 2023 - May 2024</p>
      </div>

      {/* Overview */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-base font-semibold">About the Role</h4>
        <p className="text-sm text-muted-foreground">
          Served as a committee officer, organizing technical events, workshops, and
          community activities for computer engineering students.
        </p>
      </div>

      {/* Key Achievements / Impact */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">15+</p>
          <p className="text-xs text-muted-foreground mt-1">Events Organized</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">200+</p>
          <p className="text-xs text-muted-foreground mt-1">Students Reached</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">5</p>
          <p className="text-xs text-muted-foreground mt-1">Partner Companies</p>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Key Responsibilities</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Coordinated technical workshops and seminars for 100+ students
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Managed event logistics and collaborated with industry partners
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Developed promotional materials and maintained social media presence
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Projects</h4>
        <ul className="space-y-3">
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Tech Workshops</p>
            <p className="text-xs text-muted-foreground mt-1">
              Organized hands-on coding sessions for 100+ students
            </p>
          </li>
          <li className="pl-4 border-l-2 border-accent/30">
            <p className="text-sm font-medium">Industry Talks</p>
            <p className="text-xs text-muted-foreground mt-1">
              Coordinated speaker events with 5 partner companies
            </p>
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Event Planning</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Team Leadership</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Public Speaking</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Project Management</span>
        </div>
      </div>
    </div>
  )
}

export default DLSUAccessPage
