import { FC, ReactNode } from 'react'

interface IBlockquoteProps {
  children: ReactNode
  type: 'important' | 'default'
}

const Blockquote: FC<IBlockquoteProps> = ({ type = 'default', children }) => {
  return (
    <blockquote
      className={`text-base bg-black bg-opacity-30 text-app-neutral-600 border-l-4 border-app-primary-500 px-6 py-1 `}
    >
      {children}
    </blockquote>
  )
}

export default Blockquote
