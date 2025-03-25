"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and SEO optimization tailored to meet your business needs.",
  },

  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },

  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing options including project-based quotes, hourly rates, and retainer packages. Each solution is customized based on your specific requirements and budget constraints.",
  },

  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide comprehensive post-launch support and maintenance packages to ensure your digital products remain up-to-date, secure, and performing optimally.",
  },

  {
    question: "How do you handle revisions and feedback?",
    answer:
      "We incorporate a collaborative feedback process with dedicated revision rounds at key project milestones. Our iterative approach ensures your vision is accurately implemented throughout development.",
  },

]

export default function FaqSeo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className=" w-full max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="section-title mt-8 mb-6">Frequently Asked Questions.</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              "border border-border rounded-lg overflow-hidden transition-all duration-200",
              openIndex === index ? "shadow-sm" : "",
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-6 text-left"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className=" text-2xl section-title">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 ml-2"
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0 ">
                    <p className=" section-description text-xl text-left ">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

