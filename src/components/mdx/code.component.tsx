import { FC, ReactNode } from 'react'

interface ICodeProps {
  children: ReactNode
  type: 'important' | 'default'
}

const Code: FC<ICodeProps> = ({ type = 'default', children }) => {
  return (
    <code
      className={`text-lg font-sans text-app-neutral-600 bg-white bg-opacity-10 font-medium rounded px-1 py-0.5`}
    >
      {children}
    </code>
  )
}

export default Code
