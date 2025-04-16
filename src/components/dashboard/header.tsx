"use client"

import { useState } from "react"
import Link from "next/link"
import { FiBell, FiSearch, FiUser, FiLogOut, FiSettings, FiHelpCircle, FiChevronDown } from "react-icons/fi"

export function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="h-16 border-b bg-white dark:bg-gray-900 flex items-center px-4 md:px-6">
      <div className="flex-1 flex items-center">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <FiBell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          <span className="sr-only">Notifications</span>
        </button>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              A
            </div>
            <span className="hidden md:inline text-sm font-medium">Admin</span>
            <FiChevronDown className="hidden md:inline h-4 w-4 text-gray-400" />
          </button>
          {isProfileOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                <div className="py-1">
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FiUser className="mr-3 h-4 w-4" />
                    Your Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FiSettings className="mr-3 h-4 w-4" />
                    Settings
                  </Link>
                  <Link
                    href="/support"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FiHelpCircle className="mr-3 h-4 w-4" />
                    Help & Support
                  </Link>
                  <div className="border-t my-1"></div>
                  <Link
                    href="/"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FiLogOut className="mr-3 h-4 w-4" />
                    Sign out
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
