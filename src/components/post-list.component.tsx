import { FC } from 'react'
import { groupPostsByYear } from '../lib/date'
import PostShort from './post-short.component'

interface IPostListProps {
  posts: any[]
}

const PostList: FC<IPostListProps> = ({ posts }) => {
  const groupedPosts = groupPostsByYear(posts)

  return (
    <>
      {groupedPosts.map(({ year, posts: yearPosts }, index) => (
        <section key={year}>
          <h2
            className={`border-b border-app-primary-700 pb-2 text-lg font-bold text-app-neutral-700 ${
              index === 0 ? 'mt-6' : 'mt-12'
            }`}
          >
            {year}
          </h2>
          {yearPosts.map((post) => (
            <PostShort
              key={post.slug}
              data={post}
              readingTime={post.readingTime}
            />
          ))}
        </section>
      ))}
    </>
  )
}

export default PostList
