import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Post from '../../components/post.component'
import readingTime from 'reading-time'
import Head from 'next/head'

export default function PostPage({
  data,
  content,
  mdxSource,
  readingTime,
}: any) {
  return (
    <section>
      <Head>
        <title>Post | {data?.title || ''}</title>
        <meta  key="title" name="title" content={data?.title || ''} />
        <meta  key="og:title" name="title" content={data?.title || ''} />

        <meta  key="desc" name="description" content={data?.description || ''} />
        <meta  key="og:desc" name="description" content={data?.description || ''} />

        <meta
          property="image"
          content={data?.thumbnailUrl}/>
        <meta
          property="og:image"
          content={data?.thumbnailUrl}/>
      </Head>
      <Post
        data={data}
        content={content}
        mdxSource={mdxSource}
        readingTime={readingTime}
      />
    </section>
  )
}

export const getStaticPaths = async () => {
  const files = readdirSync(path.join('src', 'posts'))
  const paths = files.map((filename) => {
    return { params: { slug: filename.replace('.mdx', '') } }
  })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { slug } }: any) => {
  const matterData = readFileSync(path.join('src', 'posts', `${slug}.mdx`))
  const { data, content } = matter(matterData)
  const mdxSource = await serialize(content)
  return {
    props: {
      data: { ...data, readingTime: readingTime(content).text },
      content,
      mdxSource,
    },
  }
}
