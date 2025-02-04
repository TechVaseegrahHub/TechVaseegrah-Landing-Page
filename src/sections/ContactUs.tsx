"use client";
import pyramidImage from "@/assets/contactus.png";
import tubeImage from "@/assets/bulb.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="section-heading text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-16 w-px bg-gray-300 top-full"></div>
          <div className="tag">Let's Talk</div>
          <h2 className="section-title mt-5">
            Contact Us
          </h2>
          <p className="section-description mt-5 ">
            We're here to help and answer any questions you may have. Reach out to us to learn more about our services, get
            support, or apply for positions.
          </p>
        </div>
        <div className="relative">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 flex flex-col md:flex-row gap-12">
            <form className="space-y-8 md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                What can we help you with?
              </h2>
              <div className="grid grid-cols-1 gap-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                  Send Message
                </button>
              </div>
            </form>
            <div className="md:w-1/3 space-y-8">
              <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
              <div className="flex items-center gap-4">
                <MapPin className="text-gray-600 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">123 Main St, Anytown, USA 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gray-600 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gray-600 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={280}
            width={280}
            className="hidden lg:block absolute -right-2 -top-64"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={190}
            width={190}
            className="hidden lg:block absolute top-52 -left-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
