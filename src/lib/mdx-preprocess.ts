function findBalancedExpression(
  content: string,
  startIndex: number,
): { end: number; inner: string } | null {
  if (content[startIndex] !== '{') return null

  let depth = 0
  for (let i = startIndex; i < content.length; i++) {
    const char = content[i]
    if (char === '{') depth++
    else if (char === '}') {
      depth--
      if (depth === 0) {
        return {
          end: i,
          inner: content.slice(startIndex + 1, i),
        }
      }
    }
  }

  return null
}

export function preprocessExperimentProps(content: string): {
  content: string
  experimentScope: Record<string, unknown>
} {
  const experimentScope: Record<string, unknown> = {}
  let counter = 0
  let result = content

  const configs = [
    { component: 'MetricGrid', prop: 'metrics', prefix: 'mdxMetrics' },
    { component: 'ToolGrid', prop: 'tools', prefix: 'mdxTools' },
    { component: 'ResultGallery', prop: 'items', prefix: 'mdxGallery' },
  ]

  for (const { component, prop, prefix } of configs) {
    const tagRegex = new RegExp(`<${component}\\b[\\s\\S]*?\\/?>`, 'g')

    result = result.replace(tagRegex, (match) => {
      const propMarker = `${prop}=`
      const propIdx = match.indexOf(propMarker)
      if (propIdx === -1) return match

      let bracePos = propIdx + propMarker.length
      while (match[bracePos] === ' ') bracePos++

      const balanced = findBalancedExpression(match, bracePos)
      if (!balanced) return match

      const scopeKey = `${prefix}${counter++}`

      try {
        experimentScope[scopeKey] = new Function(`return (${balanced.inner})`)()
      } catch {
        return match
      }

      const before = match.slice(0, propIdx)
      const after = match.slice(balanced.end + 1)
      return `${before}${prop}={${scopeKey}}${after}`
    })
  }

  return { content: result, experimentScope }
}

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
