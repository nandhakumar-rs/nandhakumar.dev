import PostList from '../components/post-list.component'
import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
export default function HomePage(props: any) {
  const { posts } = props

  const [searchResults, setSearchResults] = useState(posts)
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)

    if (event.target.value) {
      const results = posts.filter(
        (post: any) =>
          String(post.title)
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          String(post.tags)
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          String(post.content)
            .toLowerCase()
            .includes(event.target.value.toLowerCase()),
      )

      setSearchResults(results)
    } else {
      setSearchResults(posts)
    }
  }

  return (
    <div>
      <Head>
        <title>Nandhakumar | Notes</title>
      </Head>
      <div>
        <div className="my-8">
          <h1 className="text-2xl font-semibold text-app-primary-100 sm:text-3xl">
            Building software, exploring AI, and documenting everything I learn.
          </h1>
          <p className="mt-3 text-base text-app-neutral-700 sm:text-lg">
            From technical deep-dives and experiments to products and lessons
            learned along the way.
          </p>
        </div>

        <div className="flex h-11 w-full max-w-lg items-center gap-2 rounded-lg border border-app-primary-700 bg-app-primary-800 px-3 transition-colors focus-within:border-app-primary-500">
          <FiSearch className="shrink-0 text-app-neutral-700" />
          <input
            value={searchTerm}
            placeholder="Search notes..."
            aria-label="Search notes"
            className="h-full w-full bg-transparent font-normal text-app-primary-100 outline-none placeholder:text-app-neutral-700"
            onChange={onSearchChange}
          />
        </div>

        <PostList posts={searchResults} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { getAllPosts } = await import('../lib/posts')
  const posts = getAllPosts()

  return { props: { posts } }
}
