import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "GST registration mandatory for my business?",
      answer:
        "GST registration is mandatory if your business has an annual turnover exceeding ₹40 lakh (₹20 lakh for service providers) or if you are involved in inter-state supply. However, businesses can also voluntarily register for benefits like input tax credit and legal recognition.",
    },
    {
      question: "If Udyam registration is free on the government portal, why do you charge for it?",
      answer:
        "Yes, Udyam registration is free from the government, but we charge a service fee of ₹500 for assisting you with accurate documentation, ensuring error-free submission, and saving your valuable time.",
    },
    {
      question: "If Udyam registration is free on the government portal, why do you charge for it?",
      answer:
        "Yes, Udyam registration is free from the government, but we charge a service fee of ₹500 for assisting you with accurate documentation, ensuring error-free submission, and saving your valuable time.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
