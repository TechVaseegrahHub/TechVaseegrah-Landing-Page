// "use client"

// import { useRef } from "react"
// import FeatureCard from "@/components/FeaturesCard"
// import { motion, useInView } from "framer-motion"

// interface CategoryCard {
//   id: string
//   title: string
//   description?: string
//   logoUrl?: string
//   borderColor: string
//   logoBackground: string
// }

// const categoryCards: CategoryCard[] = [
//   {
//     id: "android",
//     title: "Billzzy",
//     borderColor: "border-indigo-500",
//     logoBackground: "bg-white",
//     logoUrl: "/billzzy-logo.png",
//   },

//   {
//     id: "ai",
//     title: "F3 Engine",
//     borderColor: "border-blue-500",
//     logoBackground: "bg-white",
//     logoUrl: "/f3-icon.png",
//   },

//   {
//     id: "web",
//     title: "GoWhats",
//     borderColor: "border-green-500",
//     logoBackground: "bg-white",
//     logoUrl: "/gowhatswordmark.png",
//   },

//   {
//     id: "cloud",
//     title: "Insta X Bot",
//     borderColor: "border-purple-500",
//     logoBackground: "bg-white",
//     logoUrl: "/insta-x-bot.png",
//   },
// ]

// export default function Products() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

//   return (
//     <section
//       className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
//       ref={sectionRef}
//     >
//       <div className="relative container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="section-heading text-center"> {/* Added text-center for better alignment */}
//           <div className="flex justify-center">
//             <div className="tag">OUR PRODUCTS</div>
//           </div>
//           {/* --- RESPONSIVE TEXT CHANGES --- */}
//           <h2 className="section-title mt-5 text-3xl sm:text-4xl lg:text-5xl">Our Major Products for <span className="text-green-700">E‑commerce Industry</span>.</h2>
//           <p className="section-description mt-5 mb-12 lg:mb-16 text-base sm:text-lg">
//             From intuitive design to powerful features, our app has become an
//             essential tool for users around the world.
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
//         >
//           {categoryCards.map((card, index) => (
//             <motion.div
//               key={card.id}
//               className="h-full"
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.25, 0.46, 0.45, 0.94],
//                 delay: 0.6 + index * 0.1,
//               }}
//               whileHover={{
//                 y: -8,
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//             >
//               <FeatureCard
//                 title={card.title}
//                 description={card.description || ""}
//                 borderColor={card.borderColor}
//                 logoBackground={card.logoBackground}
//                 className="h-full"
//               >
//                 {/* --- RESPONSIVE LOGO CHANGES --- */}
//                 <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
//                   {card.logoUrl ? (
//                     <img
//                       src={card.logoUrl || "/placeholder.svg"}
//                       alt={`${card.title} icon`}
//                       className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
//                     />
//                   ) : (
//                     // Placeholder for user's logo
//                     <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
//                       Logo
//                     </div>
//                   )}
//                 </div>
//               </FeatureCard>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useRef } from "react"
import FeatureCard from "@/components/FeaturesCard"
import { motion, useInView } from "framer-motion"

interface CategoryCard {
  id: string
  title: string
  description?: string
  logoUrl?: string
  borderColor: string
  logoBackground: string
}

const categoryCards: CategoryCard[] = [
  {
    id: "android",
    title: "Billzzy",
    borderColor: "border-indigo-500",
    logoBackground: "bg-white",
    logoUrl: "/billzzy-logo.png",
  },
  {
    id: "ai",
    title: "F3 Engine",
    borderColor: "border-blue-500",
    logoBackground: "bg-white",
    logoUrl: "/f3-icon.png",
  },
  {
    id: "web",
    title: "GoWhats",
    borderColor: "border-green-500",
    logoBackground: "bg-white",
    logoUrl: "/gowhatswordmark.png",
  },
  {
    id: "cloud",
    title: "Insta X Bot",
    borderColor: "border-purple-500",
    logoBackground: "bg-white",
    logoUrl: "/insta-x-bot.png",
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative container max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <div className="tag text-xs sm:text-sm">OUR PRODUCTS</div>
          </div>

          {/* Responsive title */}
          <h2 className="section-title mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our Major Products for{" "}
            <span className="text-green-700">E-commerce Industry</span>.
          </h2>

          {/* Responsive description */}
          <p className="section-description mt-4 mb-10 sm:mb-14 lg:mb-16 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {categoryCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="h-full"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6 + index * 0.1,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <FeatureCard
                title={card.title}
                description={card.description || ""}
                borderColor={card.borderColor}
                logoBackground={card.logoBackground}
                className="h-full"
              >
                {/* Logo with mobile scaling */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mx-auto">
                  {card.logoUrl ? (
                    <img
                      src={card.logoUrl}
                      alt={`${card.title} icon`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
                      Logo
                    </div>
                  )}
                </div>
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

