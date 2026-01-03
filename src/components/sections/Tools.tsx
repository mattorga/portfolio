import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiAmazon } from "react-icons/si"
import { IconType } from "react-icons"
import ScrollableSection from "../ui/ScrollableSection"

// Define tools data structure
const tools: { id: number; name: string; icon: IconType }[] = [
  { id: 1, name: 'HTML', icon: SiHtml5 },
  { id: 2, name: 'TypeScript', icon: SiTypescript },
  { id: 3, name: 'NextJS', icon: SiNextdotjs },
  { id: 4, name: 'CSS', icon: SiCss3 },
  { id: 5, name: 'Python', icon: SiPython },
  { id: 6, name: 'Tailwind', icon: SiTailwindcss },
  { id: 7, name: 'JavaScript', icon: SiJavascript },
  { id: 8, name: 'React', icon: SiReact },
  { id: 9, name: 'AWS', icon: SiAmazon },
]

const Tools = () => {
  return (
    <ScrollableSection title="Tools" totalPages={tools.length}>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-xs">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <div
              key={tool.id}
              className="hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5"
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{tool.name}</span>
            </div>
          )
        })}
      </div>
    </ScrollableSection>
  )
}

export default Tools