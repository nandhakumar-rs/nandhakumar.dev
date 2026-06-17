import Head from 'next/head'
import Link from 'next/link'
import PostList from '../components/post-list.component'
import { formatTagName } from '../lib/slugify'

export default function TagPage({ tagName, posts }: any) {
  const displayName = formatTagName(tagName)

  return (
    <div>
      <Head>
        <title>Nandhakumar | {displayName}</title>
      </Head>
      <div>
        <Link
          href="/"
          className="text-app-neutral-700 hover:underline text-base"
        >
          Back to all posts
        </Link>
        <p className="text-3xl font-semibold text-app-primary-100 my-8">
          {displayName}
        </p>

        <div className="max-w-lg">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { getAllTags } = await import('../lib/posts')
  const tags = getAllTags()

  return {
    paths: tags.map((tag) => ({ params: { tag: tag.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { tag } }: any) => {
  const { getPostsByTagSlug, getTagNameBySlug } = await import('../lib/posts')
  const tagName = getTagNameBySlug(tag)

  if (!tagName) {
    return { notFound: true }
  }

  const posts = getPostsByTagSlug(tag)

  return {
    props: {
      tagName,
      posts,
    },
  }
}
