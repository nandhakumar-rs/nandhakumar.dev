import { FC, useEffect, useId, useRef, useState } from 'react'

interface MermaidDiagramProps {
  chart: string
  variant?: 'default' | 'preview'
  className?: string
}

let mermaidInitialized = false

const MermaidDiagram: FC<MermaidDiagramProps> = ({
  chart,
  variant = 'default',
  className = '',
}) => {
  const rawId = useId()
  const renderId = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'strict',
            theme: 'dark',
            themeVariables: {
              background: '#162025',
              primaryColor: '#16242B',
              primaryBorderColor: '#535D63',
              primaryTextColor: '#F3FBFF',
              lineColor: '#535D63',
              secondaryColor: '#0D1117',
              tertiaryColor: '#0D1117',
              clusterBkg: '#0A1A20',
              clusterBorder: '#535D63',
              titleColor: '#F3FBFF',
              edgeLabelBackground: '#162025',
              fontFamily: 'DM Sans, sans-serif',
            },
          })
          mermaidInitialized = true
        }

        const { svg: renderedSvg } = await mermaid.render(
          renderId,
          chart.trim(),
        )

        if (!cancelled) {
          setSvg(renderedSvg)
          setError(false)
        }
      } catch {
        if (!cancelled) setError(true)
      }
    }

    renderChart()

    return () => {
      cancelled = true
    }
  }, [chart, renderId])

  const isPreview = variant === 'preview'

  if (error) {
    if (isPreview) {
      return (
        <div
          className={`flex h-full w-full items-center justify-center px-4 text-center text-sm text-app-neutral-700 ${className}`}
        >
          Architecture preview
        </div>
      )
    }

    return (
      <pre className="my-6 overflow-x-auto rounded-lg border border-app-primary-700 bg-app-primary-800 p-4 text-sm text-app-neutral-700">
        {chart}
      </pre>
    )
  }

  if (isPreview) {
    return (
      <div
        ref={containerRef}
        className={`flex h-full w-full items-center justify-center overflow-hidden p-4 [&_svg]:h-auto [&_svg]:max-h-full [&_svg]:max-w-full ${className}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className={`my-6 flex justify-center overflow-x-auto rounded-lg border border-app-primary-700 bg-app-primary-800 p-4 [&_svg]:h-auto [&_svg]:max-w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default MermaidDiagram
