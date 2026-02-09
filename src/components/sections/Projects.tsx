import ScrollableSection from '../ui/ScrollableSection'
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiOpencv, SiKeras } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { useSelection } from '../../context/SelectionContext'

const projects = [
  {
    id: 1,
    name: 'Markerless Gait Analysis using 3D Human Pose Estimation',
    techStack: [<SiPython />, <SiOpencv />, <SiJavascript />],
  },
  {
    id: 2,
    name: 'LLM-Driven Automated Document Parser',
    techStack: [<SiPython />, <TbBrain />],
  },
  {
    id: 3,
    name: 'Modified VGG-19 for CIFAR10 Dataset',
    techStack: [<SiPython />, <SiKeras />],
  },
  {
    id: 4,
    name: 'Pathological Gait Classification using Hybrid CNN-LSTM',
    techStack: [<SiPython />, <SiKeras />, <SiOpencv />],
  },
  {
    id: 5,
    name: 'Exercise Pose Identifier and Rep Counter',
    techStack: [<SiPython />, <SiOpencv />],
  },
  {
    id: 6,
    name: 'On-campus Electronic Equipment Borrowing System',
    techStack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
  },
]

const Projects = () => {
  const { selectedItem, setSelectedItem } = useSelection()

  const isActive = selectedItem?.section === 'Projects'

  // Calculate current page based on selected item
  const currentPage = isActive && selectedItem?.data?.id
    ? projects.findIndex(proj => proj.id === selectedItem.data.id) + 1
    : 1

  return (
    <ScrollableSection title="Projects" currentPage={currentPage} totalPages={projects.length} isActive={isActive}>
      {projects.map((project) => {
        const isSelected = isActive && selectedItem?.data?.id === project.id

        return (
          <div
            key={project.id}
            onClick={() => setSelectedItem({ section: 'Projects', data: project })}
            className={`flex justify-between items-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <span className="flex-1 break-words">{project.name}</span>

            {/* Tech icons container - fixed width to reserve space */}
            <div className="flex items-center gap-1 flex-shrink-0 min-w-[60px]">
              {project.techStack.length > 0 ? (
                project.techStack.map((Icon, idx) => (
                  <span key={idx} className="text-xs">{Icon}</span>
                ))
              ) : (
                <span className="text-xs text-muted-foreground">Icons</span>
              )}
            </div>
          </div>
        )
      })}
    </ScrollableSection>
  )
}

export default Projects