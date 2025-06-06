"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent")
    const savedPreferences = localStorage.getItem("cookiePreferences")

    if (!consent) {
      // Show the popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      setHasConsented(true)
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        necessary: true,
        functional: true,
        analytics: true,
        marketing: true,
      }),
    )
    setHasConsented(true)
    setIsVisible(false)
  }

  const handlePreferences = () => {
    setShowSettings(true)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "customized")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    setHasConsented(true)
    setIsVisible(false)
  }

  if (hasConsented) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-2 right-2 left-2 sm:bottom-4 sm:right-4 sm:left-auto z-50 w-auto sm:w-full sm:max-w-[280px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="rounded-lg bg-white/95 p-3 sm:p-4 shadow-md border border-gray-100">
            <AnimatePresence mode="wait">
              {!showSettings ? (
                <motion.div
                  key="main"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-sm font-medium text-gray-700">Cookie Notice</h2>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="rounded-full p-0.5 text-gray-400 hover:text-gray-600 ml-2"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    We use cookies to improve your experience. By continuing, you agree to our cookie policy.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={handleAccept}
                      className="h-7 text-xs rounded-md px-3 py-0 bg-black hover:bg-blue-700 text-white font-medium"
                    >
                      Accept
                    </button>
                    <button
                      onClick={handlePreferences}
                      className="h-7 text-xs rounded-md px-3 py-0 text-gray-600 border border-gray-200 hover:bg-gray-50 font-medium"
                    >
                      Settings
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="rounded-full p-0.5 text-gray-400 hover:text-gray-600"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <h2 className="text-sm font-medium text-gray-700">Cookie Settings</h2>
                    </div>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="rounded-full p-0.5 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700">Strictly Necessary</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="relative inline-flex h-4 w-8 items-center rounded-full bg-gray-200">
                          <span className="absolute h-3 w-3 rounded-full bg-white translate-x-4 shadow-sm" />
                        </div>
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700">Functional</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Enable enhanced functionality like live chat and personalized content.
                        </p>
                      </div>
                      <div className="mt-0.5 flex-shrink-0">
                        <button
                          onClick={() => updatePreference("functional", !preferences.functional)}
                          className={`relative inline-flex h-4 w-8 items-center rounded-full ${
                            preferences.functional ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`absolute h-3 w-3 rounded-full bg-white shadow-sm transform transition-transform ${
                              preferences.functional ? "translate-x-4" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700">Analytics</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <div className="mt-0.5 flex-shrink-0">
                        <button
                          onClick={() => updatePreference("analytics", !preferences.analytics)}
                          className={`relative inline-flex h-4 w-8 items-center rounded-full ${
                            preferences.analytics ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`absolute h-3 w-3 rounded-full bg-white shadow-sm transform transition-transform ${
                              preferences.analytics ? "translate-x-4" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700">Marketing</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Used to deliver personalized advertisements and track campaign performance.
                        </p>
                      </div>
                      <div className="mt-0.5 flex-shrink-0">
                        <button
                          onClick={() => updatePreference("marketing", !preferences.marketing)}
                          className={`relative inline-flex h-4 w-8 items-center rounded-full ${
                            preferences.marketing ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        >
                          <span
                            className={`absolute h-3 w-3 rounded-full bg-white shadow-sm transform transition-transform ${
                              preferences.marketing ? "translate-x-4" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={handleSavePreferences}
                      className="h-7 text-xs rounded-md px-3 py-0 bg-black hover:bg-blue-700 text-white font-medium"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="h-7 text-xs rounded-md px-3 py-0 text-gray-600 border border-gray-200 hover:bg-gray-50 font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  function updatePreference(key: keyof CookiePreferences, value: boolean) {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }))
  }
}
