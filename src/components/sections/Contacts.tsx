import { Github, Linkedin, Mail } from "lucide-react"

const Contacts = () => {
  return (
    <div className="flex items-center gap-5 pt-3">
      <a href="#" className="hover:text-primary transition-colors" aria-label="Github">
        <Github className="w-5 h-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors" aria-label="Email">
        <Mail className="w-5 h-5" />
      </a>
    </div>
  )
}

export default Contacts