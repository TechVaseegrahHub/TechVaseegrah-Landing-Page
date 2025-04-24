import React from "react";
import FAQsections from "@/components/FAQsections"; // adjust path as needed

const FAQData = [
  {
    question: "Is GST registration mandatory for my business?",
    answer:
      "GST registration is mandatory if your business has an annual turnover exceeding ₹40 lakh (₹20 lakh for service providers) or if you are involved in inter-state supply. However, businesses can also voluntarily register for benefits like input tax credit and legal recognition.",
  },
  {
    question: "If Udyam registration is free on the government portal, why do you charge for it?",
    answer:
      "Yes, Udyam registration is free from the government, but we charge a service fee of ₹500 for assisting you with accurate documentation, ensuring error-free submission, and saving your valuable time.",
  },
  {
    question: "How long does it take to get my FSSAI registration?",
    answer:
      "Basic FSSAI registration usually takes 1-5 working days depending on documentation and state authority processing.",
  },
];

const FAQPage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 ">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold bg-gradient-to-r from-green-600 via-emerald-400 to-lime-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto md:text-lg">
          Find answers to common questions about our services 
        </p>
      </div>

      <FAQsections faqs={FAQData} />
    </section>
  );
};

export default FAQPage;
