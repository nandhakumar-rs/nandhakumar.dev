import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeSnippet = (props: any) => {
  return (
    <div className="relative my-8">
      <SyntaxHighlighter
        className="text-base rounded-md syntax-h"
        language="javascript"
        style={oneDark}
        useInlineStyles={true}
        {...props}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
