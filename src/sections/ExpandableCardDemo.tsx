"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* ✅ Overlay when expanded */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* ✅ Expanded View */}
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 flex justify-center items-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[450px] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={350}
                  height={350}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-auto"
                />
              </motion.div>

              <div className="p-6 flex flex-col gap-5"> {/* ✅ Increased spacing between elements */}
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-3xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
                >
                  {active.title}
                </motion.h3>

                {/* ✅ Ensuring Internship Description Always Visible */}
                <motion.p
                  layout
                  className="text-xl font-medium  tracking-tight text-[#010D3E] mt-1"
                >
                  {active.description}
                </motion.p>

                <motion.p layout className="text-left text-gray-700">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.p>

                {/* ✅ Increased Space Before Apply Button */}
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 mt-6 btn btn-primary inline-block self-center md:self-start"
                >
                  {active.ctaText}
                </motion.a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* ✅ Card List */}
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={140}
                  height={140}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-20 md:w-20 rounded-lg object-cover"
                />
              </motion.div>
              <div className="text-center md:text-left w-full">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-3xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                  {card.title}
                </motion.h3>

                {/* ✅ Ensuring Internship Description Always Visible */}
                <motion.p
                  layout
                  className="text-xl font-medium  tracking-tight text-[#010D3E] mt-1">
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* ✅ Increased Space Before Apply Button */}
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 btn btn-primary mt-3 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Internship",
    title: "Web Development",
    src: "/assets/images/we.png",
    ctaText: "Apply",
    ctaLink: "",
    content: () => (
      <p>
        Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless.
      </p>
    ),
  },
  {
    description: "Internship",
    title: "Web App Development",
    src: "/assets/images/laptop.png",
    ctaText: "Apply",
    ctaLink: "",
    content: () => (
      <p>
        Empower your applications with decentralized data solutions, ensuring security and transparency at every step.
      </p>
    ),
  },
  {
    description: "Internship",
    title: "UI/UX Designer",
    src: "/assets/images/ui-ux-eye.png",
    ctaText: "Apply",
    ctaLink: "",
    content: () => (
      <p>
        Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.
      </p>
    ),
  },
  {
    description: "Internship",
    title: "Data Science / Machine Learning",
    src: "/assets/images/data-sci.png",
    ctaText: "Apply",
    ctaLink: "",
    content: () => (
      <p>
        Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.
      </p>
    ),
  },
];
