import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiAmazon, SiPytorch, SiTensorflow, SiOpencv, SiDocker, SiLangchain } from "react-icons/si"
import { IconType } from "react-icons"
import ScrollableSection from "../ui/ScrollableSection"
import { useSelection } from '../../context/SelectionContext'

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
  { id: 10, name: 'PyTorch', icon: SiPytorch },
  { id: 11, name: 'TensorFlow', icon: SiTensorflow },
  { id: 12, name: 'OpenCV', icon: SiOpencv },
  { id: 13, name: 'Docker', icon: SiDocker },
  { id: 14, name: 'LangChain', icon: SiLangchain },
]

const Tools = () => {
  const { selectedItem, setSelectedItem } = useSelection()

  const isActive = selectedItem?.section === 'Tools'

  // Calculate current page based on selected item
  const currentPage = isActive && selectedItem?.data?.id
    ? tools.findIndex(tool => tool.id === selectedItem.data.id) + 1
    : 1

  return (
    <ScrollableSection title="Tools" currentPage={currentPage} totalPages={tools.length} isActive={isActive}>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-xs">
        {tools.map((tool) => {
          const Icon = tool.icon
          const isSelected = isActive && selectedItem?.data?.id === tool.id

          return (
            <div
              key={tool.id}
              onClick={() => setSelectedItem({ section: 'Tools', data: tool })}
              className={`hover:bg-accent hover:text-accent-foreground transition-colors px-1.5 py-1 -mx-1.5 cursor-pointer flex items-center gap-1.5 ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
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