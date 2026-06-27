import {
  accessTableHeaders,
  accessTableRows,
} from '../posts/data/same-origin-policy-sop.data'
import {
  tokenProbabilityHeaders,
  tokenProbabilityRows,
} from '../posts/data/prompting-with-llms-when-building-ai-agents.data'

export type NotionTableData = {
  headers: string[]
  rows: string[][]
}

export const notionTableRegistry: Record<string, NotionTableData> = {
  'same-origin-access': {
    headers: accessTableHeaders,
    rows: accessTableRows,
  },
  'llm-token-probability': {
    headers: tokenProbabilityHeaders,
    rows: tokenProbabilityRows,
  },
}
