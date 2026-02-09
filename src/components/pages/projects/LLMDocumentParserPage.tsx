import { SiPython, SiGithub } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

const LLMDocumentParserPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-accent/10 rounded">Developer</span>
          <span>2025</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight">
          LLM-Driven Automated Document Parser
        </h3>
        <p className="text-sm text-coral">Applied AI / LangChain</p>
        <div className="flex gap-3">
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <SiGithub className="w-4 h-4" />
            View Code
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About</h4>
        <p className="text-sm text-muted-foreground">
          Developed a LangChain pipeline to extract structured data from unstructured documents
          as the final project for "Building LLM Applications with Prompt Engineering" (NVIDIA).
          The system transforms free-form text into validated, database-ready structured outputs.
        </p>
      </div>

      {/* Architecture */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Input:</span>
            <span>Unstructured documents (text, PDFs)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Pipeline:</span>
            <span>LangChain LCEL for orchestration and chaining</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Validation:</span>
            <span>Pydantic schemas for strict data integrity</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Output:</span>
            <span>Structured data compatible with SQL/NoSQL databases</span>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-accent">Key Features</h4>
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <span className="text-xs text-orange-400 mt-0.5">1.</span>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-400">LangChain Pipeline</span> - Modular extraction pipeline using LCEL for clean data flow
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-xs text-orange-400 mt-0.5">2.</span>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-400">Pydantic Validation</span> - Strict data schemas ensuring data integrity and type safety
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-xs text-orange-400 mt-0.5">3.</span>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-400">Database Integration</span> - Output layer designed for seamless interface with structured databases
            </p>
          </div>
        </div>
      </div>

      {/* Context */}
      <div className="p-3 bg-accent/5 border border-accent/10 rounded">
        <h4 className="text-xs font-semibold text-accent mb-1">Project Context</h4>
        <p className="text-xs text-muted-foreground">
          Final project for NVIDIA's "Building LLM Applications with Prompt Engineering" certification.
          Demonstrates practical application of advanced prompting techniques and LangChain for
          production-ready document processing workflows.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <SiPython className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <TbBrain className="w-5 h-5 text-green-400" />
            <span className="text-sm">LangChain</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 text-pink-400 font-bold text-xs">Py</span>
            <span className="text-sm">Pydantic</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LLMDocumentParserPage
