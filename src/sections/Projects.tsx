"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Herbal Store",
    description: "A fully functional e-commerce platform for herbal products.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "AI Chatbot Integration",
    description: "Implemented AI-based chatbot to enhance customer support.",
    image: "/assets/chatbot.png",
  },
  {
    title: "Mobile App Design",
    description: "Designed an intuitive mobile application for herbal health tips.",
    image: "/assets/mobile-app.png",
  },
  {
    title: "SEO Optimization",
    description: "Boosted website traffic through advanced SEO techniques.",
    image: "/assets/seo.png",
  },
  {
    title: "Subscription Service",
    description: "Developed a subscription model for recurring product delivery.",
    image: "/assets/subscription.png",
  },
  {
    title: "Analytics Dashboard",
    description: "Built a dashboard for monitoring sales and user analytics.",
    image: "/assets/dashboard.png",
  },
  {
    title: "Custom Email Templates",
    description: "Designed beautiful, responsive email templates.",
    image: "/assets/email.png",
  },
  {
    title: "Social Media Campaign",
    description: "Launched successful social media marketing campaigns.",
    image: "/assets/social.png",
  },
];

export const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#EAF3FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Projects</h2>
          <p className="mt-4 text-gray-600">
            Take a look at some of our impactful projects that made a difference.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
              whileHover={{ translateY: -5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover h-56"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
