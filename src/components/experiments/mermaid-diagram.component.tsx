import { FC, useEffect, useId, useRef, useState } from 'react'
import { FiMaximize2, FiX } from 'react-icons/fi'
import { useDismissableOverlay } from './lightbox.component'

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
  const [isExpanded, setIsExpanded] = useState(false)

  useDismissableOverlay(isExpanded, () => setIsExpanded(false))

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
    <div className="relative">
      <div
        ref={containerRef}
        className={`my-6 flex justify-center overflow-x-auto rounded-lg border border-app-primary-700 bg-app-primary-800 p-4 [&_svg]:h-auto [&_svg]:max-w-full ${className}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <button
        type="button"
        onClick={() => setIsExpanded(true)}
        className="absolute bottom-3 right-3 rounded-full bg-app-primary-900/80 p-2 text-app-primary-100 shadow hover:bg-app-primary-800 focus:outline-none focus:ring-2 focus:ring-app-primary-100"
        aria-label="Expand diagram"
      >
        <FiMaximize2 size={18} />
      </button>
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Architecture diagram"
          onClick={() => setIsExpanded(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md p-2 text-app-primary-100 hover:bg-app-primary-800 focus:outline-none focus:ring-2 focus:ring-app-primary-100"
            onClick={() => setIsExpanded(false)}
            aria-label="Close preview"
          >
            <FiX size={24} />
          </button>
          <div
            className="max-h-[90vh] w-[min(1400px,95vw)] overflow-auto rounded-lg bg-app-primary-800 p-6 [&_svg]:!h-auto [&_svg]:!w-full [&_svg]:!max-w-none"
            onClick={(event) => event.stopPropagation()}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </div>
  )
}

export default MermaidDiagram
