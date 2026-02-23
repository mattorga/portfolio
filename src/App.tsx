import { useState, useEffect, useRef, useCallback } from "react"
import Header from "./components/sections/Header"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Projects from "./components/sections/Projects"
import Tools from "./components/sections/Tools"
import Certifications from "./components/sections/Certifications"
import Contacts from "./components/sections/Contacts"
import { SelectionProvider, useSelection } from "./context/SelectionContext"
import DetailView from "./components/ui/DetailView"
import ChatPanel from "./components/chat/ChatPanel"
import { type Message } from "./components/chat/ChatMessages"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/ui/resizable"
import { Sheet, SheetContent, SheetTitle } from "./components/ui/sheet"
import { Drawer, DrawerContent, DrawerTitle } from "./components/ui/drawer"
import { Menu } from "lucide-react"
import BotFace from "./components/chat/BotFace"
import { useIsMobile } from "./hooks/use-mobile"
import { useDragToCorner } from "./hooks/use-drag-to-corner"

const PortfolioLayout = () => {
  const isMobile = useIsMobile()
  const { selectedItem, setSelectedItem } = useSelection()
  const { ref: fabRef, style: fabStyle } = useDragToCorner()

  // Startup animation phases:
  // 0: Dark screen (nothing visible)
  // 1: Name flickering
  // 2: Name solid, components appear one by one
  const [startupPhase, setStartupPhase] = useState(0)

  // Track which components are visible
  const [visibleComponents, setVisibleComponents] = useState<Set<string>>(new Set())
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isBotHovered, setIsBotHovered] = useState(false)

  const botFaceState = isChatOpen ? "open" : isBotHovered ? "hover" : "idle"

  const chatToggleButton = (onClick: () => void, positionClass?: string) => (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsBotHovered(true)}
      onMouseLeave={() => setIsBotHovered(false)}
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
      className={`flex items-center justify-center size-11 rounded-full border border-border bg-white text-black transition-colors cursor-pointer bot-button-glow ${positionClass ?? "absolute bottom-0 left-1/2 -translate-x-1/2 z-10"}`}
    >
      <BotFace state={botFaceState} />
    </button>
  )
  const sidebarScrollPos = useRef(0)
  const sidebarScrollRef = useRef<HTMLDivElement | null>(null)

  const saveSidebarScroll = useCallback(() => {
    const el = sidebarScrollRef.current
    if (el) sidebarScrollPos.current = el.scrollTop
  }, [])

  const sidebarScrollCallbackRef = useCallback((node: HTMLDivElement | null) => {
    sidebarScrollRef.current = node
    if (node) {
      requestAnimationFrame(() => {
        node.scrollTop = sidebarScrollPos.current
      })
    }
  }, [])

  // Auto-close sidebar Sheet on mobile when selection changes
  useEffect(() => {
    if (isMobile) {
      saveSidebarScroll()
      setIsSidebarOpen(false)
    }
  }, [selectedItem, isMobile, saveSidebarScroll])

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

    // Components appear one by one in a random-seeming order after the name solidifies
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

  const headerContent = (
    <div className={`md:shrink-0 ${
      startupPhase === 0 ? "hidden-startup" :
      startupPhase === 1 ? "startup-flicker" :
      "visible-startup"
    }`}>
      <Header startupPhase={startupPhase} />
    </div>
  )

  // Sidebar sections with startup animation wrappers
  const sidebarContent = (
    <>
      <div className={`md:shrink-0 ${visibleComponents.has('experience') ? "visible-startup" : "hidden-startup"}`}>
        <Experience />
      </div>

      <div className={`md:flex-1 md:min-h-[3rem] md:flex md:flex-col ${visibleComponents.has('projects') ? "visible-startup" : "hidden-startup"}`}>
        <Projects />
      </div>

      <div className={`md:flex-1 md:min-h-[3rem] md:flex md:flex-col ${visibleComponents.has('tools') ? "visible-startup" : "hidden-startup"}`}>
        <Tools />
      </div>

      <div className={`md:shrink-0 ${visibleComponents.has('education') ? "visible-startup" : "hidden-startup"}`}>
        <Education />
      </div>

      <div className={`md:flex-1 md:min-h-[3rem] md:flex md:flex-col ${visibleComponents.has('certifications') ? "visible-startup" : "hidden-startup"}`}>
        <Certifications />
      </div>
    </>
  )

  const contactsContent = (
    <div className={`md:shrink-0 ${visibleComponents.has('contacts') ? "visible-startup" : "hidden-startup"}`}>
      <Contacts />
    </div>
  )

  // Desktop/tablet chat with ResizablePanelGroup
  const desktopChat = isChatOpen ? (
    <div className="flex-1 relative">
      <div className="absolute top-0 left-0 right-0 bottom-[22px]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={65} minSize={30}>
            <div className="relative h-full border border-border">
              <div className="absolute inset-0 overflow-hidden">
                <DetailView />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={35} minSize={20}>
            <div className="h-full border border-border">
              <ChatPanel messages={chatMessages} setMessages={setChatMessages} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      {chatToggleButton(() => setIsChatOpen(false))}
    </div>
  ) : (
    <div className="flex-1 relative">
      <div className="absolute top-0 left-0 right-0 bottom-[22px] overflow-hidden border border-border">
        <DetailView />
      </div>
      {chatToggleButton(() => setIsChatOpen(true))}
    </div>
  )

  // Mobile chat with bottom Drawer
  const mobileChat = (
    <div className="flex-1 relative min-h-0">
      <div className="absolute inset-0 overflow-hidden">
        <DetailView />
      </div>
      <button
        ref={fabRef as React.RefCallback<HTMLButtonElement>}
        style={fabStyle}
        onClick={() => setIsChatOpen(true)}
        onMouseEnter={() => setIsBotHovered(true)}
        onMouseLeave={() => setIsBotHovered(false)}
        aria-label="Open chat"
        className="fixed z-50 !size-14 flex items-center justify-center rounded-full border border-border bg-white text-black transition-colors cursor-pointer bot-button-glow"
      >
        <BotFace state={botFaceState} />
      </button>
      <Drawer open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DrawerContent className="h-[70vh] flex flex-col min-h-0">
          <DrawerTitle className="sr-only">Chat</DrawerTitle>
          <div className="flex-1 min-h-0">
            <ChatPanel messages={chatMessages} setMessages={setChatMessages} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )

  return (
    <div className={`h-dvh text-foreground p-2 md:p-4 text-glow flex flex-col md:items-center md:justify-center transition-colors duration-700 ${
      startupPhase >= 2 ? 'bg-background' : 'bg-black'
    }`}>
      {/* Mobile top bar */}
      {isMobile && (
        <div className={`flex items-center px-2 py-2 flex-shrink-0 ${
          startupPhase >= 2 ? 'visible-startup' : 'hidden-startup'
        }`}>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-foreground p-1"
          >
            <Menu className="size-5" />
          </button>
          <div className="flex-1 text-center">
            <button
              onClick={() => setSelectedItem({ section: 'About', data: {} })}
              className={`text-[#FC9867] text-sm scale-x-[1.2] inline-block cursor-pointer transition-[filter] duration-700 ${
                selectedItem?.section !== 'About' ? 'animate-pulse' : ''
              } ${startupPhase >= 2 ? 'drop-shadow-[0_0_15px_rgba(252,152,103,0.9)]' : ''}`}
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              MATTHEW ORGA
            </button>
          </div>
          <div className="w-7" /> {/* Spacer to balance hamburger */}
        </div>
      )}

      {/* Mobile sidebar Sheet */}
      {isMobile && (
        <Sheet open={isSidebarOpen} onOpenChange={(open) => {
          if (!open) saveSidebarScroll()
          setIsSidebarOpen(open)
        }}>
          <SheetContent side="left" className="w-[280px] bg-background pt-4 px-4 flex flex-col">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            {contactsContent}
            <div className="space-y-4 overflow-y-auto scrollbar-hide flex-1 min-h-0 pb-4" ref={sidebarScrollCallbackRef}>
              {sidebarContent}
            </div>
          </SheetContent>
        </Sheet>
      )}

      <div className="max-w-6xl w-full mx-auto px-2 md:px-4 lg:px-8 flex flex-col md:flex-row gap-3 md:gap-6 h-full flex-1 min-h-0 md:max-h-[1000px]">
        {/* Left Sidebar - hidden on mobile, sections shrink to fit on short viewports */}
        <aside className="hidden md:flex md:flex-col gap-[clamp(0.25rem,1vh,1rem)] md:w-[260px] lg:w-[320px] shrink-0 min-h-0">
          {headerContent}
          {contactsContent}
          {sidebarContent}
        </aside>

        {/* Main Content Area */}
        <main className={`flex flex-col flex-1 min-h-0 md:min-w-0 ${
          visibleComponents.has('main') ? "visible-startup" : "hidden-startup"
        }`}>
          {isMobile ? mobileChat : desktopChat}
        </main>
      </div>
    </div>
  )
}

const App = () => (
  <SelectionProvider>
    <PortfolioLayout />
  </SelectionProvider>
)

export default App
