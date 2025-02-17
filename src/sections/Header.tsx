"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/tech-v-logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.clientHeight;
        setShowNav(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={heroRef} id="hero-section"></div>

      {/* Sticky Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${showNav ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
              <Image src={Logo || "/placeholder.svg"} alt="Tech V Logo" height={60} width={160} priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-gray-800">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/internship">Internship</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/service">Service</NavLink>

              {/* ✅ Fixed Contact Us Button */}
              <Link
                href="/contact"
                className="relative overflow-hidden bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight group transition-all duration-300 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-300">
                  Contact Us
                </span>
                <span className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-50 p-2 transition-all duration-300 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.div initial={false} animate={isMenuOpen ? "open" : "closed"} variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }} transition={{ duration: 0.2 }}>
                {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 h-screen w-full z-40 bg-black/90 backdrop-blur-xl">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 text-white">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/internship" onClick={() => setIsMenuOpen(false)}>Internship</MobileNavLink>
              <MobileNavLink href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="/service" onClick={() => setIsMenuOpen(false)}>Service</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</MobileNavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Desktop Navigation Link */
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="relative group text-gray-800 hover:text-black transition">
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

/* Mobile Navigation Link */
const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link href={href} className="text-white text-xl font-medium transition hover:text-gray-300" onClick={onClick}>
      {children}
    </Link>
  </motion.div>
);
