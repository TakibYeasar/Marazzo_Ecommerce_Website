"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 p-5 my-1 rounded-lg transition-colors ${pathname === item.path ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
