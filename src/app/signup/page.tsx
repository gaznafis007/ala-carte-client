
import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"
import Image from "next/image"
import { FaCheck } from "react-icons/fa"

export default function SignupPage() {
  return (
      <div className="flex-1 flex">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900/80">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <SignupForm />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 opacity-65">
            <Image src="https://images.unsplash.com/photo-1728044849280-10a1a75cff83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant management" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-md text-white">
              <h3 className="text-3xl font-bold mb-4">Start your 14-day free trial</h3>
              <p className="text-lg mb-6">No credit card required. Full access to all features during your trial.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 mr-2 text-green-300" />
                  Order management system
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 mr-2 text-green-300" />
                  Inventory tracking
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 mr-2 text-green-300" />
                  Staff management
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 mr-2 text-green-300" />
                  Analytics and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

  )
}
