import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import PostShort from '../components/post-short.component'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

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
      <div className="max-w-lg">
        <input value={searchTerm} placeholder='Search Posts ...' className='w-full h-10 outline-none rounded-lg p-2 bg-app-primary-800 font-normal placeholder-app-primary-400 text-app-primary-100' onChange={onSearchChange} />

        {searchResults.map((post: any, index: any) => {
          return (
            <PostShort key={index} data={post} readingTime={post.readingTime} />
          )
        })}
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
