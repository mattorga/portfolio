import { SiPython } from 'react-icons/si'

const PythonPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-yellow-500/10 rounded-lg">
          <SiPython className="w-10 h-10 text-yellow-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Python</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Versatile Programming Language
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use Python For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Backend Development</p>
            <p className="text-xs text-muted-foreground mt-1">
              FastAPI, Django for building REST APIs and web services
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Data Processing & ML</p>
            <p className="text-xs text-muted-foreground mt-1">
              Pandas, NumPy, Scikit-learn for data analysis and ML models
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Automation Scripts</p>
            <p className="text-xs text-muted-foreground mt-1">
              Task automation, data scraping, and workflow optimization
            </p>
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Key Frameworks</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-accent/10 rounded">FastAPI</div>
          <div className="p-2 bg-accent/10 rounded">Django</div>
          <div className="p-2 bg-accent/10 rounded">Flask</div>
          <div className="p-2 bg-accent/10 rounded">Pandas</div>
          <div className="p-2 bg-accent/10 rounded">NumPy</div>
          <div className="p-2 bg-accent/10 rounded">Scikit-learn</div>
        </div>
      </div>
    </div>
  )
}

export default PythonPage
