"use client"

import { useEffect, useState, useRef } from "react"
import { twMerge } from "tailwind-merge"
import Tag from "@/components/Tag"

const cardData = [
  {
    image: "/assets/images/seo-1.png",
    title: "Keyword Research & Strategy",
    description:
      "Find high-ranking, profitable keywords that drive targeted traffic to your website and improve your search engine rankings.",
    color: "fuchsia",
  },

  {
    image: "/assets/images/seo-2.png",
    title: "On-Page SEO",
    description:
      "Optimize content, meta tags, URLs, and internal links for better search visibility and improved user experience.",
    color: "lime",
  },

  {
    image: "/assets/images/seo-3.png",
    title: "Off-Page SEO",
    description:
      "Build high-quality backlinks and strengthen domain authority through strategic outreach and relationship building.",
    color: "cyan",
  },

  {
    image: "/assets/images/seo-4.png",
    title: "Technical SEO",
    description:
      "Improve website speed, mobile-friendliness, and indexing to enhance user experience and search engine crawlability.",
    color: "violet",
  },

  {
    image: "/assets/images/seo-tools.png",
    title: "SEO content creation",
    description:
      "SEO content creation focuses on crafting high-quality, keyword-optimized content that improves search rankings, engages audiences, and drives organic traffic.",
    color: "cyan",
  },

  {
    image: "/assets/images/seo-6.png",
    title: "Competitor analysis",
    description:
      "Competitor analysis involves studying competitors' strategies, including SEO, content, and marketing tactics, to identify strengths, weaknesses, and opportunities for improvement",
    color: "violet",
  },
]

export default function SeoSroll() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (isHovered) return
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) => (curr === cardData.length - 1 ? 0 : curr + 1))
    }, 5000) // Slide every 5 seconds
    return () => {
      clearTimeout(timeout)
    }
  }, [selectedCardIndex, isHovered])

  return (
    <section ref={sectionRef} className="py-20 overflow-x-clip">
      <div className="container">
        <div className="section-heading md:text-5xl lg:text-6xl text-center">
          <div className="flex justify-center">
            <Tag>Services</Tag>
          </div>
          <h2 className="section-title mt-5">Boost Your Online Visibility with SEO</h2>
          <p className="section-description mt-5">
            Our comprehensive SEO services help businesses improve their search rankings, drive targeted traffic, and
            achieve sustainable growth through data-driven strategies.
          </p>
          <div className="mt-36 lg:mt-48 flex">
            <div className="flex flex-none gap-8">
              {cardData.map(({ image, title, description, color }, cardIndex) => (
                <div
                  key={title}
                  className="relative z-0 p-8 md:p-10 max-w-xs md:max-md group"
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
                      color === "cyan" && "bg-cyan-500",
                      color === "violet" && "bg-violet-500",
                    )}
                  ></div>
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                      color === "violet" && "bg-violet-500 group-hover:bg-violet-400",
                    )}
                  ></div>
                  <div className="absolute inset-0 bg-white -z-10 rounded-2xl border border-white-700"></div>
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-[90%] left-[5%] top-[100%] bg-zinc-95/70 group-hover:bg-zinc-300/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={image || "/placeholder.svg?height=150&width=150"}
                        alt={`${title} illustration`}
                        className="size-50 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="section-title text-3xl mt-12">{title}</h3>
                  <p className="section-description mt-5">{description}</p>
                  {/* <div className="flex justify-between mt-12">
                    <button className="btn-primary btn text-[15px]">Learn More</button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="inline-flex gap-3 p-3">
              {cardData.map(({ title, color }, cardIndex) => {
                const isActive = cardIndex === selectedCardIndex
                const colorClass = isActive
                  ? color === "fuchsia"
                    ? "bg-fuchsia-500"
                    : color === "lime"
                      ? "bg-lime-500"
                      : color === "cyan"
                        ? "bg-cyan-500"
                        : "bg-violet-500"
                  : "bg-zinc-200 hover:bg-zinc-300"

                return (
                  <button
                    key={title}
                    className={twMerge(
                      "relative h-1.5 w-8 rounded-full transition-all duration-300 ease-in-out",
                      isActive ? "w-12" : "",
                      colorClass,
                    )}
                    onClick={() => setSelectedCardIndex(cardIndex)}
                    aria-label={`View ${title}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
