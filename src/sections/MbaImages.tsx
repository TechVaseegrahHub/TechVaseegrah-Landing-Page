import Image from "next/image"

export default function MbaImages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Top section with heading and main image */}
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="md:text-5xl text-4xl font-bold tracking-tight section-title text-left">Our Intern</h2>
            <div className="space-y-4">
              <p className="section-description text-left text-base">
              The MBA Business Program is designed for entrepreneurs, 
              usiness owners, and students who aspire to gain advanced 
              business knowledge, strategic leadership skills, and 
              hands-on experience in managing and scaling businesses
              </p>
              <p className="section-description text-left text-base">
              Unlike traditional MBA programs that focus primarily 
              on theory, this industry-driven program blends 
              academic excellence with real-world case studies, 
              business simulations, and hands-on projects. 
              Whether you&apos;re launching a startup, scaling an 
              existing business, or preparing for a leadership 
              role, this program will equip you with the tools, 
              frameworks, and strategies needed to succeed.
              </p>
            </div>
          </div>
          <div>
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-lg">
              <Image
                src="/public/Mba-intern.jpeg"
                alt="intern photo 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom image gallery with custom layout */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
          {/* Left small image (beach) */}
          <div className="absolute left-0 bottom-0 w-1/4 h-3/5 md:h-2/3">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/public/Mba-intern2.jpeg"
                alt="intern photo 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle large image (meeting) */}
          <div className="absolute left-[28%] top-0 w-[42%] h-full">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/public/Mba-intern3.jpeg"
                alt="intern photo 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right medium image (volleyball) */}
          <div className="absolute right-0 top-0 w-[26%] h-3/4">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/public/mba-intern4.jpeg"
                alt="intern photo 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

