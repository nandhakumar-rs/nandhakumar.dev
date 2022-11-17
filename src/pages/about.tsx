import { readdirSync, readFileSync } from 'fs'
import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import profile from '../../public/profile.png'
import HrefLink from '../components/mdx/href-link.component'
import CONSTANT from '../constant'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="mx-auto mt-12">
      <section>
        <div className="flex gap-6 items-center max-md:flex-col max-md:items-start">
        <Image
            className="h-32"
            height={128}
            width={128}
            src={profile}
            alt="Nandhakumar's Display Picture"
          />
          <div>
            <p className="text-app-primary-100 text-2xl font-bold">Hi there!</p>
            <p className="text-app-primary-100 text-3xl font-bold">
              I‘m Nandhakumar 👋
            </p>
            <div className="text-app-neutral-700 mt-2 text-base flex items-center gap-3">
              <p>Creative Software Developer </p>
              <div className="h-0.5 w-0.5 bg-app-neutral-700 rounded-full"></div>
              <p>UI UX Designer</p>
            </div>
          </div>
        
        </div>
        <p className="mt-8 text-app-neutral-700 text-lg">
          A self taught developer and desinger. Passionate and Facinated towards
          tech world. Love to help small and large scale business to build
          desing and build apps. If you want to get in touch, you can reach me
          over{' '}
          <HrefLink href={CONSTANT.LINKS.EMAIL} rel="email" target="_blank">
            Email
          </HrefLink>{' '}
          and I am more active on{' '}
          <HrefLink href={CONSTANT.LINKS.TWITTER} rel="email" target="_blank">
            Twitter
          </HrefLink>{' '}
          and{' '}
          <HrefLink href={CONSTANT.LINKS.INSTAGRAM} rel="email" target="_blank">
            Instagram
          </HrefLink>
          .
        </p>
      </section>
      <section className="mt-16">
        <p className="text-app-primary-100 text-2xl font-bold">{`FAQ's`}</p>

        
      </section>
    </div>
  )
}
