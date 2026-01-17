import { SiAmazon } from 'react-icons/si'

const AWSPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-400/10 rounded-lg">
          <SiAmazon className="w-10 h-10 text-orange-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">AWS</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Amazon Web Services Cloud Platform
          </p>
        </div>
      </div>

      {/* Services used */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">AWS Services I've Used</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent rounded">
            <p className="text-sm font-medium">Compute & Hosting</p>
            <p className="text-xs text-muted-foreground mt-1">
              EC2, Lambda, Amplify for deploying applications
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent rounded">
            <p className="text-sm font-medium">Storage & Database</p>
            <p className="text-xs text-muted-foreground mt-1">
              S3, RDS, DynamoDB for data persistence
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent rounded">
            <p className="text-sm font-medium">AI & ML</p>
            <p className="text-xs text-muted-foreground mt-1">
              SageMaker, Bedrock for ML model deployment
            </p>
          </div>
        </div>
      </div>

      {/* Certification */}
      <div className="p-4 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-lg border border-orange-400/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-accent">Certified AI Practitioner</p>
            <p className="text-xs text-muted-foreground mt-1">AWS Certification</p>
          </div>
          <div className="px-3 py-1 bg-orange-400/20 rounded-full text-xs font-medium text-orange-400">
            Certified
          </div>
        </div>
      </div>

      {/* What I'm learning */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Currently Exploring</h4>
        <p className="text-sm text-muted-foreground">
          Diving deeper into serverless architectures with Lambda and API Gateway,
          and exploring AWS best practices for cost optimization and security.
        </p>
      </div>
    </div>
  )
}

export default AWSPage
