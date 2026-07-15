import { FC } from 'react'
import { ExperimentStatus } from '../../lib/experiments'

const STATUS_CONFIG: Record<
  ExperimentStatus,
  { label: string; className: string }
> = {
  planning: {
    label: 'Planning',
    className: 'bg-app-primary-700 text-app-neutral-600 border-app-primary-500',
  },
  'in-progress': {
    label: 'In progress',
    className: 'bg-app-primary-800 text-app-primary-100 border-app-primary-500',
  },
  completed: {
    label: 'Completed',
    className: 'bg-app-primary-700 text-app-neutral-600 border-app-neutral-800',
  },
  archived: {
    label: 'Archived',
    className: 'bg-app-primary-800 text-app-neutral-700 border-app-primary-500',
  },
}

interface StatusBadgeProps {
  status: ExperimentStatus
  size?: 'sm' | 'md'
}

const StatusBadge: FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.planning

  return (
    <span
      className={`inline-flex items-center rounded-md border font-medium ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm'
      } ${config.className}`}
    >
      {config.label}
    </span>
  )
}

export default StatusBadge
