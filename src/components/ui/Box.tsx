import { ReactNode } from "react"

interface BoxProps {
  section: string;
  children?: ReactNode
}

interface BoxItemProps {
  children: ReactNode;
}

interface BoxFooterProps {
  current: number;
  total: number;
}

const Box = ({ section, children }: BoxProps) => {
  return (
    <div className="relative border border-alabaster">
      <label className="absolute -top-2 left-1 bg-light-black text-alabaster px-2 text-[8px]">[{section}]</label>
      {children}
    </div>
  )
}

const BoxItem = ({ children }: BoxItemProps) => {
  return (
    <div className="text-alabaster text-[8px] px-4 my-1">
      {children}
    </div>
  )
}

const BoxFooter = ({ current, total }: BoxFooterProps) => {
  return (
    <span className="absolute -bottom-1.5 right-1 bg-light-black text-alabaster px-2 text-[8px]">
      {current} of {total}
    </span>
  )
}

export { Box, BoxItem, BoxFooter }