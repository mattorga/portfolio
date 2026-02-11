interface EducationDetailProps {
  data: {
    degree: string
    school: string
    location?: string
    period?: string
    description?: string
    achievements?: string[]
    coursework?: string[]
    thesis?: {
      title: string
      description: string
    }
  }
}

const EducationDetail = ({ data }: EducationDetailProps) => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-base font-medium">{data.degree}</h3>
        <p className="text-sm text-coral mt-1">{data.school}</p>
        <div className="flex gap-3 text-xs text-muted-foreground mt-1">
          {data.location && <span>{data.location}</span>}
          {data.location && data.period && <span>•</span>}
          {data.period && <span>{data.period}</span>}
        </div>
      </div>

      {/* Description */}
      {data.description && (
        <p className="text-sm text-foreground">{data.description}</p>
      )}

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground">Achievements:</p>
          <ul className="list-none space-y-1 text-sm pl-2">
            {data.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="text-foreground">|-- {achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Thesis */}
      {data.thesis && (
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground">Thesis:</p>
          <div className="pl-2 text-sm">
            <p className="text-foreground font-medium">{data.thesis.title}</p>
            <p className="text-muted-foreground mt-1">{data.thesis.description}</p>
          </div>
        </div>
      )}

      {/* Coursework */}
      {data.coursework && data.coursework.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground">Relevant Coursework:</p>
          <div className="flex flex-wrap gap-2 pl-2">
            {data.coursework.map((course: string, idx: number) => (
              <span key={idx} className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded">
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationDetail
