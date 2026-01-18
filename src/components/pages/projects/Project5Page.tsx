import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiGit, SiGithub } from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'

const Project5Page = () => {
  return (
    <div className="space-y-6">
      {/* Header - Rank 3 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-accent/10 rounded">Developer</span>
          <span>2023</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight">
          On-campus Electronic Equipment Borrowing System
        </h3>
        <p className="text-sm text-coral">Web Application</p>
        <div className="flex gap-3">
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <SiGithub className="w-4 h-4" />
            View Code
          </a>
        </div>
      </div>

      {/* Description - Rank 2 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About</h4>
        <p className="text-sm text-muted-foreground">
          Developed a web application to digitize the pen-and-paper system of component borrowing
          from students. The system maintains records of student information, borrowed components,
          and return details. Inspired by occurrences where lack of accountability between students
          led to lost or unreturned equipment.
        </p>
      </div>

      {/* Architecture - Rank 5 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Frontend:</span>
            <span>HTML/CSS/JavaScript for responsive user interface</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Backend:</span>
            <span>Server-side logic for CRUD operations</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Database:</span>
            <span>MySQL for persistent storage of borrowing records</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Tables:</span>
            <span>Students, Components, Borrowing Transactions, Return Details</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Features</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Student Records</p>
            <p className="text-xs text-muted-foreground mt-1">
              Track student borrowing history
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Component Inventory</p>
            <p className="text-xs text-muted-foreground mt-1">
              Manage available equipment
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Borrow/Return</p>
            <p className="text-xs text-muted-foreground mt-1">
              Log transactions with timestamps
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Accountability</p>
            <p className="text-xs text-muted-foreground mt-1">
              Track overdue items
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack - Rank 1 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <SiHtml5 className="w-5 h-5 text-orange-500" />
            <span className="text-sm">HTML</span>
          </div>
          <div className="flex items-center gap-2">
            <SiCss3 className="w-5 h-5 text-blue-500" />
            <span className="text-sm">CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <SiJavascript className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <SiMysql className="w-5 h-5 text-blue-600" />
            <span className="text-sm">MySQL</span>
          </div>
          <div className="flex items-center gap-2">
            <TbDatabase className="w-5 h-5 text-green-500" />
            <span className="text-sm">Database</span>
          </div>
          <div className="flex items-center gap-2">
            <SiGit className="w-5 h-5 text-orange-500" />
            <span className="text-sm">Git</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project5Page
