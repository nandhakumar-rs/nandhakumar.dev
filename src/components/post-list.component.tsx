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
            className={`text-2xl font-bold text-app-primary-100 ${
              index === 0 ? 'mt-4' : 'mt-10'
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
