import { FC, useCallback, useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import MarkdownRenderer from './markdown-renderer.component'

interface GuideModalProps {
  url: string
  title: string
  isOpen: boolean
  onClose: () => void
}

const guideCache = new Map<string, string>()

const GuideModal: FC<GuideModalProps> = ({ url, title, isOpen, onClose }) => {
  const [markdown, setMarkdown] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  useEffect(() => {
    if (!isOpen) return

    const cached = guideCache.get(url)
    if (cached !== undefined) {
      setMarkdown(cached)
      setStatus('idle')
      return
    }

    const controller = new AbortController()
    setStatus('loading')

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
        return response.text()
      })
      .then((text) => {
        guideCache.set(url, text)
        setMarkdown(text)
        setStatus('idle')
      })
      .catch((error) => {
        if (error?.name === 'AbortError') return
        setStatus('error')
      })

    return () => controller.abort()
  }, [isOpen, url])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/80 p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-3xl flex-col overflow-hidden bg-app-primary-900 shadow-xl sm:h-auto sm:max-h-[90vh] sm:rounded-lg sm:border sm:border-app-primary-700"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between gap-3 border-b border-app-primary-700 bg-app-primary-900 px-5 py-4">
          <h2 className="truncate text-lg font-bold text-app-primary-100">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close guide"
            className="shrink-0 rounded-md p-2 text-app-neutral-700 transition-colors hover:bg-app-primary-800 hover:text-app-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-8">
          {status === 'loading' && (
            <p className="text-sm text-app-neutral-700">Loading guide...</p>
          )}
          {status === 'error' && (
            <div className="text-sm text-app-neutral-700">
              <p className="font-semibold text-app-neutral-600">
                Could not load this guide.
              </p>
              <p className="mt-1">
                The file may be unavailable or blocked by CORS.{' '}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-app-primary-100 underline underline-offset-2"
                >
                  Open it directly
                </a>
                .
              </p>
            </div>
          )}
          {status === 'idle' && markdown && (
            <MarkdownRenderer markdown={markdown} baseUrl={url} />
          )}
        </div>
      </div>
    </div>
  )
}

export default GuideModal
