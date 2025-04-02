import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Web() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]  flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="text-4xl tracking-tighter 
         bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text font-bold md:text-5xl">Interactive demo app development for UBS</h1>

          <p className="text-[#010D3E] mt-6">
            Due to strict data security regulations, banks can&apos;t use real working apps to demonstrate all their features
            to potential clients. That's why UBS wanted to develop demo versions of its products. We pro- vided frontend
            and UI services to create demos for personal and business banking, and wealth management.
          </p>
{/* 
          <button className="flex items-center gap-2 mt-8 border-b border-white pb-1 hover:text-gray-300 transition-colors">
            <span>Read case study</span>
            <ArrowRight className="h-4 w-4" />
          </button> */}
        </div>

        {/* Right content - Laptop image */}
        <div className="relative">
          
                {/* Screen content - Banking dashboard */}
                <Image
                  src="/lap.png"
                  alt="Banking dashboard interface"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />

          {/* Reflection/shadow effect */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[80%] h-2 bg-gray-900 blur-md rounded-full"></div>
          </div>
        </div>
        </div>

  )
}

