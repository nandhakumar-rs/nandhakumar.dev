import Link from 'next/link'
import React from 'react'
import CONSTANT from '../../constant'
import Icon from '../icons'

const Footer = () => {
  return (
    <footer className="border-t border-app-primary-700 bg-app-primary-900 px-5 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-[960px] flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-6">
        <div className="flex gap-7">
          {CONSTANT.SOCIAL_LINKS.map((link, index) => (
            <Link
              aria-label={link.icon}
              href={link.url}
              key={index}
              target="_blank"
            >
              <Icon name={link.icon as any} />
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {CONSTANT.ROUTES.map((route, index) => (
            <Link
              aria-label={route.label}
              href={route.href}
              className="underline text-xs text-white"
              key={index}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className=" text-base font-normal text-white">
          <p>Made with ♥️ by</p>
          <p>Nandhakumar © 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
