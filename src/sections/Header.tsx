"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import Logo from "@/assets/tech-v-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // Increased delay for better UX
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeAll = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="z-50" onClick={closeAll}>
  <Image 
    src={Logo} 
    alt="Company Logo" 
    width={170}  // Set your desired display width
    height={60}  // Set your desired display height
    priority    // Optional: if this is above-the-fold content
    className="object-contain" // Ensures proper aspect ratio
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            
            {/* Internships Dropdown */}
            <Dropdown 
              title="Internships"
              isActive={activeDropdown === "internships"}
              onMouseEnter={() => handleDropdownEnter("internships")}
              onMouseLeave={handleDropdownLeave}
            >
              <DropdownLink href="/internship" onClick={closeAll}>
                Internships
              </DropdownLink>
              <DropdownLink href="/mbaintern" onClick={closeAll}>
                MBA Internships
              </DropdownLink>
            </Dropdown>

            <NavLink href="/projects">Projects</NavLink>

            {/* Services Dropdown */}
            <Dropdown 
              title="Services"
              isActive={activeDropdown === "services"}
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <DropdownLink href="/internship" onClick={closeAll}>
              Web Development
              
              </DropdownLink>
              <DropdownLink href="/internship" onClick={closeAll}>
              App Development
              </DropdownLink>
              <DropdownLink href="/seo" onClick={closeAll}>
              SEO Services
              </DropdownLink>
            </Dropdown>

            <Link 
              href="/contact" 
              className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200"
              onClick={closeAll}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-50"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeAll} />
    </header>
  )
}

// Dropdown Component
const Dropdown = ({ 
  title, 
  isActive, 
  onMouseEnter, 
  onMouseLeave, 
  children 
}: {
  title: string
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  children: React.ReactNode
}) => {
  return (
    <div 
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button 
        className="flex items-center gap-1 hover:text-black transition-colors"
        aria-expanded={isActive}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      
      <div 
        className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 ${
          isActive 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="py-1">
          {children}
        </div>
      </div>
    </div>
  )
}

// Dropdown Link Component
const DropdownLink = ({ 
  href, 
  onClick, 
  children 
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
        <MobileLink href="/" onClick={onClose}>Home</MobileLink>
        
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm uppercase mb-2">Internships</span>
          <MobileLink href="/internships" onClick={onClose}>All Internships</MobileLink>
          <MobileLink href="/mbaintern" onClick={onClose}>MBA Internships</MobileLink>
        </div>
        
        <MobileLink href="/projects" onClick={onClose}>Projects</MobileLink>
        
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm uppercase mb-2">Services</span>
          <MobileLink href="/seo" onClick={onClose}>SEO Services</MobileLink>
          <MobileLink href="/web-development" onClick={onClose}>Web Development</MobileLink>
          <MobileLink href="/app-development" onClick={onClose}>App Development</MobileLink>
        </div>
        
        <MobileLink 
          href="/contact" 
          onClick={onClose}
          className="bg-white text-black px-6 py-3 rounded-lg font-medium"
        >
          Contact Us
        </MobileLink>
      </div>
    </div>
  )
}

// Link Components
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="hover:text-black transition-colors">
    {children}
  </Link>
)

const MobileLink = ({ 
  href, 
  onClick, 
  children,
  className = ""
}: { 
  href: string
  onClick: () => void
  children: React.ReactNode
  className?: string
}) => (
  <Link
    href={href}
    className={`text-white text-xl py-2 ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
)