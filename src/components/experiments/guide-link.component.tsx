import { FC, useState } from 'react'
import { FiBookOpen, FiChevronRight } from 'react-icons/fi'
import { GuideLinkProps } from './types'
import GuideModal from './guide-modal.component'

const GuideLink: FC<GuideLinkProps> = ({ url, title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group my-3 flex w-full items-center gap-3 rounded-lg border border-app-primary-700 bg-app-primary-900 px-4 py-3 text-left transition-colors hover:border-app-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-app-primary-900"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-app-primary-700 text-app-primary-100">
          <FiBookOpen aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold text-app-neutral-600">
            {title}
          </span>
          {description && (
            <span className="mt-0.5 block truncate text-sm text-app-neutral-700">
              {description}
            </span>
          )}
        </span>
        <FiChevronRight
          aria-hidden="true"
          className="shrink-0 text-app-neutral-700 transition-transform group-hover:translate-x-0.5"
        />
      </button>

      <GuideModal
        url={url}
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default GuideLink
