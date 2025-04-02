"use client"

export default function WebStacks() {
  const technologies = [
    { name: "HTML5", icon: "/html.png", category: "frontend" },
    { name: "CSS3", icon: "/css3.png", category: "frontend" },
    { name: "JavaScript", icon: "/j-s.png", category: "frontend" },
    { name: "TypeScript", icon: "/ts.png", category: "frontend" },
    { name: "React JS", icon: "/react-js.png", category: "frontend" },
    { name: "Express JS", icon: "/express.png", category: "backend" },
    { name: "Node JS", icon: "/node.png", category: "backend" },
    { name: "Mango DB", icon: "/mangodb.png", category: "backend" },
    { name: "PHP", icon: "/php.png", category: "backend" },
    { name: "WooCommerce", icon: "/woo.png", category: "ecommerce" },
    { name: "WordPress", icon: "/wp.png", category: "cms" },
    { name: "Shopify", icon: "/shopify.png", category: "ecommerce" },
    { name: "Figma", icon: "/figm.png", category: "design" },
    { name: "Framer", icon: "/framer.png", category: "design" },
    { name: "Elementor", icon: "/Elementar.png", category: "cms" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Clean, minimal header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tighter 
         bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text">
            Digital eCommerce Technology Stack
          </h2>
          <p className="text-[#010D3E] max-w-2xl mx-auto text-lg">
            As the best eCommerce digital marketing agency, we leverage cutting-edge technologies for all the
            applications we develop.
          </p>
        </div>

        {/* Simple, elegant technology grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-6 gap-y-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center">
              <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={tech.icon || "/placeholder.svg?height=64&width=64"}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-center text-sm font-medium text-slate-800">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

