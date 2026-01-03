import { useSelection } from '../../context/SelectionContext'
import AboutDetail from '../pages/AboutDetail'
import ExperienceDetail from '../pages/ExperienceDetail'
import ProjectsDetail from '../pages/ProjectsDetail'
import ToolsDetail from '../pages/ToolsDetail'
import EducationDetail from '../pages/EducationDetail'
import CertificationsDetail from '../pages/CertificationsDetail'
import ContactsDetail from '../pages/ContactsDetail'

const DetailView = () => {
  const { selectedItem } = useSelection()

  // Default to About page when nothing is selected
  const section = selectedItem?.section ?? 'About'
  const data = selectedItem?.data

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-lg font-semibold text-accent">[{section}]</h2>
      </div>

      {/* Content based on section type */}
      <div className="space-y-4">
        {section === 'About' && <AboutDetail />}
        {section === 'Experience' && <ExperienceDetail data={data} />}
        {section === 'Projects' && <ProjectsDetail data={data} />}
        {section === 'Tools' && <ToolsDetail data={data} />}
        {section === 'Education' && <EducationDetail data={data} />}
        {section === 'Certifications' && <CertificationsDetail data={data} />}
        {section === 'Contacts' && <ContactsDetail data={data} />}
      </div>
    </div>
  )
}

export default DetailView
