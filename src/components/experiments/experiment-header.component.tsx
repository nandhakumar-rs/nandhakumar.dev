import { FC } from 'react'
import { ExperimentMeta } from '../../lib/experiments'
import StatusBadge from './status-badge.component'

interface ExperimentHeaderProps {
  experiment: ExperimentMeta
}

const ExperimentHeader: FC<ExperimentHeaderProps> = ({ experiment }) => {
  const { title, description, status, latestVersion, category } = experiment

  return (
    <header className="mt-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-app-neutral-700">
        <StatusBadge status={status} />
        {category && <span>{category}</span>}
        {latestVersion && (
          <>
            <span className="h-1 w-1 rounded-full bg-app-neutral-700" />
            <span className="font-mono">Latest: {latestVersion}</span>
          </>
        )}
      </div>

      <h1 className="mt-3 text-3xl font-bold text-app-primary-100 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-base text-app-neutral-700 sm:text-lg">
        {description}
      </p>
    </header>
  )
}

export default ExperimentHeader
