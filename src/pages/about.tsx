import Head from 'next/head'
import Image from 'next/image'
import profile from '../../public/profile.png'
import HrefLink from '../components/mdx/href-link.component'
import CONSTANT from '../constant'

export default function AboutPage() {
  return (
    <div className="mx-auto mt-12">
      <Head>
        <title>Nandhakumar | About</title>
      </Head>
      <section>
        <div className="flex gap-6 items-end max-md:flex-col max-md:items-start">
          <Image
            className="h-32 w-32 rounded-full"
            height={800}
            width={800}
            src={profile}
            alt="Nandhakumar's Display Picture"
          />
          <div>
            <p className="text-app-primary-100 text-2xl font-bold">Hi there!</p>
            <p className="text-app-primary-100 text-3xl font-bold">
              I‘m Nandhakumar 👋
            </p>
            <div className="text-app-neutral-700 mt-2 text-base flex items-center gap-3">
              <p> UI UX Designer | Software Engineer | Freelancer</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-app-neutral-700 text-lg">
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
      {/* <section className="mt-16">
        <p className="text-app-primary-100 text-2xl font-bold">{`FAQ's`}</p>

        
      </section> */}
    </div>
  )
}
