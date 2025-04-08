"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Image imports
import logo from "@/assets/tech-v-logo.png"
import product1 from "../assets/instaxbot.png"
import product2 from "../assets/f3-icon.png"
import product3 from "../assets/bill-icon.png"
import product4 from "../assets/go.png"

interface Product {
  id: number
  name: string
  image: StaticImageData
  href: string
}

const products: Product[] = [
  { id: 1, name: "InstaX Bot", image: product1, href: "#" },
  { id: 2, name: "F3 Engine", image: product2, href: "#" },
  { id: 3, name: "Billzzy", image: product3, href: "https://billzzy.com" },
  { id: 4, name: "GoWhats", image: product4, href: "https://gowhats.vercel.app/" },
]

interface DropdownProps {
  title: string
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
  onDoubleClick?: () => void
  children: React.ReactNode
}

type DropdownLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface CompactProductCardProps {
  href: string
  image: StaticImageData
  name: string
  onClick: () => void
}

interface MobileNavItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

interface MobileProductCardProps {
  href: string
  image: StaticImageData
  name: string
  onClick: () => void
}

interface MobileMenuProps {
  isOpen: boolean
  headerHeight: number
  onClose: () => void
}

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(80)

  useEffect(() => {
    const header = document.querySelector("header")
    if (header) {
      const updateHeight = () => {
        const height = header.offsetHeight
        setHeaderHeight(height)
      }

      updateHeight()
      window.addEventListener("resize", updateHeight)
      return () => window.removeEventListener("resize", updateHeight)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    headerHeight,
    toggle,
    close,
  }
}

const Dropdown = ({ title, isActive, onMouseEnter, onMouseLeave, onClick, onDoubleClick, children }: DropdownProps) => {
  return (
    

    
    <div className="relative h-full flex items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        className="flex items-center gap-1 text-base font-medium text-gray-800 hover:text-black transition-colors h-full px-1"
        aria-expanded={isActive}
        aria-haspopup="true"
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ease-in-out ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg z-10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const DropdownLink = ({ href, onClick, children, ...props }: DropdownLinkProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link
      href={href}
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Secure the link
      className="block px-4 py-2.5 text-base text-gray-700 hover:bg-gray-50 transition-all duration-300 rounded-md"
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  </motion.div>
)

const CompactProductCard = ({ href, image, name, onClick }: CompactProductCardProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="group">
    <div className="bg-white/80 rounded-lg overflow-hidden transition-all p-2 w-[150px] h-[150px] flex flex-col items-center justify-center">
      <div className="relative aspect-square w-20 h-20 overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={80}
          height={80}
          quality={100}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-2 mt-1">
        <h3 className="text-sm font-medium text-gray-900 text-center line-clamp-2" style={{ fontSize: "1rem" }}>
          {name}
        </h3>
      </div>
    </div>
  </Link>
)

const MobileNavItem = ({ href, onClick, children, className }: MobileNavItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.05,
    }}
    whileHover={{
      scale: 1.02,
      backgroundColor: "rgba(243, 244, 246, 0.5)",
    }}
    whileTap={{ scale: 0.98 }}
    className="px-2"
  >
    <Link
      href={href}
      onClick={onClick}
      className={`block py-3.5 px-4 text-xl font-medium text-gray-800 hover:text-black hover:bg-gray-50 rounded-lg transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  </motion.div>
)

const MobileProductCard = ({ href, image, name, onClick }: MobileProductCardProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href={href} onClick={onClick} className="block">
      <div className="bg-white/80 rounded-lg overflow-hidden shadow-sm w-[140px] h-[140px] flex flex-col items-center justify-center">
        <div className="relative aspect-square w-16 h-16 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="p-2">
          <h3 className="text-sm font-medium text-gray-900 text-center truncate px-1" style={{ fontSize: "0.99rem" }}>
            {name}
          </h3>
        </div>
      </div>
    </Link>
  </motion.div>
)

const MobileMenu = ({ isOpen, headerHeight, onClose }: MobileMenuProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const dropdownVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  }

  const closeAll = () => {
    onClose()
    setOpenCategory(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
          }}
          className="fixed inset-x-0 bg-white/95 backdrop-blur-md z-40 overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6">
            <motion.div className="flex flex-col space-y-2">
              <MobileNavItem href="/" onClick={onClose}>
                Home
              </MobileNavItem>

              <motion.div className="flex flex-col">
                <motion.button
                  onClick={() => {
                    if (openCategory === "products") {
                      setOpenCategory(null)
                    } else {
                      setOpenCategory("products")
                    }
                  }}
                  className="flex items-center justify-between py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                >
                  <span>Products</span>
                  <motion.span
                    animate={{ rotate: openCategory === "products" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openCategory === "products" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-3"
                    >
                      
                      <motion.div
                        className="grid grid-cols-2 gap-3 py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.05 }}
                      >
                        {products.map((product, index) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <MobileProductCard
                              href={product.href}
                              image={product.image}
                              name={product.name}
                              onClick={onClose}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="flex flex-col">
                <motion.button
                  onClick={() => setOpenCategory(openCategory === "internships" ? null : "internships")}
                  className="flex items-center justify-between py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                >
                  <span>Internships</span>
                  <motion.span
                    animate={{ rotate: openCategory === "internships" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openCategory === "internships" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="pl-4"
                    >
                      <div className="py-2 space-y-2">
                        <MobileNavItem href="/internship" onClick={onClose}>
                          IT Internships
                        </MobileNavItem>
                        <MobileNavItem href="/mbaintern" onClick={onClose}>
                          MBA Internships
                        </MobileNavItem>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="flex flex-col">
                <motion.button
                  onClick={() => setOpenCategory(openCategory === "solutions" ? null : "solutions")}
                  className="flex items-center justify-between py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                >
                  <span>Solutions</span>
                  <motion.span
                    animate={{ rotate: openCategory === "solutions" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openCategory === "solutions" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="pl-4"
                    >
                      <div className="py-2 space-y-2">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MobileNavItem
                            href="/webdev"
                            onClick={onClose}
                            className="text-blue-600 font-bold"
                          >
                            Web Development
                          </MobileNavItem>
                        </motion.div>

                        <MobileNavItem href="/undermaintain" onClick={onClose}>
                          Social Media Marketing
                        </MobileNavItem>
                        <MobileNavItem href="/undermaintain" onClick={onClose}>
                          Branding &amp; Consultation
                        </MobileNavItem>
                        <MobileNavItem href="/seo" onClick={onClose}>
                          SEO Services
                        </MobileNavItem>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300 }}                    
                        >
                          <a
                            href="https://b-sevai-service.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeAll}
                            className="flex items-center justify-between py-3 px-6 text-xl font-medium text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-700 ease-in-out"
                          >
                            BServices
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <Link href="/contact" passHref>
                <motion.button
                  onClick={onClose}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium mt-4"
                >
                  Contact
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const headerRef = useRef<HTMLHeadElement>(null)
  const { isOpen: isMenuOpen, headerHeight, toggle: toggleMenu, close: closeMenu } = useMobileMenu()

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight
      document.body.style.paddingTop = `${height}px`
    }

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.paddingTop = "0"
    }
  }, [scrolled])

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 300)
  }

  const closeAll = () => {
    closeMenu()
    setActiveDropdown(null)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-[11000] bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={closeAll}>
            <Image
              src={logo || "/placeholder.svg"}
              alt="TechV Logo"
              width={170}
              height={60}
              priority
              className="object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 h-full">
            <Link
              href="/"
              className="text-base font-medium text-gray-800 hover:text-black transition-colors h-full flex items-center px-1"
            >
              Home
            </Link>

            <Dropdown
              title="Products"
              isActive={activeDropdown === "products"}
              onMouseEnter={() => handleDropdownEnter("products")}
              onMouseLeave={handleDropdownLeave}
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              onDoubleClick={() => {
                window.location.href = "/projects"
                closeAll()
              }}
            >
              <div className="grid grid-cols-2 gap-4 p-2 w-[320px]">
                {products.map((product) => (
                  <CompactProductCard
                    key={product.id}
                    href={product.href}
                    image={product.image}
                    name={product.name}
                    onClick={closeAll}
                  />
                ))}
              </div>
            </Dropdown>

            <Dropdown
              title="Internships"
              isActive={activeDropdown === "internships"}
              onMouseEnter={() => handleDropdownEnter("internships")}
              onMouseLeave={handleDropdownLeave}
              onClick={() => setActiveDropdown(activeDropdown === "internships" ? null : "internships")}
            >
              <div className="py-1 w-[220px]">
                <Link 
                  href="/internship" 
                  onClick={closeAll}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  IT Internships
                </Link>
                <Link 
                  href="/mbaintern" 
                  onClick={closeAll}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  MBA Internships
                </Link>
              </div>
            </Dropdown>

            <Dropdown
              title="Solutions"
              isActive={activeDropdown === "services"}
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            >
              <div className="py-1 w-[220px]">
                <Link href="/webdev" onClick={closeAll} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                  Web Development
                </Link>
                <Link href="/undermaintain" onClick={closeAll} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                  Social Media Marketing
                </Link>
                <Link href="/undermaintain" onClick={closeAll} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                  Branding & Consultation
                </Link>
                <Link href="/seo" onClick={closeAll} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                  SEO Services
                </Link>
                <a
                  href="https://b-sevai-service.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAll}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >          
                  BServices
                </a>
              </div>
            </Dropdown>

            <Link href="/contact" passHref>
              <button
                onClick={closeAll}
                className="bg-black text-white rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200 h-10 px-4 py-2"
              >
                Contact
              </button>
            </Link>
          </nav>

          <button
            className="md:hidden p-5 rounded-md hover:bg-gray-100/60 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} headerHeight={headerHeight} onClose={closeAll} />
    </header>
  )
}