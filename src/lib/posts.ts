import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { slugifyTag, formatTagName } from './slugify'

export { slugifyTag, formatTagName }

export function getAllPosts() {
  const files = readdirSync(path.join('src', 'posts')).filter((filename) =>
    filename.endsWith('.mdx'),
  )

  const posts = files.map((filename) => {
    const mdMetaData = readFileSync(path.join('src', 'posts', filename))
    const { data, content } = matter(mdMetaData)
    return {
      ...data,
      readingTime: readingTime(content).text,
      slug: filename.replace('.mdx', ''),
      content,
    }
  })

  posts.sort((a: any, b: any) => {
    if (new Date(a.publishedAt).getTime() < new Date(b.publishedAt).getTime())
      return 1
    if (new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime())
      return -1

    return 0
  })

  return posts
}

export function getAllTags(): { slug: string; name: string }[] {
  const posts = getAllPosts()
  const tagMap = new Map<string, string>()

  for (const post of posts as any[]) {
    const tags = post.tags as string[] | undefined
    if (!tags) continue

    for (const tag of tags) {
      const slug = slugifyTag(tag)
      if (!tagMap.has(slug)) {
        tagMap.set(slug, tag)
      }
    }
  }

  return Array.from(tagMap.entries()).map(([slug, name]) => ({ slug, name }))
}

export function getPostsByTagSlug(tagSlug: string) {
  const posts = getAllPosts()

  return posts.filter((post: any) =>
    (post.tags as string[] | undefined)?.some(
      (tag) => slugifyTag(tag) === tagSlug,
    ),
  )
}

export function getTagNameBySlug(tagSlug: string): string | undefined {
  return getAllTags().find((tag) => tag.slug === tagSlug)?.name
}
