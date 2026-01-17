import { IconType } from 'react-icons'
import HTMLPage from './tools/HTMLPage'
import TypeScriptPage from './tools/TypeScriptPage'
import NextJSPage from './tools/NextJSPage'
import CSSPage from './tools/CSSPage'
import PythonPage from './tools/PythonPage'
import TailwindPage from './tools/TailwindPage'
import JavaScriptPage from './tools/JavaScriptPage'
import ReactPage from './tools/ReactPage'
import AWSPage from './tools/AWSPage'

interface ToolsDetailProps {
  data: {
    id: number
    name: string
    icon: IconType
  }
}

// Map tool IDs to their custom page components
const toolPages: Record<number, React.ComponentType> = {
  1: HTMLPage,
  2: TypeScriptPage,
  3: NextJSPage,
  4: CSSPage,
  5: PythonPage,
  6: TailwindPage,
  7: JavaScriptPage,
  8: ReactPage,
  9: AWSPage,
}

const ToolsDetail = ({ data }: ToolsDetailProps) => {
  // Get the custom page component for this tool
  const PageComponent = toolPages[data.id]

  // Fallback if page not found
  if (!PageComponent) {
    const Icon = data.icon
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Icon className="w-12 h-12" />
          <h3 className="text-base font-medium">{data.name}</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>// Page not found for this tool</p>
        </div>
      </div>
    )
  }

  // Render the custom page component
  return <PageComponent />
}

export default ToolsDetail
