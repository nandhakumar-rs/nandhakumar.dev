import { FC } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { ExperimentVersionProps } from './types'
import HrefLink from '../mdx/href-link.component'

const VERSION_STATUS_LABELS: Record<
  NonNullable<ExperimentVersionProps['status']>,
  string
> = {
  planned: 'Planned',
  'in-progress': 'In progress',
  completed: 'Completed',
}

const ExperimentVersion: FC<ExperimentVersionProps> = ({
  version,
  title,
  summary,
  status,
  gitBranchUrl,
  gitTagUrl,
  pullRequestUrl,
  isLatest,
  children,
}) => {
  const gitUrl = gitBranchUrl || gitTagUrl || pullRequestUrl
  const gitLabel = gitBranchUrl
    ? 'View branch'
    : gitTagUrl
      ? 'View tag'
      : pullRequestUrl
        ? 'View PR'
        : null

  return (
    <article>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`font-bold text-app-neutral-600 ${
                isLatest ? 'text-xl' : 'text-lg'
              }`}
            >
              <span className="font-mono text-app-primary-100">{version}</span>
              <span className="mx-2 text-app-neutral-700" aria-hidden="true">
                —
              </span>
              {title}
            </h3>
            {status && (
              <span className="rounded-md border border-app-primary-500 px-2 py-0.5 text-xs text-app-neutral-700">
                {VERSION_STATUS_LABELS[status]}
              </span>
            )}
          </div>
          {summary && (
            <p className="mt-1 text-sm text-app-neutral-700">{summary}</p>
          )}
        </div>

        {gitUrl && gitLabel && (
          <HrefLink href={gitUrl}>
            <span className="inline-flex items-center gap-1 text-sm text-app-neutral-700">
              {gitLabel}
              <FiExternalLink aria-hidden="true" className="text-xs" />
            </span>
          </HrefLink>
        )}
      </div>

      {children && (
        <div className="mt-4 text-app-neutral-700">{children}</div>
      )}
    </article>
  )
}

export default ExperimentVersion
