import CodeSnippet from '../mdx/code-snippet.component'
import { H1, H2, H3, H4, H5, H6 } from '../mdx/heading.component'
import Code from '../mdx/code.component'
import P from '../mdx/paragraph.component'
import HR from '../mdx/hr.component'
import { LI, OL, UL } from '../mdx/list.component'
import { MdxImage } from '../mdx/image.component'
import HrefLink from '../mdx/href-link.component'
import Blockquote from '../mdx/blockquote.component'
import NotionTable from '../mdx/notion-table.component'
import ArchitectureDiagram from './architecture-diagram.component'
import ExperimentArchitectureDiagram from './experiment-architecture-diagram.component'
import BeforeAfter from './before-after.component'
import DeploymentBlock from './deployment-block.component'
import ExperimentCallout from './experiment-callout.component'
import GuideLink from './guide-link.component'
import ExperimentImage from './experiment-image.component'
import {
  ExperimentArchitecture,
  ExperimentOverview,
  ExperimentResults,
  ExperimentTools,
} from './experiment-tabs.component'
import ExperimentTimeline from './experiment-timeline.component'
import ExperimentVersion from './experiment-version.component'
import ExperimentVideo from './experiment-video.component'
import MetricGrid from './metric-grid.component'
import ResultGallery from './result-gallery.component'
import ToolGrid from './tool-grid.component'

export function createExperimentComponents(
  codeSnippets: Record<string, string> = {},
) {
  return {
    CodeSnippet: (props: any) => (
      <CodeSnippet {...props} dynamicSnippets={codeSnippets} />
    ),
    NotionTable,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    hr: HR,
    code: Code,
    Code,
    ul: UL,
    ol: OL,
    li: LI,
    Img: MdxImage,
    a: HrefLink,
    blockquote: Blockquote,
    ExperimentOverview,
    ExperimentArchitecture,
    ExperimentTools,
    ExperimentResults,
    ExperimentTimeline,
    ExperimentVersion,
    ExperimentImage,
    ArchitectureDiagram,
    ExperimentArchitectureDiagram,
    ToolGrid,
    ExperimentVideo,
    MetricGrid,
    ResultGallery,
    BeforeAfter,
    ExperimentCallout,
    DeploymentBlock,
    GuideLink,
  }
}
