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
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
            Certified
          </span>
          <span className="text-xs text-muted-foreground">Issued: 2024</span>
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
        <h4 className="text-sm font-semibold text-accent">AWS Services Mastered</h4>
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

      {/* Relevance */}
      <div className="p-3 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded border-l-4 border-orange-400">
        <h4 className="text-xs font-semibold mb-1">Career Relevance</h4>
        <p className="text-xs text-muted-foreground">
          Perfect for my target role as a backend-heavy/data/AI fullstack developer.
          This certification demonstrates my ability to build and deploy AI-powered
          applications using industry-standard cloud infrastructure.
        </p>
      </div>

      {/* Credential */}
      <div className="text-center pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Credential ID: [Your Credential ID]
        </p>
      </div>
    </div>
  )
}

export default AWSAIPractitionerPage
