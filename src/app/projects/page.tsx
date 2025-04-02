"use client";
import { Project } from "@/sections/Project";
import { Carousel, Card } from "@/sections/Carousel";

// ✅ Import images correctly
import aiChatBotImage from "@/assets/instaxbot.png"; // Ensure it's in the `/public` folder
import eComImage from "@/assets/f3logo.png";
import f3Image from "@/assets/go.png";
import billzzyImage from "@/assets/billzzy-icon.png";



// ✅ Sample Data for Carousel
const projectCards = [ 
  {
    src: aiChatBotImage, // ✅ Imported image
    title: "InstaX Bot",
    category: "AI",
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
    title: "F3 Engine",
    category: "Technology",
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
    title: "GoWhats",
    category: "AI",
    content: <p>
                GoWhats is an all-in-one WhatsApp API SaaS application 
                built to streamline and automate every aspect of e-commerce 
                operations.<br/>
                From printing and packing to order tracking, inventory 
                management, and order holding, GoWhats simplifies the 
                entire workflow for online sellers. With powerful tools like 
                an intelligent chatbot and broadcast messaging, it helps 
                businesses stay connected with customers, minimize manual 
                tasks, and operate more efficiently all through WhatsApp.<br/>
                No matter the size of your business, GoWhats keeps your 
                operations smooth, your team organized, and your customers 
                satisfied..
              </p>,
  },

  {
    src:  billzzyImage, // ✅ Image from the `public` folder
    title: "Billzzy",
    category: "App",
    content: <p>
                Empowering Your Sales, Simplifying Your Workflow
                Streamline your billing process and boost productivity with automated address entry and smart order management.
                <br/>
                From printing and packing to order tracking, inventory 
                management, and order holding, GoWhats simplifies the 
                entire workflow for online sellers. With powerful tools like 
                an intelligent chatbot and broadcast messaging, it helps 
                businesses stay connected with customers, minimize manual 
                tasks, and operate more efficiently all through WhatsApp.<br/>
                No matter the size of your business, GoWhats keeps your 
                operations smooth, your team organized, and your customers 
                satisfied..
              </p>,
  },
];

export default function ProjectPage() {
  return (
    <div className="mb-10">
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