"use client";
import { Project } from "@/sections/Project";
import { Carousel, Card } from "@/sections/Carousel";

// ✅ Import images correctly
import aiChatBotImage from "@/assets/ai-chat-bot.jpeg"; // Ensure it's in the `/public` folder
import eComImage from "@/assets/ecom.jpeg";
import f3Image from "@/assets/f3.jpg";

// ✅ Sample Data for Carousel
const projectCards = [ 
  {
    src: aiChatBotImage, // ✅ Imported image
    title: "AI Product Generator",
    category: "Technology",
    content: <p>
                Generate AI-powered product descriptions.
                All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.

               </p>,
  },
  
  {
    src: eComImage, // ✅ Image from the `public` folder
    title: "E-Commerce Analytics",
    category: "Business",
    content: <p>
                Analyze your sales data with AI-driven insights.
                All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.
              </p>,
  },
  
  {
    src:  f3Image, // ✅ Image from the `public` folder
    title: "F3 Engine",
    category: "AI",
    content: <p>
                All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.
                All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.All-in-one order processing platform 
                that streamlines e-commerce operations, 
                from printing and packing to tracking and 
                inventory management. It helps website owners 
                stay organized, efficient, and enhance customer 
                satisfaction.
              </p>,
  },
];

export default function ProjectPage() {
  return (
    <div>
      <Project />

      {/* ✅ Pass correct `src` values to `next/image` */}
      <Carousel 
        items={projectCards.map((project, index) => (
          <Card key={index} card={project} index={index} />
        ))}
      />
    </div>
  );
}