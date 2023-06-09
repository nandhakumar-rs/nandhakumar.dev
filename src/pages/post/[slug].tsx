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
        <title>
          Post | Using Handlebars Templates with SendGrid in Node.js
        </title>
        <meta
          name="title"
          content="Post | Using Handlebars Templates with SendGrid in Node.js"
        />
        <meta
          name="description"
          content="Learn how to how to use the Handlebars template engine to create dynamic email templates, and how to send these emails using SendGrid in a Node.js application"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.nandhakumar.io/post/using-handlebar-with-sendgrid"
        />
        <meta
          property="og:title"
          content="Post | Using Handlebars Templates with SendGrid in Node.js"
        />
        <meta
          property="og:description"
          content="Learn how to how to use the Handlebars template engine to create dynamic email templates, and how to send these emails using SendGrid in a Node.js application"
        />
        <meta
          property="og:image"
          content="/images/post/using-handlebar-with-sendgrid.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.nandhakumar.io/post/using-handlebar-with-sendgrid"
        />
        <meta
          property="twitter:title"
          content="Post | Using Handlebars Templates with SendGrid in Node.js"
        />
        <meta
          property="twitter:description"
          content="Learn how to how to use the Handlebars template engine to create dynamic email templates, and how to send these emails using SendGrid in a Node.js application"
        />
        <meta
          property="twitter:image"
          content="/images/post/using-handlebar-with-sendgrid.png"
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
