interface ExperienceDetailProps {
  data: {
    role: string
    company: string
  }
}

const ExperienceDetail = ({ data }: ExperienceDetailProps) => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">{data.role}</h3>
        <p className="text-sm text-coral mt-1">{data.company}</p>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>// Add more details about this experience here</p>
      </div>
    </div>
  )
}

export default ExperienceDetail
