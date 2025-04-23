"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeft } from "lucide-react";

export default function F3() {
  const router = useRouter();
  const [currentImageIndex] = useState(0);
  const images = ["/assets/images/F3.jpg"];

  const project = {
    title: "F3-engine Application",
    subtitle: "Multi-tenant SaaS Platform",
    description: "Automated backend operations for e-commerce businesses",
    overview: "F3-engine is a powerful multi-tenant SaaS platform built to automate and manage backend operations for e-commerce businesses, especially those using WooCommerce. It centralizes key post-order processes such as billing, packing, tracking, printing, and inventory management. Each tenant operates in a secure, isolated environment with custom workflows.",
    objectives: [
      "Simplify E-commerce Backend Operations: Streamline order processing, billing, packing, and tracking into one centralized platform for WooCommerce-based businesses.",
      "Enable Multi-Tenant SaaS Architecture: Allow multiple businesses to use the platform independently with isolated data, branding, and access controls.",
      "Automate Post-Order Workflows: Reduce manual efforts by automating tasks like invoice generation, label printing, order tracking, and customer communication.",
      "Integrate WhatsApp for Commerce: Use WhatsApp APIs to enable order flow, customer interaction, and payment confirmation through a conversational interface.",
      "Support Smart Printing & Inventory Management: Offer flexible printing options (A4, 4x6, 4x4, etc.) and live inventory tracking for efficient warehouse and shipping operations.",
      "Provide Actionable Business Insights: Deliver real-time analytics and sales insights to help businesses make data-driven decisions through visual dashboards and reports."
    ],
    solution: "F3-engine provides a complete backend solution that automates post-order workflows and eliminates manual processing for WooCommerce stores. It features smart modules for packing, billing, tracking, holding, and printing, each tailored to streamline warehouse and order management. The system supports multiple paper sizes for invoices and packing slips, and allows local or remote printing. With WhatsApp integration, businesses can manage orders and communicate directly with customers in real time. Built on a scalable multi-tenant architecture, F3-engine ensures data isolation and customization per client. It empowers e-commerce businesses to run smoother, faster, and more efficiently from a single dashboard.",
    metrics: [
      { title: "Process Automation", value: "90%", description: "Reduction in manual tasks" },
      { title: "Order Processing", value: "3x Faster", description: "Compared to manual methods" },
      { title: "Tenant Capacity", value: "100+", description: "Businesses supported simultaneously" }
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <div className="w-300 md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
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

            {/* Content Sections - Modified Layout */}
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Overview and Objectives */}
              <div className="w-full lg:w-1/2">
                {/* Overview Section */}
                <section className="mb-8">
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
                <section className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-700 font-medium">02</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="pl-2">
                            <span className="font-medium">{objective.split(':')[0]}:</span>
                            {objective.split(':')[1]}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column - Solution */}
              <div className="w-full lg:w-1/2">
                <section className="mb-8">
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