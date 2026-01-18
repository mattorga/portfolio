import { Calendar, Users, Mic, ClipboardList } from 'lucide-react'

const DLSUAccessPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Committee Officer</h3>
          <p className="text-lg text-coral">DLSU Association of Computer Engineering Students</p>
        </div>
        <p className="text-sm text-muted-foreground">January 2022 - May 2024</p>
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
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">4+</p>
          <p className="text-xs text-muted-foreground mt-1">Events Organized</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">200+</p>
          <p className="text-xs text-muted-foreground mt-1">Students Reached</p>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Key Responsibilities</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Coordinated technical workshops and seminars for 100+ students (Onsite and Online)
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Managed and led whole event flow (ideation, logistics, execution)
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-orange-400">➤</span>
            <p className="text-sm text-muted-foreground flex-1">
              Contacted <em>prospects</em>/speakers from external partner companies
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Skills</h4>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-accent text-xs">Event Planning</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-accent text-xs">Team Leadership</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <Mic className="w-4 h-4 text-pink-400" />
            <span className="text-accent text-xs">Public Speaking</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <ClipboardList className="w-4 h-4 text-green-400" />
            <span className="text-accent text-xs">Project Management</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DLSUAccessPage
