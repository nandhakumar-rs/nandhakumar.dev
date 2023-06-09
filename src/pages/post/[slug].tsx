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
  slug,
}: any) {
  console.log(data)
  return (
    <section>
      <Head>
        <title>Post | {data?.title || ''}</title>

        <meta name="title" content={data?.title} />
        <meta name="description" content={data?.description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.nandhakumar.io/post/${slug}`}
        />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content={data?.thumbnailUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.nandhakumar.io/post/${slug}`}
        />
        <meta property="twitter:title" content={data?.title} />
        <meta property="twitter:description" content={data?.description} />
        <meta property="twitter:image" content={data?.thumbnailUrl} />
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
      slug,
    },
  }
}
