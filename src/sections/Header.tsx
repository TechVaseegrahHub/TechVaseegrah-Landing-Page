"use client";

import Logo from "@/assets/tech-v-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
    
    {/*<div className="flex justify-center 
                       items-center py-3 
                       bg-black text-white 
                       text-sm gap-3">
      <p className="text-white/60 hidden md:block">
      Transforming small businesses into SMART BIZ </p>
    </div>*/}
    
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
        <Image src= {Logo} alt="Tech V Logo" height={40} />
        <MenuIcon className ="h-5 w-5 md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/internship" className="text-gray-700 hover:text-gray-900">Internship</Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
              <Link href="/contactUs" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
           
             
       {/* <button className="bg-black text-white 
                    px-4 py-2 rounded-lg 
                    font-medium inline-flex 
                    align-items justify-center 
                    tracking-tight">
          Contact Us
          </button> */}
      </nav>
        </div>
      </div>
    </div>
    </header>
  );
}