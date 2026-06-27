export function preprocessCodeSnippets(content: string): {
  content: string
  codeSnippets: Record<string, string>
} {
  const codeSnippets: Record<string, string> = {}
  let index = 0

  const processedContent = content.replace(
    /<CodeSnippet([^>]*)>\s*\{\`([\s\S]*?)\`\}\s*<\/\s*CodeSnippet>/gi,
    (_match, attrs, code) => {
      const name = `mdx-snippet-${index++}`
      codeSnippets[name] = code
      return `<CodeSnippet${attrs} name="${name}" />`
    },
  )

  return { content: processedContent, codeSnippets }
}
