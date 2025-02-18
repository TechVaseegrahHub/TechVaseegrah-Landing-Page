"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

export const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  // ✅ **Trigger animation immediately on page load**
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // ✅ **No delay, instant animations**
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* 1️⃣ Contact Us Title */}
        <motion.div initial="hidden" animate={controls} className="text-center mb-12 md:mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold section-title mt-5">
            Contact Us
          </motion.h2>

          {/* 2️⃣ Description */}
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto section-description mt-4 md:mt-5">
            We&#8217;re always open to new opportunities! Contact us for any inquiries or partnerships.
          </motion.p>
        </motion.div>

        {/* 3️⃣ Form Container (Instant animation) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
        >
          {/* Contact Information Section */}
          <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 mt-4">Feel free to contact us through email, phone, or visit our location.</p>

            <div className="mt-6 space-y-6">
              <ContactInfo icon={MapPin} content="9, Vijaya Nagar, Reddypalayam Road, Thanjavur-613009" />
              <ContactInfo icon={Phone} content="+91 85240 89733" link="tel:+918524089733" />
              <ContactInfo icon={Mail} content="admin@techvaseegrah.com" link="mailto:admin@techvaseegrah.com" />
            </div>

            {/* Social Media Links */}
            <div className="mt-8 md:mt-10">
              <p className="text-gray-700 font-medium">Connect with us:</p>
              <div className="flex space-x-6 mt-4">
                <SocialButton link="https://linkedin.com" icon={<FaLinkedin size={24} />} />
                <SocialButton link="https://github.com" icon={<FaGithub size={24} />} />
                <SocialButton link="https://instagram.com" icon={<FaInstagram size={24} />} />
                <SocialButton link="https://wa.me/+918524089733" icon={<FaWhatsapp size={24} />} />
                <SocialButton link="mailto:admin@techvaseegrah.com" icon={<FaEnvelope size={24} />} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 p-8 md:p-12 space-y-5 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none transition-all resize-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Send className="h-5 w-5 mr-2" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* 📍 Contact Info Component */
const ContactInfo = ({ icon: Icon, content, link }: { icon: any; content: string; link?: string }) => (
  <div className="flex items-center">
    <Icon className="w-6 h-6 mr-3 text-gray-700" />
    {link ? (
      <a href={link} className="text-gray-800 font-medium hover:underline">
        {content}
      </a>
    ) : (
      <p className="text-gray-800 font-medium">{content}</p>
    )}
  </div>
);

/* 🔗 Social Media Button */
const SocialButton = ({ link, icon }: { link: string; icon: React.ReactNode }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition transform hover:scale-110">
    {icon}
  </a>
);
