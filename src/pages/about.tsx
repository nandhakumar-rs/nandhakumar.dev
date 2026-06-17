import Head from 'next/head'
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
        <div>
          <p className="text-app-primary-100 text-3xl font-bold">
            Hi, I&apos;m Nandhakumar 👋
          </p>
          <div className="text-app-neutral-700 mt-2 text-base flex items-center gap-3">
            <p>
              Full Stack Engineer | AI Automation Builder | Systems Thinker
            </p>
          </div>
        </div>

        <p className="mt-4 text-app-neutral-700 text-lg">
          I&apos;m a Full Stack Engineer focused on building software systems,
          automation solutions, and AI-powered workflows that help businesses
          operate more efficiently and solve real-world problems.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          Over the past 7+ years, I&apos;ve worked across startups and enterprise
          environments, designing and developing web applications, mobile apps,
          APIs, internal tools, cloud solutions, and scalable backend systems.
          Throughout my career, I&apos;ve enjoyed working across the entire product
          lifecycle—from understanding business requirements and designing
          solutions to building, deploying, and maintaining production-ready
          applications.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          Recently, my interests have expanded beyond traditional software
          development into AI automation, intelligent workflows, agent
          architectures, and machine learning. I&apos;m fascinated by how modern AI
          systems can augment human work, automate repetitive processes, and
          unlock entirely new ways of solving problems.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          I believe great software is not about writing more code—it&apos;s about
          understanding the right problem and building the simplest, most
          reliable solution to solve it. Whether it&apos;s a web application, an
          internal business tool, an automation workflow, or an AI-powered
          system, I enjoy creating technology that delivers meaningful value.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          This website serves as my digital journal and public notebook. Here
          you&apos;ll find my notes, experiments, projects, technical learnings,
          architecture explorations, and lessons learned as I continue growing as
          an engineer and builder. Rather than presenting polished conclusions, I
          prefer documenting the journey itself—the ideas, discoveries,
          challenges, and insights that come along the way.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          My current areas of interest include:
        </p>
        <ul className="list-disc pl-6 text-app-neutral-700 text-lg space-y-1 mt-2">
          <li>Full Stack Engineering</li>
          <li>System Design & Software Architecture</li>
          <li>AI Agents & Workflow Automation</li>
          <li>LangGraph & Agentic Systems</li>
          <li>Machine Learning Fundamentals</li>
          <li>Scalable Backend Engineering</li>
          <li>SaaS & Product Development</li>
        </ul>
        <p className="mt-4 text-app-neutral-700 text-lg">
          Outside of technology, I enjoy reading, fitness, running, strength
          training, and exploring ideas that help me better understand people,
          systems, and the world around me.
        </p>
        <p className="mt-4 text-app-neutral-700 text-lg">
          If you&apos;d like to discuss software engineering, AI automation, product
          ideas, or potential collaborations, feel free to reach out. I&apos;m always
          happy to connect with fellow builders, engineers, founders, and curious
          learners.
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
