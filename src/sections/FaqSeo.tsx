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
    question: "Why is SEO important for a website?",
    answer:
      "SEO helps websites rank higher, attract more visitors, and improve credibility. A well-optimized site gets more organic traffic, leading to better conversions and business growth.",
  },

  {
    question: "How does Google My Business help local SEO?",
    answer:
      "A Google My Business (GMB) profile improves local search visibility, helping businesses appear in Google Maps and local search results.",
  },

  {
    question: "How do keywords affect SEO?",
    answer:
      "Keywords help search engines understand your content. Using relevant and well-researched keywords improves rankings and visibility for targeted search queries",
  },

]

export default function FaqSeo() {
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