import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC } from 'react'
import { ExperimentMeta, ExperimentTabId } from '../../lib/experiments'
import {
  ExperimentArchitectureProvider,
  ExperimentSlugProvider,
} from './experiment-slug-context'
import ExperimentHeader from './experiment-header.component'
import {
  ExperimentTabsNav,
  ExperimentTabsProvider,
} from './experiment-tabs.component'
import { createExperimentComponents } from './mdx-components'

interface ExperimentDetailProps {
  experiment: ExperimentMeta
  mdxSource: MDXRemoteSerializeResult
  availableTabs: ExperimentTabId[]
  codeSnippets?: Record<string, string>
}

const ExperimentDetail: FC<ExperimentDetailProps> = ({
  experiment,
  mdxSource,
  availableTabs,
  codeSnippets = {},
}) => {
  const components = createExperimentComponents(codeSnippets)

  return (
    <ExperimentSlugProvider slug={experiment.slug}>
      <ExperimentArchitectureProvider
        architectureChart={experiment.architectureChart ?? null}
        architectureImageResolved={experiment.architectureImageResolved ?? null}
      >
        <ExperimentHeader experiment={experiment} />
        <ExperimentTabsProvider availableTabs={availableTabs}>
          <ExperimentTabsNav repositoryUrl={experiment.repositoryUrl} />
          <div className="text-app-neutral-700">
            <MDXRemote {...mdxSource} components={components as any} />
          </div>
        </ExperimentTabsProvider>
      </ExperimentArchitectureProvider>
    </ExperimentSlugProvider>
  )
}

export default ExperimentDetail
