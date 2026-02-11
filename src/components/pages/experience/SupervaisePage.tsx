import { SiTypescript, SiReact, SiPython, SiAmazon, SiNextdotjs, SiDocker } from 'react-icons/si'

const SupervaisePage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold">Software Engineer</h3>
          <p className="text-lg text-coral">Supervaise</p>
        </div>
        <p className="text-sm text-muted-foreground">July 7, 2025 - April 7, 2026</p>
      </div>

      {/* About the Role */}
      <div className="p-4 bg-accent/5 border-l-4 border-accent space-y-2">
        <h4 className="text-base font-semibold">About the Role</h4>
        <p className="text-sm text-muted-foreground">
          Built a Next.js greenfield analytics platform, prioritizing backend scalability and secure data orchestration via AWS to support real-time AI-driven business intelligence.
        </p>
      </div>

      {/* Key Achievements / Impact */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">~80%</p>
          <p className="text-xs text-muted-foreground mt-1">Backend Latency Reduced</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">+15%</p>
          <p className="text-xs text-muted-foreground mt-1">Matching Accuracy</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">10+</p>
          <p className="text-xs text-muted-foreground mt-1">REST APIs Engineered</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-2xl font-bold text-accent">4</p>
          <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-accent">Projects</h4>

        {/* Project 1: Hino Motors Analytics */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Hino Motors Analytics Web Application</p>
          <div className="space-y-1.5 pl-4">
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Built a <span className="text-blue-400">Next.js</span> greenfield application for real-time analytics dashboard</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Main decision maker in the architecture of the application, libraries, and full feature ownership</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Managing development, staging, and production environments through <span className="text-blue-400">AWS Amplify</span></p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Implemented authentication and role-based access using <span className="text-blue-400">Cognito</span></p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Written and maintained over 10+ <span className="text-blue-400">REST APIs</span> using <span className="text-blue-400">Lambda</span>, ensuring secure and proper practices</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Reduced <span className="text-blue-400">backend latency by 80%</span> through optimization of Serverless execution logic and efficient S3 data retrieval patterns</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Implemented confidence-score filtering and <span className="text-blue-400">Levenshtein distance</span> algorithms to perform fuzzy database matching, <span className="text-blue-400">increasing accuracy by 15%</span></p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Used <span className="text-blue-400">Docker</span> to containerize and build custom Lambda layers within the Amazon Linux Environment</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Managed full-stack CI/CD lifecycles via <span className="text-blue-400">AWS Amplify</span>, supporting real-time AI inference workloads and multi-tenant scaling</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Next.js</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">TypeScript</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Python</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Serverless</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Docker</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">AWS</span>
          </div>
        </div>

        {/* Project 2: Hino Motors Low-Code */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Hino Motors Low-Code Internal Tool</p>
          <div className="space-y-1.5 pl-4">
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Used <span className="text-blue-400">Budibase</span>, a low-code platform to facilitate quick changes and iteration</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Served as the user testing environment for feature-validation, improving feedback and iteration by 80%</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Implemented authentication and role-based access using <span className="text-blue-400">Cognito</span></p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Budibase</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">AWS Cognito</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">DynamoDB</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Lambda</span>
          </div>
        </div>

        {/* Project 3: Internal Data Annotation Tool */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Internal Data Annotation and Quality Assurance Tool</p>
          <div className="space-y-1.5 pl-4">
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Terminal-based UI for human-operated QA checking of the vision model inferences</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground"><span className="text-blue-400">Reduced daily QA</span> time from 120-180 minutes to 15-30 minutes</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Integrated with the <span className="text-blue-400">AWS infrastructure (Cognito, DynamoDB, S3)</span></p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Python</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Claude Code</span>
          </div>
        </div>

        {/* Project 4: Health Equity Analytics */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Health Equity Analytics Dashboard</p>
          <div className="space-y-1.5 pl-4">
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Dashboard showcases health disparity on different dimensions (e.g. Health Care Utilization) between different classes, regions, sex, etc.</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Stakeholders include different government agencies, decision-makers, and data scientists</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-xs text-orange-400 mt-0.5">➤</span>
              <p className="text-xs text-muted-foreground">Held a workshop on adoption for the National Government, external agencies, and LGUs</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">React</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">TypeScript</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Python</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded">Superset</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiNextdotjs className="w-4 h-4 text-white" />
            <span className="text-accent text-xs">Next.js</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiReact className="w-4 h-4 text-cyan-500" />
            <span className="text-accent text-xs">React</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiTypescript className="w-4 h-4 text-blue-500" />
            <span className="text-accent text-xs">TypeScript</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiPython className="w-4 h-4 text-yellow-500" />
            <span className="text-accent text-xs">Python</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiDocker className="w-4 h-4 text-blue-400" />
            <span className="text-accent text-xs">Docker</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-accent/10 rounded">
            <SiAmazon className="w-4 h-4 text-orange-400" />
            <span className="text-accent text-xs">AWS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupervaisePage
