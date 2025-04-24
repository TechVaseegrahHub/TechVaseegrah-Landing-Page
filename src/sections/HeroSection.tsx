"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const HeroSection = () => (
  <section className="w-full py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-x-clip relative">
    <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent leading-snug sm:leading-tight">
  We take care of your business compliances, <br className="hidden sm:block" />
  so you can focus on realizing your dream.
</h1>


      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Our all-in-one business solution streamlines registration, legal compliance, and financial management for your
        business.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium shadow-sm min-w-[180px]"
          asChild
        >
          <a href="#servicessection" className="flex items-center justify-center">
            Explore Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-emerald-400 text-emerald-300 hover:text-emerald-200 hover:bg-slate-700 font-medium min-w-[180px]"
          asChild
        >
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </Button>
      </div>
    </div>
  </section>
)