import { FC, ReactNode } from 'react'

interface IStrongProps {
  children: ReactNode
}

const Strong: FC<IStrongProps> = ({ children }) => {
  return <strong className="font-semibold text-app-neutral-600">{children}</strong>
}

export default Strong
