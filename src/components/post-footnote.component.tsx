import Link from 'next/link'
import CONSTANT from '../constant'
import { H1, H2 } from './mdx/heading.component'
import HrefLink from './mdx/href-link.component'
import P from './mdx/paragraph.component'

const PostFootnote = () => {
  return (
    <footer className="">
      <H1>Thanks For Reading!</H1>
      <P>Hope you have learned something new today 😊.</P>

      <P>I welcome your questions, feedback, and discussions on this topic. Don't hesitate to reach out if there's something you'd like to talk about.</P>

      <P>
        If you find this post helpful{' '}
        <HrefLink
          href={`https://twitter.com/intent/tweet/?text=${'Nandhakumar Wrote this Article'}&url=${'https://nandhakumar.io/post/step-by-step-guide-to-dockerize-vite-react-app-in-dev-environment&via=nandhakumar_io'}`}
        >
          <b>Tweet this Post</b>
        </HrefLink>
      </P>

      <P>
        Follow and connect with me on{' '}
        <HrefLink href={CONSTANT.LINKS.TWITTER} rel="email" target="_blank">
          Twitter
        </HrefLink>
        ,{' '}
        <HrefLink href={CONSTANT.LINKS.INSTAGRAM} rel="email" target="_blank">
          Instagram
        </HrefLink>
        ,{' '}
        <HrefLink href={CONSTANT.LINKS.EMAIL} rel="email" target="_blank">
          Email
        </HrefLink>{' '}
        and{' '}
        <HrefLink href={CONSTANT.LINKS.LINKEDIN} rel="email" target="_blank">
          LinkedIn
        </HrefLink>{' '}
        for more interesting stuff like this.
      </P>
      <P>Cheers ✌️</P>
    </footer>
  )
}

export default PostFootnote
