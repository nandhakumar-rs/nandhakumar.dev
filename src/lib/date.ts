export function getPostYear(publishedAt: string): number {
  return new Date(publishedAt).getFullYear()
}

export function formatPostCardDate(publishedAt: string): string {
  return new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

export function groupPostsByYear(
  posts: any[],
): { year: number; posts: any[] }[] {
  const groups = new Map<number, any[]>()

  for (const post of posts) {
    const year = getPostYear(post.publishedAt)
    const existing = groups.get(year) ?? []
    existing.push(post)
    groups.set(year, existing)
  }

  return Array.from(groups.entries())
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, yearPosts]) => ({ year, posts: yearPosts }))
}
