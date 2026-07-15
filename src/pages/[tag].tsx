import Head from 'next/head'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
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
          className="mt-8 inline-flex items-center gap-1.5 text-base text-app-neutral-700 transition-colors hover:text-app-primary-100"
        >
          <FiArrowLeft aria-hidden="true" />
          Back to all notes
        </Link>
        <h1 className="my-6 text-2xl font-semibold text-app-primary-100 sm:text-3xl">
          {displayName}
        </h1>

        <PostList posts={posts} />
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
