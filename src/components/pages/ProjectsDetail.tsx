import { ReactElement } from 'react'
import Project1Page from './projects/Project1Page'
import Project2Page from './projects/Project2Page'
import Project3Page from './projects/Project3Page'
import Project4Page from './projects/Project4Page'
import Project5Page from './projects/Project5Page'

interface ProjectsDetailProps {
  data: {
    id: number
    name: string
    techStack: ReactElement[]
  }
}

// Map project IDs to their custom page components
const projectPages: Record<number, React.ComponentType> = {
  1: Project1Page,
  2: Project2Page,
  3: Project3Page,
  4: Project4Page,
  5: Project5Page,
}

const ProjectsDetail = ({ data }: ProjectsDetailProps) => {
  // Get the custom page component for this project
  const PageComponent = projectPages[data.id]

  // Fallback if page not found
  if (!PageComponent) {
    return (
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-medium">{data.name}</h3>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
          <div className="flex items-center gap-2">
            {data.techStack.map((icon: ReactElement, idx: number) => (
              <span key={idx} className="text-lg">{icon}</span>
            ))}
          </div>
        </div>
        <div className="text-sm text-muted-foreground mt-3">
          <p>// Page not found for this project</p>
        </div>
      </div>
    )
  }

  // Render the custom page component
  return <PageComponent />
}

export default ProjectsDetail
