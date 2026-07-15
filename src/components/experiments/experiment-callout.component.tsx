import { FC } from 'react'
import { FiAlertTriangle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ExperimentCalloutProps, ExperimentCalloutVariant } from './types'

const VARIANT_CONFIG: Record<
  ExperimentCalloutVariant,
  { container: string; icon: string; Icon: IconType }
> = {
  info: {
    container: 'border-app-primary-700 border-l-app-primary-500 bg-app-primary-800',
    icon: 'text-app-primary-100',
    Icon: FiInfo,
  },
  note: {
    container: 'border-app-primary-700 border-l-app-primary-500 bg-black/20',
    icon: 'text-app-neutral-600',
    Icon: FiInfo,
  },
  warning: {
    container: 'border-app-primary-700 border-l-app-danger-900 bg-app-primary-800',
    icon: 'text-app-danger-900',
    Icon: FiAlertTriangle,
  },
  success: {
    container: 'border-app-primary-700 border-l-app-primary-500 bg-app-primary-800',
    icon: 'text-app-primary-100',
    Icon: FiCheckCircle,
  },
}

const ExperimentCallout: FC<ExperimentCalloutProps> = ({
  title,
  variant = 'note',
  children,
}) => {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.note
  const { Icon } = config

  return (
    <aside
      className={`my-6 flex gap-3 rounded-lg border border-l-4 px-4 py-4 sm:px-5 ${config.container}`}
      role="note"
    >
      <Icon
        aria-hidden="true"
        className={`mt-0.5 shrink-0 text-lg ${config.icon}`}
      />
      <div className="min-w-0">
        {title && (
          <p className="mb-1 font-semibold text-app-neutral-600">{title}</p>
        )}
        <div className="text-sm leading-relaxed text-app-neutral-700">
          {children}
        </div>
      </div>
    </aside>
  )
}

export default ExperimentCallout
