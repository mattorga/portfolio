import { useState, useEffect } from "react"
import Header from "./components/sections/Header"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Projects from "./components/sections/Projects"
import Tools from "./components/sections/Tools"
import Certifications from "./components/sections/Certifications"
import Contacts from "./components/sections/Contacts"
import { SelectionProvider } from "./context/SelectionContext"
import DetailView from "./components/ui/DetailView"

const App = () => {
  // Startup animation phases:
  // 0: Dark screen (nothing visible)
  // 1: Name flickering
  // 2: Name solid, components appear one by one
  const [startupPhase, setStartupPhase] = useState(0)

  // Track which components are visible
  const [visibleComponents, setVisibleComponents] = useState<Set<string>>(new Set())

  useEffect(() => {
    const timers: number[] = []

    // Phase 0 -> 1: Show name after 500ms
    timers.push(setTimeout(() => {
      setStartupPhase(1)
    }, 500))

    // Phase 1 -> 2: After name flickers for 2s, start showing other components
    timers.push(setTimeout(() => {
      setStartupPhase(2)
    }, 2500))

    // Components appear one by one in a random-seeming order after name solidifies
    // Tools appears first
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('tools'))
    }, 2700))

    // Contacts appears second
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('contacts'))
    }, 3000))

    // Projects appears third
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('projects'))
    }, 3300))

    // Main content area appears
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('main'))
    }, 3600))

    // Experience appears
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('experience'))
    }, 3900))

    // Certifications appears
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('certifications'))
    }, 4200))

    // Education appears last
    timers.push(setTimeout(() => {
      setVisibleComponents(prev => new Set(prev).add('education'))
    }, 4500))

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  return (
    <SelectionProvider>
      <div className={`min-h-screen text-foreground p-4 text-glow flex items-center justify-center transition-colors duration-700 ${
        startupPhase >= 2 ? 'bg-background' : 'bg-black'
      }`}>
        <div className="max-w-6xl w-full mx-auto px-8 grid grid-cols-[320px_1fr] gap-6">
          {/* Left Sidebar */}
          <aside className="space-y-4">
            {/* Header (name) - shows in phase 1, flickers, then becomes solid */}
            <div className={
              startupPhase === 0 ? "hidden-startup" :
              startupPhase === 1 ? "startup-flicker" :
              "visible-startup"
            }>
              <Header startupPhase={startupPhase} />
            </div>

            {/* Components appear one by one */}
            <div className={visibleComponents.has('experience') ? "visible-startup" : "hidden-startup"}>
              <Experience />
            </div>

            <div className={visibleComponents.has('projects') ? "visible-startup" : "hidden-startup"}>
              <Projects />
            </div>

            <div className={visibleComponents.has('tools') ? "visible-startup" : "hidden-startup"}>
              <Tools />
            </div>

            <div className={visibleComponents.has('education') ? "visible-startup" : "hidden-startup"}>
              <Education />
            </div>

            <div className={visibleComponents.has('certifications') ? "visible-startup" : "hidden-startup"}>
              <Certifications />
            </div>

            <div className={visibleComponents.has('contacts') ? "visible-startup" : "hidden-startup"}>
              <Contacts />
            </div>
          </aside>

          {/* Main Content Area - appears in the sequence */}
          <main className={`border border-border min-h-[500px] p-6 ${
            visibleComponents.has('main') ? "visible-startup" : "hidden-startup"
          }`}>
            <DetailView />
          </main>
        </div>
      </div>
    </SelectionProvider>
  )
}

export default App
