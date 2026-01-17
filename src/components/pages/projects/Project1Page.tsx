import { SiTypescript, SiPython, SiReact, SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

const Project1Page = () => {
  return (
    <div className="space-y-6">
      {/* Header with links */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">Project 1</h3>
        <div className="flex gap-3">
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <SiGithub className="w-4 h-4" />
            View Code
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About</h4>
        <p className="text-sm text-muted-foreground">
          A comprehensive full-stack application built to solve [problem].
          Features real-time updates, user authentication, and a modern UI.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <SiTypescript className="w-5 h-5 text-blue-500" />
            <span className="text-sm">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <SiPython className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <SiReact className="w-5 h-5 text-cyan-500" />
            <span className="text-sm">React</span>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Key Features</h4>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">▹</span>
            <span>Real-time data synchronization using WebSockets</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">▹</span>
            <span>JWT-based authentication with refresh token rotation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">▹</span>
            <span>Responsive design with Tailwind CSS</span>
          </li>
        </ul>
      </div>

      {/* Technical Highlights */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-sm font-semibold">Technical Highlights</h4>
        <p className="text-xs text-muted-foreground">
          Implemented custom state management solution, optimized bundle size to under 100KB,
          achieved 95+ Lighthouse score across all metrics.
        </p>
      </div>
    </div>
  )
}

export default Project1Page
