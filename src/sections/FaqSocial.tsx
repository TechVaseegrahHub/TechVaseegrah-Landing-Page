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
    question: "What social media platforms should I focus on for my business?",
    answer:
      "Every business is different, and the best platforms depend on your target audience and goals. We'll help you identify the platforms that bring the best results for your brand.",
  },

  {
    question: "How long will it take to see results from social media marketing?",
    answer:
      "Results can vary depending on your goals, industry, and the platforms you are using. Typically, organic growth takes 2 to 4 weeks, but paid ads can show faster results.",
  },

  {
    question: "How much does social media marketing cost?",
    answer:
      "Costs depend on the scope of the services, number of platforms, and the level of content creation or ad spend required. We offer customized packages based on your needs",
  },

  {
    question: "Can you create content for my social media pages?",
    answer:
      "Yes! We offer full content creation services, including images, videos, captions, and post schedules to keep your pages active and engaging",
  },

  {
    question: "How do I know if my social media marketing efforts are working?",
    answer:
      "We provide detailed performance reports with metrics such as engagement, reach, website traffic, and conversions, so you can track the success of your campaigns.",
  },


]

export default function FaqSocial() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full max-w-4xl mx-auto py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      <div className="mb-12">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-8 mb-4 md:mb-6">
          Frequently Asked Questions.
        </h2>
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
              className="flex items-start md:items-center w-full p-4 md:p-6 text-left"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl section-title flex-1 pr-3 text-left">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 mt-1 md:mt-0"
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
                  <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                    <p className="section-description text-base md:text-lg lg:text-xl text-left">{faq.answer}</p>
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