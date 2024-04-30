import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeSnippet = (props: any) => {
  return (
    <div className="relative my-8">
      {props.filename && (
        <div className="syntax-h font-bold text-sm px-4 py-1 rounded-t-lg font-mono w-max ml-auto mr-6">
          {props.filename}
        </div>
      )}

      <SyntaxHighlighter
        showLineNumbers={props.showLineNumbers}
        className="text-base rounded-md syntax-h mt-0"
        language="javascript"
        style={oneDark}
        useInlineStyles={true}
        {...props}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
