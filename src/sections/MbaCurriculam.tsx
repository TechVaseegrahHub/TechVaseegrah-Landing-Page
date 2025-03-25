import { BookOpen, Calendar, GraduationCap, FileText, Presentation, Video } from "lucide-react"

export default function ProgramCurriculum() {
  const cards = [
    {
      icon: <Video strokeWidth={1.5} className="text-[#010D3E]" />,
      title: "Business Strategy & Entrepreneurship",
      description: "Access high-quality video content covering all essential topics and concepts in the program.",
    },
    {
      icon: <FileText strokeWidth={1.5} className="text-[#010D3E]" />,
      title: "Financial Management & Accounting",
      description: "Comprehensive reading resources including articles, research papers, and supplementary texts.",
    },
    {
      icon: <Presentation strokeWidth={1.5} className="text-[#010D3E]" />,
      title: "Marketing & Brand Building",
      description: "Participate in hands-on workshops designed to reinforce learning through practical application.",
    },
    {
      icon: <Calendar strokeWidth={1.5} className="text-[#010D3E]" />,
      title: " Leadership & Organizational Development",
      description: "View the complete program timeline with important dates, deadlines, and milestones.",
    },
    {
      icon: <BookOpen strokeWidth={1.5}  className="text-[#010D3E]"/>,
      title: "Operations & Business Scaling",
      description: "Download and access all course materials, including slides, templates, and reference guides.",
    },
    {
      icon: <GraduationCap strokeWidth={1.5} className="text-[#010D3E]" />,
      title: "Certification",
      description: "Information about program completion requirements and certification process.",
    },
  ]

  return (
    <div className="w-full px-4 sm:px-6 py-8">
           <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title mt-5 mb-3">Program Curriculum</h2>
          <p className="section-description mt-5 mb-8">
            Our internship program offers valuable opportunities to kickstart your career with hands-on experience and
            professional guidance.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <div className="flex justify-between items-start">
              <div className="text-primary bg-primary/5 rounded-md p-2 w-10 h-10 flex items-center justify-center">
                {card.icon}
              </div>
              <div className="text-[#010D3E]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 11L11 5M11 5H6M11 5V10"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl mt-4 mb-1.5 text-left section-title">{card.title}</h3>
            <p className="text-base leading-relaxed section-description text-left">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

