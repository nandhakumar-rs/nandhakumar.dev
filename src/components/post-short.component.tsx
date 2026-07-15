import Link from 'next/link'
import { FC } from 'react'
import { formatPostCardDate } from '../lib/date'

interface IPostShortProps {
  data: any
  readingTime: string
}

const PostShort: FC<IPostShortProps> = ({ data, readingTime }) => {
  const trimText = (text: string) =>
    text && text.length > 160 ? `${text.substring(0, 160).trim()}...` : text

  const tags: string[] = Array.isArray(data.tags) ? data.tags : []

  return (
    <article className="group mt-6 border-b border-app-primary-700 pb-6 last:border-b-0">
      <Link
        href={`/notes/${data.slug}`}
        className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-4 focus-visible:ring-offset-app-primary-900"
      >
        <div className="flex items-center gap-3 text-sm text-app-neutral-700">
          <p>{formatPostCardDate(data.publishedAt)}</p>
          <span className="h-1 w-1 rounded-full bg-app-neutral-700" />
          <p>{readingTime}</p>
        </div>
        <h2 className="mt-1 text-xl font-bold text-app-primary-100 transition-colors group-hover:text-app-neutral-600 sm:text-2xl">
          {data.title}
        </h2>
        {data.description && (
          <p className="mt-2 text-sm leading-relaxed text-app-neutral-700 sm:text-base">
            {trimText(data.description)}
          </p>
        )}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-app-primary-700 px-2 py-0.5 font-mono text-xs text-app-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
}

export default PostShort
