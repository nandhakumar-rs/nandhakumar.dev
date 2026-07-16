import {
  Children,
  FC,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'
import { FiEye, FiUploadCloud } from 'react-icons/fi'
import ExperimentVersion from './experiment-version.component'
import DeploymentBlock from './deployment-block.component'
import ObservationBlock from './observation-block.component'

interface ExperimentTimelineProps {
  children: ReactNode
}

const ExperimentTimeline: FC<ExperimentTimelineProps> = ({ children }) => {
  const childArray = Children.toArray(children).filter(isValidElement)

  return (
    <div className="relative mt-8">
      <div
        className="absolute bottom-0 left-[11px] top-1 w-px -translate-x-1/2 bg-gradient-to-b from-app-primary-500 via-app-primary-500 to-transparent"
        aria-hidden="true"
      />
      <ol className="space-y-12">
        {childArray.map((child, index) => {
          const isLatest = index === 0
          const element = child as ReactElement

          if (element.type === ExperimentVersion) {
            return (
              <li key={index} className="relative pl-8">
                <span
                  className={`absolute left-[11px] top-1.5 block -translate-x-1/2 rounded-full ${
                    isLatest
                      ? 'h-4 w-4 bg-app-primary-100 ring-4 ring-app-primary-100/15'
                      : 'h-3 w-3 border-2 border-app-primary-500 bg-app-primary-900'
                  }`}
                  aria-hidden="true"
                />
                {cloneElement(element, { isLatest })}
              </li>
            )
          }

          if (element.type === DeploymentBlock) {
            return (
              <li key={index} className="relative pl-8">
                <span
                  className="absolute left-[11px] top-1 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-app-primary-500 bg-app-primary-800 text-[10px] text-app-primary-100"
                  aria-hidden="true"
                >
                  <FiUploadCloud />
                </span>
                {child}
              </li>
            )
          }

          if (element.type === ObservationBlock) {
            return (
              <li key={index} className="relative pl-8">
                <span
                  className="absolute left-[11px] top-1 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-app-primary-500 bg-app-primary-800 text-[10px] text-app-primary-100"
                  aria-hidden="true"
                >
                  <FiEye />
                </span>
                {child}
              </li>
            )
          }

          return (
            <li key={index} className="relative pl-8">
              {child}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ExperimentTimeline
