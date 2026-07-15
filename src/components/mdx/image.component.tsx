import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface IMdxImage {
  src: string
  alt: string
}

export const MdxImage: FC<IMdxImage> = (props) => {
  return (
    <Image
      width={1080}
      height={1080}
      src={props.src}
      alt={props.alt}
      className="mx-auto my-10 w-auto max-w-full rounded-lg border border-app-primary-700 object-contain"
    />
  )
}
