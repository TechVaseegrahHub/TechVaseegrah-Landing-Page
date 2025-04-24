"use client"

import React from "react"
import  HeroSection  from "@/sections/HeroSection"
import ServicesSection from "@/sections/ServicesSection"
import FaqSection from "@/sections/FAQSection"
import  ContactSection  from "@/sections/ContactSection"

const faqData = [
  {
    question: "Is GST registration mandatory for my business?",
    answer:
      "GST registration is mandatory if your business has an annual turnover exceeding ₹40 lakh (₹20 lakh for service providers)...",
  },
  {
    question: "If Udyam registration is free, why do you charge?",
    answer:
      "We charge a small service fee for helping with document checking, form filling, and follow-up...",
  },
  {
    question: "How long does FSSAI registration take?",
    answer:
      "It typically takes 1–5 working days depending on documentation and regional approval.",
  },
];

export default function InternshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <FaqSection  />
      <ContactSection />
      </main>
    </div>
  );
}
