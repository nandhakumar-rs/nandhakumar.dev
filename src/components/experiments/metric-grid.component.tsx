import { FC } from 'react'
import { MetricGridProps } from './types'

const MetricGrid: FC<MetricGridProps> = ({ metrics = [] }) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-app-primary-700 bg-app-primary-800 p-4"
        >
          <p className="text-sm text-app-neutral-700">{metric.label}</p>
          <p className="mt-1 text-2xl font-bold text-app-primary-100">
            {metric.value}
          </p>
          {metric.note && (
            <p className="mt-1 text-xs text-app-neutral-700">{metric.note}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default MetricGrid
