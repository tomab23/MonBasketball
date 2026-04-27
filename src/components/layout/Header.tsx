import type { ReactNode } from "react"

type Props = {
    children?: ReactNode;
    title: string;
}

const Header = ({ children, title }: Props) => {
  return (
    <div className="mt-2 flex items-center justify-between">
      <h2 className="text-xl uppercase max-sm:text-lg">{title}</h2>
        {children}
    </div>
  )
}

export default Header
