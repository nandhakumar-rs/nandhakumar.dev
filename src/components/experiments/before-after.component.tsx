import { FC } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import { ImageWithLightbox } from './lightbox.component'
import { BeforeAfterProps } from './types'

const BeforeAfter: FC<BeforeAfterProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
}) => {
  const slug = useExperimentSlug()

  return (
    <figure className="my-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-app-neutral-700">
            {beforeLabel}
          </p>
          <ImageWithLightbox
            src={resolveAsset(beforeSrc, slug)}
            alt={beforeAlt}
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-app-neutral-700">
            {afterLabel}
          </p>
          <ImageWithLightbox
            src={resolveAsset(afterSrc, slug)}
            alt={afterAlt}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-0 text-center text-sm text-app-neutral-700">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default BeforeAfter
