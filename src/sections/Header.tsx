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
import product3 from "../assets/billzzy-logo.png"
import product4 from "../assets/gowhatswordmark.png"

interface Product {
  id: number
  name: string
  image: StaticImageData
  href: string
}

const products: Product[] = [
  { id: 3, name: "Billzzy", image: product3, href: "https://billzzy.com" },
  { id: 2, name: "F3 Engine", image: product2, href: "https://f3engine.com" },
  { id: 4, name: "GoWhats", image: product4, href: "https://gowhatslandingpage.netlify.app/" },
  { id: 1, name: "InstaX Bot", image: product1, href: "https://instaxbot-beta.vercel.app/" },
  
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
  href: string
  children: React.ReactNode
  onClick?: () => void
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

interface CompactProductCardProps {
  href: string
  image: StaticImageData
  name: string
  onClick: () => void
}

interface MobileNavItemProps {
  href: string
  onClick: () => void
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
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
    if (isOpen) {
      // Save current scroll position and lock the body
      const scrollY = window.scrollY
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
      document.documentElement.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${scrollY}px`
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
      document.documentElement.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
      document.documentElement.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
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
      target="_blank"
      rel="noopener noreferrer"
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
      <div className="relative aspect-square w-20 h-20 overflow-hidden rounded-md flex items-center justify-center">
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
        <h3 className="text-sm font-medium text-gray-900 text-center line-clamp-2">{name}</h3>
      </div>
    </div>
  </Link>
)

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, onClick, children, className, target, rel }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "none",
      stiffness: 300,
      damping: 20,
      delay: 0.05,
    }}
    
  >
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`block py-4 px-5 text-2xl font-medium text-gray-800 rounded-lg transition-colors duration-200 ${className || ""}`}
    >
      {children}
    </Link>
  </motion.div>
)


const MobileProductCard = ({ href, image, name, onClick }: MobileProductCardProps) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    <Link href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="block w-full">
      <div className="w-full h-[160px] flex flex-col items-center justify-center p-3 mx-auto">
        <div className="relative w-full h-24 mb-3 flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={96}
            height={96}
            quality={100}
            className="object-contain max-w-36 max-h-20"
            priority
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-xl font-medium text-black px-1 line-clamp-2">{name}</h3>
        </div>
      </div>
    </Link>
  </motion.div>
)
const MobileMenu = ({ isOpen, headerHeight, onClose }: MobileMenuProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

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
          ref={menuRef}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
            width: "100%", 
            right: 0,
            overflowX: "hidden",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            position: "fixed",
            zIndex: 40,
          }}
          className="overflow-y-auto overscroll-none bg-gradient-to-b from-[#FFFFFF] to-[#ffffff] py-4 overflow-x-clip"
        >
          
            
            <motion.div className="flex flex-col space-y-3 mt-4">
              <MobileNavItem href="/" onClick={onClose} className="text-xl  font-medium">
                Home
              </MobileNavItem>


  
              {/* Products Section */}
              <motion.div className="flex flex-col">
                <motion.button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent any default navigation
                    setOpenCategory(openCategory === "products" ? null : "products");
                  }}
                  // onDoubleClick={() => {
                  //   window.location.href = "/projects"
                  //   closeAll()
                  // }}
                  className={`flex items-center justify-between py-3 px-5 text-xl font-medium rounded-lg ${
                    openCategory === "products" ? "" : "text-gray-800 "
                  }`}
                >
                  <span>Products</span>
                  <motion.span
                    animate={{ rotate: openCategory === "products" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-7 w-7" />
                  </motion.span>
                </motion.button>
                
                <AnimatePresence>
                  {openCategory === "products" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-5 pr-5"
                    >
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 w-full bg-black-900 rounded-lg"
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
                            className="flex justify-center"
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
  
              {/* Solutions Section */}
              <motion.div className="flex flex-col mb-20">
                <motion.button
                  onClick={() => setOpenCategory(openCategory === "solutions" ? null : "solutions")}
                  className={`flex items-center justify-between py-3 px-5 text-xl font-medium rounded-lg ${
                    openCategory === "solutions" ? "" : "text-gray-800 "
                  }`}
                >
                  <span>Solutions</span>
                  <motion.span
                    animate={{ rotate: openCategory === "solutions" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-7 w-7" />
                  </motion.span>
                </motion.button>
                
                <AnimatePresence>
                  {openCategory === "solutions" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="pl-7"
                    >
                      <div className="py- space-y-1">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                         {/* Web Development */}
                        <MobileNavItem 
                          href="/webdev" 
                          onClick={onClose} 
                          className="text-black text-xl font-medium tracking-wide" // Changed from text-xl/semibold
                        >
                          Web Development
                        </MobileNavItem>

                        {/* Social Media Marketing */}
                        <MobileNavItem 
                          href="/social" 
                          onClick={onClose} 
                          className="text-black text-xl font-medium tracking-wide"
                        >
                          Social Media Marketing
                        </MobileNavItem>

                        {/* Branding & Consultation */}
                        <MobileNavItem
                          href="/undermaintain"
                          onClick={onClose}
                          className="text-black text-xl font-medium tracking-wide"
                        >
                          Branding & Consultation
                        </MobileNavItem>

                        {/* SEO Services */}
                        <MobileNavItem 
                          href="/seo" 
                          onClick={onClose} 
                          className="text-black text-xl font-medium tracking-wide"
                        >
                          SEO Services
                        </MobileNavItem>

                        {/* BServices */}
                        <MobileNavItem 
                          href="/bservice" 
                          onClick={onClose} 
                          className="text-black text-xl font-medium tracking-wide"
                        >
                          B-Services
                        </MobileNavItem>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

                            {/* Internships Section */}
                            <motion.div className="flex flex-col">
                <motion.button
                  onClick={() => setOpenCategory(openCategory === "internships" ? null : "internships")}
                  className={`flex items-center justify-between py-3 px-5 text-xl font-medium rounded-lg ${
                    openCategory === "internships" ? "" : "text-gray-800 "
                  }`}
                >
                  <span>Internships</span>
                  <motion.span
                    animate={{ rotate: openCategory === "internships" ? 180 : 0 }}
                    transition={{ type: "spring" }}
                  >
                    <ChevronDown className="h-7 w-7" />
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
                      <div className="py-2 space-y-1">
                        <MobileNavItem href="/internship" onClick={onClose}className="text-black text-xl font-medium tracking-wide"
                        >
                          IT Internships
                        </MobileNavItem>
                        <MobileNavItem href="/mbaintern" onClick={onClose}className="text-black text-xl font-medium tracking-wide"
                        >
                          MBA Internships
                        </MobileNavItem>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>


              <MobileNavItem href="/about" onClick={onClose} className="text-xl  font-medium">
                About 
              </MobileNavItem>

              {/* Contact Button - Moved to bottom without overlapping */}
              <motion.div 
                className="px-5 pt-8 pb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/contact" className="block w-full">
                  <motion.button
                    onClick={onClose}
                    className="w-full bg-[#1B9D4A] hover:bg-blue-700  text-white py-3 px-2 rounded-lg font-semibold text-xl shadow-md transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}
const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const { isOpen: isMenuOpen, headerHeight, toggle: toggleMenu, close: closeMenu } = useMobileMenu()

  // Modified to use dynamic header height without affecting page content
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
    <>
      <header
        ref={headerRef}
         className={`fixed top-0 w-full z-[11000] bg-gradient-to-b from-[#FFFFFF] to-[#fdfdfd] shadow-md flex items-center justify-between px-3 py-3 transition-all duration-300 border ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="z-50" onClick={closeAll}>
              <Image
                src={logo || "/placeholder.svg"}
                alt="TechV Logo"
                width={170}
                height={60}
                priority
                className="object-contain hover:opacity-90 transition-opacity w-auto h-auto max-h-[40px] sm:max-h-[50px]"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-7 h-full">
              <Link
                href="/"
                className="text-base font-medium text-gray-800 hover:text-black transition-colors h-full flex items-center px-1"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-base font-medium text-gray-800 hover:text-black transition-colors h-full flex items-center px-1"
              >
                About
              </Link>

              <Dropdown
                title="Products"
                isActive={activeDropdown === "products"}
                onMouseEnter={() => handleDropdownEnter("products")}
                onMouseLeave={handleDropdownLeave}
                onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                // onDoubleClick={() => {
                //   window.location.href = "/projects"
                //   closeAll()
                // }}
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
                title="Solutions"
                isActive={activeDropdown === "services"}
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              >
                <div className="py-1 w-[220px]">
                  <Link
                    href="/webdev"
                    onClick={closeAll}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/social"
                    onClick={closeAll}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Social Media Marketing
                  </Link>
                  <Link
                    href="/brand"
                    onClick={closeAll}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Branding & Consultation
                  </Link>
                  <Link
                    href="/seo"
                    onClick={closeAll}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    SEO Services
                  </Link>
                  <Link
                    href="/bservice"
                    onClick={closeAll}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    B-Services
                  </Link>
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

             <Link href="/contact" className="inline-block">
              <button
                onClick={closeAll}
                className="bg-[#1B9D4A] text-white rounded-lg font-medium tracking-tight hover:bg-blue-700  transition-all duration-200 h-10 px-6 py-3 w-30 flex items-center justify-center"
              >
                Contact
              </button>
            </Link>
            </nav>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100/60 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} headerHeight={headerHeight} onClose={closeAll} />
      </header>

      {/* Spacer div to properly handle spacing without overflow */}
      <div style={{ height: headerHeight }} className="w-full" aria-hidden="true" />
    </>
  )
}

export default Header