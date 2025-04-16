
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export default function ResetPasswordPage() {
  return (
    
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900/80">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Reset your password</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>

  )
}
