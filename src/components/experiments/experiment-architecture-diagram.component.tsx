import { FC } from 'react'
import { useExperimentArchitecture } from './experiment-slug-context'
import { ImageWithLightbox } from './lightbox.component'
import MermaidDiagram from './mermaid-diagram.component'

interface ExperimentArchitectureDiagramProps {
  alt?: string
  caption?: string
}

const ExperimentArchitectureDiagram: FC<ExperimentArchitectureDiagramProps> = ({
  alt = 'Architecture diagram',
  caption,
}) => {
  const { architectureChart, architectureImageResolved } =
    useExperimentArchitecture()

  if (architectureChart) {
    return <MermaidDiagram chart={architectureChart} />
  }

  if (architectureImageResolved) {
    return (
      <ImageWithLightbox
        src={architectureImageResolved}
        alt={alt}
        caption={caption}
        className="border border-app-primary-700 bg-app-primary-800"
        width={1200}
        height={800}
      />
    )
  }

  return null
}

export default ExperimentArchitectureDiagram
