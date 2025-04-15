import type React from "react"
import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, fullWidth = true, className = "", ...props }, ref) => {
    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-2`}>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              block rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 
              focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
              disabled:cursor-not-allowed disabled:opacity-50
              dark:border-gray-600 dark:bg-gray-800 dark:text-white
              ${leftIcon ? "pl-10" : ""}
              ${rightIcon ? "pr-10" : ""}
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              ${fullWidth ? "w-full" : ""}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">{rightIcon}</div>
          )}
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"
