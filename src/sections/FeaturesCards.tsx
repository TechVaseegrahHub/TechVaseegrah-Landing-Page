"use client"
import Tag from "@/components/Tag"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"

const cardData = [
  {
    image: "/assets/images/Code.png",
    title: "Web Development",
    description: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/Laptop.png",
    title: "Web App Developement",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/0014.png",
    title: "UI/UX Designer",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/Big-Data.png",
    title: "Data Science / Machine Learning",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
]

export const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) => (curr === cardData.length - 1 ? 0 : curr + 1))
    }, 5000) // Changed from 3000 to 5000 for a slower automatic slide
    return () => {
      clearTimeout(timeout)
    }
  }, [selectedCardIndex, isHovered])

  return (
    <section className="py-20">
      <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <Tag>Internships</Tag>
        </div>
        <h2 className="section-title mt-5">Start Your Career with Tech Vaseegrah!</h2>
        <p className="section-description mt-5">
        Interns gain practical skills by working 
        on real-world projects alongside experienced 
        professionals, enhancing their knowledge and 
        preparing them for future careers.
          </p>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }, cardIndex) => (
              <div
                key={title}
                className="relative z-0 p-8 md:p-10 max-w-[280px] md:max-w-[320px] group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <div
                  className={twMerge(
                    "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                    color === "lime" && "bg-lime-500",
                  )}
                ></div>
                <div className="absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10"></div>
                <div className="absolute inset-0 bg-white -z-10 rounded-2xl border border-white-700"></div>
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-[90%] left-[5%] top-[100%] bg-zinc-95/70 group-hover:bg-zinc-300/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Pill img"
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>
                <h3 className="section-title text-3xl md:text-4xl ">{title}</h3>
                <p className="section-description mt-5">{description}</p>
                <div className="flex justify-between mt-12">
                  <button className="btn-primary btn">Apply</button> 
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300",
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

