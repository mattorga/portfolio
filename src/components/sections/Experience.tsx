import ScrollableSection from '../ui/ScrollableSection'
import { useSelection } from '../../context/SelectionContext'

const experiences = [
  { id: 1, role: 'Software Engineer', company: 'Supervaise', alias:'Supervaise'},
  { id: 2, role: 'Software Engineering Intern', company: 'Intelligent Systems Innovation Inc.', alias:'ISI'},
]

const Experience = () => {
  const { selectedItem, setSelectedItem } = useSelection()

  const isActive = selectedItem?.section === 'Experience'

  // Calculate current page based on selected item
  const currentPage = isActive && selectedItem?.data?.id
    ? experiences.findIndex(exp => exp.id === selectedItem.data.id) + 1
    : 1

  return (
    <ScrollableSection title="Experience" currentPage={currentPage} totalPages={experiences.length} isActive={isActive}>
      {experiences.map((exp) => {
        const isSelected = isActive && selectedItem?.data?.id === exp.id

        return (
          <div
            key={exp.id}
            onClick={() => setSelectedItem({ section: 'Experience', data: exp })}
            className={`flex justify-between items-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start group ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <span className="flex-1">{exp.role}</span>
            <span className={`text-right text-[#FC9867] transition-all ${isSelected ? '[-webkit-text-stroke:0.5px_#000000]' : 'group-hover:[-webkit-text-stroke:0.5px_#000000]'}`}>{exp.alias}</span>
          </div>
        )
      })}
    </ScrollableSection>
  )
}

export default Experience