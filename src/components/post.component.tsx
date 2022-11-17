import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import CodeSnippet from './mdx/code-snippet.component'
import { H1, H2, H3, H4, H5, H6 } from './mdx/heading.component'
import Code from './mdx/code.component'
import P from './mdx/paragraph.component'
import HR from './mdx/hr.component'
import { LI, OL, UL } from './mdx/list.component'
import Image from 'next/image'
import { MdxImage } from './mdx/image.component'

const Components = {
  CodeSnippet,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  hr: HR,
  code: Code,
  ul: UL,
  ol: OL,
  Img: MdxImage,
  li: LI,
}

const Post = ({ data, content, mdxSource, readingTime }: any) => {
  return (
    <article className="mt-8">
      <div className="text-app-neutral-700 flex items-center gap-3">
        <p>27-09-2022</p>
        <div className="h-1 w-1 bg-app-neutral-700 rounded-full"></div>
        <p>{readingTime}</p>
      </div>
      <h1 className="text-app-primary-100 text-4xl font-bold mt-1">
        {data.title}
      </h1>
      <HR />
      <div className="text-app-neutral-700 text-xl mt-2">
        <MDXRemote {...mdxSource} components={Components}></MDXRemote>
      </div>
    </article>
  )
}

export default Post
