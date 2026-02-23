import { useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const iconClass = "hover:text-teal-400 hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.7)] transition-all"

const Contacts = () => {
  const [phoneOpen, setPhoneOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-evenly pt-3">
        <a href="https://github.com/mattorga" target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Github">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/matthew-orga-245944144" target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:matthew.rivera.orga@gmail.com" className={iconClass} aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
        <button onClick={() => setPhoneOpen(true)} className={iconClass} aria-label="Phone">
          <Phone className="w-5 h-5" />
        </button>
      </div>

      <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
        <DialogContent className="sm:max-w-xs p-8" showCloseButton={false}>
          <DialogHeader className="text-center items-center">
            <DialogTitle>Contact Number</DialogTitle>
            <DialogDescription>(+63) 919 980 4664</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Contacts
