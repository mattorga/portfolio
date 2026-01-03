import Header from "./components/sections/Header"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Projects from "./components/sections/Projects"
import Tools from "./components/sections/Tools"
import Certifications from "./components/sections/Certifications"
import Contacts from "./components/sections/Contacts"

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 text-glow flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-8 grid grid-cols-[320px_1fr] gap-6">
        {/* Left Sidebar */}
        <aside className="space-y-4">
          <Header />
          <Experience />          
          <Projects />
          <Tools />
          <Education />
          <Certifications />
          <Contacts />
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
