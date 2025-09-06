// src\sections\HeroSection.tsx --landing page code 
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 relative">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
        <h1 className=" text-3xl 
        md:text-[54px] md:leading-[60px] 
        font-bold tracking-tighter">
          We take care of your business compliances, so you can focus on realizing your dream.
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
          Our all-in-one business solution streamlines registration, legal compliance, and financial management for your
          business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-green-700 hover:bg-green-700 text-white min-w-[180px]" asChild>
            <a href="#services">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-700 text-green-700 hover:bg-green-50 min-w-[180px]"
            asChild
          >
            <a href="https://wa.me/919047484484" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
