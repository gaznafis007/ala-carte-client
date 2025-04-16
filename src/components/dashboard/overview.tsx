import Link from "next/link"
import { FiArrowUp, FiShoppingBag, FiDollarSign, FiClock, FiAlertCircle, FiExternalLink } from "react-icons/fi"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex items-center gap-2">
          <select className="px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This month</option>
            <option>Last month</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold mt-1">128</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              <FiShoppingBag className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <FiArrowUp className="h-3 w-3 mr-1" />
              <span>12%</span>
            </div>
            <span className="text-gray-500 ml-2">from last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold mt-1">$4,582.25</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-full">
              <FiDollarSign className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <FiArrowUp className="h-3 w-3 mr-1" />
              <span>8.2%</span>
            </div>
            <span className="text-gray-500 ml-2">from last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Orders</p>
              <h3 className="text-2xl font-bold mt-1">5</h3>
            </div>
            <div className="p-2 bg-yellow-100 rounded-full">
              <FiClock className="h-5 w-5 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Link href="/dashboard/orders" className="text-primary hover:underline flex items-center">
              View pending orders
              <FiExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
              <h3 className="text-2xl font-bold mt-1">3</h3>
            </div>
            <div className="p-2 bg-red-100 rounded-full">
              <FiAlertCircle className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Link href="/dashboard/inventory" className="text-primary hover:underline flex items-center">
              View inventory
              <FiExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-4">Daily Orders</h3>
          <div className="h-64 flex items-center justify-center border rounded-md bg-gray-50">
            <p className="text-gray-500">Chart visualization will appear here</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-4">Revenue Trends</h3>
          <div className="h-64 flex items-center justify-center border rounded-md bg-gray-50">
            <p className="text-gray-500">Chart visualization will appear here</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Recent Orders</h3>
          <Link href="/dashboard/orders" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-gray-500">Order ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Customer</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Items</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Total</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">#ORD-5289</td>
                <td className="px-4 py-3">John Smith</td>
                <td className="px-4 py-3">3 items</td>
                <td className="px-4 py-3">$42.50</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                </td>
                <td className="px-4 py-3 text-gray-500">10 min ago</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">#ORD-5288</td>
                <td className="px-4 py-3">Sarah Johnson</td>
                <td className="px-4 py-3">1 item</td>
                <td className="px-4 py-3">$18.99</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">In Progress</span>
                </td>
                <td className="px-4 py-3 text-gray-500">25 min ago</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">#ORD-5287</td>
                <td className="px-4 py-3">Michael Brown</td>
                <td className="px-4 py-3">2 items</td>
                <td className="px-4 py-3">$27.30</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Delivered</span>
                </td>
                <td className="px-4 py-3 text-gray-500">1 hour ago</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">#ORD-5286</td>
                <td className="px-4 py-3">Emily Davis</td>
                <td className="px-4 py-3">4 items</td>
                <td className="px-4 py-3">$65.75</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                </td>
                <td className="px-4 py-3 text-gray-500">2 hours ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
