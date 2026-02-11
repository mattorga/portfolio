import { SiDatacamp } from 'react-icons/si'

const DataCampAIEngineerPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with DataCamp branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <SiDatacamp className="w-14 h-14 text-green-400 shrink-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Associate AI Engineer for Developers</h3>
            <p className="text-coral text-sm mt-1">DataCamp</p>
            <p className="text-xs text-muted-foreground mt-1">In Progress · Started January 2025</p>
          </div>
        </div>
      </div>

      {/* Credential */}
      <div className="flex justify-center">
        <a
          href="https://www.datacamp.com/certificate/AIED0017029791772"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent transition-all"
        >
          View Progress on DataCamp
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* What this certification covers */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">What I'm Learning</h4>
        <p className="text-sm text-muted-foreground">
          A specialized engineering certification focused on integrating Large Language Models
          and Generative AI into existing software applications, with emphasis on production-ready
          AI systems and enterprise deployment patterns.
        </p>
      </div>

      {/* Key competencies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Prompt Engineering</p>
            <p className="text-xs text-muted-foreground">
              Advanced prompting techniques for production LLM applications
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">RAG Systems</p>
            <p className="text-xs text-muted-foreground">
              Building Retrieval-Augmented Generation with vector databases
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">MLOps Lifecycle</p>
            <p className="text-xs text-muted-foreground">
              AI deployment, monitoring, and model lifecycle operations
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">LLM Integration</p>
            <p className="text-xs text-muted-foreground">
              Integrating Generative AI into software applications
            </p>
          </div>
        </div>
      </div>

      {/* Frameworks used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Tools & Frameworks</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-400/10 text-xs rounded border border-green-400/20">
            LangChain
          </span>
          <span className="px-2 py-1 bg-green-400/10 text-xs rounded border border-green-400/20">
            Pinecone
          </span>
          <span className="px-2 py-1 bg-green-400/10 text-xs rounded border border-green-400/20">
            Vector DBs
          </span>
          <span className="px-2 py-1 bg-green-400/10 text-xs rounded border border-green-400/20">
            Python
          </span>
          <span className="px-2 py-1 bg-green-400/10 text-xs rounded border border-green-400/20">
            MLOps
          </span>
        </div>
      </div>

      </div>
  )
}

export default DataCampAIEngineerPage
