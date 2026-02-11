const NVIDIALLMPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with NVIDIA branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-green-500">
              N
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Building LLM Applications</h3>
            <p className="text-coral text-sm mt-1">NVIDIA Deep Learning Institute</p>
            <p className="text-xs text-muted-foreground mt-1">Issued: 2024</p>
          </div>
        </div>
      </div>

      {/* What this certification covers */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">What I Learned</h4>
        <p className="text-sm text-muted-foreground">
          Hands-on course focused on building practical LLM applications using prompt
          engineering techniques, RAG architecture, and best practices for production deployment.
        </p>
      </div>

      {/* Key competencies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Prompt Engineering</p>
            <p className="text-xs text-muted-foreground">
              Zero-shot, few-shot, and chain-of-thought prompting
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">RAG Implementation</p>
            <p className="text-xs text-muted-foreground">
              Vector databases and embedding retrieval systems
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">LLM Fine-tuning</p>
            <p className="text-xs text-muted-foreground">
              Parameter-efficient techniques for domain adaptation
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Production Best Practices</p>
            <p className="text-xs text-muted-foreground">
              Cost optimization and safety guardrails
            </p>
          </div>
        </div>
      </div>

      {/* Tools used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Tools & Frameworks Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            LangChain
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            OpenAI API
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            Vector DBs
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            Python
          </span>
        </div>
      </div>

      {/* Credential */}
      <div className="text-center pt-4">
        <a
          href="https://learn.nvidia.com/certificates?id=NAwU8vGgRm-VIKLcQtl2hQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent transition-all"
        >
          View Credential on NVIDIA
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NVIDIALLMPage
