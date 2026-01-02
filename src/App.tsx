import { Github, Linkedin, Mail } from "lucide-react"

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 text-glow flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-8 grid grid-cols-[320px_1fr] gap-6">
        {/* Left Sidebar */}
        <aside className="space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight">Matthew</h1>
            <h1 className="text-xl font-bold tracking-tight">Orga</h1>
          </div>

          {/* Experience Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Experience]</legend>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Fullstack Developer</span>
                <span className="text-right">@ SupervAIse</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Fullstack Developer Intern</span>
                <span className="text-right">@ ISI</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Committee Officer</span>
                <span className="text-right">@ DLSU ACCESS</span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
              1 of n
            </div>
          </fieldset>

          {/* Education Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Education]</legend>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">BS Computer Engineering</span>
                <span className="text-right">@ DLSU</span>
              </div>

              <div className="pl-4 space-y-0.5 text-xs text-muted-foreground">
                <div>|-- Gold Thesis Awardee</div>
                <div>|-- CGPA: 3.0/4.0</div>
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
              1 of 1
            </div>
          </fieldset>

          {/* Projects Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Projects]</legend>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Project 1</span>
                <span className="text-right text-xs">Tech Icons</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Project 2</span>
                <span className="text-right text-xs">Tech Icons</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Project 3</span>
                <span className="text-right text-xs">Tech Icons</span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
              1 of n
            </div>
          </fieldset>

          {/* Tools Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Tools]</legend>

            <div className="grid grid-cols-3 gap-x-3 gap-y-1.5 text-sm">
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                HTML
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                TypeScript
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                NextJS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                CSS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                Python
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                TailwindCSS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                JavaScript
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                React
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                AWS
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
              1 of 9
            </div>
          </fieldset>

          {/* Certifications Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Certifications]</legend>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Certified AI Practitioner</span>
                <span className="text-right text-xs">AWS</span>
              </div>

              <div className="space-y-0.5 hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <div className="flex-1">Building LLM Applications</div>
                <div className="flex-1">with Prompt Engineering</div>
                <div className="text-right text-xs">NVIDIA</div>
              </div>
            </div>

            <div className="absolute -bottom-2 right-3 bg-background px-2 text-xs text-muted-foreground">
              1 of 4
            </div>
          </fieldset>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-3">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Github">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="border border-border min-h-[500px] p-6">
          <div className="space-y-4">
            <div className="animate-pulse">
              <span className="inline-block w-2 h-4 bg-accent"></span>
            </div>

            <p className="text-muted-foreground text-sm">// Select a section from the sidebar to view details</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
