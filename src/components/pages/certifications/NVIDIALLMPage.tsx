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
            <h3 className="text-xl font-bold leading-tight">
              Building LLM Applications with Prompt Engineering
            </h3>
            <p className="text-coral text-sm mt-1">NVIDIA Deep Learning Institute</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
            Completed
          </span>
          <span className="text-xs text-muted-foreground">Issued: 2024</span>
        </div>
      </div>

      {/* Course overview */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Course Overview</h4>
        <p className="text-sm text-muted-foreground">
          Hands-on course focused on building practical LLM applications using prompt
          engineering techniques, RAG (Retrieval-Augmented Generation), and best practices
          for production deployment.
        </p>
      </div>

      {/* What I learned */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Skills Acquired</h4>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">1.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">Advanced Prompt Engineering</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Zero-shot, few-shot, chain-of-thought, and self-consistency prompting
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">2.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">RAG Implementation</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Building retrieval systems with vector databases and embeddings
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">3.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">LLM Fine-tuning</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Parameter-efficient fine-tuning techniques for domain adaptation
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent mt-1">4.</span>
            <div className="flex-1">
              <p className="text-sm font-medium">Production Best Practices</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Cost optimization, latency reduction, and safety guardrails
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects built */}
      <div className="p-4 bg-accent/5 border border-accent/10 rounded-lg space-y-2">
        <h4 className="text-sm font-semibold text-accent">Projects Completed</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Built a custom Q&A system using RAG architecture</li>
          <li>• Developed prompt templates for code generation tasks</li>
          <li>• Implemented guardrails for safe LLM outputs</li>
        </ul>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Tools & Frameworks</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">LangChain</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">OpenAI API</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Vector DBs</span>
          <span className="px-2 py-1 bg-accent/10 text-xs rounded">Python</span>
        </div>
      </div>

      {/* Career application */}
      <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded border-l-4 border-green-500">
        <h4 className="text-xs font-semibold mb-1">Why This Matters</h4>
        <p className="text-xs text-muted-foreground">
          LLMs are transforming backend development. This certification equips me
          to build intelligent, AI-powered features into full-stack applications,
          a key skill for modern data-driven roles.
        </p>
      </div>
    </div>
  )
}

export default NVIDIALLMPage
