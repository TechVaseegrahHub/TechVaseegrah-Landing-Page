"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeft } from "lucide-react";

export default function Chatbot() {
  const router = useRouter();
  const [currentImageIndex] = useState(0);
  const images = ["/assets/images/instaxbot.jpg"];

  const project = {
    title: "InstaX Bot",
    subtitle: "Instagram Messaging Automation",
    description: "AI-powered Instagram messaging automation for businesses",
    overview: "InstaXbot automates Instagram messaging for users with professional Instagram accounts. It allows users to manage direct messages, automate responses with AI, and engage with customers efficiently.",
    objectives: [
      {
        title: "Automate Instagram Messaging",
        description: "Help businesses engage with their customers seamlessly without needing to manage each message manually."
      },
      {
        title: "Connect Instagram Professional Accounts",
        description: "Enable businesses to integrate their professional Instagram accounts with the bot for automated messaging."
      },
      {
        title: "AI-Powered Responses",
        description: "Handle customer inquiries automatically with pre-programmed responses, improving engagement efficiency and ensuring 24/7 availability."
      },
      {
        title: "Enhance Customer Interaction",
        description: "Improve customer engagement using personalized welcome messages, icebreakers, and AI-driven chat responses."
      },
      {
        title: "Manage Conversations",
        description: "Provide options to switch between automated AI-generated responses and human agent responses based on conversation complexity."
      },
      {
        title: "Product Display and Browsing",
        description: "Enable businesses to display products in a carousel format directly within Instagram chat for convenient browsing."
      },
      {
        title: "Improve Customer Experience",
        description: "Enhance the customer experience by providing navigation options to relevant services within the chat interface."
      }
    ],
    solutions: [
      {
        title: "Welcome Message Template",
        description: "Customizable pre-designed welcome messages that greet customers when they first interact with the business."
      },
      {
        title: "Automated AI-Generated Responses",
        description: "AI-generated responses based on predefined rules or a Retrieval-Augmented Generation (RAG) system, ensuring accurate, context-specific replies."
      },
      {
        title: "Persistent Menu",
        description: "A menu that remains accessible to users, offering options like 'Human Agent', 'Chatbot', 'Browse Our Products', and website links."
      },
      {
        title: "Icebreakers",
        description: "Feature where users can start conversations by selecting from frequently asked questions, making interactions smoother."
      },
      {
        title: "Product Catalog in Carousel Format",
        description: "Allows users to browse products in a horizontal scrollable layout, displaying images, descriptions, and prices."
      },
      {
        title: "Chat Mode Switching",
        description: "Users can toggle between chatbot and human agent modes. In chatbot mode, AI responds automatically. In human agent mode, human agents take over conversations."
      }
    ],
    metrics: [
      { title: "Response Time", value: "Instant", description: "24/7 automated responses" },
      { title: "Engagement Rate", value: "3x Higher", description: "Compared to manual messaging" },
      { title: "Customer Satisfaction", value: "85%+", description: "Positive feedback rating" }
    ]
  };

  return (
    <>
      <Head>
        <title>{project.title} Case Study</title>
        <meta
          name="description"
          content={project.description}
        />
      </Head>


          <div className="container mx-auto px-4 py-3 flex items-center mt-10">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </button>
          </div>
        <div>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header Section */}
            <header className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* Image Container */}
                <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} showcase`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                </div>

                {/* Title Container */}
                <div className="w-full md:w-1/2">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
                    {project.subtitle}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </header>

            {/* Key Metrics */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">{metric.title}</h3>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Overview and Objectives */}
              <div className="space-y-8">
                {/* Overview Section */}
                <section>
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-700 font-medium">01</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                      <div className="prose prose-gray">
                        <p>{project.overview}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Objectives Section */}
                <section>
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-700 font-medium">02</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                      <ol className="list-decimal pl-5 space-y-4">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="pl-2">
                            <h4 className="font-semibold text-gray-900">{objective.title}</h4>
                            <p className="text-gray-700 mt-1">{objective.description}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column - Solution */}
              <div>
                <section>
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-700 font-medium">03</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                      <div className="space-y-4">
                        {project.solutions.map((solution, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 text-black font-bold">●</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                              <p className="text-gray-700 mt-1">{solution.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}