import { SiAmazon } from 'react-icons/si'
import awsBadge from '@/assets/aws_certified_ai_practioner.webp'

const AWSAIPractitionerPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with AWS branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <SiAmazon className="w-14 h-14 text-orange-400 shrink-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold">AWS Certified AI Practitioner</h3>
            <p className="text-coral text-sm mt-1">Amazon Web Services</p>
            <p className="text-xs text-muted-foreground mt-1">Issued: 2024</p>
          </div>
        </div>
      </div>

      {/* Badge and Credential */}
      <div className="flex flex-col items-center gap-3">
        <img src={awsBadge} alt="AWS Certified AI Practitioner Badge" className="w-48 h-48 object-contain" />
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
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">AWS Services Covered</h4>

        {/* ML/AI Services */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Machine Learning / AI</p>
          <div className="flex flex-wrap gap-1.5">
            {['SageMaker', 'Bedrock', 'Comprehend', 'Rekognition', 'Lex', 'Polly', 'Textract', 'Transcribe', 'Translate', 'Personalize', 'Kendra', 'Fraud Detector', 'A2I', 'Q'].map((service) => (
              <span key={service} className="px-2 py-0.5 bg-orange-400/10 text-xs rounded border border-orange-400/20">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Analytics</p>
          <div className="flex flex-wrap gap-1.5">
            {['Glue', 'EMR', 'Redshift', 'QuickSight', 'OpenSearch', 'Lake Formation', 'Data Exchange'].map((service) => (
              <span key={service} className="px-2 py-0.5 bg-orange-400/10 text-xs rounded border border-orange-400/20">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Infrastructure & Security</p>
          <div className="flex flex-wrap gap-1.5">
            {['EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'KMS', 'ECS', 'EKS'].map((service) => (
              <span key={service} className="px-2 py-0.5 bg-orange-400/10 text-xs rounded border border-orange-400/20">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Databases</p>
          <div className="flex flex-wrap gap-1.5">
            {['DynamoDB', 'RDS', 'Neptune', 'ElastiCache', 'MemoryDB', 'DocumentDB'].map((service) => (
              <span key={service} className="px-2 py-0.5 bg-orange-400/10 text-xs rounded border border-orange-400/20">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      </div>
  )
}

export default AWSAIPractitionerPage
