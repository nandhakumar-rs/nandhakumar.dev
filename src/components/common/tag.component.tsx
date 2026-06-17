import Link from 'next/link'
import { FC } from 'react'
import { formatTagName, slugifyTag } from '../../lib/slugify'

interface ITagProps {
  tags: string[]
}

const Tags: FC<ITagProps> = ({ tags }) => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      {tags.map((tag, index) => (
        <Link
          key={index}
          href={`/${slugifyTag(tag)}`}
          className="bg-app-primary-700 font-mono text-sm text-app-neutral-600 px-2 py-0.5 rounded-md hover:underline"
        >
          {formatTagName(tag)}
        </Link>
      ))}
    </div>
  )
}

export default Tags
