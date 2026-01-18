import { useSelection } from '../../context/SelectionContext'
import { useState, useRef, useEffect } from 'react'
import AboutDetail from '../pages/AboutDetail'
import ExperienceDetail from '../pages/ExperienceDetail'
import ProjectsDetail from '../pages/ProjectsDetail'
import ToolsDetail from '../pages/ToolsDetail'
import EducationDetail from '../pages/EducationDetail'
import CertificationsDetail from '../pages/CertificationsDetail'
import ContactsDetail from '../pages/ContactsDetail'

const DetailView = () => {
  const { selectedItem } = useSelection()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [topFadeOpacity, setTopFadeOpacity] = useState(0)
  const [bottomFadeOpacity, setBottomFadeOpacity] = useState(0)

  // Default to About page when nothing is selected
  const section = selectedItem?.section ?? 'About'
  const data = selectedItem?.data

  const updateFadeVisibility = () => {
    const el = scrollRef.current
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const isScrollable = scrollHeight > clientHeight

    if (!isScrollable) {
      setTopFadeOpacity(0)
      setBottomFadeOpacity(0)
      return
    }

    // Fade in over 48px of scrolling (matches h-12 gradient height)
    const fadeDistance = 48
    const distanceFromBottom = scrollHeight - clientHeight - scrollTop

    setTopFadeOpacity(Math.min(scrollTop / fadeDistance, 1))
    setBottomFadeOpacity(Math.min(distanceFromBottom / fadeDistance, 1))
  }

  useEffect(() => {
    updateFadeVisibility()
  }, [section, data])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    el.addEventListener('scroll', updateFadeVisibility)
    window.addEventListener('resize', updateFadeVisibility)

    return () => {
      el.removeEventListener('scroll', updateFadeVisibility)
      window.removeEventListener('resize', updateFadeVisibility)
    }
  }, [])

  return (
    <div className="h-full min-h-0 flex flex-col p-6">
      {/* Section Header */}
      <div className="flex-shrink-0 mb-6">
        <h2 className="text-lg font-semibold text-accent">[{section}]</h2>
      </div>

      {/* Content based on section type - scrollable */}
      <div className="relative flex-1 min-h-0">
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto space-y-4 scrollbar-hide"
        >
          {section === 'About' && <AboutDetail />}
          {section === 'Experience' && <ExperienceDetail data={data} />}
          {section === 'Projects' && <ProjectsDetail data={data} />}
          {section === 'Tools' && <ToolsDetail data={data} />}
          {section === 'Education' && <EducationDetail data={data} />}
          {section === 'Certifications' && <CertificationsDetail data={data} />}
          {section === 'Contacts' && <ContactsDetail data={data} />}
        </div>
        {/* Scroll fade indicators */}
        <div
          className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none"
          style={{ opacity: topFadeOpacity }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none"
          style={{ opacity: bottomFadeOpacity }}
        />
      </div>
    </div>
  )
}

export default DetailView
