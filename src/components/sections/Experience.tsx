import ScrollableSection from '../ui/ScrollableSection'

const experiences = [
  { id: 1, role: 'Fullstack Developer', company: '@ SupervAIse' },
  { id: 2, role: 'Fullstack Developer Intern', company: '@ ISI' },
  { id: 3, role: 'Committee Officer', company: '@ DLSU ACCESS' },
]

const Experience = () => {
  return (
    <ScrollableSection title="Experience" totalPages={experiences.length}>
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="flex justify-between items-start hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 -mx-2 cursor-pointer snap-start"
        >
          <span className="flex-1">{exp.role}</span>
          <span className="text-right text-[#FC9867]">{exp.company}</span>
        </div>
      ))}
    </ScrollableSection>
  )
}

export default Experience