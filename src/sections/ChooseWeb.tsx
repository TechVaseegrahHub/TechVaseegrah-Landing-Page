import { BookOpen, Briefcase, GraduationCap, Clock, Users } from "lucide-react"

export default function ChooseWeb() {
  const benefits = [
    {
      title: "Industry-Relevant Curriculum",
      description:
        "Stay ahead with a syllabus curated by successful business leaders, entrepreneurs, and industry experts.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Real-World Case Studies",
      description:
        "Gain insights through real-world business case studies, live projects, and interactive workshops.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Professional Development",
      description:
        "Attend workshops, networking events, and career coaching sessions designed to enhance your skills and career prospects.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Learning Resources",
      description:
        "Access to premium online courses, internal knowledge bases, and educational materials to support continuous learning.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Flexible Work Environment",
      description:
        "Enjoy flexible scheduling options and hybrid work arrangements that accommodate your academic commitments.",
      icon: <Clock className="h-6 w-6" />,
    },
  ]

  return (
    <section className="lg:pb-24 mb-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>

        {/* Horizontal scroll with vertical cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[280px] h-[360px] flex-shrink-0 snap-center flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
