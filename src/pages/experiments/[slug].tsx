import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { FC } from 'react'
import ExperimentDetail from '../../components/experiments/experiment-detail.component'
import {
  ExperimentMeta,
  ExperimentTabId,
  getAllExperimentSlugs,
} from '../../lib/experiments'
import { preprocessCodeSnippets, preprocessExperimentProps } from '../../lib/mdx-preprocess'

interface ExperimentPageProps {
  experiment: ExperimentMeta
  mdxSource: any
  availableTabs: ExperimentTabId[]
  slug: string
  codeSnippets: Record<string, string>
}

const ExperimentPage: FC<ExperimentPageProps> = ({
  experiment,
  mdxSource,
  availableTabs,
  slug,
  codeSnippets,
}) => {
  const ogImage = 'https://nandhakumar.io/profile.png'
  const canonicalUrl = `https://nandhakumar.io/experiments/${slug}`

  return (
    <section>
      <Head>
        <title>Experiment | {experiment.title}</title>
        <meta name="title" content={experiment.title} />
        <meta name="description" content={experiment.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={experiment.title} />
        <meta property="og:description" content={experiment.description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={experiment.title} />
        <meta property="twitter:description" content={experiment.description} />
        {ogImage && <meta property="twitter:image" content={ogImage} />}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ExperimentDetail
        experiment={experiment}
        mdxSource={mdxSource}
        availableTabs={availableTabs}
        codeSnippets={codeSnippets}
      />
    </section>
  )
}

export default ExperimentPage

export const getStaticPaths = async () => {
  const slugs = getAllExperimentSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const { getExperimentBySlug, getExperimentTabs } = await import(
    '../../lib/experiments'
  )
  const { frontmatter, content } = getExperimentBySlug(slug)
  const { content: afterSnippets, codeSnippets } = preprocessCodeSnippets(content)
  const { content: processedContent, experimentScope } =
    preprocessExperimentProps(afterSnippets)
  const mdxSource = await serialize(processedContent, {
    scope: { slug, ...experimentScope },
  })
  const availableTabs = getExperimentTabs(content)

  return {
    props: {
      experiment: frontmatter,
      mdxSource,
      availableTabs,
      slug,
      codeSnippets,
    },
  }
}
