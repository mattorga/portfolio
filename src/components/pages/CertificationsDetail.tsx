import GoldThesisAwardPage from './certifications/GoldThesisAwardPage'
import AWSAIPractitionerPage from './certifications/AWSAIPractitionerPage'
import NVIDIALLMPage from './certifications/NVIDIALLMPage'
import NVIDIADeepLearningPage from './certifications/NVIDIADeepLearningPage'

interface CertificationsDetailProps {
  data: {
    id: number
    name: string | string[]
    issuer: string
  }
}

// Map certification IDs to their custom page components
const certificationPages: Record<number, React.ComponentType> = {
  1: GoldThesisAwardPage,
  2: AWSAIPractitionerPage,
  3: NVIDIALLMPage,
  4: NVIDIADeepLearningPage,
}

const CertificationsDetail = ({ data }: CertificationsDetailProps) => {
  // Get the custom page component for this certification
  const PageComponent = certificationPages[data.id]

  // Fallback if page not found
  if (!PageComponent) {
    return (
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-medium">
            {Array.isArray(data.name) ? data.name.join(' ') : data.name}
          </h3>
          <p className="text-sm text-coral mt-1">{data.issuer}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>// Page not found for this certification</p>
        </div>
      </div>
    )
  }

  // Render the custom page component
  return <PageComponent />
}

export default CertificationsDetail
