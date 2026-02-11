import { SiAmazon } from 'react-icons/si'

const AWSAIPractitionerPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with AWS branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-400/10 rounded-lg">
            <SiAmazon className="w-12 h-12 text-orange-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">AWS Certified AI Practitioner</h3>
            <p className="text-coral text-sm mt-1">Amazon Web Services</p>
            <p className="text-xs text-muted-foreground mt-1">Issued: 2024</p>
          </div>
        </div>
      </div>

      {/* What this certification covers */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">What I Learned</h4>
        <p className="text-sm text-muted-foreground">
          This certification validates my knowledge of AI/ML concepts and AWS services
          for building, deploying, and managing AI applications in production environments.
        </p>
      </div>

      {/* Key competencies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">AI/ML Fundamentals</p>
            <p className="text-xs text-muted-foreground">
              Understanding ML models, training, and inference
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">AWS AI Services</p>
            <p className="text-xs text-muted-foreground">
              SageMaker, Bedrock, Rekognition, and more
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Model Deployment</p>
            <p className="text-xs text-muted-foreground">
              Best practices for deploying ML models at scale
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Responsible AI</p>
            <p className="text-xs text-muted-foreground">
              Ethics, bias detection, and governance
            </p>
          </div>
        </div>
      </div>

      {/* AWS services covered */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">AWS Services Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-orange-400/10 text-xs rounded border border-orange-400/20">
            Amazon SageMaker
          </span>
          <span className="px-2 py-1 bg-orange-400/10 text-xs rounded border border-orange-400/20">
            Amazon Bedrock
          </span>
          <span className="px-2 py-1 bg-orange-400/10 text-xs rounded border border-orange-400/20">
            Amazon Rekognition
          </span>
          <span className="px-2 py-1 bg-orange-400/10 text-xs rounded border border-orange-400/20">
            Amazon Comprehend
          </span>
        </div>
      </div>

      {/* Credential */}
      <div className="text-center pt-4">
        <a
          href="https://www.credly.com/badges/32729d11-6156-424f-8cf4-f985920c9ee6/linked_in_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent transition-all"
        >
          View Credential on Credly
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default AWSAIPractitionerPage
