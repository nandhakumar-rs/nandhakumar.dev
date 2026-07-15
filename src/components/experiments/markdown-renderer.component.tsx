import { FC, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
import { FiExternalLink, FiX } from 'react-icons/fi'
import MermaidDiagram from './mermaid-diagram.component'

interface MarkdownRendererProps {
  markdown: string
  baseUrl?: string
}

function resolveUrl(src: string | undefined, baseUrl?: string): string {
  if (!src) return ''
  if (!baseUrl) return src
  try {
    return new URL(src, baseUrl).href
  } catch {
    return src
  }
}

const GuideImage: FC<{ src?: string; alt?: string; baseUrl?: string }> = ({
  src,
  alt,
  baseUrl,
}) => {
  const [zoomed, setZoomed] = useState(false)
  const resolved = resolveUrl(src, baseUrl)

  return (
    <>
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="my-6 block w-full cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100"
        aria-label={alt ? `View larger: ${alt}` : 'View larger image'}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt || ''}
          loading="lazy"
          className="mx-auto w-full rounded-lg border border-app-primary-700 object-contain"
        />
      </button>
      {alt && (
        <span className="mt-2 block text-center text-sm text-app-neutral-700">
          {alt}
        </span>
      )}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Image preview'}
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md p-2 text-app-primary-100 hover:bg-app-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100"
            onClick={() => setZoomed(false)}
            aria-label="Close preview"
          >
            <FiX size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolved}
            alt={alt || ''}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ markdown, baseUrl }) => {
  return (
    <div className="text-app-neutral-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-8 mb-4 text-2xl font-bold text-app-primary-100 sm:text-3xl first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 mb-4 text-xl font-bold text-app-primary-100 sm:text-2xl first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-lg font-bold text-app-neutral-600">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-5 mb-2 text-base font-bold text-app-neutral-600">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-4 text-base leading-relaxed text-app-neutral-700">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={resolveUrl(href, baseUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded text-app-primary-100 underline underline-offset-2 transition-colors hover:text-app-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100"
            >
              {children}
              <FiExternalLink aria-hidden="true" className="text-xs" />
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-5 list-outside list-disc space-y-2 marker:text-app-neutral-800">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-5 list-outside list-decimal space-y-2 marker:text-app-neutral-800">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-base leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 rounded-lg border border-l-4 border-app-primary-700 border-l-app-primary-500 bg-app-primary-800 px-5 py-2 text-app-neutral-600">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="mt-8 mb-8 w-full border-app-primary-700" />,
          img: ({ src, alt }) => (
            <GuideImage src={src as string} alt={alt} baseUrl={baseUrl} />
          ),
          table: ({ children }) => (
            <div className="my-6 w-full overflow-x-auto rounded-lg border border-app-primary-700">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-app-primary-800">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border-b border-app-primary-700 px-4 py-3 text-left text-base font-semibold text-app-neutral-600">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-app-primary-700 px-4 py-3 align-top text-base text-app-neutral-700">
              {children}
            </td>
          ),
          pre: ({ children }) => <>{children}</>,
          code: ({ className, children, ...rest }) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match?.[1]
            const content = String(children).replace(/\n$/, '')

            if (language === 'mermaid') {
              return <MermaidDiagram chart={content} />
            }

            if (language) {
              return (
                <SyntaxHighlighter
                  language={language}
                  style={oneDark}
                  useInlineStyles
                  className="my-6 rounded-lg text-sm"
                >
                  {content}
                </SyntaxHighlighter>
              )
            }

            return (
              <code
                className="rounded border border-app-primary-700 bg-app-primary-800 px-1.5 py-0.5 font-mono text-sm font-medium text-app-neutral-600"
                {...rest}
              >
                {children}
              </code>
            )
          },
          video: (props) => (
            <video
              controls
              preload="metadata"
              className="my-6 aspect-video w-full rounded-lg border border-app-primary-700 bg-black"
              {...(props as any)}
            />
          ),
          iframe: (props) => (
            <div className="my-6 aspect-video w-full overflow-hidden rounded-lg border border-app-primary-700">
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe className="h-full w-full" {...(props as any)} />
            </div>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
