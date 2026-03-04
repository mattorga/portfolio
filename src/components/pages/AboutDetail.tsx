import { useState } from 'react'
import profilePicture from '@/assets/profile_picture.webp'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useSelection } from '../../context/SelectionContext'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const contacts = [
  { icon: Github, label: 'GitHub', value: 'mattorga', href: 'https://github.com/mattorga' },
  { icon: Linkedin, label: 'LinkedIn', value: 'matthew-orga', href: 'https://linkedin.com/in/matthew-orga-245944144' },
  { icon: Mail, label: 'Email', value: 'matthew.rivera.orga@gmail.com', href: 'mailto:matthew.rivera.orga@gmail.com' },
  { icon: Phone, label: 'Phone', value: '(+63) 919 980 4664' },
]

// First items of each section (matching the data in section components)
const sectionLinks = [
  { icon: '💼', label: 'Experience', section: 'Experience' as const, data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' } },
  { icon: '🚀', label: 'Projects', section: 'Projects' as const, data: { id: 1, name: 'Markerless Gait Analysis using 3D Human Pose Estimation' } },
  { icon: '🛠️', label: 'Tools', section: 'Tools' as const, data: { id: 1, name: 'HTML' } },
  { icon: '🎓', label: 'Education', section: 'Education' as const, data: { id: 1, degree: 'BS Computer Engineering', school: 'De La Salle University' } },
  { icon: '📜', label: 'Certifications', section: 'Certifications' as const, data: { id: 1, name: 'Gold Medal for Outstanding Thesis', issuer: 'De La Salle University' } },
]

const AboutDetail = () => {
  const { setSelectedItem } = useSelection()
  const [contactsOpen, setContactsOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <img
            src={profilePicture}
            alt="Matthew Orga"
            className="w-48 h-48 sm:w-56 sm:h-56 object-cover border border-border"
          />
          <div className="absolute inset-0 border border-border pointer-events-none mix-blend-overlay bg-gradient-to-b from-transparent to-black/20" />
        </div>
        {/* Navigation buttons — mobile: flex wrap icons, desktop: fixed 3+2 grid */}
        {/* Mobile buttons */}
        <div className="flex flex-wrap justify-center gap-2 w-full sm:hidden">
          {sectionLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setSelectedItem({ section: link.section, data: link.data })}
              className="basis-[calc(33.333%-0.375rem)] px-3 py-2 hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              <span className="flex flex-col items-center gap-1">
                <span className="text-lg">{link.icon}</span>
                <span className="text-[8px] text-muted-foreground whitespace-nowrap">[ {link.label} ]</span>
              </span>
            </button>
          ))}
          <button
            onClick={() => setContactsOpen(true)}
            className="basis-[calc(33.333%-0.375rem)] px-3 py-2 hover:bg-foreground hover:text-background transition-colors duration-150"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="text-lg">📇</span>
              <span className="text-[8px] text-muted-foreground whitespace-nowrap">[ Contacts ]</span>
            </span>
          </button>
        </div>
        {/* Desktop buttons */}
        <div className="hidden sm:grid grid-cols-3 gap-2 w-full">
          {sectionLinks.slice(0, 3).map((link) => (
            <button
              key={link.label}
              onClick={() => setSelectedItem({ section: link.section, data: link.data })}
              className="px-2 py-1 text-xs text-center hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              [ {link.icon} {link.label} ]
            </button>
          ))}
          {sectionLinks.slice(3).map((link) => (
            <button
              key={link.label}
              onClick={() => setSelectedItem({ section: link.section, data: link.data })}
              className="px-2 py-1 text-xs text-center hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              [ {link.icon} {link.label} ]
            </button>
          ))}
          <button
            onClick={() => setContactsOpen(true)}
            className="px-2 py-1 text-xs text-center hover:bg-foreground hover:text-background transition-colors duration-150"
          >
            [ 📇 Contacts ]
          </button>
        </div>

        {/* Contacts modal */}
        <Dialog open={contactsOpen} onOpenChange={setContactsOpen}>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Contacts</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 pt-2">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <c.icon className="w-4 h-4 shrink-0 text-muted-foreground" />
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <p className="text-sm text-foreground leading-relaxed">
          Hi! I'm Matthew, a Software Engineer and <span className="text-[#78DCE8]">AWS Certified AI Practitioner</span> with a BS in Computer Engineering.
          I specialize in <span className="text-[#78DCE8]">backend-heavy</span>, <span className="text-[#78DCE8]">data-driven</span>, and <span className="text-[#78DCE8]">AI-focused</span> solutions.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[Background]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          {/*// Background story, journey into tech, interests, etc.*/}
          I started my journey in tech even before college. Curious about how software works, I took Harvard's CS50x in 2020.
          My first programming language was C, where along with learning syntax and logic, I had to learn about resource-management.
          Dealing with memory and pointers early on cemented my <span className="italic">personality</span> as a programmer, instilling in me
          not just the very foundations, but a gravitation towards performant, reliable, and most importantly secure code.
          Now, I bring this trait even with today's level of abstractions especially in web development.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[What I Do]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          I architect <span className="text-[#78DCE8]">Edge-to-Cloud AI pipelines</span> and <span className="text-[#78DCE8]">scalable serverless backends</span> using the <span className="text-[#78DCE8]">AWS ecosystem</span>.
          My track record spans high-complexity systems, from <span className="text-[#78DCE8]">3D Human Pose Estimation</span> to <span className="text-[#78DCE8]">real-time analytics orchestration</span>.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Currently</h4>
        <p className="text-sm text-foreground leading-relaxed">
          Specializing in the deployment of <span className="text-[#78DCE8]">applied AI workflows</span> and <span className="text-[#78DCE8]">intelligent agentic systems</span>.
        </p>
      </div>

    </div>
  )
}

export default AboutDetail
