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
                <meta name="twitter:card" content="summary_large_image" ></meta>
        <meta name="twitter:site" content="@nandhakumar_io" ></meta>
<meta name="twitter:title" content="Photo by Hyundai Motor Group on Unsplash" data-rh="true"></meta>

<meta name="twitter:description" content="Genesis GV60 is charging at EV charging station – Download this photo by Hyundai Motor Group on Unsplash" data-rh="true"></meta>
<meta name="twitter:url" content="https://www.nandhakumar.io/post/using-handlebar-with-sendgrid" data-rh="true"></meta>

<meta name="twitter:image" content="https://images.unsplash.com/photo-1666919643134-d97687c1826c?crop=faces%2Cedges&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2ODYzMTc0MDV8&amp;ixlib=rb-4.0.3&amp;q=60&amp;w=1200&amp;auto=format&amp;h=630&amp;mark-w=64&amp;mark-align=top%2Cleft&amp;mark-pad=50&amp;blend-mode=normal&amp;blend-alpha=10&amp;blend-w=1&amp;mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&amp;blend=000000" data-rh="true"></meta>
<meta name="twitter:creator" content="@hyundaimotorgroup" data-rh="true"></meta>
        
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
