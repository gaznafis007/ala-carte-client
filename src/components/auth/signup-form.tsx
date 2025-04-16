"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

import { FaGoogle, FaGithub } from "react-icons/fa"
import { CiCircleAlert, CiCircleCheck, CiMail, CiUser } from "react-icons/ci"
import { FiLock } from "react-icons/fi"
import { LuBuilding } from "react-icons/lu"

type FormData = {
  restaurantName: string
  fullName: string
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      restaurantName: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  })

  const password = watch("password")

  const onSubmit = async (data: FormData) => {
    console.log(data)
    setError("")
    setSuccess(false)
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)

      // Redirect after success message is shown
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message)
        }else{
            console.log("An unknown error occurred")
        }
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-lg bg-green-50 p-6 mt-8">
        <div className="flex items-center">
          <CiCircleCheck className="h-6 w-6 text-green-500 mr-3" />
          <h3 className="text-lg font-medium text-green-800">Account created successfully!</h3>
        </div>
        <div className="mt-2 text-sm text-green-700">
          <p>Your account has been created. Redirecting you to your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start">
          <CiCircleAlert className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <Input
          label="Restaurant Name"
          leftIcon={<LuBuilding className="h-5 w-5" />}
          error={errors.restaurantName?.message}
          {...register("restaurantName", {
            required: "Restaurant name is required",
          })}
          placeholder="Your restaurant name"
        />

        <Input
          label="Full Name"
          leftIcon={<CiUser className="h-5 w-5" />}
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
          })}
          placeholder="Your full name"
        />

        <Input
          label="Email address"
          type="email"
          leftIcon={<CiMail className="h-5 w-5" />}
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          type="password"
          leftIcon={<FiLock className="h-5 w-5" />}
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="••••••••"
        />

        <Input
          label="Confirm Password"
          type="password"
          leftIcon={<FiLock className="h-5 w-5" />}
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          placeholder="••••••••"
        />

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              {...register("agreeTerms", {
                required: "You must agree to the terms and conditions",
              })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-700 dark:text-gray-300">
              I agree to the{" "}
              <a href="/terms" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">
                Privacy Policy
              </a>
            </label>
            {errors.agreeTerms && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.agreeTerms.message}</p>
            )}
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading} fullWidth>
        {isLoading ? (
          <>
            <LoadingSpinner size="sm" color="white" className="mr-2" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FaGoogle className="h-5 w-5 mr-2 text-[#4285F4]" />
          Google
        </button>
        <button
          type="button"
          className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FaGithub className="h-5 w-5 mr-2" />
          GitHub
        </button>
      </div>
    </form>
  )
}
