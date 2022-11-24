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
        {CONSTANT.ROUTES.map((route, index) => (
          <Link
            key={index}
            className={`font-bold text-base ml-2 text-app-neutral-700 hover:bg-app-primary-700 hover:text-app-primary-100 px-3 py-1 rounded-sm ${
              router.pathname === route.href
                ? 'bg-app-primary-700 text-app-primary-100'
                : ''
            } `}
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <div
        className="hidden max-md:block absoute z-20 right-8 top-8"
        onClick={() => setToggle(!toggle)}
      >
        <Icon name={!toggle ? 'menu' : 'close'} />
      </div>

      {toggle && (
        <nav className="hidden max-md:flex flex-col bg-app-primary-900 h-full w-full fixed top-0 left-0 p-4 pt-20 z-10">
          {CONSTANT.ROUTES.map((route, index) => (
            <a
              key={index}
              className="font-bold text-base text-app-neutral-700 py-3 px-1 border-b border-app-primary-500"
              onClick={() => {
                setToggle(!toggle)
                router.push(route.href)
              }}
            >
              {route.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
