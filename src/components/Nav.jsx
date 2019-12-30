import React from "react"
import { Link } from "gatsby"

const navItems = [
  {
    caption: "Inicio",
    href: "/",
  },
  {
    caption: "Productos",
    href: "/products",
  },
]

const Nav = () => {
  return (
    <header className="bg-blue-900 text-blue-100 shadow-md">
      <nav>
        <ul className="flex">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="hover:bg-blue-700 px-6 py-4 inline-block"
                  to={item.href}
                >
                  {item.caption}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
