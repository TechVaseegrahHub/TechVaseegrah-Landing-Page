// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// export default function WebStacks() {
//   // const technologies = [
//   //   { name: "HTML5", icon: "/html-5.png", category: "frontend" },
//   //   { name: "CSS3", icon: "/css-3.png", category: "frontend" },
//   //   { name: "JavaScript", icon: "/js.png", category: "frontend" },
//   //   { name: "TypeScript", icon: "/ts.png", category: "frontend" },
//   //   { name: "React", icon: "/react.png", category: "frontend" },
//   //   { name: "Express.js", icon: "/express.png", category: "backend" },
//   //   { name: "Node.js", icon: "/nodejs.png", category: "backend" },
//   //   { name: "MongoDB", icon: "/mongodb.png", category: "backend" },
//   //   { name: "PHP", icon: "/php.png", category: "backend" },
//   //   { name: "WooCommerce", icon: "/woo.png", category: "ecommerce" },
//   //   { name: "WordPress", icon: "/wordpress.png", category: "cms" },
//   //   { name: "Shopify", icon: "/shopify.png", category: "ecommerce" },
//   //   { name: "Figma", icon: "/figm.png", category: "design" },
//   //   { name: "Framer", icon: "/framer.png", category: "design" },
//   //   { name: "Elementor", icon: "/elementor.png", category: "cms" },
//   // ]

//   const technologies = [
//   { name: "HTML5", icon: "/html-5.png", category: "frontend" },
//   { name: "CSS3", icon: "/css-3.png", category: "frontend" },
//   { name: "JavaScript", icon: "/js.png", category: "frontend" },
//   { name: "TypeScript", icon: "/ts.png", category: "frontend" },
//   { name: "React", icon: "/react.png", category: "frontend" },
//   { name: "Express.js", icon: "/express.png", category: "backend" },
//   { name: "Node.js", icon: "/nodejs.png", category: "backend" },
//   { name: "MongoDB", icon: "/mongodb.png", category: "backend" },
//   { name: "PHP", icon: "/php.png", category: "backend" },
//   { name: "WooCommerce", icon: "/woo.png", category: "ecommerce" },
//   { name: "WordPress", icon: "/wordpress.png", category: "cms" },
//   { name: "Shopify", icon: "/shopify.png", category: "cms" }, // ✅ moved from ecommerce
//   // ❌ Removed Figma & Framer
// ]


//   const allCategories = [
//     { id: "cms", name: "CMS" },
//     { id: "frontend", name: "Frontend" },
//     { id: "backend", name: "Backend" },
//     // { id: "ecommerce", name: "E-Commerce" },
//     // { id: "design", name: "Design" },  
//   ]

//   const [activeCategory, setActiveCategory] = useState("frontend")

//   const filteredTechnologies = technologies.filter((tech) => tech.category === activeCategory)

//   return (
//     <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-black">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading with editorial style */}
//         <div className="mb-10 md:mb-16">
//           <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-start md:items-center">
//             <div>
//               <motion.h2
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl 
//                           font-bold tracking-tighter text-green-700 bg-clip-text">
                          
//                           Technology Stack
//               </motion.h2>
//             </div>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="text-base font-body sm:text-lg md:text-xl font-normal max-w-xl"
//             >
//             We use advanced technologies to create robust, scalable applications that offer seamless digital experiences.
//             </motion.p>
//           </div>
//         </div>

//         {/* Mobile Category Tabs */}
//         <div className="md:hidden mb-8">
//           <h3 className="text-sm uppercase tracking-wider  font-medium mb-4">Categories</h3>
//           <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
//             {allCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`py-2 px-4 rounded-full whitespace-nowrap transition-all duration-200 text-sm shadow-sm ${
//                   activeCategory === category.id
//                     ? "bg-[#308d4c] text-white font-medium"
//                     : "bg-white text-[#4D4D4D] hover:bg-white/90"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6 md:gap-10">
//           {/* Desktop Categories - Hidden on mobile */}
//           <div className="hidden md:block md:col-span-3 lg:col-span-2">
//             <div className="md:sticky md:top-24 bg-white/90 p-5 rounded-lg shadow-sm">
//               <h3 className="text-sm uppercase tracking-wider text-black font-semibold mb-5">Categories</h3>
//               <div className="flex md:flex-col gap-3">
//                 {allCategories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveCategory(category.id)}
//                     className={`group flex items-center transition-all duration-200 py-2 px-3 rounded-md ${
//                       activeCategory === category.id
//                         ? "bg-[#308d4c] font-medium text-white"
//                         : "text-[#4D4D4D] hover:text-green-700 hover:bg-[#F5F7FF]"
//                     }`}
//                   >
//                     <span className="text-base">{category.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Technologies Grid */}
//           <div className="md:col-span-9 lg:col-span-10">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCategory}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
//               >
//                 {filteredTechnologies.map((tech, index) => (
//                   <TechItem key={`${tech.name}-${index}`} tech={tech} index={index} />
//                 ))}

