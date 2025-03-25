"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Logo from "@/assets/tech-v-logo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isHeroCrossed, setIsHeroCrossed] = useState<boolean>(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Handle scroll event to check if hero section is crossed
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      setIsScrolled(window.scrollY > 0)

      // Check if the hero section is out of view
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        setIsHeroCrossed(heroRect.bottom <= 0) // Hero section is crossed when its bottom is above the viewport
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-[1000] transition-all duration-300 bg-white/50 backdrop-blur-lg shadow-md`}
    >

      {/* 🔥 Top Banner (Hidden with smooth effect when scrolled past hero) */}
      {/* <div
        className={`bg-black text-white text-sm py-2 transition-all duration-500 ease-in-out ${
          isHeroCrossed ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">Transforming small businesses into SMART BIZ 🔥</p>
        </div>
      </div>  */}

      {/* 🔥 Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="transition-opacity duration-300 hover:opacity-80" onClick={closeMenu}>
            <Image src={Logo || "/placeholder.svg"} alt="Tech V Logo" height={170} width={170} />
          </Link>

          {/* 🔥 Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-gray-800">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/internship">Internship</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/seo">SEO Services</NavLink>
            <NavLink href="/mbainternships">MBA Internship Programs</NavLink>
            <Link
              href="/contact"
              className="relative overflow-hidden bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight group"
              onClick={closeMenu}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Contact Us</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          {/* 🔥 Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`fixed inset-0 h-screen w-full z-40 backdrop-blur-2xl bg-black/90 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-5 scale-95"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-white">
          <MobileNavLink href="/" onClick={closeMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/internship" onClick={closeMenu}>
            Internship
          </MobileNavLink>
          <MobileNavLink href="/projects" onClick={closeMenu}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="/service" onClick={closeMenu}>
            Service
          </MobileNavLink>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

/* 🔥 Desktop NavLink */
interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="relative group text-gray-800 hover:text-black focus-visible:text-black active:text-black transition-colors duration-300"
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-focus-visible:w-full group-active:w-full"></span>
  </Link>
)

/* 🔥 Mobile NavLink */
interface MobileNavLinkProps {
  href: string
  onClick: () => void
  children: React.ReactNode
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => (
  <Link
    href={href}
    className="text-white text-xl font-medium transition-colors duration-300 hover:text-gray-300 focus-visible:text-gray-300 active:text-gray-300"
    onClick={onClick}
  >
    {children}
  </Link>
)