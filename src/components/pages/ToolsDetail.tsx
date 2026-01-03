import { IconType } from 'react-icons'

interface ToolsDetailProps {
  data: {
    name: string
    icon: IconType
  }
}

const ToolsDetail = ({ data }: ToolsDetailProps) => {
  const Icon = data.icon

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Icon className="w-12 h-12" />
        <h3 className="text-base font-medium">{data.name}</h3>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>// Add proficiency level, projects using this tool, etc.</p>
      </div>
    </div>
  )
}

export default ToolsDetail
