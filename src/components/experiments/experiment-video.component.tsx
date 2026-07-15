import { FC } from 'react'
import { resolveAsset } from '../../lib/experiment-assets'
import { useExperimentSlug } from './experiment-slug-context'
import { ExperimentVideoProps } from './types'

const ExperimentVideo: FC<ExperimentVideoProps> = ({
  src,
  poster,
  caption,
  youtubeId,
}) => {
  const slug = useExperimentSlug()
  const resolvedSrc = resolveAsset(src, slug)
  const resolvedPoster = poster ? resolveAsset(poster, slug) : undefined

  return (
    <figure className="my-8">
      {youtubeId ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-app-primary-700">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={caption || 'Experiment video'}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <video
          controls
          preload="metadata"
          poster={resolvedPoster}
          className="aspect-video w-full rounded-lg border border-app-primary-700 bg-black"
        >
          <source src={resolvedSrc} />
          Your browser does not support the video tag.
        </video>
      )}
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-app-neutral-700">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default ExperimentVideo
