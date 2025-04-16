"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { CiMail, CiCircleCheck, CiCircleAlert } from "react-icons/ci";

type FormData = {
  email: string
}

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    setError("")
    setSuccess(false)
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess(true)
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
          } else {
            console.log("An unknown error occurred")
          }
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-md bg-green-50 p-4 mt-8">
        <div className="flex">
          <CiCircleCheck className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-green-800">Password reset email sent</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Check your email for a link to reset your password. If it doesn&apos;t appear within a few minutes, check
                your spam folder.
              </p>
            </div>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <Link
                  href="/login"
                  className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Return to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm flex items-start">
          <CiCircleAlert className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div>
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
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <Link
            href="/login"
            className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Back to login
          </Link>
        </div>
      </div>

      <Button type="submit" disabled={isLoading} fullWidth>
        {isLoading ? (
          <>
            <LoadingSpinner size="sm" color="white" className="mr-2" />
            Sending...
          </>
        ) : (
          "Send reset link"
        )}
      </Button>
    </form>
  )
}
