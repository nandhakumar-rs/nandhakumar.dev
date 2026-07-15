import { ReactNode } from 'react'
import { ExperimentVersionStatus } from '../../lib/experiments'

export interface ExperimentVersionProps {
  version: string
  title: string
  summary?: string
  status?: ExperimentVersionStatus
  gitBranchUrl?: string
  gitTagUrl?: string
  pullRequestUrl?: string
  date?: string
  isLatest?: boolean
  children?: ReactNode
}

export interface ExperimentImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export interface ArchitectureDiagramProps {
  src: string
  alt: string
  caption?: string
}

export interface ToolItem {
  name: string
  icon?: string
  category?: string
  description?: string
  href?: string
}

export interface ToolGridProps {
  tools: ToolItem[]
  groupByCategory?: boolean
}

export interface MetricItem {
  label: string
  value: string
  note?: string
}

export interface MetricGridProps {
  metrics: MetricItem[]
}

export interface ExperimentVideoProps {
  src: string
  poster?: string
  caption?: string
  youtubeId?: string
}

export interface ResultGalleryItem {
  src: string
  alt: string
  caption?: string
}

export interface ResultGalleryProps {
  items: ResultGalleryItem[]
}

export interface BeforeAfterProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  beforeLabel?: string
  afterLabel?: string
  caption?: string
}

export type ExperimentCalloutVariant = 'info' | 'warning' | 'success' | 'note'

export interface ExperimentCalloutProps {
  title?: string
  variant?: ExperimentCalloutVariant
  children?: ReactNode
}

export interface DeploymentBlockProps {
  title?: string
  children?: ReactNode
}

export interface GuideLinkProps {
  url: string
  title: string
  description?: string
}