//                 {/* Empty Message */}
//                 {filteredTechnologies.length === 0 && (
//                   <div className="col-span-full py-12 text-center text-[#4D4D4D] font-light bg-white/80 rounded-xl shadow-sm">
//                     No technologies found in this category.
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function TechItem({ tech, index }: { tech: any; index: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.03, duration: 0.3 }}
//       className="group flex flex-col items-center"
//     >
//       <div className="aspect-square w-full flex items-center justify-center p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 transition-all duration-200 rounded-md bg-white shadow-sm hover:shadow-md">
//         <div className="relative w-full h-full flex items-center justify-center">
//           <Image
//             src={tech.icon || "/placeholder.svg"}
//             alt={tech.name}
//             width={0}
//             height={0}
//             sizes="100vw"
//             style={{ 
//                 width: '70%',
//                 height: 'auto',
//                 objectFit: "contain" }}
//             className="transition-all duration-200 group-hover:scale-105"
//           />
//         </div>
//       </div>
//       <h3 className="text-xs sm:text-sm font-medium text-center text-[#333333] group-hover:text-green-700 transition-colors duration-200">
//         {tech.name}
//       </h3>
//     </motion.div>
//   )
// }



"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WebStacks() {
  const technologies = [
    { name: "HTML5", icon: "/html-5.png", category: "frontend" },
    { name: "CSS3", icon: "/css-3.png", category: "frontend" },
    { name: "JavaScript", icon: "/js.png", category: "frontend" },
    { name: "TypeScript", icon: "/ts.png", category: "frontend" },
    { name: "React", icon: "/react.png", category: "frontend" },
    { name: "Express.js", icon: "/express.png", category: "backend" },
    { name: "Node.js", icon: "/nodejs.png", category: "backend" },
    { name: "MongoDB", icon: "/mongodb.png", category: "backend" },
    { name: "PHP", icon: "/php.png", category: "backend" },
    { name: "WooCommerce", icon: "/woo.png", category: "ecommerce" },
    { name: "WordPress", icon: "/wordpress.png", category: "cms" },
    { name: "Shopify", icon: "/shopify.png", category: "cms" },
  ]

  const allCategories = [
    { id: "cms", name: "CMS" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ]

  const [activeCategory, setActiveCategory] = useState("frontend")
  const [selectedTech, setSelectedTech] = useState<any | null>(null)

  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeCategory
  )

  // ✅ Pros & Cons data for WordPress & Shopify
  const prosCons: Record<string, { pros: string[]; cons: string[] }> = {
    WordPress: {
      pros: [
        "Free plugin + open-source, highly customizable.",
        "Full control over hosting, database, and site design.",
        "Huge ecosystem of plugins & themes.",
        "Better for SEO (since it’s on WordPress).",
        "Scalable with proper hosting.",
        "No transaction fees (only payment gateway charges).",
      ],
      cons: [
        "Requires separate hosting & domain setup.",
        "Can get costly with premium plugins/themes.",
        "Needs technical knowledge for setup & maintenance.",
        "Security & performance depend on hosting.",
        "Manual handling of updates/backups.",
        "No direct YouTube Shopping integration – only indirect via Google Merchant Center.",
      ],
    },
    Shopify: {
      pros: [
        "All-in-one solution (hosting, SSL, updates included).",
        "Very easy to set up – beginner-friendly.",
        "24/7 support & large app store.",
        "Secure, fast, and reliable servers.",
        "Built-in sales channels (FB, IG, TikTok, Amazon).",
        "Smooth payment & checkout experience.",
        "Direct YouTube integration with Shopping.",
      ],
      cons: [
        "Monthly subscription fees (can get expensive).",
        "Transaction fees unless using Shopify Payments.",
        "Limited customization compared to WooCommerce.",
        "App/plugin costs add up quickly.",
        "Dependence on Google Ads & Merchant Center for YouTube product sync.",
      ],
    },
  }

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-start md:items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-green-700"
              >
                Technology Stack
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl font-normal max-w-xl"
            >
              We use advanced technologies to create robust, scalable applications that offer seamless digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Mobile Category Tabs */}
        <div className="md:hidden mb-8">
          <h3 className="text-sm uppercase tracking-wider font-medium mb-4">Categories</h3>
          <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-4 rounded-full whitespace-nowrap text-sm shadow-sm ${
                  activeCategory === category.id
                    ? "bg-[#308d4c] text-white font-medium"
                    : "bg-white text-[#4D4D4D] hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {/* Desktop Categories */}
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <div className="md:sticky md:top-24 bg-white/90 p-5 rounded-lg shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-black font-semibold mb-5">Categories</h3>
              <div className="flex md:flex-col gap-3">
                {allCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center py-2 px-3 rounded-md transition ${
                      activeCategory === category.id
                        ? "bg-[#308d4c] text-white font-medium"
                        : "text-[#4D4D4D] hover:text-green-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="md:col-span-9 lg:col-span-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
              >
                {filteredTechnologies.map((tech, index) => (
                  <TechItem
                    key={`${tech.name}-${index}`}
                    tech={tech}
                    index={index}
                    onClick={() => {
                      if (tech.name === "WordPress" || tech.name === "Shopify") {
                        setSelectedTech(tech.name)
                      }
                    }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ✅ Modal for Pros & Cons */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-green-700">{selectedTech} – Pros & Cons</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pros */}
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">✅ Pros</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {prosCons[selectedTech]?.pros.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">❌ Cons</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {prosCons[selectedTech]?.cons.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function TechItem({ tech, index, onClick }: { tech: any; index: number; onClick?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="group flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square w-full flex items-center justify-center p-4 rounded-md bg-white shadow-sm hover:shadow-md">
        <Image
          src={tech.icon || "/placeholder.svg"}
          alt={tech.name}
          width={80}
          height={80}
          className="transition-all duration-200 group-hover:scale-105 object-contain"
        />
      </div>
      <h3 className="text-xs sm:text-sm font-medium text-center text-[#333333] group-hover:text-green-700 transition-colors">
        {tech.name}
      </h3>
    </motion.div>
  )
}