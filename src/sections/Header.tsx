"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
    }, 300)
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeAll = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="sticky top-0 z-[1000] bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="z-50" onClick={closeAll}>
            <Image 
              src={Logo} 
              alt="Company Logo" 
              width={170}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            
            <Dropdown 
              title="Internships"
              isActive={activeDropdown === "internships"}
              onMouseEnter={() => handleDropdownEnter("internships")}
              onMouseLeave={handleDropdownLeave}
            >
              <DropdownLink href="/internship" onClick={closeAll}>
               IT Internships
              </DropdownLink>
              <DropdownLink href="/mbaintern" onClick={closeAll}>
                MBA Internships
              </DropdownLink>
            </Dropdown>

            <NavLink href="/projects">Projects</NavLink>

            <Dropdown 
              title="Services"
              isActive={activeDropdown === "services"}
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <DropdownLink href="/webdev" onClick={closeAll}>
                Web Development
              </DropdownLink>
              <DropdownLink href="/undermaintain" onClick={closeAll}>
                Social Media Marketing
              </DropdownLink>
              <DropdownLink href="/undermaintain" onClick={closeAll}>
                Social Media Management
              </DropdownLink>
              <DropdownLink href="/undermaintain" onClick={closeAll}>
                Branding &amp; Consultation
              </DropdownLink>
              <DropdownLink href="/seo" onClick={closeAll}>
                SEO Services
              </DropdownLink>
            </Dropdown>
            
            <Link 
              href="/contact" 
              className="bg-black text-white  rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200h-12 px-4 py-2"
              onClick={closeAll}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-50 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu isOpen={isMenuOpen} onClose={closeAll} />
        )}
      </AnimatePresence>
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
        <motion.span
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -10
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg ${
          isActive ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="py-1">
          {children}
        </div>
      </motion.div>
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
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 pt-24"
      style={{
        top: '80px',
        height: 'calc(100vh - 80px)'
      }}
    >
      <div className="container mx-auto px-6 py-4 h-full overflow-y-auto">
        <motion.div 
          className="flex flex-col space-y-6 max-w-md mx-auto"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <MobileLink href="/" onClick={onClose}>
              Home
            </MobileLink>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col text-center">
            <span className="text-gray-500 text-sm uppercase mb-2">Internships</span>
            <div className="flex flex-col space-y-3">
              <MobileLink href="/internship" onClick={onClose}>
               IT Internships
              </MobileLink>
              <MobileLink href="/mbaintern" onClick={onClose}>
                MBA Internships
              </MobileLink>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <MobileLink href="/projects" onClick={onClose}>
              Projects
            </MobileLink>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col text-center">
            <span className="text-gray-500 text-sm uppercase mb-2">Services</span>
            <div className="flex flex-col space-y-3">
              <MobileLink href="/undermaintain" onClick={onClose}>
                Web Development
              </MobileLink>
              <MobileLink href="/undermaintain" onClick={onClose}>
                Social Media Marketing
              </MobileLink>
              <MobileLink href="/undermaintain" onClick={onClose}>
              Social Media Management
              </MobileLink>
              <MobileLink href="/undermaintain" onClick={onClose}>
              Branding &amp; Consulation
              </MobileLink>
              <MobileLink href="/seo" onClick={onClose}>
              SEO Service
              </MobileLink>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-4 text-center"
          >
            <MobileLink 
              href="/contact" 
              onClick={onClose}
              className="bg-black text-white px-6 py-3 rounded-lg font-medium tracking-tight hover:bg-white transition-colors duration-200"
            >
              Contact Us
            </MobileLink>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Link Components
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="hover:text-black transition-colors duration-200 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
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
    className={`text-gray-800 text-lg py-2 hover:text-black transition-colors duration-200 ${className}`}
    onClick={onClick}
  >
    <motion.span
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  </Link>
)