import { FC } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import { ImageWithLightbox } from './lightbox.component'
import { ResultGalleryProps } from './types'

const ResultGallery: FC<ResultGalleryProps> = ({ items = [] }) => {
  const slug = useExperimentSlug()

  return (
    <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item, index) => (
        <ImageWithLightbox
          key={`${item.src}-${index}`}
          src={resolveAsset(item.src, slug)}
          alt={item.alt}
          caption={item.caption}
        />
      ))}
    </div>
  )
}

export default ResultGallery
