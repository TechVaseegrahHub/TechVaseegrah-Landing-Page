"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image"

type TeamMember = {
  id: number
  name: string
  title: string
  image: string
  bio: string
  socialLinks?: {
    type: string
    url: string
  }[]
}

type TeamSection = {
  title: string
  members: TeamMember[]
}

export default function AboutTeam() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  const teamSections: TeamSection[] = [
    // {
    //   title: "Chief Sales Executive",
    //   members: [
    //     {
    //       id: 1,
    //       name: "Mr. Sharan Sivakumar",
    //       title: "Co-founder & Chief Sales Executive", 
    //       image: "/sharan-sivakumar.png",
    //       bio: "",
    //     },
    //   ],
    // },
    {
      title: "Software Development Team",
      members: [
        {
          id: 2,
          name: "Sujitha Kumaran",
          title: "Meta Developer",
          image: "/sujitha3.jpg",
          bio: "",
        },
        {
          id: 3,
          name: "Peararulselvi",
          title: "Software Developer",
          image: "/peruarul.png",
          bio: "",
        },
        {
          id: 4,
          name: "Hari Prasanth",
          title: "Software Developer",
          image: "/hariprasath.jpg",
          bio: "",
        },
      ],
    },
    {
      title: "Website Development Team",
      members: [
        {
          id: 5,
          name: "Balaji Selvaraj",
          title: "Website Developer",
          image: "/balaji1.jpg",
          bio: "",
        },
        {
          id: 6,
          name: "Priyadharshini",
          title: "Website Developer",
          image: "/priya.png",
          bio: "",
        },
        {
          id: 7,
          name: "Hari Sanjay",
          title: "MERN Stack Developer",
          image: "/hari.png",
          bio: "",
        },
        {
          id: 8,
          name: "ManiKandan",
          title: "Website Developer & Designer",
          image: "/mani.png",
          bio: "",
        },
        {
            id: 10,
            name: "Parthasarathi",
            title: "Product Designer",
            image: "/partha.png",
            bio: "",
          },
      ],
    },
    {
      title: "Finance & Marketing Team",
      members: [
        {
          id: 9,
          name: "RamKishore",
          title: "Financial Analyst & Full Stack Marketer ",
          image: "/ramkishore.jpeg",
          bio: "",
        },
      
        {
          id: 11,
          name: "Shalini",
          title: "Accountant",
          image: "/shalini.png",
          bio: "",
        },
      ],
    },
  ]

  const toggleBio = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id)
  }

  return (
    <div className="w-full bg-white py-12 md:py-20">
      {teamSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                  {section.title}
                </h2>
              </div>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.members.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-xl overflow-hidden"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#001E80] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 mt-1">{member.title}</p>

                        {expandedMember === member.id && member.bio && (
                          <div className="mt-3 text-sm text-gray-700 transition-all duration-300">
                            <p>{member.bio}</p>
                          </div>
                        )}

                        {member.bio && (
                          <button
                            onClick={() => toggleBio(member.id)}
                            className="mt-4 flex items-center text-sm font-medium text-[#001E80] hover:text-blue-700 transition-colors"
                            aria-expanded={expandedMember === member.id}
                          >
                            {expandedMember === member.id ? "LESS" : "MORE"}{" "}
                            {expandedMember === member.id ? (
                              <ChevronUp className="ml-1 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}