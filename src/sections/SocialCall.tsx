"use client"
import type React from "react"
import { useState } from "react"

export default function SocialCall() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    // Handle submission logic (e.g., API call)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-4">
        {/* Left: Heading & Subheading */}
        <div className="flex flex-col md:ml-32 md:mt-10 text-center md:text-left md:mb-12 w-full md:w-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 section-title md:text-left md:text-5xl">
            Let&rsquo;s Build Your Digital Presence Together
          </h2>
          <p className="text-lg sm:text-xl section-description max-w-lg mx-auto md:mx-0 md:text-left">
            Ready to grow on social? Whether you&apos;re launching, scaling, or just starting out we&apos;re here to
            make something remarkable happen..
          </p>
        </div>

        {/* Right: Form & Privacy Note */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto md:mr-36 mt-6 md:mt-0 md:flex-shrink-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0 w-full max-w-md md:max-w-none"
          >
            <div className="relative flex-1 w-full sm:flex-initial">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full md:w-64 px-4 rounded-md border border-gray-300 text-black focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Thank-you overlay */}
              {submitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-600/80 rounded-md">
                  <span className="text-white font-medium">Thank you!</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200 h-12 px-6 whitespace-nowrap w-full sm:w-auto"
            >
              Get a free audit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
