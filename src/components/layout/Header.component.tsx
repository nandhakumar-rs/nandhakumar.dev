import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import profile from '../../../public/profile.png'
import CONSTANT from '../../constant'
import Icon from '../icons'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()
  return (
    <header className=" h-32 flex items-center justify-between relative">
      <Link href="/" className="flex items-center">
        <Image
          className="h-7 rounded-full"
          height={28}
          width={28}
          src={profile}
          alt="Nandhakumar's Display Picture"
        />
        <p className="font-bold text-2xl text-white ml-2">Nandhakumar</p>
      </Link>
      <nav className="max-md:hidden">
        {CONSTANT.ROUTES.map((route, index) => {
          const isActive =
            route.href === '/experiments'
              ? router.pathname.startsWith('/experiments')
              : router.pathname === route.href

          return (
            <Link
              key={index}
              className={`ml-2 rounded-md px-3 py-1 text-base font-bold text-app-neutral-700 transition-colors hover:text-app-primary-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-app-primary-900 ${
                isActive ? 'bg-app-primary-700 text-app-primary-100' : ''
              } `}
              href={route.href}
            >
              {route.label}
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        aria-label={toggle ? 'Close menu' : 'Open menu'}
        aria-expanded={toggle}
        className="absolute right-2 top-8 z-20 hidden rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 max-md:block"
        onClick={() => setToggle(!toggle)}
      >
        <Icon name={!toggle ? 'menu' : 'close'} />
      </button>

      {toggle && (
        <nav className="fixed left-0 top-0 z-10 hidden h-full w-full flex-col bg-app-primary-900 p-4 pt-20 max-md:flex">
          {CONSTANT.ROUTES.map((route, index) => {
            const isActive =
              route.href === '/experiments'
                ? router.pathname.startsWith('/experiments')
                : router.pathname === route.href

            return (
              <button
                type="button"
                key={index}
                className={`border-b border-app-primary-700 px-1 py-3 text-left text-base font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-app-primary-100 ${
                  isActive ? 'text-app-primary-100' : 'text-app-neutral-700'
                }`}
                onClick={() => {
                  setToggle(!toggle)
                  router.push(route.href)
                }}
              >
                {route.label}
              </button>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
