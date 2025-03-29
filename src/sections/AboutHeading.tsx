import Image from "next/image"

export default function AboutHeading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter 
         bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text">
            We&apos;re a passionate group of people building the future of technology
          </h2>
          <p className=" text-[#010D3E]">
            Our team of dedicated engineers, designers, and innovators is committed to creating cutting-edge solutions
            that transform how businesses operate. We combine technical expertise with creative thinking to develop
            products that make a real difference.
          </p>
          <p className="text-[#010D3E]">
            Founded with a vision to revolutionize the tech landscape, we continue to push boundaries and explore new
            possibilities. Our collaborative approach and customer-centric focus drive everything we do.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/intern-1.jpeg"
            alt="Our team members"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

