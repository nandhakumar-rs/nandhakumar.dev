import { FC } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import { ImageWithLightbox } from './lightbox.component'
import { ExperimentImageProps } from './types'

const ExperimentImage: FC<ExperimentImageProps> = ({
  src,
  alt,
  caption,
  width,
  height,
}) => {
  const slug = useExperimentSlug()
  const resolvedSrc = resolveAsset(src, slug)

  return (
    <ImageWithLightbox
      src={resolvedSrc}
      alt={alt}
      caption={caption}
      width={width}
      height={height}
    />
  )
}

export default ExperimentImage
