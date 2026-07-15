import { FC } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { DeploymentBlockProps } from './types'

const DeploymentBlock: FC<DeploymentBlockProps> = ({
  title = 'Deployment',
  children,
}) => {
  return (
    <section className="rounded-lg border border-l-4 border-app-primary-700 border-l-app-primary-500 bg-app-primary-800 px-4 py-4 sm:px-5">
      <div className="flex items-center gap-2 text-app-primary-100">
        <FiUploadCloud aria-hidden="true" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="mt-3 text-app-neutral-700">{children}</div>
    </section>
  )
}

export default DeploymentBlock
