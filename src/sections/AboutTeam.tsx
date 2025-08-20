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

    {
      title: "Software Development",
      members: [
        {
          id: 1,
          name: "Sujitha Kumaran",
          title: "Meta Developer",
          image: "/su.jpeg",
          bio: "",
        },
        {
          id: 2,
          name: "Peararulselvi",
          title: "Software Developer",
          image: "/ps-2.png",
          bio: "",
        },

        {
          id: 4,
          name: "Harisanjay",
          title: "Software Developer",
          image: "/hari-sanjai.png",
          bio: "",
        },

        {
          id: 5,
          name: "Naveen Kumar",
          title: "Software Developer",
          image: "/nv.jpeg",
          bio: "",
        },

        {
          id: 6,
          name: "Varun Prasanna",
          title: "Software Developer",
          image: "/pras.jpg",
          bio: "",
        },

        {
          id: 7,
          name: "Eshwar",
          title: "Software Developer",
          image: "/esw.jpeg",
          bio: "",
        },

        {
          id: 8,
          name: "Santhosh",
          title: "Software Developer",
          image: "/sa1.png",
          bio: "",
        },

        {
          id: 9,
          name: "Yogesh",
          title: "MERN Stack Developer",
          image: "/yogesh.png",
          bio: "",
        },

        {
          id: 10,
          name: "Prem Kumar",
          title: "Full Stack Developer",
          image: "/prmc.png",
          bio: "",
        },
      ],
    },
    {
      title: "Website Development",
      members: [
        {
          id: 11,
          name: "Balaji Selvaraj",
          title: "Website Developer",
          image: "/balaji-selvaraj.png",
          bio: "",
        },

        {
          id: 12,
          name: "Priyadharshini",
          title: "Website Developer",
          image: "/priyadharshini.png",
          bio: "",
        },
      
        {
          id: 13,
          name: "ManiKandan",
          title: "Website Developer & Designer",
          image: "/maan.png",
          bio: "",
        },
      ],
    },

    {
      title: "Video Editing & Graphic Design",
      members: [
        {
          id: 14,
          name: "Kawinmozhi",
          title: "Creative Head",
          image: "/kawinm.jpeg",
          bio: "",
        },

        {
          id: 15,
          name: "Parthasarathi",
          title: "Product Designer",
          image: "/parhe.png",
          bio: "",
        },
      
      ],
    },

    {
      title: "Finance & Marketing",
      members: [
        {
          id: 16,
          name: "RamKishore",
          title: "Financial Analyst & Full Stack Marketer",
          image: "/kisram.png",
          bio: "",
        },

        {
          id: 17,
          name: "Ajay Martin",
          title: "Social Media Manager",
          image: "/aj.png",
          bio: "",
        },

        {
          id: 18,
          name: "Yugeshwaran",
          title: "Social Media Manager",
          image: "/yu.png",
          bio: "",
        },
      
        {
          id: 19,
          name: "Shalini",
          title: "Accountant",
          image: "/shal.png",
          bio: "",
        },


      ],
    },

    {
      title: "Administrative",
      members: [
        {
          id: 20,
          name: "Durgadevi",
          title: "Administrative",
          image: "/ds.png",
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter  text-green-600 bg-clip-text">
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
                          <div className="mt-3 text-sm text-gray-700 transition-all section-description duration-300">
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