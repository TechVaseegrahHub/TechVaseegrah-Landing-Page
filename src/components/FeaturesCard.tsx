import type React from "react"
import { twMerge } from "tailwind-merge"

export default function FeatureCard({
  title,
  description,
  button,
  children,
  className,
}: {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
  button?: string
}) {
  return (
    <div
      className={twMerge(
        "bg-white border border-gray-200/50 p-6 sm:p-8 lg:p-10 rounded-3xl flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-center mb-6 sm:mb-8 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
        {children}
      </div>

      <div className="flex flex-col justify-between h-full space-y-5 sm:space-y-6">
        <div className="text-center space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
            {description}
          </p>
        </div>

        {button && (
          <div className="flex justify-center pt-3 sm:pt-4">
            <a
              href={button}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg hover:shadow-blue-600/25 transform hover:-translate-y-0.5"
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
