import { BarChart3, LineChart, PieChart, Briefcase, Target, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MbaProgram() {
  const features = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Business Strategy & Entrepreneurship",
      description: "Access high-quality video content covering all essential topics and concepts in the program.",
    },
    {
      icon: <BarChart3 className="h-5 w-5"/>,
      title: "Financial Management & Accounting",
      description: "Comprehensive reading resources including articles, research papers, and supplementary texts.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Marketing & Brand Building",
      description: "Participate in hands-on workshops designed to reinforce learning through practical application.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership & Organizational Development",
      description: "View the complete program timeline with important dates, deadlines, and milestones.",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Operations & Business Scaling",
      description: "Download and access all course materials, including slides, templates, and reference guides.",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Certification",
      description: "Information about program completion requirements and certification process.",
    },
  ]

  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 py-14 md:py-20 bg-white">
      <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:pr-6">
          <span className="tag mb-8">
            MBA Program
          </span>

          <h2 className="text-3xl tracking-tight text-left md:text-4xl section-title mb-4">Program Curriculum</h2>
          <p className="text-sm section-description md:text-xl text-left mb-3 leading-relaxed max-w-md">
            Our comprehensive MBA curriculum is designed to equip you with essential business skills across key domains.
          </p>
  
        </div>
        <div className="lg:col-span-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 group">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
                    "bg-primary/5 text-primary group-hover:bg-primary/10",
                  )}
                >
                  {feature.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="section-title text-base text-left md:text-xl ">{feature.title}</h3>
                  <p className="text-sm text-[#010D3E]/80 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

