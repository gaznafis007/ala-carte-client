import Image from "next/image"
import {
  FaCreditCard,
  FaCubes,
  FaChartPie,
  FaDesktop,
  FaPhone,
  FaChartBar,
  FaShoppingBag,
  FaHome,
  FaCalendarAlt,
  FaTag,
  FaEnvelope,
  FaCompass,
  FaDollarSign,
} from "react-icons/fa"

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            How does it work?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AlaCarte offers a range of products to radically improve your sales, reduce costs and improve efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Store Column */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
            <div className="h-40 mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Store illustration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Store
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Technology and tools for your staff to succeed.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaCreditCard className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Point-of-Sale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaCubes className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaChartBar className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Order Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaDesktop className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Terminals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaChartPie className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Live Reports</span>
              </div>
            </div>
          </div>

          {/* Business Column */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
            <div className="h-40 mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business illustration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Business
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Business operations with speed and precision.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaShoppingBag className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Manage Menus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaPhone className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Call Center</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaChartBar className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaDesktop className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Online Presence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaDollarSign className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Financials</span>
              </div>
            </div>
          </div>

          {/* Customer Column */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
            <div className="h-40 mb-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Customer illustration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Customer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Offer world-class online experiences.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaCompass className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Direct Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaHome className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">QR Ordering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaCalendarAlt className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Reservations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaTag className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Loyalty Promos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <span className="dark:text-gray-300">Marketing & CRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
