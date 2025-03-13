"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react"
import logoImage from "@/assets/unnamed.png";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-white transition-colors duration-300">
      {children}
    </Link>
  </li>
)

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-gray-300 py-12 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={logoImage}
                height={50}
                width={50}
                alt="Tech Vaseegrah Logo"
                className="rounded-full"
              />
            </motion.div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mt-6">
              <SocialIcon href="https://linkedin.com">
                <Linkedin size={20} />
              </SocialIcon>
              <SocialIcon href="https://github.com">
                <Github size={20} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <Instagram size={20} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/+918524089733">
                <MessageCircle size={20} />
              </SocialIcon>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Press", "News"].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Tech Vaseegrah, Inc. All rights reserved.
            
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.button>
    </footer>
  )
}