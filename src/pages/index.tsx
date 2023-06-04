import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import PostShort from '../components/post-short.component'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
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
        <title>Nandhakumar | Posts</title>
      </Head>
      <div>
        <p className=" text-3xl font-semibold text-app-primary-100 my-8">
          I Write about UI, UX, Programming,
          <br /> My Learnings & Experiences in my journey!
        </p>

        <div className="max-w-lg">
          <div className='h-10 w-full rounded-md overflow-hidden flex items-center  bg-app-primary-800 p-2  '>
            <FiSearch className='text-app-primary-100' />
            <input
              value={searchTerm}
              placeholder="Search Posts ..."
              className="w-full h-full outline-none p-2 font-normal bg-app-primary-800  placeholder-app-primary-400 text-app-primary-100"
              onChange={onSearchChange}
            />
          </div>

          {searchResults.map((post: any, index: any) => {
            return (
              <PostShort
                key={index}
                data={post}
                readingTime={post.readingTime}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = readdirSync(path.join('src', 'posts'))

  const posts = files.map((filename) => {
    const mdMetaData = readFileSync(path.join('src', 'posts', filename))
    const { data, content } = matter(mdMetaData)
    return {
      ...data,
      readingTime: readingTime(content).text,
      slug: filename.replace('.mdx', ''),
      content,
    }
  })

  posts.sort((a: any, b: any) => {
    if (new Date(a.publishedAt).getTime() < new Date(b.publishedAt).getTime())
      return 1
    if (new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime())
      return -1

    return 0
  })

  return { props: { posts } }
}
