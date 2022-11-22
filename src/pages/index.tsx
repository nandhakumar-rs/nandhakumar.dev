import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import PostShort from '../components/post-short.component'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import Head from 'next/head'

export default function HomePage(props: any) {
  const { posts } = props

  return (
    <div>
      <Head>
        <title>Nandhakumar | Posts</title>
      </Head>
      <div className="max-w-lg">
        {posts.map((post: any, index: any) => {
          return <PostShort key={index} data={post} readingTime={post.readingTime} />
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
    }
  })
  return { props: { posts } }
}
