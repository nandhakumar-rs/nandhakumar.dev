const ABSOLUTE_PATH = /^\//
const REMOTE_URL = /^https?:\/\//
const RELATIVE_IMAGES = /^\.\/images\//

export function resolveAsset(src: string, slug: string): string {
  if (!src) return src

  if (REMOTE_URL.test(src) || ABSOLUTE_PATH.test(src)) {
    return src
  }

  if (RELATIVE_IMAGES.test(src)) {
    const filename = src.replace('./images/', '')
    return `/experiments/${slug}/images/${filename}`
  }

  return src
}

export function resolveAbsoluteAsset(
  src: string | undefined,
  slug: string,
  siteUrl = 'https://nandhakumar.io',
): string | undefined {
  if (!src) return undefined

  const resolved = resolveAsset(src, slug)

  if (REMOTE_URL.test(resolved) || ABSOLUTE_PATH.test(resolved)) {
    if (ABSOLUTE_PATH.test(resolved)) {
      return `${siteUrl}${resolved}`
    }
    return resolved
  }

  return `${siteUrl}/${resolved.replace(/^\//, '')}`
}
