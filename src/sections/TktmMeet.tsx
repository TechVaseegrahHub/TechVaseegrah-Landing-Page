// "use client"

// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay } from "swiper/modules"
// import "swiper/css"

// // ✅ Only import your existing images
// import meet1 from "@/assets/meet1.png"
// import meet2 from "@/assets/meet2.png"
// import meet3 from "@/assets/meet3.png"
// import meet4 from "@/assets/meet4.png"
// import meet5 from "@/assets/meet5.png"
// import meet6 from "@/assets/meet6.png"

// const images = [meet1, meet2, meet3, meet4, meet5, meet6]

// export default function TktmMeet() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//       <div className="text-center mb-10 sm:mb-14">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           <span className="text-green-600">நிகழ்வுகள்</span> (Events & Moments)
//         </h2>
//         <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//           Some special moments captured with our team and community.
//         </p>
//       </div>

//       {/* Smooth Auto Scrolling Carousel */}
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         loop={true}
//         freeMode={true}
//         speed={4000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full !overflow-hidden"
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i} className="flex justify-center items-center">
//             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-full h-[350px]">
//               <Image
//                 src={src}
//                 alt={`Photo ${i + 1}`}
//                 className="w-full h-full object-cover"
//                 placeholder="blur"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }


// "use client"

// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay } from "swiper/modules"
// import "swiper/css"

// // ✅ Import only your real images
// import meet1 from "@/assets/meet1.png"
// import meet2 from "@/assets/meet2.png"
// import meet3 from "@/assets/meet3.png"
// import meet4 from "@/assets/meet4.png"
// import meet5 from "@/assets/meet5.png"
// import meet6 from "@/assets/meet6.png"

// const images = [meet1, meet2, meet3, meet4, meet5, meet6]

// export default function TktmMeet() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//       <div className="text-center mb-10 sm:mb-14">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           <span className="text-green-600">நிகழ்வுகள்</span> (Events & Moments)
//         </h2>
//         <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//           Some special moments captured with our team and community.
//         </p>
//       </div>

//       {/* Slow & Continuous Auto Scrolling Carousel */}
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         loop={true}
//         freeMode={true}
//         speed={10000} // 👈 slower = higher number (10s per loop)
//         autoplay={{
//           delay: 0, // 👈 no delay, continuous
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full !overflow-hidden"
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i} className="flex justify-center items-center">
//             <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-full h-[350px]">
//               <Image
//                 src={src}
//                 alt={`Photo ${i + 1}`}
//                 className="w-full h-full object-cover"
//                 placeholder="blur"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }


// "use client"

// import Image from "next/image"

// // ✅ Import your images
// import meet1 from "@/assets/meet1.png"
// import meet2 from "@/assets/meet2.png"
// import meet3 from "@/assets/meet3.png"
// import meet4 from "@/assets/meet4.png"
// import meet5 from "@/assets/meet5.png"
// import meet6 from "@/assets/meet6.png"
// import meet7 from "@/assets/meet7.png"

// const images = [meet1, meet2, meet3, meet4, meet5, meet6,meet7]

// export default function TktmMeet() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//       <div className="text-center mb-10 sm:mb-14">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           <span className="text-green-600">நிகழ்வுகள்</span> (Events & Moments)
//         </h2>
//         <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//           Some special moments captured with our team and community.
//         </p>
//       </div>

//       {/* Continuous Scrolling Container */}
//       <div className="overflow-hidden relative">
//         <div className="flex animate-scroll gap-6">
//           {/* duplicate images twice so it loops seamlessly */}
//           {[...images, ...images].map((src, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-md"
//             >
//               <Image
//                 src={src}
//                 alt={`Photo ${i + 1}`}
//                 className="w-full h-full object-cover"
//                 placeholder="blur"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"

// ✅ Import your images
import meet1 from "@/assets/meet1.png"
import meet2 from "@/assets/meet2.png"
import meet3 from "@/assets/meet3.png"
import meet4 from "@/assets/meet4.png"
import meet5 from "@/assets/meet5.png"
import meet6 from "@/assets/meet6.png"
import meet7 from "@/assets/meet7.png"

const images = [meet1, meet2, meet3, meet4, meet5, meet6, meet7]

export default function TktmMeet() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-green-600">நிகழ்வுகள்</span> (Events & Moments)
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Some special moments captured with our team and community.
        </p>
      </div>

      {/* Continuous Scrolling Container */}
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll gap-6">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
