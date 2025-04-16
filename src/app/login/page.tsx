import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
            <LoginForm />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <Image src="/images/login-bg.jpg" alt="Restaurant interior" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-md text-white">
              <h3 className="text-3xl font-bold mb-4">Streamline your restaurant operations</h3>
              <p className="text-lg mb-6">
                Join thousands of restaurants using AlaCarte to manage orders, inventory, and staff all in one place.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold">
                    C
                  </div>
                </div>
                <p className="text-sm">Trusted by 5,000+ restaurants worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
