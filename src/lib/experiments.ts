import { readdirSync, readFileSync, existsSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { resolveAsset } from './experiment-assets'

export type ExperimentStatus =
  | 'planning'
  | 'in-progress'
  | 'completed'
  | 'archived'

export type ExperimentVersionStatus = 'planned' | 'in-progress' | 'completed'

export type ExperimentTabId =
  | 'overview'
  | 'architecture'
  | 'tools'
  | 'results'

export interface ExperimentFrontmatter {
  title: string
  slug: string
  description: string
  status: ExperimentStatus
  category?: string
  latestVersion?: string
  featured?: boolean
  architectureImage?: string
  repositoryUrl?: string
  technologies?: string[]
  updatedAt?: string
}

export interface ExperimentMeta extends ExperimentFrontmatter {
  architectureImageResolved?: string | null
  architectureChart?: string | null
}

const EXPERIMENTS_DIR = path.join('src', 'experiments')

const REMOTE_URL = /^https?:\/\//

interface ResolvedVisual {
  imageResolved: string | null
  chart: string | null
}

function readMermaidChart(src: string, slug: string): string | null {
  if (REMOTE_URL.test(src)) return null

  const resolved = resolveAsset(src, slug)
  const diskPath = path.join('public', resolved.replace(/^\//, ''))

  try {
    if (!existsSync(diskPath)) return null
    return readFileSync(diskPath, 'utf8')
  } catch {
    return null
  }
}

function resolveVisual(src: string | undefined, slug: string): ResolvedVisual {
  if (!src) return { imageResolved: null, chart: null }

  if (src.endsWith('.mmd')) {
    return { imageResolved: null, chart: readMermaidChart(src, slug) }
  }

  return { imageResolved: resolveAsset(src, slug), chart: null }
}

function getExperimentSlugs(): string[] {
  if (!existsSync(EXPERIMENTS_DIR)) return []

  return readdirSync(EXPERIMENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) =>
      existsSync(path.join(EXPERIMENTS_DIR, entry.name, 'index.mdx')),
    )
    .map((entry) => entry.name)
}

function parseExperimentFile(slug: string) {
  const filePath = path.join(EXPERIMENTS_DIR, slug, 'index.mdx')
  const raw = readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  const frontmatter = {
    ...data,
    slug: (data.slug as string) || slug,
  } as ExperimentFrontmatter

  return { frontmatter, content }
}

export function getAllExperiments(): ExperimentMeta[] {
  const slugs = getExperimentSlugs()

  const experiments = slugs.map((slug) => {
    const { frontmatter } = parseExperimentFile(slug)
    const architecture = resolveVisual(
      frontmatter.architectureImage,
      frontmatter.slug,
    )

    return {
      ...frontmatter,
      architectureImageResolved: architecture.imageResolved,
      architectureChart: architecture.chart,
    }
  })

  experiments.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    const aDate = a.updatedAt ? new Date(a.updatedAt).getTime() : 0
    const bDate = b.updatedAt ? new Date(b.updatedAt).getTime() : 0

    return bDate - aDate
  })

  return experiments
}

export function getExperimentBySlug(slug: string) {
  const { frontmatter, content } = parseExperimentFile(slug)
  const architecture = resolveVisual(
    frontmatter.architectureImage,
    frontmatter.slug,
  )

  return {
    frontmatter: {
      ...frontmatter,
      architectureImageResolved: architecture.imageResolved,
      architectureChart: architecture.chart,
    },
    content,
  }
}

export function getExperimentTabs(content: string): ExperimentTabId[] {
  const tabs: ExperimentTabId[] = ['overview']

  if (content.includes('<ExperimentArchitecture')) {
    tabs.push('architecture')
  }

  if (content.includes('<ExperimentTools')) {
    tabs.push('tools')
  }

  if (content.includes('<ExperimentResults')) {
    tabs.push('results')
  }

  return tabs
}

export function getAllExperimentSlugs(): string[] {
  return getExperimentSlugs()
}
