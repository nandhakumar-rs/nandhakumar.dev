import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeSnippet = (props: any) => {
  const { code, children, filename, showLineNumbers, language, ...rest } = props
  const content = code ?? children

  return (
    <div className="relative my-8">
      {filename && (
        <div className="syntax-h font-bold text-sm px-4 py-1 rounded-t-lg font-mono w-max ml-auto mr-6">
          {filename}
        </div>
      )}

      <SyntaxHighlighter
        showLineNumbers={showLineNumbers}
        className="text-base rounded-md syntax-h mt-0"
        language={language ?? 'javascript'}
        style={oneDark}
        useInlineStyles={true}
        {...rest}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
