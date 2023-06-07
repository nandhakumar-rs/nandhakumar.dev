import { FC, ReactNode } from 'react'

interface ICodeProps {
  children: ReactNode
  type: 'important' | 'default'
}

const Code: FC<ICodeProps> = ({ type = 'default', children }) => {
  return (
    <code
      className={`font-mono text-base font-semibold text-app-danger-900 bg-white bg-opacity-10 rounded px-1 py-0.5`}
    >
      {children}
    </code>
  )
}

export default Code
