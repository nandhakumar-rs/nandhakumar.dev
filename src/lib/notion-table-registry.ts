import {
  accessTableHeaders,
  accessTableRows,
} from '../posts/data/same-origin-policy-sop.data'

export type NotionTableData = {
  headers: string[]
  rows: string[][]
}

export const notionTableRegistry: Record<string, NotionTableData> = {
  'same-origin-access': {
    headers: accessTableHeaders,
    rows: accessTableRows,
  },
}
