import { useSelection } from '../../context/SelectionContext'

// First items of each section (matching the data in section components)
const sectionLinks = [
  { label: '💼 Experience', section: 'Experience' as const, data: { id: 1, role: 'Fullstack Developer', company: 'Supervaise', alias: 'Supervaise' } },
  { label: '🚀 Projects', section: 'Projects' as const, data: { id: 1, name: 'Markerless Gait Analysis using 3D Human Pose Estimation' } },
  { label: '🛠️ Tools', section: 'Tools' as const, data: { id: 1, name: 'HTML' } },
  { label: '🎓 Education', section: 'Education' as const, data: { id: 1, degree: 'BS Computer Engineering', school: 'De La Salle University' } },
  { label: '📜 Certifications', section: 'Certifications' as const, data: { id: 1, name: 'Gold Thesis Award', issuer: 'De La Salle University' } },
]

const AboutDetail = () => {
  const { setSelectedItem } = useSelection()

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-medium mb-2">About Me</h3>
        <p className="text-sm text-foreground leading-relaxed">
          Hi! I'm Matthew, I am a Fullstack Developer specializing in backend-heavy,
          data-driven, and AI-focused solutions.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[Background]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          {/*// Background story, journey into tech, interests, etc.*/}
          I started my journey in tech even before college. Curious about how software works, I took Harvard's CS50x in 2020.
          My first programming language was C, where along with learning syntax and logic, I had to learn about resource-management.
          Dealing with memory and pointers early on cemented my <span className="italic">personality</span> as a programmer, instilling in me
          not just the very foundations, but a gravitation towards performant, reliable, and most importantly secure code.
          Now, I bring this trait even with today's level of abstractions especially in web development.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[What I Do]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          {/*// Focus areas, what you're passionate about building, etc.*/}


        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Currently</h4>
        <p className="text-sm text-foreground leading-relaxed">
          // What I'm Currently working on or learning
        </p>
      </div>

      {/* Navigation buttons to sections */}
      <div className="grid grid-cols-3 gap-2">
        {sectionLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => setSelectedItem({ section: link.section, data: link.data })}
            className="px-2 py-1 text-xs hover:bg-foreground hover:text-background transition-colors duration-150"
          >
            [ {link.label} ]
          </button>
        ))}
      </div>
    </div>
  )
}

export default AboutDetail
