import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQsectionsProps {
  faqs: FAQ[];
}

const FAQsections: React.FC<FAQsectionsProps> = ({ faqs }) => {
  return (
    <div className="flex justify-center md:py-24 lg:py-10">
      <div className="w-full max-w-3xl space-y-4">
        <Accordion type="single" collapsible className="w-full space-y-5">
          {(faqs ?? []).map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg"
            >
              <AccordionTrigger
                className=" px-4 py-3 font-medium text-gray-800 hover:bg-green-50 "
                style={{ transition: "none" }}
              >
                <div className="flex items-center gap-2 justify-center">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                className="px-6 py-4 text-gray-600 bg-gray-50"
                style={{ transition: "none" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsections;
