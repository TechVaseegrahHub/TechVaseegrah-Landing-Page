"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeft } from "lucide-react";

export default function Ecommerce() {
  const router = useRouter();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectImages] = useState([
    "/assets/images/sarusimg.png",
    "/assets/images/Jungle.jpeg"
  ]);

  const projects = [
    {
      title: "Sarus Magizham",
      subtitle: "E-commerce Solution",
      description: "Sarus Magizham (Website)",
      overview: "Sarus Magizham is an online store dedicated to natural, chemical-free wellness products rooted in traditional Indian knowledge systems. The brand specializes in handcrafted herbal bath powders, natural hair oils, and Ayurvedic wellness blends made from 100% organic ingredients sourced directly from farms.",
      objectives: [
        "Establish a strong digital presence for Sarus Magizham to reach a wider audience.",
        "Build an intuitive, elegant eCommerce website that aligns with the brand's earthy and traditional identity.",
        "Showcase the authenticity of the products and the story behind the ingredients and farmers.",
        "Enable easy navigation and secure checkout for customers.",
        "Optimize the website for SEO and mobile responsiveness."
      ],
      solutions: [
        {
          title: "Website Design & Development",
          description: "Created a minimal, nature-inspired design using WordPress + WooCommerce with Elementor, ensuring a user-friendly experience."
        },
        {
          title: "Brand Storytelling",
          description: "Highlighted the brand's ethos and ingredient origins with dedicated sections about farmers, natural sourcing, and product benefits."
        },
        {
          title: "eCommerce Integration",
          description: "Implemented a seamless product catalog, cart, and checkout system with multiple payment options and shipping integration."
        },
        {
          title: "Performance Optimization",
          description: "Ensured fast loading times, mobile optimization, and SEO-friendly architecture for better search engine visibility."
        },
        {
          title: "Content Strategy",
          description: "Developed compelling product descriptions, blog integration for educational content, and customer testimonials to build trust."
        }
      ],
      metrics: [
        { title: "Revenue Increase", value: "40%", description: "Within 3 months of launch" },
        { title: "Mobile Conversion", value: "65%", description: "Of total orders" },
        { title: "Customer Retention", value: "75%", description: "Repeat purchase rate" }
      ]
    },
    {
      title: "JungleMeets Adventures",
      subtitle: "Digital Solution",
      description: "JungleMeets Adventures (Website)",
      overview: "JungleMeets.com is a premium travel experience provider that goes beyond standard tour packages. Their core focus is on delivering curated, offbeat adventures that bring travelers closer to the soul of a destination. With a team of travel enthusiasts and seasoned professionals, they specialize in creating personalized, story-driven journeys to hidden gems across the globe.",
      objectives: [
        "To build a strong online presence that reflects the brand's unique approach to travel.",
        "To communicate their core values: authenticity, safety, and personalized service.",
        "To attract adventure seekers and experience-focused travelers looking for offbeat destinations.",
        "To generate leads and increase bookings through a user-friendly and engaging website."
      ],
      solutions: [
        {
          title: "Storytelling-Driven Design",
          description: "The website layout and content were crafted to tell a story — the user's story. From the homepage to individual tour pages, each section evokes a sense of adventure, discovery, and emotional connection."
        },
        {
          title: "Highlighting Offbeat Adventures",
          description: "We focused on showcasing non-touristy, hidden destinations. Unique visual elements, engaging travelogues, and real experiences were used to capture the raw essence of each journey."
        },
        {
          title: "Emphasis on Safety & Personalization",
          description: "Dedicated sections emphasize Jungle Meets' meticulous planning, safety standards, and personal care, reassuring visitors about quality and reliability."
        },
        {
          title: "Lead Conversion Strategy",
          description: "Integrated inquiry forms, strong CTAs, and social proof (testimonials, user experiences) were embedded to guide users from browsing to booking with confidence."
        },
        {
          title: "Mobile-Friendly & Fast-Loading",
          description: "The site was optimized for performance and mobile usage, ensuring seamless access and booking on the go."
        }
      ],
      metrics: [
        { title: "Booking Increase", value: "50%", description: "Within 6 months" },
        { title: "Mobile Traffic", value: "70%", description: "Of total visitors" },
        { title: "Lead Conversion", value: "35%", description: "Inquiry to booking rate" }
      ]
    }
  ];

  const currentProject = projects[currentProjectIndex];

  return (
    <>
      <Head>
        <title>{currentProject.title} Case Study</title>
        <meta
          name="description"
          content={`Case study for ${currentProject.title} - ${currentProject.subtitle}`}
        />
      </Head>

        {/* Navigation */}
   
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
                <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">
                      {currentProjectIndex === 0 ? "Krish Collections" : "Future Nature (Website)"}
                    </span>
                  </div>
                  <Image
                    src={projectImages[currentProjectIndex]}
                    alt={`${currentProject.title} showcase`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 800px"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Title Container */}
                <div className="w-full md:w-1/2">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
                    {currentProject.subtitle}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </header>

            {/* Key Metrics */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentProject.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">{metric.title}</h3>
                    <p className="text-3xl font-bold text-emerald-600">{metric.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Toggle */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 mr-4">
                <button
                  onClick={() => setCurrentProjectIndex(0)}
                  className={`w-3 h-3 rounded-full ${
                    currentProjectIndex === 0 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="View Sarus Magizham project"
                />
                <button
                  onClick={() => setCurrentProjectIndex(1)}
                  className={`w-3 h-3 rounded-full ${
                    currentProjectIndex === 1 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="View JungleMeets Adventures project"
                />
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Overview Section */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">01</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <div className="prose prose-gray">
                      <p>{currentProject.overview}</p>
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
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {currentProject.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              <section className="lg:col-span-2">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">03</span>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                    <div className="space-y-6">
                      {currentProject.solutions.map((solution, index) => (
                        <div key={index} className="flex">
                          <div className="mr-4 text-black font-bold">●</div>
                          <div>
                            <h4 className="font-bold text-gray-900">{solution.title}</h4>
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
        </main>
      </div>
    </>
  );
}