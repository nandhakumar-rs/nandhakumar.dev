import CONSTANT from '../constant'
import { H1, H2 } from './mdx/heading.component'
import HrefLink from './mdx/href-link.component'
import P from './mdx/paragraph.component'

const PostFootnote = () => {
  return (
    <footer className="">
      <H1>Thanks For Reading!</H1>
      <P>Hope you have learned something new today 😊.</P>
      <P>
        Follow and Reach me on{' '}
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
