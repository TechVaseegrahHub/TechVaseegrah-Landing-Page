"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container px-4 md:px-6">

        {/* Our Team Section */}
        <div className="max-w-5xl mx-auto  px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h3 className="text-2xl md:text-5xl font-extrabold mb-3 
                            md:mb-4 bg-gradient-to-b from-black to-[#001E80] 
                            text-transparent bg-clip-text tracking-tighter">
                Our Team
            </h3>
            <p className="text-sm md:text-base text-[#010D3E] px-4">
              Our team brings together diverse skills in technology and business,
                driven by a passion for innovation and excellence.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
            {[

  {
    name: "Mr. Sharan Sivakumar",
    role: "Chief Sales Executive",
    image: "/person.png",
    bio: "As Chief Sales Executive, Mr. Sharan Sivakumar leverages his deep industry knowledge to drive business growth.",
  },
  {
    name: "Ms. Sujitha Kumaran",
    role: "Meta Developer",
    image: "/sujitha3.jpg",
    bio: "Ms. Sujitha Kumaran is a talented Meta Developer passionate about creating immersive digital experiences.",
  },
  {
    name: "Ms. S.Peararulselvi",
    role: "Software Developer",
    image: "/peruarul.png",
    bio: "Ms. S.Peararulselvi builds robust and user-friendly web applications with a keen eye for detail.",
  },
  {
    name: "Mr. Balaji Selvaraj",
    role: "Website Developer",
    image: "/balaji1.jpg",
    bio: "Mr. Balaji Selvaraj is dedicated to delivering innovative and high-quality web solutions.",
  },
  {
    name: "Mrs. Priyadharshini",
    role: "Web Developer",
    image: "/priya.png",
    bio: "Mrs. Priyadharshini focuses on creating responsive and engaging web experiences for our clients.",
  },
  {
    name: "Mr. ManiKandan ",
    role: "Web Developer & Designer",
    image: "/mani.png",
    bio: "Mr. ManiKandan S merges technical expertise with creative design to produce compelling digital products.",
  },
  {
    name: "Mr. Parthasarathi",
    role: "Product Designer",
    image: "/partha.png",
    bio: "Mr. Parthasarathi crafts intuitive product designs that enhance user interaction and satisfaction.",
  },
  { 
    name: "Mr. HariSanjay J",
    role: "Mern Stack Developer",
    image: "/hari.png",
    bio: "Mr. HariSanjay J uses his expertise to boost online visibility and improve search rankings.",
  },
  {
    name: "Ms. Shalini S",
    role: "Accountant",
    image: "/shalini.png",
    bio: "Ms. Shalini S ensures transparency and accuracy in our processes with meticulous attention to detail.",
  },
]
.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 md:p-6 bg-white transition-colors duration-300 group-hover:bg-gray-50">
                  <h4 className="font-bold text-sm md:text-base line-clamp-1 transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h4>
                  <p className="text-xs md:text-sm text-primary mb-1 md:mb-2">{member.role}</p>
                  <p className="text-xs md:text-sm text-gray-500 line-clamp-3">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}