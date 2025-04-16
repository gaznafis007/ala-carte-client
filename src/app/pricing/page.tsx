import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCheck } from "react-icons/fa"

export default function PricingPage() {
  return (
      <>
      {/* Hero section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Choose the plan that&apos;s right for your restaurant. No hidden fees, no surprises.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-1">Starter</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">For new restaurants</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Order management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Menu management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Basic reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">1 location</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Up to 5 staff accounts</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" fullWidth>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-b from-purple-600 to-indigo-600 rounded-xl shadow-xl overflow-hidden border border-purple-500 transition-transform hover:scale-105 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold uppercase py-1 px-3 rounded-bl-lg text-white">
                Most Popular
              </div>
              <div className="p-6 border-b border-purple-500">
                <h3 className="text-xl font-bold mb-1 text-white">Professional</h3>
                <p className="text-purple-200 mb-4">For growing restaurants</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-purple-200 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Everything in Starter</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Customer relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Up to 3 locations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-300 mr-2 shrink-0" />
                    <span className="text-white">Up to 15 staff accounts</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100" fullWidth>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">For restaurant chains</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$249</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Multi-location management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">API access</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Unlimited staff accounts</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" fullWidth>
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find the perfect plan for your restaurant&apos;s needs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-md">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-gray-500 dark:text-gray-400 font-medium">Features</th>
                  <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-medium">Starter</th>
                  <th className="px-6 py-4 text-center text-purple-600 dark:text-purple-400 font-medium">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Order Management</td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Menu Management</td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Inventory Management</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Analytics</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                  <td className="px-6 py-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Locations</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center">Up to 3</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Staff Accounts</td>
                  <td className="px-6 py-4 text-center">5</td>
                  <td className="px-6 py-4 text-center">15</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">API Access</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">Support</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center">Email & Chat</td>
                  <td className="px-6 py-4 text-center">Priority 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No, all plans are month-to-month with no long-term contracts. You can cancel anytime.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Do you offer a free trial?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer a 14-day free trial on all plans. No credit card required to start.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We accept all major credit cards, including Visa, Mastercard, American Express, and Discover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg mb-8">Try AlaCarte free for 14 days. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white  hover:bg-white/10">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
