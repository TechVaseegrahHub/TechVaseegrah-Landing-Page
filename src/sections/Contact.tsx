"use client";

import stockupImage from "@/assets/high-fi.png";
import rockectImage from "@/assets/q-a.png";
import Image from "next/image";
import { motion, Variants, useScroll, useSpring, useTransform, useInView, useAnimation } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const MotionImage = motion(Image);

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(0px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_ja96qyy', 'template_tnc6ckm', form.current!, {
        publicKey: 'VkvBxQ3RnOgrj4gE3',
      });
      console.log('Message sent successfully!');
    } catch (error: any) {
      console.error('FAILED...', error.text);
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sectionRef = useRef(null);
  const heroBannerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b -[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          variants={heroVariant}
          initial="start"
          animate={isInView ? "end" : "start"}
          className="container"
        >
          <div className="section-heading">
            <div className="flex justify-center">
              <motion.div variants={heroChildVariant} className="tag">
                Contact Us
              </motion.div>
            </div>
            <motion.h2 variants={heroChildVariant} className="section-title mt-5">
              Get in Touch with Us
            </motion.h2>
            <motion.p variants={heroChildVariant} className="section-description mt-5">
              Have questions, feedback, or need assistance? Feel free to reach out to us. Our team is here to help you
              with anything related to our herbal products. Fill out the form below or connect with us through WhatsApp. We
              look forward to hearing from you!
            </motion.p>
          </div>

          <div className="relative">
            <motion.div
              className="absolute bg-blue- inset-5 blur-[50px] -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-blue- blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
            />
            <MotionImage
              variants={heroChildVariant}
              src={stockupImage}
              alt="Stock Up"
              height={262}
              width={302}
              className="hidden md:block absolute -right-36 -top-72"
              style={{ translateY }}
            />
            <MotionImage
              variants={heroChildVariant}
              src={rockectImage}
              alt="Rocket Startup"
              height={200}
              width={200}
              className="hidden md:block absolute bottom-44 -left-36"
              style={{ translateY }}
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mt-20"
        >
          <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 mt-4">Feel free to contact us through email, phone, or visit our location.</p>

            <div className="mt-6 space-y-6">
              <ContactInfo icon={MapPin} content="9, Vijaya Nagar, Reddypalayam Road, Thanjavur-613009" />
              <ContactInfo icon={Phone} content="+91 85240 89733" link="tel:+918524089733" />
              <ContactInfo icon={Mail} content="admin@techvaseegrah.com" link="mailto:admin@techvaseegrah.com" />
            </div>

            <div className="mt-8 md:mt-10">
              <p className="text-gray-700 font-medium">Connect with us:</p>
              <div className="flex space-x-6 mt-4">
                <SocialButton link="https://www.linkedin.com/company/tech-vaseegrah/posts/?feedView=all" icon={<FaLinkedin size={24} />} />
                <SocialButton link="https://www.instagram.com/techvaseegrah/" icon={<FaInstagram size={24} />} />
                <SocialButton link="https://wa.me/+918524089733" icon={<FaWhatsapp size={24} />} />
                <SocialButton link="mailto:admin@techvaseegrah.com" icon={<FaEnvelope size={24} />} />
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="md:w-1/2 p-8 md:p-12 space-y-5 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
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
                name="user_email"
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
              className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all flex items-center justify-center"
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
