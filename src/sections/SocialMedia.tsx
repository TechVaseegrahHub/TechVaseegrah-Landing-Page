import Image from "next/image"
import Link from "next/link"

export default function SocialMedia() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We're changing the way people connect
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="#"
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              >
                Get started
              </Link>
              <Link href="#" className="flex items-center text-gray-700 font-medium hover:text-gray-900">
                Live demo →
              </Link>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Top right image */}
            <div className="absolute right-0 top-0 w-[180px] h-[240px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=240&width=180"
                  alt="Person smiling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 180px"
                />
              </div>
            </div>

            {/* Middle right image - woman with laptop */}
            <div className="absolute right-[200px] top-[160px] w-[220px] h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=220"
                  alt="Woman with laptop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>
            </div>

            {/* Bottom left image - meeting with whiteboard */}
            <div className="absolute left-[100px] top-[300px] w-[220px] h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=220"
                  alt="Team meeting with whiteboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>
            </div>

            {/* Bottom right image - office space */}
            <div className="absolute right-[100px] bottom-0 w-[180px] h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=180"
                  alt="Office space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 180px"
                />
              </div>
            </div>

            {/* Bottom far right image - person with plant */}
            <div className="absolute right-0 bottom-[100px] w-[180px] h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=180"
                  alt="Person with plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 180px"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image Grid (simplified version for small screens) */}
          <div className="lg:hidden grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Woman with laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Person smiling"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Team meeting with whiteboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Office space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

