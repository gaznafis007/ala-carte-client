"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiHome, FiMenu, FiPackage, FiShoppingCart, FiLink, FiSettings, FiChevronDown, FiX } from "react-icons/fi"
import { Logo } from "../logo"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: FiHome,
    },
    {
      name: "Menu",
      href: "/dashboard/menu",
      icon: FiMenu,
    },
    {
      name: "Inventory",
      href: "/dashboard/inventory",
      icon: FiPackage,
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
      icon: FiShoppingCart,
    },
    {
      name: "Integrations",
      href: "/dashboard/integrations",
      icon: FiLink,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: FiSettings,
    },
  ]

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-gray-900 border-r transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-16 flex items-center px-4 border-b">
          <Logo href="/dashboard"/>
        </div>
        <div className="p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href) ? "bg-purple-800/10 text-purple-800" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
                {item.name === "Orders" && (
                  <span className="ml-auto bg-primary text-white text-xs px-2 py-0.5 rounded-full">3</span>
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-4 border-t">
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Restaurant</div>
              <div className="mt-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  A
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Acme Restaurant</p>
                  <p className="text-xs text-gray-500">acme-restaurant</p>
                </div>
                <FiChevronDown className="ml-auto h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
