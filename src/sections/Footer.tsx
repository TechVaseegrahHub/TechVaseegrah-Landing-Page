"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin, Facebook, Youtube, ChevronUp } from "lucide-react"
import logoImage from "@/assets/tech-v-logo.png"

const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/30 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block py-1.5"
    >
      {children}
    </Link>
  </li>
)

export const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-10">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col sm:items-start col-span-1 sm:col-span-2 lg:col-span-4 lg:pr-6">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start gap-4 sm:gap-5 lg:gap-4">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={logoImage || "/placeholder.svg"}
                  height={180}
                  width={180}
                  alt="Tech Vaseegrah Logo"
                  className="rounded-full shadow-sm"
                />
              </motion.div>

              <p className="text-sm text-gray-400 max-w-xs text-center sm:text-left">
                Innovative technology solutions for modern businesses.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center sm:justify-start gap-4 mt-5">
              <SocialIcon href="https://www.linkedin.com/company/tech-vaseegrah/posts/?feedView=all" label="LinkedIn">
                <Linkedin size={16} />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/people/Tech-Vaseegrah/61558676843990/" label="Facebook">
                <Facebook size={16} />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/techvaseegrah/" label="Instagram">
                <Instagram size={16} />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@techvaseegrah?si=rPp2emhWCnE7-57X" label="YouTube">
                <Youtube size={16} />
              </SocialIcon>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Company</h3>
            <ul className="space-y-1">
              {["About", "Careers",].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          {/* <div className="lg:col-span-3 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Resources</h3>
            <ul className="space-y-1">
              {["Blog", "Documentation", "Help Center", "Contact"].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div> */}

          {/* Legal Section */}
          <div className="lg:col-span-3 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Legal</h3>
            <ul className="space-y-1 ">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-5 border-t border-gray-800/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Tech Vaseegrah, Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            className="fixed bottom-5 right-5 bg-gray-800/60 backdrop-blur-sm text-white p-2 rounded-full shadow-sm hover:bg-gray-700 transition-colors duration-300 z-50"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
