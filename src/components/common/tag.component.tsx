import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface ITagProps {
  tags: string[]
}

const Tags: FC<ITagProps> = ({ tags }) => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      {tags.map((tag, index) => (
        <p
          key={index}
          className="bg-app-primary-700 font-mono text-sm text-app-neutral-600 px-2 py-0.5 rounded-sm"
        >
          #{tag}
        </p>
      ))}
    </div>
  )
}

export default Tags
