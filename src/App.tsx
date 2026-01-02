import { Github, Linkedin, Mail } from "lucide-react"

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-2 text-glow flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto px-4 grid grid-cols-[220px_1fr] gap-3">
        {/* Left Sidebar */}
        <aside className="space-y-2">
          {/* Header */}
          <div className="space-y-0">
            <h1 className="text-sm font-bold tracking-tight">Matthew</h1>
            <h1 className="text-sm font-bold tracking-tight">Orga</h1>
          </div>

          {/* Experience Section */}
          <fieldset className="border border-border p-1.5 space-y-1 relative">
            <legend className="text-[8px] text-muted-foreground px-1">[Experience]</legend>

            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Fullstack Developer</span>
                <span className="text-right">@ SupervAIse</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Fullstack Developer Intern</span>
                <span className="text-right">@ ISI</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Committee Officer</span>
                <span className="text-right">@ DLSU ACCESS</span>
              </div>
            </div>

            <div className="absolute -bottom-[0.4rem] right-1.5 bg-background px-1 text-[7px] text-muted-foreground">
              1 of n
            </div>
          </fieldset>

          {/* Education Section */}
          <fieldset className="border border-border p-1.5 space-y-1 relative">
            <legend className="text-[8px] text-muted-foreground px-1">[Education]</legend>

            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">BS Computer Engineering</span>
                <span className="text-right">@ DLSU</span>
              </div>

              <div className="pl-2 space-y-0 text-[7px] text-muted-foreground">
                <div>|-- Gold Thesis Awardee</div>
                <div>|-- CGPA: 3.0/4.0</div>
              </div>
            </div>

            <div className="absolute -bottom-[0.4rem] right-1.5 bg-background px-1 text-[7px] text-muted-foreground">
              1 of 1
            </div>
          </fieldset>

          {/* Projects Section */}
          <fieldset className="border border-border p-1.5 space-y-1 relative">
            <legend className="text-[8px] text-muted-foreground px-1">[Projects]</legend>

            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Project 1</span>
                <span className="text-right text-[7px]">Tech Icons</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Project 2</span>
                <span className="text-right text-[7px]">Tech Icons</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Project 3</span>
                <span className="text-right text-[7px]">Tech Icons</span>
              </div>
            </div>

            <div className="absolute -bottom-[0.4rem] right-1.5 bg-background px-1 text-[7px] text-muted-foreground">
              1 of n
            </div>
          </fieldset>

          {/* Tools Section */}
          <fieldset className="border border-border p-1.5 space-y-1 relative">
            <legend className="text-[8px] text-muted-foreground px-1">[Tools]</legend>

            <div className="grid grid-cols-3 gap-x-1.5 gap-y-0.5 text-[9px]">
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                HTML
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                TypeScript
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                NextJS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                CSS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                Python
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                TailwindCSS
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                JavaScript
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                React
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                AWS
              </div>
            </div>

            <div className="absolute -bottom-[0.4rem] right-1.5 bg-background px-1 text-[7px] text-muted-foreground">
              1 of 9
            </div>
          </fieldset>

          {/* Certifications Section */}
          <fieldset className="border border-border p-1.5 space-y-1 relative">
            <legend className="text-[8px] text-muted-foreground px-1">[Certifications]</legend>

            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <span className="flex-1">Certified AI Practitioner</span>
                <span className="text-right text-[7px]">AWS</span>
              </div>

              <div className="space-y-0 hover:bg-accent hover:text-accent-foreground transition-colors px-1 py-0.5 -mx-1 cursor-pointer">
                <div className="flex-1">Building LLM Applications</div>
                <div className="flex-1">with Prompt Engineering</div>
                <div className="text-right text-[7px]">NVIDIA</div>
              </div>
            </div>

            <div className="absolute -bottom-[0.4rem] right-1.5 bg-background px-1 text-[7px] text-muted-foreground">
              1 of 4
            </div>
          </fieldset>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-1">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Github">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="border border-border min-h-[300px] p-3">
          <div className="space-y-2">
            <div className="animate-pulse">
              <span className="inline-block w-1 h-2.5 bg-accent"></span>
            </div>

            <p className="text-muted-foreground text-[9px]">// Select a section from the sidebar to view details</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
