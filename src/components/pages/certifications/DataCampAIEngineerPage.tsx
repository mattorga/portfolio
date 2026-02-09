const DataCampAIEngineerPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with DataCamp branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-400/10 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-green-400">
              DC
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold leading-tight">
              Associate AI Engineer for Developers
            </h3>
            <p className="text-coral text-sm mt-1">DataCamp</p>
            <p className="text-xs text-muted-foreground mt-1">Data Engineering PH Scholarship</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-400/10 text-green-400 text-xs rounded-full font-medium">
            In Progress
          </span>
          <span className="text-xs text-muted-foreground">Started: January 2026</span>
        </div>
      </div>

      {/* Course overview */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Program Overview</h4>
        <p className="text-sm text-muted-foreground">
          A specialized engineering certification focused on integrating Large Language Models
          and Generative AI into existing software applications. Emphasis on production-ready
          AI systems and enterprise deployment patterns.
        </p>
      </div>

      {/* Core competencies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">1.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">Prompt Engineering</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Advanced prompting techniques for production LLM applications
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">2.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">RAG Systems with Vector Databases</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Building Retrieval-Augmented Generation systems using Pinecone and similar vector stores
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">3.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">MLOps Lifecycle Management</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                AI deployment, performance monitoring, and model lifecycle operations
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">4.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">LLM Integration Patterns</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Integrating Generative AI into existing software applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Tools & Frameworks</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">LangChain</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Pinecone</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Vector DBs</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Python</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">MLOps</span>
        </div>
      </div>

      {/* Career application */}
      <div className="p-3 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded border-l-4 border-green-400">
        <h4 className="text-xs font-semibold mb-1">Why This Matters</h4>
        <p className="text-xs text-muted-foreground">
          This certification builds on my existing LLM experience, adding enterprise-grade
          patterns for deploying AI systems at scale. Combined with my AWS background,
          it positions me to architect end-to-end AI-powered applications.
        </p>
      </div>
    </div>
  )
}

export default DataCampAIEngineerPage
