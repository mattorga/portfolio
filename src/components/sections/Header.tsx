import { useState } from 'react'
import { useSelection } from '../../context/SelectionContext'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { selectedItem, setSelectedItem } = useSelection()

  const isAboutSelected = selectedItem?.section === 'About'
  const shouldStopPulse = isHovered || isAboutSelected

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
      <h1 className="text-[#FC9867] text-2xl leading-relaxed origin-left" style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
        MATTHEW
      </h1>
      <h1 className="text-[#FC9867] text-2xl leading-relaxed origin-left" style={{ fontFamily: "'Press Start 2P', monospace", transform: 'scaleX(1.5)' }}>
        ORGA
      </h1>
    </div>
  )
}

export default Header
