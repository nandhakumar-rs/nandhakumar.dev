import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

interface LightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

const Lightbox: FC<LightboxProps> = ({ src, alt, isOpen, onClose }) => {
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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-md p-2 text-app-primary-100 hover:bg-app-primary-800 focus:outline-none focus:ring-2 focus:ring-app-primary-100"
        onClick={onClose}
        aria-label="Close preview"
      >
        <FiX size={24} />
      </button>
      <div
        className="relative max-h-[90vh] max-w-[95vw]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>
  )
}

export default Lightbox

interface ImageWithLightboxProps {
  src: string
  alt: string
  caption?: string
  className?: string
  width?: number
  height?: number
}

export const ImageWithLightbox: FC<ImageWithLightboxProps> = ({
  src,
  alt,
  caption,
  className = '',
  width = 1080,
  height = 720,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <figure className="my-8">
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-app-primary-500 bg-app-primary-800 px-6 py-10 text-center text-sm text-app-neutral-700">
          {alt || 'Image placeholder'}
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-app-neutral-700">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <>
      <figure className="my-8">
        <button
          type="button"
          className="group block w-full cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-app-primary-100 focus:ring-offset-2 focus:ring-offset-app-primary-900 rounded-lg"
          onClick={() => setIsOpen(true)}
          aria-label={`View larger: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className={`mx-auto w-full rounded-lg object-contain ${className}`}
            onError={() => setHasError(true)}
          />
        </button>
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-app-neutral-700">
            {caption}
          </figcaption>
        )}
      </figure>
      <Lightbox
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export { Lightbox }
