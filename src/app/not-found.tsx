import Link from "next/link"
import { FiSearch } from "react-icons/fi"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-100 dark:bg-gray-900">
      <div className="w-20 h-20 rounded-full bg-blue-800/10 flex items-center justify-center mb-6">
        <FiSearch className="w-10 h-10 text-blue-800" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 text-center">Page Not Found</h1>
      <p className="mt-4 text-center max-w-md text-gray-300">
        We&apos;re sorry, it seems that the page you were trying to access has hit a roadblock. Let&apos;s go back to
        the menu and try again.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-800 text-white hover:bg-blue-800/90 transition-colors"
      >
        Back to Homepage
      </Link>
    </div>
  )
}

export default NotFound;