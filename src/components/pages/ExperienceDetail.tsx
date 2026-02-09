import SupervaisePage from './experience/SupervaisePage'
import ISIPage from './experience/ISIPage'

interface ExperienceDetailProps {
  data: {
    id: number
    role: string
    company: string
    alias: string
  }
}

// Map experience IDs to their custom page components
const experiencePages: Record<number, React.ComponentType> = {
  1: SupervaisePage,
  2: ISIPage,
}

const ExperienceDetail = ({ data }: ExperienceDetailProps) => {
  // Get the custom page component for this experience
  const PageComponent = experiencePages[data.id]

  // Fallback if page not found
  if (!PageComponent) {
    return (
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-medium">{data.role}</h3>
          <p className="text-sm text-coral mt-1">{data.company}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>// Page not found for this experience</p>
        </div>
      </div>
    )
  }

  // Render the custom page component
  return <PageComponent />
}

export default ExperienceDetail
