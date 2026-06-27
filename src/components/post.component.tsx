import { MDXRemote } from 'next-mdx-remote'
import CodeSnippet from './mdx/code-snippet.component'
import { H1, H2, H3, H4, H5, H6 } from './mdx/heading.component'
import Code from './mdx/code.component'
import P from './mdx/paragraph.component'
import HR from './mdx/hr.component'
import { LI, OL, UL } from './mdx/list.component'
import { MdxImage } from './mdx/image.component'
import HrefLink from './mdx/href-link.component'
import PostFootnote from './post-footnote.component'
import Tags from './common/tag.component'
import Blockquote from './mdx/blockquote.component'
import NotionTable from './mdx/notion-table.component'

const createComponents = (codeSnippets: Record<string, string> = {}) => ({
  CodeSnippet: (props: any) => (
    <CodeSnippet {...props} dynamicSnippets={codeSnippets} />
  ),
  NotionTable,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  hr: HR,
  code: Code,
  Code,
  ul: UL,
  ol: OL,
  Img: MdxImage,
  li: LI,
  a: HrefLink,
  blockquote: Blockquote,
})

const Post = ({
  data,
  content,
  mdxSource,
  readingTime,
  slug,
  codeSnippets = {},
}: any) => {
  const components = createComponents(codeSnippets)
  return (
    <article className="mt-8">
      <div className="text-app-neutral-700 flex items-center gap-3">
        <p>{data.publishedAt}</p>
        <div className="h-1 w-1 bg-app-neutral-700 rounded-full"></div>
        <p>{data.readingTime}</p>
      </div>
      <h1 className="text-app-primary-100 text-4xl font-bold mt-1 mb-4">
        {data.title}
      </h1>
      <Tags tags={data.tags} />
      {data.thumbnailUrl ? (
        <MdxImage src={data.thumbnailUrl} alt={data.title} />
      ) : (
        ''
      )}
      <HR />
      <div className="text-app-neutral-700 text-base mt-2">
        <MDXRemote {...mdxSource} components={components}></MDXRemote>
        <HR />
        <PostFootnote slug={slug} />
      </div>
    </article>
  )
}

export default Post
