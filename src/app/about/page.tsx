
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaBolt, FaUsers, FaShieldAlt } from "react-icons/fa"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re on a mission to empower restaurants with technology that simplifies operations and enhances customer
              experiences.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AlaCarte was founded in 2018 by a team of restaurant industry veterans and technology experts who saw
                  a gap in the market for truly integrated restaurant management software.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  After years of working with outdated, disconnected systems, our founders set out to create a platform
                  that would bring all aspects of restaurant management into one seamless experience.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, AlaCarte serves thousands of restaurants worldwide, from small cafes to large chains, helping
                  them streamline operations, reduce costs, and delight their customers.
                </p>
              </div>
              <div className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop"
                  alt="Restaurant team collaborating in a modern kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <FaBolt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re constantly pushing the boundaries of what&apos;s possible in restaurant technology, always looking for
                new ways to solve problems.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <FaUsers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everything we build is designed with our customers&apos; needs in mind. We listen, learn, and adapt based on
                feedback.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                <FaShieldAlt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand that our software is mission-critical for our customers, so we build with reliability and
                security as top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">The passionate people behind AlaCarte.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                  alt="Sarah Johnson - CEO & Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Former restaurant owner with 15 years of industry experience.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop"
                  alt="Michael Chen - CTO & Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tech innovator with a background in building scalable platforms.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="David Rodriguez - Head of Product"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Rodriguez</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">Head of Product</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert in UX design with a passion for creating intuitive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <p>Restaurants Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25M+</div>
              <p>Orders Processed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <p>Countries</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Investors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Backed by leading investors who believe in our vision.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
                alt="Venture Capital Firm"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop"
                alt="Tech Investment Group"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="Global Investment Partners"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop"
                alt="Food Tech Ventures"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re always looking for talented individuals who are passionate about transforming the restaurant
              industry.
            </p>
            <Link href="/careers">
              <Button size="lg">View Open Positions</Button>
            </Link>
          </div>
        </div>
      </section>
      </>
  )
}
