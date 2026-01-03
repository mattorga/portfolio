import ScrollableSection from '../ui/ScrollableSection'
import { useSelection } from '../../context/SelectionContext'

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
  const { selectedItem, setSelectedItem } = useSelection()

  const isActive = selectedItem?.section === 'Education'

  return (
    <ScrollableSection title="Education" totalPages={educationList.length} isActive={isActive}>
      {educationList.map((edu) => {
        const isSelected = isActive && selectedItem?.data?.id === edu.id

        return (
          <div
            key={edu.id}
            onClick={() => setSelectedItem({ section: 'Education', data: edu })}
            className={`hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start group ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <div className="space-y-0.5">
              <div>{edu.degree}</div>
              <div className={`text-left text-xs text-coral transition-all ${isSelected ? '[-webkit-text-stroke:0.5px_#000000]' : 'group-hover:[-webkit-text-stroke:0.5px_#000000]'}`}>{edu.school}</div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className={`pl-4 space-y-0.5 text-xs mt-1 ${isSelected ? 'text-accent-foreground' : 'text-gray-400 group-hover:text-accent-foreground'}`}>
                {edu.achievements.map((achievement, idx) => (
                  <div key={idx}>|-- {achievement}</div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </ScrollableSection>
  )
}

export default Education