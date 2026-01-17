import { SiTailwindcss } from 'react-icons/si'

const TailwindPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cyan-500/10 rounded-lg">
          <SiTailwindcss className="w-10 h-10 text-cyan-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Tailwind CSS</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Utility-First CSS Framework
          </p>
        </div>
      </div>

      {/* Why I love it */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Why Tailwind?</h4>
        <p className="text-sm text-muted-foreground">
          Tailwind has revolutionized how I write CSS. The utility-first approach
          speeds up development, enforces consistency, and makes responsive design effortless.
        </p>
      </div>

      {/* Advanced usage */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Advanced Techniques</h4>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Custom theme configuration with design tokens</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Creating custom plugins and utilities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Optimizing bundle size with PurgeCSS</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Dark mode implementation with CSS variables</span>
          </li>
        </ul>
      </div>

      {/* This portfolio */}
      <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded border-l-4 border-cyan-500">
        <p className="text-xs font-semibold mb-1">Fun Fact</p>
        <p className="text-xs text-muted-foreground">
          This entire portfolio is built with Tailwind CSS! Every component, every animation,
          every responsive breakpoint - all using Tailwind utilities.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">20+</p>
          <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-xl font-bold text-accent">2+</p>
          <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
        </div>
      </div>
    </div>
  )
}

export default TailwindPage
