import { SiReact, SiJavascript, SiNodedotjs, SiAmazon, SiGraphql } from 'react-icons/si'

const ISIPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
          <p className="text-lg text-coral">Intelligent Systems Innovation, Inc.</p>
        </div>
        <p className="text-sm text-muted-foreground">June 13 - September 9, 2024</p>
      </div>

      {/* About the Role */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-base font-semibold">About the Role</h4>
        <p className="text-sm text-muted-foreground">
          Gained hands-on experience in full-stack development, working with senior developers on production applications and learning industry best practices.
        </p>
      </div>

      {/* Project */}
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-accent">Project</h4>

        <div className="space-y-2">
          <p className="text-sm font-medium">Real-time Car Counting Application for Traffic Congestion Analytics</p>
          <div className="space-y-1.5 pl-4">
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Optimized application performance by refactoring codebase to implement client-side rendering with <span className="text-blue-400">React Router</span>, significantly reducing page load times</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Designed and developed multiple responsive UI pages, enhancing user experience and functionality</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Implemented a custom login system using <span className="text-blue-400">AWS Amplify</span> auth with <span className="text-blue-400">Amazon Cognito</span> API</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Developed and executed comprehensive test cases, aiming for 100% alignment with client requirements for an online queuing system</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Identified and resolved a critical data integrity issue, preventing invalid user inputs from corrupting the database</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Collaborated effectively with cross-functional teams to validate feature functionality, improving overall product quality</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Actively participated in cross-functional team collaboration and leveraged mentorship opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Skills</h4>
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Front-end Development</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">UI/UX Design</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">API Integration</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Unit Testing</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Cloud Architecture</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Agile Methodologies</span>
          <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Problem-solving</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiReact className="w-4 h-4 text-cyan-500" />
            <span className="text-accent text-xs">React</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiJavascript className="w-4 h-4 text-yellow-400" />
            <span className="text-accent text-xs">JavaScript</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiNodedotjs className="w-4 h-4 text-green-500" />
            <span className="text-accent text-xs">Node.js</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiAmazon className="w-4 h-4 text-orange-400" />
            <span className="text-accent text-xs">AWS</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiGraphql className="w-4 h-4 text-pink-500" />
            <span className="text-accent text-xs">GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ISIPage
