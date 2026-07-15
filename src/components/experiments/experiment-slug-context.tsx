import {
  createContext,
  FC,
  ReactNode,
  useContext,
} from 'react'

const ExperimentSlugContext = createContext<string>('')

export const ExperimentSlugProvider: FC<{
  slug: string
  children: ReactNode
}> = ({ slug, children }) => (
  <ExperimentSlugContext.Provider value={slug}>
    {children}
  </ExperimentSlugContext.Provider>
)

export function useExperimentSlug() {
  return useContext(ExperimentSlugContext)
}

interface ExperimentArchitectureValue {
  architectureChart: string | null
  architectureImageResolved: string | null
}

const ExperimentArchitectureContext =
  createContext<ExperimentArchitectureValue>({
    architectureChart: null,
    architectureImageResolved: null,
  })

export const ExperimentArchitectureProvider: FC<
  ExperimentArchitectureValue & { children: ReactNode }
> = ({ architectureChart, architectureImageResolved, children }) => (
  <ExperimentArchitectureContext.Provider
    value={{ architectureChart, architectureImageResolved }}
  >
    {children}
  </ExperimentArchitectureContext.Provider>
)

export function useExperimentArchitecture() {
  return useContext(ExperimentArchitectureContext)
}
