import { TbLoader2 } from "react-icons/tb";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  color?: "primary" | "white"
}

export function LoadingSpinner({ size = "md", className = "", color = "primary" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10",
  }

  const colorClasses = {
    primary: "text-purple-600",
    white: "text-white",
  }

  return <TbLoader2 className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`} />
}
