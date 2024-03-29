"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
  const pathname = usePathname()

  console.log(pathname)
  return (
    <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  )
}

export default NavLink