import { BookOpen, Briefcase, GraduationCap, Clock, Users } from "lucide-react"

export default function ChooseWeb() {
  const benefits = [
    {
      title: "Industry-Relevant Curriculum",
      description:
        "Stay ahead with a syllabus curated by successful business leaders, entrepreneurs, and industry experts.",
      icon: <Users className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: "Real-World Case Studies",
      description:
        "Gain insights through real-world business case studies, live projects, and interactive workshops.",
      icon: <Briefcase className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: "Professional Development",
      description:
        "Attend workshops, networking events, and career coaching sessions designed to enhance your skills and career prospects.",
      icon: <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: "Learning Resources",
      description:
        "Access to premium online courses, internal knowledge bases, and educational materials to support continuous learning.",
      icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: "Flexible Work Environment",
      description:
        "Enjoy flexible scheduling options and hybrid work arrangements that accommodate your academic commitments.",
      icon: <Clock className="h-4 w-4 md:h-5 md:w-5" />,
    },
  ]
  return (
    <section className="lg:pb-24 overflow-x-clip mb-12 ">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 md:p-6 bg-card rounded-lg border border-border/50">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 rounded-full bg-primary/5 text-primary">{benefit.icon}</div>
                <h3 className="text-sm md:text-base lg:text-lg font-medium  bg-clip-text">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm leading-relaxed pl-8 md:pl-11 tracking-tight font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}