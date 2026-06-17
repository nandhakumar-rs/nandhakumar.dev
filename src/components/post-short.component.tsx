import Link from 'next/link'
import { FC } from 'react'
import { formatPostCardDate } from '../lib/date'

interface IPostShortProps {
  data: any
  readingTime: string
}

const PostShort: FC<IPostShortProps> = ({ data, readingTime }) => {

  const trimText = (text: string) =>
    text.length > 170 ? `${text.substring(0, 170)} ... ` : text

  return (
    <article className="mt-8 group">
      <Link href={`/post/${data.slug}`}>
        <div className="text-app-neutral-700 text-base flex items-center gap-3">
          <p>{formatPostCardDate(data.publishedAt)}</p>
          <div className="h-1 w-1 bg-app-neutral-700 rounded-full"></div>
          <p>{readingTime}</p>
        </div>
        <h1 className="text-app-neutral-600 text-xl font-bold mt-1 mb-2 group-hover:underline">
          {data.title}
        </h1>
      </Link>
    </article>
  )
}

export default PostShort
