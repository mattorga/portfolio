import { createContext, useContext, useState, ReactNode } from 'react'

// Define types for different section items
export type SectionType = 'About' | 'Experience' | 'Projects' | 'Tools' | 'Education' | 'Certifications' | 'Contacts'

export interface SelectedItem {
  section: SectionType
  data: any // We'll use any here since each section has different data structures
}

interface SelectionContextType {
  selectedItem: SelectedItem | null
  setSelectedItem: (item: SelectedItem | null) => void
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined)

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null)

  return (
    <SelectionContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectionContext.Provider>
  )
}

export const useSelection = () => {
  const context = useContext(SelectionContext)
  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider')
  }
  return context
}
