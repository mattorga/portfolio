import { useState } from 'react'
import { useSelection } from '../../context/SelectionContext'

interface HeaderProps {
  startupPhase: number
}

const Header = ({ startupPhase }: HeaderProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { selectedItem, setSelectedItem } = useSelection()

  const isAboutSelected = selectedItem?.section === 'About'
  const shouldStopPulse = isHovered || isAboutSelected
  const shouldShowGlow = startupPhase >= 2 && isAboutSelected

  const handleClick = () => {
    setSelectedItem({ section: 'About', data: {} })
  }

  return (
    <div
      className={`space-y-1 cursor-pointer ${shouldStopPulse ? '' : 'animate-pulse'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h1 className={`text-[#FC9867] text-2xl leading-relaxed origin-left transition-[filter] duration-700 ${shouldShowGlow ? 'drop-shadow-[0_0_15px_rgba(252,152,103,0.9)]' : ''}`} style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
        MATTHEW
      </h1>
      <h1 className={`text-[#FC9867] text-2xl leading-relaxed origin-left transition-[filter] duration-700 ${shouldShowGlow ? 'drop-shadow-[0_0_15px_rgba(252,152,103,0.9)]' : ''}`} style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
        ORGA
      </h1>
    </div>
  )
}

export default Header
