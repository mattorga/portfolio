interface ContactsDetailProps {
  data: {
    platform: string
    value: string
  }
}

const ContactsDetail = ({ data }: ContactsDetailProps) => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">{data.platform}</h3>
        <p className="text-sm text-muted-foreground mt-1">{data.value}</p>
      </div>
    </div>
  )
}

export default ContactsDetail
