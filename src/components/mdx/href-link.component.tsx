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
        className=" underline cursor-pointer text-app-neutral-600 text"
        href={href}
        rel={rel}
        target={target}
      > 
        {children}
      </Link>
  )
}

export default HrefLink
