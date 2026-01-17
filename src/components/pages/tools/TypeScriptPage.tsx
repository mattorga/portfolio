import { SiTypescript } from 'react-icons/si'

const TypeScriptPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <SiTypescript className="w-10 h-10 text-blue-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">TypeScript</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Typed Superset of JavaScript
          </p>
        </div>
      </div>

      {/* Why I use it */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Why I Love It</h4>
        <p className="text-sm text-muted-foreground">
          TypeScript has become my go-to for any JavaScript project. The type safety
          catches bugs early, improves code maintainability, and makes refactoring confident.
        </p>
      </div>

      {/* Advanced features used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Advanced Features I Use</h4>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Generics and type constraints</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Utility types (Pick, Omit, Partial, Record)</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Type guards and discriminated unions</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Mapped types and conditional types</span>
          </li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">3+</p>
          <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">15+</p>
          <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
        </div>
      </div>
    </div>
  )
}

export default TypeScriptPage
