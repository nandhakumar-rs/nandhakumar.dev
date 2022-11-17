import React, { FC } from 'react'
import CloseIcon from './close.icon'
import GithubIcon from './github.icon'
import InstagramIcon from './Instagram.icon'
import LinkedInIcon from './Linkedin.icon'
import MenuIcon from './menu.icon'
import TwitterIcon from './Twitter.icon'

export type TIconName =
  | 'instagram'
  | 'github'
  | 'twitter'
  | 'linkedin'
  | 'menu'
  | 'close'

interface ISVGProps {
  color?: string
}

interface IIConProps {
  name: TIconName
  svgProps?: ISVGProps
}

const Icon: FC<IIConProps> = ({
  svgProps = { color: '#000' },
  name = 'instagram',
}) => {
  const getIcon = () => {
    switch (name) {
      case 'instagram':
        return renderIcon(InstagramIcon)
      case 'github':
        return renderIcon(GithubIcon)
      case 'twitter':
        return renderIcon(TwitterIcon)
      case 'linkedin':
        return renderIcon(LinkedInIcon)
      case 'menu':
        return renderIcon(MenuIcon)
      case 'close':
        return renderIcon(CloseIcon)
    }
  }

  const renderIcon = (Component: any) => {
    return <Component {...svgProps} />
  }

  return getIcon()
}

export default Icon
