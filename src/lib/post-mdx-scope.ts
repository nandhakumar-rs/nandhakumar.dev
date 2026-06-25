import {
  accessTableHeaders,
  accessTableRows,
} from '../posts/data/same-origin-policy-sop.data'

const postScopes: Record<string, Record<string, unknown>> = {
  'same-origin-policy-sop': { accessTableHeaders, accessTableRows },
}

export function getPostMdxScope(slug: string) {
  return postScopes[slug] ?? {}
}
