import ScrollableSection from '../ui/ScrollableSection'
import { useSelection } from '../../context/SelectionContext'

const certifications = [
  {
    id: 1,
    name: 'Gold Thesis Award',
    issuer: 'De La Salle University'
  },
  {
    id: 2,
    name: 'Certified AI Practitioner',
    issuer: 'AWS'
  },
  {
    id: 3,
    name: ['Building LLM Applications', 'with Prompt Engineering'], // Multi-line cert name
    issuer: 'NVIDIA'
  },
  {
    id: 4,
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA'
  },
]

const Certifications = () => {
  const { selectedItem, setSelectedItem } = useSelection()

  const isActive = selectedItem?.section === 'Certifications'

  return (
    <ScrollableSection title="Certifications" totalPages={certifications.length} isActive={isActive}>
      {certifications.map((cert) => {
        const isSelected = isActive && selectedItem?.data?.id === cert.id

        return (
          <div
            key={cert.id}
            onClick={() => setSelectedItem({ section: 'Certifications', data: cert })}
            className={`flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start group ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
          >
            {/* Handle both single-line and multi-line cert names */}
            <div className="flex-1 space-y-0.5">
              {Array.isArray(cert.name) ? (
                cert.name.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))
              ) : (
                <div>{cert.name}</div>
              )}
              <div className={`text-left text-xs text-coral transition-all ${isSelected ? '[-webkit-text-stroke:0.5px_#000000]' : 'group-hover:[-webkit-text-stroke:0.5px_#000000]'}`}>{cert.issuer}</div>
            </div>
          </div>
        )
      })}
    </ScrollableSection>
  )
}

export default Certifications