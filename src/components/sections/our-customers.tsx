import Link from "next/link"
import Image from "next/image"

export function OurCustomers() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h3 className="text-lg dark:text-white font-medium mb-2">Our Customers</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All merchants love AlaCarte.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            AlaCarte offers a range of products to radically improve your sales, reduce costs and improve efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Restaurants */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Restaurant customers" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Restaurants</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-purple-600 mb-2">Increase Direct Sales by 50%</div>
              <h4 className="text-xl font-bold mb-3">
                How our direct ordering solution saved thousands in commission while growing customers.
              </h4>
              <Link
                href="/customers/restaurants"
                className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* QSR Chains */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="QSR Chain customers" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">QSR Chains</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-purple-600 mb-2">Reduce Cancellations by 60%</div>
              <h4 className="text-xl font-bold mb-3">
                Revolutionize your QSR chain with integrated ordering and real-time analytics to boost your bottom line.
              </h4>
              <Link
                href="/customers/qsr-chains"
                className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Subscription customers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Subscriptions</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-purple-600 mb-2">Grow Recurring Revenue</div>
              <h4 className="text-xl font-bold mb-3">
                Build a loyal customer base with subscription meal plans and recurring delivery services.
              </h4>
              <Link
                href="/customers/subscriptions"
                className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Food Courts */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Food Court customers" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Food Courts</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-purple-600 mb-2">Streamline Multi-Vendor Operations</div>
              <h4 className="text-xl font-bold mb-3">
                Manage multiple vendors in one platform with centralized ordering and payment processing.
              </h4>
              <Link
                href="/customers/food-courts"
                className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
