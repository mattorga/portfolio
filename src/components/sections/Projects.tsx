import ScrollableSection from '../ui/ScrollableSection'
import { SiReact, SiTypescript, SiPython } from 'react-icons/si'

// Define your projects data
const projects = [
  {
    id: 1,
    name: 'Project 1',
    techStack: [<SiTypescript/>, <SiPython />, <SiReact />],
  },
  {
    id: 2,
    name: 'Project 2',
    techStack: [<SiTypescript/>, <SiPython />, <SiReact />],
  },
  {
    id: 3,
    name: 'Project 3',
    techStack: [<SiTypescript/>, <SiPython />, <SiReact />],
  },
  {
    id: 4,
    name: 'Project 4',
    techStack: [<SiTypescript/>, <SiPython />, <SiReact />],
  },
  {
    id: 5,
    name: 'Project 5',
    techStack: [<SiTypescript/>, <SiPython />, <SiReact />],
  },
]

const Projects = () => {
  return (
    <ScrollableSection title="Projects" totalPages={projects.length}>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex justify-between items-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start"
        >
          <span className="flex-1 truncate">{project.name}</span>

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
      ))}
    </ScrollableSection>
  )
}

export default Projects