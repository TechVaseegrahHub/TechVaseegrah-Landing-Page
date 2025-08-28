import type React from "react"
import { twMerge } from "tailwind-merge"

export default function FeatureCard({
  title,
  description,
  button,
  children,
  className,
  borderColor = "border-blue-500",
  logoBackground = "bg-white",
}: {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
  button?: string
  borderColor?: string
  logoBackground?: string
}) {
  return (
    <div
      className={twMerge(
        "group relative bg-white rounded-2xl flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border-2",
        borderColor,
        className,
      )}
    >
      <div
        className={twMerge("relative flex items-center justify-center p-8 min-h-[200px] rounded-t-xl", logoBackground)}
      >
        <div className="transform transition-all duration-300 ease-out group-hover:scale-110">{children}</div>
      </div>

      <div className="relative bg-white p-6 flex flex-col justify-center items-center text-center rounded-b-xl">
        <h3 className="text-xl font-semibold text-gray-900 leading-tight tracking-tight">{title}</h3>
        {description && <p className="text-sm text-gray-600 leading-relaxed mt-2">{description}</p>}

        {button && (
          <div className="mt-4">
            <a
              href={button}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
