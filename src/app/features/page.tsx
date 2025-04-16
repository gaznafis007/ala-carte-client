import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LuShoppingBag, LuUtensils } from "react-icons/lu"
import { AiOutlineBarChart } from "react-icons/ai"
import { CiClock1, CiDeliveryTruck, CiMobile1 } from "react-icons/ci"
import { FiCreditCard, FiUsers } from "react-icons/fi"
import { SiGooglecalendar } from "react-icons/si"
import { BiBarChartAlt } from "react-icons/bi"


export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Powerful Features for Modern Restaurants
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover all the tools you need to streamline operations, increase revenue, and delight your customers.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Core Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to run your restaurant efficiently in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <LuShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Order Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline your order process with an intuitive interface. Track orders from receipt to delivery.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <LuUtensils size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Menu Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily update menus, prices, and availability. Create special promotions and seasonal offerings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <AiOutlineBarChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Inventory Control</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track ingredients and supplies in real-time. Get alerts when stock is low and automate reordering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <CiMobile1 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Ordering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let customers order directly from their phones. Customize your mobile experience with your branding.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <CiDeliveryTruck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly connect with popular delivery platforms. Manage all delivery orders in one dashboard.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <FiCreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accept multiple payment methods. Process transactions quickly and securely with low fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Take your restaurant to the next level with these powerful tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced Feature 1 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <FiUsers size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Relationship Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Build customer profiles based on ordering habits. Send personalized promotions and track customer
                  satisfaction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Customer profiles and order history
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Loyalty program management
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Automated email marketing
                  </li>
                </ul>
              </div>
            </div>

            {/* Advanced Feature 2 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <SiGooglecalendar size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reservation System</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Allow customers to book tables online. Manage seating arrangements and optimize table turnover.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Online booking widget
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Table management
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Automated confirmation emails
                  </li>
                </ul>
              </div>
            </div>

            {/* Advanced Feature 3 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <BiBarChartAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Gain insights into your business with detailed reports. Track sales, costs, and profitability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Sales and revenue reports
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Menu performance analysis
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Staff productivity metrics
                  </li>
                </ul>
              </div>
            </div>

            {/* Advanced Feature 4 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <CiClock1 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Staff Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Schedule shifts, track hours, and manage payroll. Assign roles and permissions to staff members.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Employee scheduling
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Time tracking and attendance
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400">✓</span>
                    Role-based access control
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your restaurant?</h2>
            <p className="text-lg mb-8">
              Join thousands of restaurants already using AlaCarte to streamline operations and increase profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      </>
  )
}
