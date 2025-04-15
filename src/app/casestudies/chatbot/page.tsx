"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function chatbot() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/f3log.png",
  ];

  return (
    <>
      <Head>
        <title> InstaX bot</title>
        <meta
          name="description"
          content="AI-powered e-commerce platform case study"
        />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Case Studies
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            InstaX bot
            </span>
            {/* <h1 className="text-4xl font-bold mb-6">
              AI-Powered E-commerce Platform
            </h1>
            <p className="text-xl text-gray-600">
              A modern shopping experience with intelligent product
              recommendations
            </p> */}
          </div>

          {/* Image Gallery */}
          <div className="mb-6 w-full">
                    <div className="w-full relative bg-gray-100 md:mx-8">
                      <div style={{ height: "250px" }} className="md:h-[500px]">
                        <Image
                          src={images[currentImageIndex]}
                          alt={`billz ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                          priority
                          sizes="(max-width: 768px) 100vw, 1200px"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>

                  </div>
        

            {/* <div className="flex space-x-2 justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div> */}
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4"> Overview  </h2>
              <p>
              InstaXbot automates Instagram messaging for users with professional Instagram accounts. 
It allows users to manage direct messages, automate responses with AI, and engage with 
customers
              </p>
            </section>

           

            {/* Features
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}

          {/* Objectives */}
<section className="mb-12">
  <h3 className="text-2xl font-bold mb-4">Objectives</h3>
  <ul className="list-disc pl-6 space-y-2">
  <li>
                  <strong>1.Automate Instagram Messaging:</strong>   The main objective is to automate Instagram direct messaging, helping businesses 
                  engage with their customers seamlessly without needing to manage each message manually. 
                </li>
                <li>
                  <strong>2.Connect Instagram Professional Accounts:  </strong>        Integrate AI to handle customer inquiries automatically with pre-programmed 
responses, improving engagement efficiency and ensuring 24/7 availability for customer 
interactions. 
                </li>
                <li>
                  <strong>4.Enhance Customer Interaction:   </strong>   Improve customer engagement by using personalized welcome messages, icebreakers, 
                  and AI-driven chat responses. 
                </li>
                <li>
                  <strong>5.Manage Conversations: </strong>  Provide businesses with the option to switch between automated AI-generated 
responses and human agent responses based on the complexity of the conversation or the 
availability of agents. 
                </li>
                <li>
                  <strong>6.Product Display and Browsing:</strong>    Enable businesses to display products in a carousel format directly within Instagram 
chat, allowing users to browse products conveniently while interacting with the bot. 

                </li>
                <li>
                  <strong>7.Improve Customer Experience:  </strong>    Enhance the customer experience by providing options to navigate to relevant services 
                  (like browsing products or contacting human agents) within the chat itself. 
                </li>

  </ul>
</section>



            {/* Challenges */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <li>
                  <strong>1.Welcome Message Template:  </strong>       Customizable pre-designed welcome messages that greet customers when they 
                  first interact with the business.  
                </li>
                <li>
                  <strong>2.Automated AI-Generated Responses:    </strong>        AI-generated responses based on predefined rules or a Retrieval-Augmented 
Generation (RAG) system, ensuring accurate, context-specific replies to customer 
queries.
interactions. 
                </li>
                <li>
                  <strong>3.Persistent Menu: </strong>    A menu that remains accessible to users, offering options like "Human Agent", 
                  "Chatbot", "Browse Our Products", and a link to the website URL. 
                </li>
                <li>
                  <strong>4.Icebreakers:  </strong>   A feature where users can start conversations by selecting from frequently asked 
                  questions, making interactions smoother.
                </li>
                <li>
                  <strong>5.Product Catalog in Carousel Format:   </strong>      Allows users to browse products in a horizontal scrollable layout, displaying 
                  images, descriptions, and prices. 
                </li>
                <li>
                  <strong>6.Chat Mode Switching:   </strong>      Users can toggle between chatbot and human agent modes. In chatbot mode, AI 
responds automatically. In human agent mode, human agents can take over 
conversations. 
                </li>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
