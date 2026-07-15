import { FC, ReactNode } from 'react'

interface ICodeProps {
  children: ReactNode
  type: 'important' | 'default'
}

const Code: FC<ICodeProps> = ({ type = 'default', children }) => {
  return (
    <code className="rounded border border-app-primary-700 bg-app-primary-800 px-1.5 py-0.5 font-mono text-sm font-medium text-app-neutral-600">
      {children}
    </code>
  )
}

export default Code
