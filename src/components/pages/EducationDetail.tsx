interface EducationDetailProps {
  data: {
    degree: string
    school: string
    achievements?: string[]
  }
}

const EducationDetail = ({ data }: EducationDetailProps) => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">{data.degree}</h3>
        <p className="text-sm text-coral mt-1">{data.school}</p>
      </div>
      {data.achievements && data.achievements.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Achievements:</p>
          <ul className="list-none space-y-1 text-sm">
            {data.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="text-foreground">|-- {achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="text-sm text-muted-foreground mt-3">
        <p>// Add graduation date, relevant coursework, etc.</p>
      </div>
    </div>
  )
}

export default EducationDetail
