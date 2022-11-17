import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface IMdxImage {
  src: string
  alt: string
}

export const MdxImage: FC<IMdxImage> = (props) => {
  return (
    <div>
      <Image
        
        width={1080}
        height={1080}
        src={props.src}
        alt={props.alt}
        className="my-10 w-full rounded-lg"
      />
    </div>
  )
}
