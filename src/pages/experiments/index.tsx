import Head from 'next/head'
import { FC } from 'react'
import { ExperimentMeta } from '../../lib/experiments'
import ExperimentCard from '../../components/experiments/experiment-card.component'

interface ExperimentsPageProps {
  experiments: ExperimentMeta[]
}

const ExperimentsPage: FC<ExperimentsPageProps> = ({ experiments }) => {
  return (
    <section>
      <Head>
        <title>Nandhakumar | Experiments</title>
        <meta
          name="description"
          content="Small, versioned engineering experiments exploring ideas, tools, architectures, and production techniques."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nandhakumar.io/experiments" />
        <meta property="og:title" content="Experiments | Nandhakumar" />
        <meta
          property="og:description"
          content="Small, versioned engineering experiments exploring ideas, tools, architectures, and production techniques."
        />
        <link rel="canonical" href="https://nandhakumar.io/experiments" />
      </Head>

      <div className="my-8">
        <h1 className="text-3xl font-semibold text-app-primary-100">
          Experiments
        </h1>
        <p className="mt-3 text-lg text-app-neutral-700">
          Small, versioned engineering experiments where I explore ideas, tools,
          architectures, and production techniques.
        </p>
      </div>

      {experiments.length === 0 ? (
        <p className="text-app-neutral-700">No experiments yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ExperimentsPage

export const getStaticProps = async () => {
  const { getAllExperiments } = await import('../../lib/experiments')
  const experiments = getAllExperiments()

  return { props: { experiments } }
}
