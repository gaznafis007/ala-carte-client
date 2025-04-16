"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci"
import { FiMessageSquare } from "react-icons/fi"


type FormData = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    console.log(data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have questions about AlaCarte? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      error={errors.name?.message}
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                  </div>

                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      error={errors.email?.message}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>

                  <div>
                    <Input
                      label="Phone Number"
                      placeholder="Your phone number"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <Input
                      label="Company Name"
                      placeholder="Your company"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      rows={5}
                      placeholder="How can we help you?"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" color="white" className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>

                <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CiMail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          <a
                            href="mailto:info@alacarte.com"
                            className="hover:text-purple-600 dark:hover:text-purple-400"
                          >
                            info@alacarte.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CiPhone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          <a href="tel:+1-800-123-4567" className="hover:text-purple-600 dark:hover:text-purple-400">
                            +1 (800) 123-4567
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CiMapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Office</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          123 Tech Plaza
                          <br />
                          San Francisco, CA 94107
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiMessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Support Hours</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          Monday - Friday: 9am - 6pm PST
                          <br />
                          Saturday: 10am - 4pm PST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775!2d-122.4004334!3d37.7909244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzI3LjMiTiAxMjLCsDI0JzAxLjYiVw!5e0!3m2!1sen!2sus!4v1625761840548!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">How quickly can I get started with AlaCarte?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can sign up and start using AlaCarte in minutes. Our onboarding process is designed to get you up
                  and running quickly, with guided setup for your menu, inventory, and staff.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Do you offer custom integrations?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer custom integrations for Enterprise customers. Please contact our sales team to discuss
                  your specific requirements.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">What kind of support do you offer?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer email support for all customers, with chat support available on Professional plans and above.
                  Enterprise customers receive dedicated account management and 24/7 priority support.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can I migrate data from my current system?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer data migration services to help you transition smoothly from your current system to
                  AlaCarte. Our team will work with you to ensure all your important data is transferred correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     </>
  )
}
