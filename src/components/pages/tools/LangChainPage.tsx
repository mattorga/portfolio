import { SiLangchain } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const LangChainPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-emerald-500/10 rounded-lg">
          <SiLangchain className="w-10 h-10 text-emerald-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">LangChain</h3>
          <p className="text-sm text-muted-foreground mt-1">
            LLM Application Framework
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use LangChain For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Autonomous Agents</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building multi-step AI workflows with tool integration
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Document Processing</p>
            <p className="text-xs text-muted-foreground mt-1">
              Extracting structured data from unstructured documents
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Advanced Prompting</p>
            <p className="text-xs text-muted-foreground mt-1">
              Few-shot and Chain-of-Thought prompting techniques
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="LLM Document Parser Project" year="2025" />
        </div>
      </div>

      {/* Related Certifications */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Certifications</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="DataCamp AI Engineer Certification" year="2026" />
          <RelatedExperienceLink label="NVIDIA LLM Applications Certification" year="2025" />
        </div>
      </div>
    </div>
  )
}

export default LangChainPage
