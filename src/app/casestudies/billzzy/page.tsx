"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeft } from "lucide-react";

export default function Billz() {
  const router = useRouter();
  const [currentImageIndex] = useState(0);
  const images = ["/assets/images/Billzzyimg2.jpg"];

  const project = {
    title: "Billzzy",
    subtitle: "Billing and Order Management Platform",
    description: "Streamlining customer interactions and order processing for Vaseegrah Veda",
    overview: "Vaseegrah Veda, a renowned brand specializing in high-quality herbal products, offers a variety of skincare, haircare, and wellness solutions. While their products are top-notch, they struggled with managing customer communication and support efficiently, which impacted both customer experience and order management. Billzzy's all-in-one billing and order management platform has provided the solution, streamlining customer interactions, automating the order process, and enhancing overall operational efficiency.",
    objectives: [
      "Enhance customer engagement and improve communication",
      "Streamline order management and eliminate difficulties with offline orders",
      "Automate the order-taking process and improve payment collection efficiency",
      "Ensure smoother workflows and update order statuses automatically",
      "Overcome previous challenges to enhance overall operational efficiency"
    ],
    solution: "By integrating Billzzy, Vaseegrah Veda was able to revolutionize their order management and customer interactions. The platform streamlined the entire process by automating order-taking, payment collection, and order status updates. Billzzy efficiently managed inventory and ensured smooth printing, packing, and tracking of orders. With Billzzy, Vaseegrah Veda was able to offer exceptional service, improve operational efficiency, and reduce manual overhead, leading to happier customers and significant revenue growth.",
    results: [
      { title: "Revenue Increase", value: "₹9,06,681", description: "Within 4 months of implementation" },
      { title: "Operational Efficiency", value: "Significantly", description: "Improved workflow automation" },
      { title: "Customer Satisfaction", value: "Enhanced", description: "Happier customers with better service" }
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

      
        {/* Navigation */}
          <div className="container mx-auto px-4 py-3 flex items-center mt-10 ">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2 " />
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
                {project.results.map((result, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">{result.title}</h3>
                    <p className="text-3xl font-bold text-blue-600">{result.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{result.description}</p>
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
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {project.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>
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
                      <div className="prose prose-gray">
                        <p>{project.solution}</p>
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