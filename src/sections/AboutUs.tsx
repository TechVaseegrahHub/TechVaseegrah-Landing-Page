"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-20">
          <div className="space-y-3 md:space-y-4">
            <div className="tag mb-4">About Us</div>
            <h2
              className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tighter 
                           mb-4 md:mb-6 bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text px-4">
              We build digital solutions
            </h2>

            <p className="max-w-[900px] text-[#010D3E] text-sm md:text-base lg:text-lg xl:text-xl px-4 md:px-6">
              We're a team of passionate developers, designers, and strategists dedicated to transforming ideas into
              powerful digital experiences.
            </p>
          </div>
        </div>

        {/* Our Company Section */}
        {/* <div className="max-w-5xl mx-auto mb-24">
          <h3 className="text-2xl font-bold text-center mb-12">Our Company</h3>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Innovative Solutions Since 2020</h3>
              <p className="text-gray-500">
                Founded with a vision to bridge the gap between complex technology and business needs, we've grown into
                a full-service digital partner for companies across industries.
              </p>
              <div className="space-y-2">
                {[
                  "Custom software development",
                  "Cloud infrastructure",
                  "AI & machine learning solutions",
                  "Digital transformation consulting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-4 group">
                Learn more about our services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Modern office space with team working"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25</div>
              <div className="text-sm text-gray-500">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-gray-500">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
          </div>
        </div> */}

        {/* Our Mission Section */}
        <div className="max-w-5xl mx-auto my-16 md:my-24 px-4">
          <h3
            className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-b from-black to-[#001E80] 
                         text-transparent bg-clip-text"
          >
            Our Mission
          </h3>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl md:order-1 order-2 h-[200px] sm:h-[250px] md:h-auto shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team collaboration session"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-3 md:space-y-4 md:order-2 order-1">
              <h3
                className="text-xl md:text-2xl font-bold bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text"
              >
                Empowering Business Through Technology
              </h3>
              <p className="text-sm md:text-base text-[#010D3E]">
                Our mission is to democratize access to cutting-edge technology, making digital transformation
                accessible to businesses of all sizes. We believe in creating solutions that are not just
                technologically advanced, but also user-friendly and business-focused.
              </p>
              <div className="space-y-3 md:space-y-4 pt-3 md:pt-4">
                <div>
                  <h4
                    className="font-medium text-base md:text-lg bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text"
                  >
                    Innovation
                  </h4>
                  <p className="text-xs md:text-sm text-[#010D3E]">
                    We constantly explore new technologies and approaches to solve complex problems.
                  </p>
                </div>
                <div>
                  <h4
                    className="font-medium text-base md:text-lg bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text"
                  >
                    Quality
                  </h4>
                  <p className="text-xs md:text-sm text-[#010D3E]">
                    We never compromise on the quality of our work, ensuring robust and scalable solutions.
                  </p>
                </div>
                <div>
                  <h4
                    className="font-medium text-base md:text-lg bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text"
                  >
                    Partnership
                  </h4>
                  <p className="text-xs md:text-sm text-[#010D3E]">
                    We view our clients as partners, working collaboratively to achieve shared goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24 px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h3
              className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 bg-gradient-to-b from-black to-[#001E80] 
                           text-transparent bg-clip-text"
            >
              Our Team
            </h3>
            <p className="text-sm md:text-base text-[#010D3E] px-4">
              Our diverse team brings together expertise from various domains of technology and business, united by a
              passion for innovation and excellence.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
            {[
              {
                name: "Mr. SreeKarrthiyen Mahadevan",
                role: "CEO & Founder",
                image: "/ceo2.jpg",
                bio: "Former Google engineer with 15+ years of experience in software development and tech leadership.",
              },
              {
                name: "Mr. Sharan Sivakumar",
                role: "Chief Sales Executive, TECH VASEEGRAH",
                image: "/ce.jpeg",
                bio: "AI specialist with a PhD in Computer Science and multiple patents in machine learning applications.",
              },
              {
                name: "Michael Rodriguez",
                role: "Design Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Award-winning UX designer who has shaped digital experiences for Fortune 500 companies.",
              },
              {
                name: "Priya Sharma",
                role: "Head of Operations",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Business strategist with expertise in scaling tech startups and optimizing processes.",
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Full-stack developer specializing in cloud architecture and distributed systems.",
              },
              {
                name: "Emma Wilson",
                role: "Client Success Manager",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Customer experience expert focused on building long-term client relationships.",
              },
            ].map((member, index) => (
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
          {/* <div className="text-center pt-8">
            <Button variant="outline" className="group">
              View all team members
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

