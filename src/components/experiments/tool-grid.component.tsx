import Image from 'next/image'
import { FC, useState } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import HrefLink from '../mdx/href-link.component'
import { ToolGridProps, ToolItem } from './types'

const ToolLogo: FC<{ tool: ToolItem; slug: string }> = ({ tool, slug }) => {
  const [hasError, setHasError] = useState(false)
  const iconSrc = tool.icon ? resolveAsset(tool.icon, slug) : undefined

  if (!iconSrc || hasError) {
    return (
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-app-primary-700 text-xs font-bold text-app-neutral-600"
        aria-hidden="true"
      >
        {tool.name.slice(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <Image
      src={iconSrc}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 shrink-0 rounded-md object-contain"
      onError={() => setHasError(true)}
    />
  )
}

const ToolCard: FC<{ tool: ToolItem; slug: string }> = ({ tool, slug }) => {
  const card = (
    <div className="flex h-full gap-3 rounded-lg border border-app-primary-700 bg-app-primary-800 p-4 transition-colors hover:border-app-primary-500">
      <ToolLogo tool={tool} slug={slug} />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-app-neutral-600">{tool.name}</h4>
          {tool.category && (
            <span className="text-xs text-app-neutral-700">{tool.category}</span>
          )}
        </div>
        {tool.description && (
          <p className="mt-1 text-sm text-app-neutral-700">{tool.description}</p>
        )}
      </div>
    </div>
  )

  if (tool.href) {
    return <HrefLink href={tool.href}>{card}</HrefLink>
  }

  return card
}

const ToolGrid: FC<ToolGridProps> = ({ tools = [], groupByCategory = true }) => {
  const slug = useExperimentSlug()

  if (!groupByCategory) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} slug={slug} />
        ))}
      </div>
    )
  }

  const grouped = tools.reduce<Record<string, ToolItem[]>>((acc, tool) => {
    const category = tool.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(tool)
    return acc
  }, {})

  return (
    <div className="mt-6 space-y-8">
      {Object.entries(grouped).map(([category, categoryTools]) => (
        <section key={category}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-app-neutral-700">
            {category}
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categoryTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} slug={slug} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ToolGrid
