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
        <meta key="title" name="title" content={data?.title || ''} />
        <meta key="og:title" name="og:title" content={data?.title || ''} />
        {/* <meta
          key="twitter:title"
          name="twitter:title"
          content={data?.title || ''}
        /> */}

        <meta key="desc" name="description" content={data?.description || ''} />
        <meta
          key="og:desc"
          name="og:description"
          content={data?.description || ''}
        />
        {/* <meta
          key="twitter:desc"
          name="twitter:description"
          content={data?.description || ''}
        /> */}

        <meta property="image" name="image" content={data?.thumbnailUrl} />
        <meta
          property="og:image"
          name="og:image"
          content={data?.thumbnailUrl}
        />
        {/* <meta
          property="twitter:image"
          name="twitter:image"
          content={data?.thumbnailUrl}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nandhakumar_io" />
        <meta name="twitter:creator" content="@nandhakumar_io" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        <meta name="twitter:title" content="Title of your blog post" />
        <meta
          name="twitter:description"
          content="Description of your blog post"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
        />
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
