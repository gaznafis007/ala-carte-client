"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiAlertTriangle } from "react-icons/fi";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center mb-6">
        <FiAlertTriangle className="w-10 h-10 text-red-600" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 text-center">
        Something Went Wrong
      </h1>
      <p className="mt-4 text-center max-w-md text-gray-300">
        We&apos;re sorry, but we encountered an error while processing your
        request. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-800 text-white hover:bg-blue-800/90 transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-gray-800 hover:bg-gray-400 hover:text-slate-800 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};
export default Error;
