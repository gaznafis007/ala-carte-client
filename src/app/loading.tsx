import { FiLoader } from "react-icons/fi"

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <FiLoader className="w-10 h-10 text-primary animate-spin" />
      <h2 className="mt-6 text-xl font-medium text-center">Loading...</h2>
      <p className="mt-2 text-center text-muted-foreground">Please wait while we prepare your content</p>
    </div>
  )
}

export default Loading;
