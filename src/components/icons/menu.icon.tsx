import * as React from 'react'
import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 15h18M3 9h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MenuIcon
