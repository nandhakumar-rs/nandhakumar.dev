import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { ExperimentMeta } from '../../lib/experiments'
import StatusBadge from './status-badge.component'
import MermaidDiagram from './mermaid-diagram.component'

interface ExperimentCardProps {
  experiment: ExperimentMeta
}

const ExperimentCard: FC<ExperimentCardProps> = ({ experiment }) => {
  const {
    slug,
    title,
    description,
    status,
    category,
    latestVersion,
    technologies = [],
    architectureImageResolved,
    architectureChart,
  } = experiment

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-app-primary-700 bg-app-primary-800 transition-colors hover:border-app-primary-500">
      <Link href={`/experiments/${slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-app-primary-700">
          {architectureChart ? (
            <MermaidDiagram variant="preview" chart={architectureChart} />
          ) : architectureImageResolved ? (
            <Image
              src={architectureImageResolved}
              alt={`${title} architecture`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-app-neutral-700">
              Architecture preview
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <StatusBadge status={status} size="sm" />
            {category && (
              <span className="text-xs text-app-neutral-700">{category}</span>
            )}
            {latestVersion && (
              <span className="text-xs font-mono text-app-neutral-700">
                Latest: {latestVersion}
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-app-primary-100 group-hover:underline">
            {title}
          </h2>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-app-neutral-700">
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-app-primary-700 px-2 py-0.5 font-mono text-xs text-app-neutral-600"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs text-app-neutral-700">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}

export default ExperimentCard
