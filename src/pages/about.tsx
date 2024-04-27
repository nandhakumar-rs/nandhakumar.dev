import Head from 'next/head'
import Image from 'next/image'
import profile from '../../public/profile.png'
import HrefLink from '../components/mdx/href-link.component'
import CONSTANT from '../constant'
import FAQ from '../components/common/faq.component'

export default function AboutPage() {
  return (
    <div className="mx-auto mt-12">
      <Head>
        <title>Nandhakumar | About</title>
      </Head>
      <section>
        <div className="flex gap-6 items-end max-md:flex-col max-md:items-start">
          <Image
            className="h-28 w-28 rounded-sm"
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
              <p> UI UX Designer | Full Stack Engineer | Freelancer</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-app-neutral-700 text-lg">
          I never thought I would become a developer, I don’t even know what I
          am going to become, or where I am going to work. Nothing.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          Fortunately, My mom was a developer. She inspired me to get into
          coding and app development. Also, I got some good mentors, who
          directed me on a path to where I am now.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          I started my career as a Full Stack Developer, specializing in
          javascript-based frameworks like React, Angular, Vue, etc… I am
          helping many agencies and small & large-scale business owners to build
          high-quality applications to solve their problems by providing
          solutions as best as I could.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          In addition, I am also interested in UI/UX design. So whenever I get
          some time, practice UI/UX. I have helped a couple of clients in UI/UX
          design as well.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          I usually spend more time leveling up my skills, so that I can build
          more performant apps in less time.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          Apart from work, I read books to improve myself and understand
          different perspectives of people. Love to take part in some sports
          activities as well like badminton, running, and strength training.{' '}
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          If you want to get in touch, you can reach me over{' '}
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

        <FAQ />
      </section> */}
    </div>
  )
}
