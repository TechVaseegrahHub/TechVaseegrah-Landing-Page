"use client"
import startupCharImage from "@/assets/startup-char.png"
import bulbImage from "@/assets/bulb.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export const ContactUs = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title mb-5">Contact Us</h2>
          <p className="section-description">We're here to help and answer any questions you may have.</p>
        </div>
        <div className="relative">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <form className="space-y-4 lg:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What can we help you with?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 focus:outline-none transition duration-150 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 focus:outline-none transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 focus:outline-none transition duration-150 ease-in-out"
                  ></textarea>
                </div>
                <div>
                  <button className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition duration-150 ease-in-out text-sm">
                    Send Message
                  </button>
                </div>
              </form>
              <div className="lg:w-1/3 space-y-4 text-base">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-600">Address</h4>
                    <p className="text-gray-600">9, Vijaya Nagar, Reddypalayam Road, Thanjavur-613009</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-gray-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-600">Phone</h4>
                    <p className="text-gray-600">+91 85240 89733</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-gray-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-600">Email</h4>
                    <p className="text-gray-600">admin@techvaseegrah.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src={startupCharImage.src}
            alt="Startup Character"
            height={200}
            width={200}
            className="hidden xl:block absolute -right-2 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={bulbImage.src}
            alt="Bulb"
            height={140}
            width={140}
            className="hidden xl:block absolute top-40 -left-16"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  )
}
    