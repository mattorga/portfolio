import ScrollableSection from '../ui/ScrollableSection'

// Define your education data
const educationList = [
  {
    id: 1,
    degree: 'BS Computer Engineering',
    school: 'De La Salle University',
    achievements: [
      'Gold Thesis Awardee',
      'CGPA: 3.0/4.0'
    ]
  },
]

const Education = () => {
  return (
    <ScrollableSection title="Education" totalPages={educationList.length}>
      {educationList.map((edu) => (
        <div
          key={edu.id}
          className="hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start"
        >
          <div className="space-y-0.5">
            <div>{edu.degree}</div>
            <div className="text-left text-xs text-coral">{edu.school}</div>
          </div>

          {edu.achievements && edu.achievements.length > 0 && (
            <div className="pl-4 space-y-0.5 text-xs text-muted-foreground mt-1">
              {edu.achievements.map((achievement, idx) => (
                <div key={idx}>|-- {achievement}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </ScrollableSection>
  )
}

export default Education