import { ReactElement } from 'react'

interface ProjectsDetailProps {
  data: {
    name: string
    techStack: ReactElement[]
  }
}

const ProjectsDetail = ({ data }: ProjectsDetailProps) => {
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
        <p>// Add project description, links, and details here</p>
      </div>
    </div>
  )
}

export default ProjectsDetail
