import { useSelection, SectionType } from '../../context/SelectionContext'

// Define route mappings for related experience items
const routeMappings: Record<string, { section: SectionType; data: any }> = {
  // Experience - Supervaise
  'Hino Motors Analytics Platform': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Hino Motors Backend Development': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Health Equity Dashboard': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Supervaise Software Engineer': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'AWS Amplify Deployments': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Serverless Backend Development': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'AWS Lambda Layers': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Internal QA Tool': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },
  'Hino Motors Low-Code Tool': {
    section: 'Experience',
    data: { id: 1, role: 'Software Engineer', company: 'Supervaise', alias: 'Supervaise' }
  },

  // Experience - ISI
  'ISI Traffic Analytics App': {
    section: 'Experience',
    data: { id: 2, role: 'Software Engineering Intern', company: 'Intelligent Systems Innovation Inc.', alias: 'ISI' }
  },
  'ISI Traffic Analytics Internship': {
    section: 'Experience',
    data: { id: 2, role: 'Software Engineering Intern', company: 'Intelligent Systems Innovation Inc.', alias: 'ISI' }
  },

  // Projects
  'GaitScape Thesis (Gold Medal)': {
    section: 'Projects',
    data: { id: 1, name: 'Markerless Gait Analysis using 3D Human Pose Estimation' }
  },
  'GaitScape Thesis Application': {
    section: 'Projects',
    data: { id: 1, name: 'Markerless Gait Analysis using 3D Human Pose Estimation' }
  },
  'ITC-CSCC Publication': {
    section: 'Projects',
    data: { id: 1, name: 'Markerless Gait Analysis using 3D Human Pose Estimation' }
  },
  'LLM Document Parser Project': {
    section: 'Projects',
    data: { id: 2, name: 'LLM-Driven Automated Document Parser' }
  },
  'Modified VGG-19 for CIFAR10': {
    section: 'Projects',
    data: { id: 3, name: 'Modified VGG-19 for CIFAR10 Dataset' }
  },
  'VGG-19 Image Classification': {
    section: 'Projects',
    data: { id: 3, name: 'Modified VGG-19 for CIFAR10 Dataset' }
  },
  'CNN-LSTM Gait Classification': {
    section: 'Projects',
    data: { id: 4, name: 'Pathological Gait Classification using Hybrid CNN-LSTM' }
  },
  'Pathological Gait Classification': {
    section: 'Projects',
    data: { id: 4, name: 'Pathological Gait Classification using Hybrid CNN-LSTM' }
  },
  'Exercise Rep Counter': {
    section: 'Projects',
    data: { id: 5, name: 'Exercise Pose Identifier and Rep Counter' }
  },
  'Component Borrowing System': {
    section: 'Projects',
    data: { id: 6, name: 'On-campus Electronic Equipment Borrowing System' }
  },

  // Certifications
  'Gold Medal Thesis Award': {
    section: 'Certifications',
    data: { id: 1, name: 'Gold Medal for Outstanding Thesis', issuer: 'De La Salle University' }
  },
  'AWS Certified AI Practitioner': {
    section: 'Certifications',
    data: { id: 2, name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services' }
  },
  'NVIDIA Deep Learning Certification': {
    section: 'Certifications',
    data: { id: 5, name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' }
  },
  'NVIDIA LLM Applications Certification': {
    section: 'Certifications',
    data: { id: 4, name: ['Building LLM Applications', 'with Prompt Engineering'], issuer: 'NVIDIA' }
  },
  'DataCamp AI Engineer Certification': {
    section: 'Certifications',
    data: { id: 3, name: ['Associate AI Engineer', 'for Developers'], issuer: 'DataCamp' }
  },
}

interface RelatedExperienceLinkProps {
  label: string
  year?: string
}

const RelatedExperienceLink = ({ label, year }: RelatedExperienceLinkProps) => {
  const { setSelectedItem } = useSelection()

  const route = routeMappings[label]

  const handleClick = () => {
    if (route) {
      setSelectedItem(route)
    }
  }

  if (!route) {
    // Non-clickable item (like "This Portfolio Website")
    return (
      <div className="p-2 bg-accent/10 rounded text-muted-foreground flex justify-between items-center">
        <span>{label}</span>
        {year && <span className="text-muted-foreground/60">{year}</span>}
      </div>
    )
  }

  return (
    <div
      onClick={handleClick}
      className="p-2 bg-accent/10 rounded cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors flex justify-between items-center"
    >
      <span>{label}</span>
      {year && <span className="opacity-60">{year}</span>}
    </div>
  )
}

export default RelatedExperienceLink
