"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Show the popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      setHasConsented(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setHasConsented(true)
    setIsVisible(false)
  }

  const handlePreferences = () => {
    // This would typically open more detailed cookie settings
    console.log("Open cookie preferences")
    // For demo purposes, we'll just close the popup
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (hasConsented) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 w-auto sm:w-full sm:max-w-[280px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="rounded-lg bg-white/95 p-4 shadow-md border border-gray-100">
            <div className="flex items-start justify-between">
              <h2 className="text-sm font-medium text-gray-700">Cookie Notice</h2>
              <button onClick={handleClose} className="rounded-full p-0.5 text-gray-400 hover:text-gray-600 ml-2">
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              We use cookies to improve your experience. By continuing, you agree to our cookie policy.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Button onClick={handleAccept} size="sm" variant="default" className="h-7 text-xs rounded-md px-3 py-0">
                Accept
              </Button>
              <Button
                onClick={handlePreferences}
                size="sm"
                variant="outline"
                className="h-7 text-xs rounded-md px-3 py-0 text-gray-600 border-gray-200"
              >
                Settings
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
