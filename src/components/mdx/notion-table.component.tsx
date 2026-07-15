import { FC, Fragment, ReactNode } from 'react'
import Code from './code.component'
import { notionTableRegistry } from '../../lib/notion-table-registry'

type NotionTableProps = {
  name?: string
  headers?: string[]
  rows?: string[][]
  boldColumns?: number[]
}

const renderTextWithInlineCode = (text: string): ReactNode => {
  const parts = text.split(/(`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <Code key={index} type="default">
          {part.slice(1, -1)}
        </Code>
      )
    }

    return <Fragment key={index}>{part}</Fragment>
  })
}

const NotionTable: FC<NotionTableProps> = ({
  name,
  headers,
  rows,
  boldColumns = [0],
}) => {
  const tableData = name ? notionTableRegistry[name] : { headers, rows }
  const resolvedHeaders = tableData?.headers ?? []
  const resolvedRows = tableData?.rows ?? []
  const boldColumnSet = new Set(boldColumns)

  return (
    <div className="w-full my-8 overflow-x-auto rounded-lg border border-app-primary-700">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-app-primary-700 bg-app-primary-800">
            {(resolvedHeaders ?? []).map((header, headerIndex) => (
              <th
                key={`header-${headerIndex}`}
                className="text-app-neutral-600 font-semibold py-3 px-4 text-left text-base"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(resolvedRows ?? []).map((row, rowIndex) => (
            <tr
              key={`row-${rowIndex}`}
              className="border-b border-app-primary-700 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`py-3 px-4 align-top text-base ${
                    boldColumnSet.has(cellIndex)
                      ? 'font-semibold text-app-neutral-600'
                      : 'text-app-neutral-700'
                  }`}
                >
                  {renderTextWithInlineCode(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NotionTable
