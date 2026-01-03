interface CertificationsDetailProps {
  data: {
    name: string | string[]
    issuer: string
  }
}

const CertificationsDetail = ({ data }: CertificationsDetailProps) => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">
          {Array.isArray(data.name) ? data.name.join(' ') : data.name}
        </h3>
        <p className="text-sm text-coral mt-1">{data.issuer}</p>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>// Add certification date, credential ID, verification link, etc.</p>
      </div>
    </div>
  )
}

export default CertificationsDetail
