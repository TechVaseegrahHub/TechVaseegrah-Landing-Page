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
    question: "What is branding, and why is it important for my business?",
    answer:
      "Branding is the process of defining and establishing your business's identity, including your logo, messaging, values, and overall image. A strong brand helps build trust with customers, differentiate you from competitors, and attract loyal clients.",
  },

  {
    question: "How can branding consulting help my business?",
    answer:
      "Branding consulting helps you develop a clear and consistent brand strategy that resonates with your target audience. We'll guide you on how to refine your messaging, visual identity, and customer experience to build a stronger brand presence in the market.",
  },

  {
    question: "How long does it take to see results from branding efforts?",
    answer:
      "Branding is a long-term investment. While some elements (like visual identity) can be seen quickly, the full impact of branding strategies typically takes 3-6 months to fully unfold, depending on your industry and goals.",
  },

  {
    question: "What is the difference between branding and marketing?",
    answer:
      "Branding is the foundation of how your business is perceived by the public, while marketing is how you communicate and promote that brand. Branding shapes your identity, and marketing helps you reach and engage your audience",
  },

  {
    question: "How do I know if my brand is on the right track?",
    answer:
      "We offer brand audits and consultations where we analyze your brand's current position, customer perception, and market performance. Based on this, we provide tailored recommendations to help you refine your brand and improve its effectiveness.",
  },

]

export default function FaqBranding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full max-w-4xl mx-auto py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      <div className="mb-12">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-8 mb-4 md:mb-6 text-green-700">
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