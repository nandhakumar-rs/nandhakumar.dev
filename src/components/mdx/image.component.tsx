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
        className="object-contain w-auto my-12 rounded-lg mx-auto"
      />
  )
}
