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
          <p className="text-3xl font-semibold text-app-primary-100">
            Building software, exploring AI, and documenting everything I learn.
          </p>
          <p className="text-lg text-app-neutral-700 mt-3">
            From technical deep-dives and experiments to products and lessons
            learned along the way.
          </p>
        </div>

        <div className="max-w-lg">
          <div className='h-10 w-full rounded-md overflow-hidden flex items-center  bg-app-primary-800 p-2  '>
            <FiSearch className='text-app-primary-100' />
            <input
              value={searchTerm}
              placeholder="Search Notes ..."
              className="w-full h-full outline-none p-2 font-normal bg-app-primary-800  placeholder-app-primary-400 text-app-primary-100"
              onChange={onSearchChange}
            />
          </div>

          <PostList posts={searchResults} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { getAllPosts } = await import('../lib/posts')
  const posts = getAllPosts()

  return { props: { posts } }
}
