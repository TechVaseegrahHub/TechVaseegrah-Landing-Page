"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function WordPressDev() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  const testimonials = [
    {
      quote:
        "The custom WordPress theme they built for our magazine increased our page views by 45% and dramatically improved our site's performance.",
      author: "Thomas Reynolds, Editor-in-Chief",
      company: "Urban Lifestyle Magazine",
    },
    {
      quote:
        "Their WordPress expertise helped us migrate from an outdated CMS to a modern, customizable solution that our team loves using.",
      author: "Sarah Chen, Marketing Director",
      company: "TechInnovate",
    },
  ];

  const features = [
    {
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes built for performance and SEO",
      icon: "🎨",
    },
    {
      title: "Plugin Development",
      description: "Custom functionality tailored to specific business needs",
      icon: "🔌",
    },
    {
      title: "WooCommerce Integration",
      description: "Seamless e-commerce functionality for WordPress sites",
      icon: "🛒",
    },
    {
      title: "Performance Optimization",
      description: "Speed improvements and caching strategies",
      icon: "⚡",
    },
  ];

  return (
    <>
      <Head>
        <title>WordPress Development Services</title>
        <meta
          name="description"
          content="Custom WordPress theme and plugin development services"
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
              WordPress Solutions
            </span>
            <h1 className="text-4xl font-bold mb-6">
              WordPress Development
            </h1>
            <p className="text-xl text-gray-600">
              Custom WordPress themes and plugins for businesses and publishers
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-xl">WordPress Theme Showcase</span>
              </div>

              <Image
                src={images[currentImageIndex]}
                alt={`WordPress Development Screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>

            <div className="flex space-x-2 justify-center">
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
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p>
                We specialize in developing custom WordPress solutions that combine
                elegant design with powerful functionality. Our WordPress development
                services help businesses create unique online experiences that stand
                out from template-based sites while maintaining the ease of use that
                makes WordPress the world's most popular CMS.
              </p>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our WordPress Services</h2>
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
            </section>

            {/* Development Process */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Our WordPress Development Process
              </h3>
              <p>
                We follow a structured approach to WordPress development that ensures
                high-quality, maintainable, and secure websites.
              </p>
              <ol className="mt-4 space-y-4">
                <li>
                  <strong>Discovery:</strong> Understanding your business goals, target audience, and content requirements
                </li>
                <li>
                  <strong>Design & Wireframing:</strong> Creating intuitive user experiences and visual designs
                </li>
                <li>
                  <strong>Development:</strong> Building custom themes and plugins using WordPress best practices
                </li>
                <li>
                  <strong>Testing:</strong> Comprehensive cross-browser and device testing
                </li>
                <li>
                  <strong>Deployment:</strong> Smooth launch with performance optimization
                </li>
                <li>
                  <strong>Maintenance:</strong> Ongoing support, updates, and security monitoring
                </li>
              </ol>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Client Results</h2>
              <ul>
                <li>50% faster page load times compared to previous WordPress setups</li>
                <li>40% increase in organic search traffic through SEO-optimized theme development</li>
                <li>65% reduction in plugin-related security vulnerabilities</li>
                <li>4.9/5 average client satisfaction rating</li>
              </ul>
            </section>

            {/* Technical Specs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Approach</h2>
              <p>
                Our WordPress development follows modern best practices including custom
                post types, Advanced Custom Fields integration, block editor (Gutenberg)
                compatibility, and modular PHP architecture for maintainability.
              </p>
            </section>

            {/* Testimonials */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                  >
                    <p className="mb-4 italic text-gray-700">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                        {testimonial.company.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="my-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold mb-4">
                Need a custom WordPress solution?
              </h2>
              <p>
                Contact us to discuss how we can help you create a standout WordPress
                website or application that meets your unique business requirements.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-4 hover:bg-blue-700 transition-colors">
                Request a Consultation
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}