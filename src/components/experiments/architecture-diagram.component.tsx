import { FC } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import { ImageWithLightbox } from './lightbox.component'
import { ArchitectureDiagramProps } from './types'

const ArchitectureDiagram: FC<ArchitectureDiagramProps> = ({
  src,
  alt,
  caption,
}) => {
  const slug = useExperimentSlug()
  const resolvedSrc = resolveAsset(src, slug)

  return (
    <ImageWithLightbox
      src={resolvedSrc}
      alt={alt}
      caption={caption}
      className="border border-app-primary-700 bg-app-primary-800"
      width={1200}
      height={800}
    />
  )
}

export default ArchitectureDiagram
