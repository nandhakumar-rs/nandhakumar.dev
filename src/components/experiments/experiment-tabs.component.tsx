import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { ExperimentTabId } from '../../lib/experiments'

interface ExperimentTabsContextValue {
  activeTab: ExperimentTabId
  setActiveTab: (tab: ExperimentTabId) => void
  availableTabs: ExperimentTabId[]
}

const ExperimentTabsContext = createContext<ExperimentTabsContextValue | null>(
  null,
)

const TAB_LABELS: Record<ExperimentTabId, string> = {
  overview: 'Overview',
  architecture: 'Architecture',
  tools: 'Tools',
  results: 'Results',
}

function normalizeHash(hash: string): ExperimentTabId | null {
  const value = hash.replace('#', '').toLowerCase()
  if (
    value === 'overview' ||
    value === 'architecture' ||
    value === 'tools' ||
    value === 'results'
  ) {
    return value
  }
  return null
}

export const ExperimentTabsProvider: FC<{
  availableTabs: ExperimentTabId[]
  children: ReactNode
}> = ({ availableTabs, children }) => {
  const [activeTab, setActiveTabState] = useState<ExperimentTabId>(
    availableTabs[0] ?? 'overview',
  )

  const setActiveTab = useCallback(
    (tab: ExperimentTabId) => {
      if (!availableTabs.includes(tab)) return
      setActiveTabState(tab)
      if (typeof window !== 'undefined') {
        const url = `${window.location.pathname}${window.location.search}#${tab}`
        window.history.replaceState(null, '', url)
      }
    },
    [availableTabs],
  )

  useEffect(() => {
    const hashTab = normalizeHash(window.location.hash)
    if (hashTab && availableTabs.includes(hashTab)) {
      setActiveTabState(hashTab)
    }
  }, [availableTabs])

  useEffect(() => {
    const onHashChange = () => {
      const hashTab = normalizeHash(window.location.hash)
      if (hashTab && availableTabs.includes(hashTab)) {
        setActiveTabState(hashTab)
      }
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [availableTabs])

  const value = useMemo(
    () => ({ activeTab, setActiveTab, availableTabs }),
    [activeTab, setActiveTab, availableTabs],
  )

  return (
    <ExperimentTabsContext.Provider value={value}>
      {children}
    </ExperimentTabsContext.Provider>
  )
}

export function useExperimentTabs() {
  const context = useContext(ExperimentTabsContext)
  if (!context) {
    throw new Error('useExperimentTabs must be used within ExperimentTabsProvider')
  }
  return context
}

export const ExperimentTabsNav: FC<{ repositoryUrl?: string }> = ({
  repositoryUrl,
}) => {
  const { activeTab, setActiveTab, availableTabs } = useExperimentTabs()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % availableTabs.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + availableTabs.length) % availableTabs.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = availableTabs.length - 1
    } else {
      return
    }

    event.preventDefault()
    setActiveTab(availableTabs[nextIndex])
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="sticky top-0 z-20 -mx-1 mb-8 flex items-center justify-between gap-3 border-b border-app-primary-700 bg-app-primary-900/95 py-3 backdrop-blur-sm">
      <div
        role="tablist"
        aria-label="Experiment sections"
        className="flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 pb-1"
      >
        {availableTabs.map((tab, index) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              type="button"
              role="tab"
              id={`tab-${tab}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-app-primary-900 ${
                isActive
                  ? 'bg-app-primary-700 text-app-primary-100'
                  : 'text-app-neutral-700 hover:bg-app-primary-800 hover:text-app-neutral-600'
              }`}
            >
              {TAB_LABELS[tab]}
            </button>
          )
        })}
      </div>

      {repositoryUrl && (
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium text-app-neutral-700 transition-colors hover:text-app-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-app-primary-900"
        >
          <span className="max-sm:hidden">View repository</span>
          <FiExternalLink aria-hidden="true" />
          <span className="sr-only sm:hidden">View repository</span>
        </a>
      )}
    </div>
  )
}

interface ExperimentTabPanelProps {
  tabId: ExperimentTabId
  children: ReactNode
}

export const ExperimentTabPanel: FC<ExperimentTabPanelProps> = ({
  tabId,
  children,
}) => {
  const { activeTab } = useExperimentTabs()
  const isActive = activeTab === tabId

  return (
    <section
      role="tabpanel"
      id={`panel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
      hidden={!isActive}
      className={isActive ? 'block' : 'hidden'}
    >
      {children}
    </section>
  )
}

export const ExperimentOverview: FC<{ children: ReactNode }> = ({
  children,
}) => (
  <ExperimentTabPanel tabId="overview">{children}</ExperimentTabPanel>
)

export const ExperimentArchitecture: FC<{ children: ReactNode }> = ({
  children,
}) => (
  <ExperimentTabPanel tabId="architecture">{children}</ExperimentTabPanel>
)

export const ExperimentTools: FC<{ children: ReactNode }> = ({ children }) => (
  <ExperimentTabPanel tabId="tools">{children}</ExperimentTabPanel>
)

export const ExperimentResults: FC<{ children: ReactNode }> = ({
  children,
}) => <ExperimentTabPanel tabId="results">{children}</ExperimentTabPanel>
