"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Linkedin, Facebook, Youtube, ChevronUp } from "lucide-react"
import logoImage from "@/assets/techv.png"

// Custom X Icon for Twitter (X)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    fill="currentColor"
    className="bi bi-twitter-x"
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
)

// Updated FooterLink Component that accepts an optional onClick prop.
// Since we're using Next.js 13, we can pass onClick directly to Link.
type FooterLinkProps = {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const FooterLink = ({ href, children, onClick }: FooterLinkProps) => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-block py-1.5"
    >
      {children}
    </Link>
  </li>
)

const SocialIcon = ({
  href,
  children,
  label,
}: {
  href: string
  children: React.ReactNode
  label: string
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-300 hover:text-white transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
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
    <footer className="bg-black text-gray-300 py-10">
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
                  height={160}
                  width={160}
                  alt="Tech Vaseegrah Logo"
                  className="rounded-full shadow-sm"
                />
              </motion.div>
              <p className="text-sm text-gray-400 max-w-xs text-center sm:text-left">
                Innovative technology solutions for modern businesses.
              </p>

            </div>
            {/* Social Media Links */}
            <div className="flex justify-center sm:justify-start gap-6 mt-5 text-gray">
              <SocialIcon href="https://www.linkedin.com/company/tech-vaseegrah/posts/?feedView=all" label="LinkedIn">
                <Linkedin size={22} />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/people/Tech-Vaseegrah/61558676843990/" label="Facebook">
                <Facebook size={22} />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/techvaseegrah/" label="Instagram">
                <Instagram size={22} />
              </SocialIcon>
              <SocialIcon href="https://x.com/Tech_Vaseegrah" label="X">
                <XIcon width={22} height={22} />
              </SocialIcon>

              <SocialIcon href="https://youtube.com/@techvaseegrah?si=rPp2emhWCnE7-57X" label="YouTube">
                <Youtube size={26} />
              </SocialIcon>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Company</h3>
            <ul className="space-y-1">
              {[
                { name: "About", href: "/about" },
                { name: "Careers", href: "/internship" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-3 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Resources</h3>
            <ul className="space-y-1">
              {[
                { name: "Blog", href: "/blog" },
                { name: "Case Study", href: "/casestudies" },
              ].map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-3 sm:mt-2">
            <h3 className="text-white font-medium mb-3 text-base tracking-wide">Legal</h3>
            <ul className="space-y-1">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Cookie Policy
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-5 border-t border-gray-800/30 flex justify-end">
  <p className="text-xs text-gray-500 text-right">
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