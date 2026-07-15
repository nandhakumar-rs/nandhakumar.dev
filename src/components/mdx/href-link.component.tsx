import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface IHrefProps {
  href: string
  rel?: string
  target?: string
  children: ReactNode
}

const HrefLink: FC<IHrefProps> = ({
  href,
  rel = '',
  target = '_blank',
  children,
}) => {
  return (
    <Link
      className="cursor-pointer rounded text-app-primary-100 underline underline-offset-2 transition-colors hover:text-app-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-app-primary-900"
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  )
}

export default HrefLink
