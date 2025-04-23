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
    "/assets/images/krish.png",
    "/assets/images/futurenature2.png"
  ]);

  const projects = [
    {
      title: "Ecommerce Website Case Study",
      subtitle: "E-commerce Solution",
      description: "Krish Collections (Website)",
      overview: "With the growing popularity of online shopping, Krish Collections, a clothing business offering a wide range of apparel, decided to launch an eCommerce platform. The goal was to create a user-friendly website that could cater to various types of clothing, including casual wear and ethnic attire. The website needed to be modern, mobile-friendly, and easy to use, to enhance customer experience and drive sales.",
      objectives: [
        "To create a fully functional and visually appealing eCommerce website for selling various types of clothing.",
        "To offer a smooth shopping experience with clear product categories and filtering options.",
        "To include promotional discounts and offers to attract more customers and boost sales.",
        "To ensure the website is responsive, providing a good experience on both desktop and mobile devices.",
        "To integrate a secure payment system with multiple payment options for customers.",
        "To improve website speed and performance for faster load times and a better user experience."
      ],
      solutions: [
        {
          title: "Responsive Design",
          description: "The website was made fully responsive, ensuring customers have a consistent and easy experience whether browsing on a desktop or mobile device."
        },
        {
          title: "Product Categories and Filters",
          description: "The website displays different product categories like 'Exclusive Kurti Collection' and 'Ethnic Wear' on the homepage, helping customers easily find what they are looking for. Filters were added to help sort through clothing options."
        },
        {
          title: "Visual Design",
          description: "A clean, modern design was used, with high-quality product images, allowing customers to clearly see the clothing and make better purchasing decisions."
        },
        {
          title: "Secure Payment System",
          description: "The website includes a secure payment gateway that supports various payment methods like credit/debit cards, net banking, and UPI, ensuring safe and easy transactions."
        },
        {
          title: "Promotions and Discounts",
          description: "Offers like 'Get 10% off on purchases above ₹3000' and '5% off on purchases above ₹1500' were added to encourage customers to make larger purchases and increase sales."
        }
      ],
      metrics: [
        { title: "Mobile Traffic", value: "65%", description: "Of total visitors" },
        { title: "Conversion Rate", value: "4.5%", description: "Above industry average" },
        { title: "Bounce Rate", value: "32%", description: "Lower than competitors" }
      ]
    },
    {
      title: "Ecommerce Website Case Study",
      subtitle: "Digital Solution",
      description: "Future Nature(Website)",
      overview: "Future Nature, a honey business specializing in 100% pure and natural honey, sought to establish a modern, user-friendly online store to connect with customers. The goal was to create a visually appealing website that effectively communicated the purity and quality of their honey products while offering a seamless shopping experience for customers.",
      objectives: [
        "To design and develop a fully functional and visually appealing eCommerce website to sell pure honey and related products.",
        "To ensure the website was easy to navigate, with clear product categorization and simple filtering options for a smooth shopping experience.",
        "To enhance the customer experience by incorporating user-friendly features such as a back-to-top button with a honey bee animation.",
        "To create a website that showcases the natural and organic qualities of the products with a vibrant, attractive design.",
        "To integrate a secure and reliable payment system for easy and safe transactions.",
        "To ensure the website is fully responsive, providing a great shopping experience on both desktop and mobile devices."
      ],
      solutions: [
        {
          title: "Back-to-Top Button with Honey Bee Animation",
          description: "A fun, interactive back-to-top button was added, featuring a honey bee animation. This not only adds a playful touch but also enhances user experience by making it easier for customers to navigate back to the top of the page."
        },
        {
          title: "Responsive Design",
          description: "The website was designed to be fully responsive, ensuring customers could shop easily from any device, whether desktop, tablet, or mobile. The design adapts seamlessly across screen sizes, making the site accessible to a wider audience."
        },
        {
          title: "Product Categories and Filters",
          description: "To help customers find the products they are looking for quickly, the website includes well-organized product categories and an easy-to-use filter system. This allows customers to browse different honey products with ease."
        },
        {
          title: "Visual Design",
          description: "The design uses bright and vibrant colors with a focus on high-quality images of the honey jars, reinforcing the natural and organic quality of the products. The visuals are clean, modern, and align with the brand's values of purity and sustainability."
        },
        {
          title: "Secure Payment System",
          description: "A trusted and secure payment gateway was integrated, providing customers with multiple payment options, such as credit/debit cards, net banking, and UPI. This ensures safe and convenient transactions for all users."
        }
      ],
      metrics: [
        { title: "Mobile Orders", value: "70%", description: "Of total sales" },
        { title: "Repeat Customers", value: "45%", description: "Customer retention rate" },
        { title: "Conversion Rate", value: "5.2%", description: "Above industry average" }
      ]
    }
  ];

  const currentProject = projects[currentProjectIndex];

  return (
    <>
      <Head>
        <title>{currentProject.title}</title>
        <meta
          name="description"
          content={`Case study for ${currentProject.description}`}
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
                <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                  <Image
                    src={projectImages[currentProjectIndex]}
                    alt={`${currentProject.description} showcase`}
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
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Toggle */}
            <div className="flex justify-center mb-12 items-center">
              <div className="flex space-x-2 mr-4">
                <button
                  onClick={() => setCurrentProjectIndex(0)}
                  className={`w-3 h-3 rounded-full ${
                    currentProjectIndex === 0 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="View Krish Collections project"
                />
                <button
                  onClick={() => setCurrentProjectIndex(1)}
                  className={`w-3 h-3 rounded-full ${
                    currentProjectIndex === 1 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="View Future Nature project"
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
                    <p className="text-gray-700 mb-6">
                      The website was developed with several key features to meet the business needs of {currentProject.description}:
                    </p>
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