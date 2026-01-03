import ScrollableSection from '../ui/ScrollableSection'

// Define your certifications data
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
  return (
    <ScrollableSection title="Certifications" totalPages={certifications.length}>
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start"
        >
          {/* Handle both single-line and multi-line cert names */}
          <div className="space-y-0.5">
            {Array.isArray(cert.name) ? (
              cert.name.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))
            ) : (
              <div>{cert.name}</div>
            )}
            <div className="text-left text-xs text-coral">{cert.issuer}</div>
          </div>
        </div>
      ))}
    </ScrollableSection>
  )
}

export default Certifications