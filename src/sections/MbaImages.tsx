import Image from "next/image"

export default function MbaImages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Top section with heading and main image */}
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="text-5xl font-bold tracking-tight section-title text-left">Our people</h2>
            <div className="space-y-4">
              <p className="section-description text-left text-base">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus
                ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="section-description text-left text-base">
                Anim quis id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
          </div>
          <div>
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/intern-1.jpeg"
                alt="Team members on a couch having a conversation"
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
                src="/assets/images/intern-2.jpeg"
                alt="Team at the beach"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle large image (meeting) */}
          <div className="absolute left-[28%] top-0 w-[42%] h-full">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/intern-3.jpeg"
                alt="Team meeting around a table"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right medium image (volleyball) */}
          <div className="absolute right-0 top-0 w-[26%] h-3/4">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/intern-4.jpeg"
                alt="Team playing volleyball at sunset"
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

