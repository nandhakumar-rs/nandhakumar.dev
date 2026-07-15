import { FC, ReactNode } from 'react'

interface IBlockquoteProps {
  children: ReactNode
  type: 'important' | 'default'
}

const Blockquote: FC<IBlockquoteProps> = ({ type = 'default', children }) => {
  return (
    <blockquote
      className="my-6 rounded-lg border border-l-4 border-app-primary-700 border-l-app-primary-500 bg-app-primary-800 px-5 py-2 text-base leading-relaxed text-app-neutral-600"
    >
      {children}
    </blockquote>
  )
}

export default Blockquote
