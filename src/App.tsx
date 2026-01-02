import { Github, Linkedin, Mail } from "lucide-react"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiAmazon } from "react-icons/si"

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 text-glow flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-8 grid grid-cols-[320px_1fr] gap-6">
        {/* Left Sidebar */}
        <aside className="space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-[#FC9867] text-2xl leading-relaxed origin-left" style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
              MATTHEW
            </h1>
            <h1 className="text-[#FC9867] text-2xl leading-relaxed origin-left" style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
              ORGA
            </h1>
          </div>

          {/* Experience Section */}
          <fieldset className="border border-border p-3 space-y-2 relative">
            <legend className="text-xs text-muted-foreground px-2">[Experience]</legend>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Fullstack Developer</span>
                <span className="text-right text-[#FC9867]">@ SupervAIse</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Fullstack Developer Intern</span>
                <span className="text-right text-[#FC9867]">@ ISI</span>
              </div>

              <div className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <span className="flex-1">Committee Officer</span>
                <span className="text-right text-[#FC9867]">@ DLSU ACCESS</span>
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
                <span className="text-right text-[#FC9867]">@ DLSU</span>
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

            <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-xs">
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiHtml5 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">HTML</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiTypescript className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">TypeScript</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiNextdotjs className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">NextJS</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiCss3 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">CSS</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiPython className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">Python</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiTailwindcss className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">Tailwind</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiJavascript className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">JavaScript</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiReact className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">React</span>
              </div>
              <div className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5">
                <SiAmazon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">AWS</span>
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
                <span className="text-right text-xs text-[#FC9867]">AWS</span>
              </div>

              <div className="space-y-0.5 hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer">
                <div className="flex-1">Building LLM Applications</div>
                <div className="flex-1">with Prompt Engineering</div>
                <div className="text-right text-xs text-[#FC9867]">NVIDIA</div>
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
