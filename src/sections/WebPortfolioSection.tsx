
import React, { useState } from "react";

// --- Your images ---
import futurenature from "../assets/futurenature.png";
import vaseegrahveda from "../assets/vaseegrahveda.png";
import littledevotee from "../assets/littledevotee.png";
import sarusmagizham from "../assets/sarusmagizham.png";
import nimalas from "../assets/nimalas1.png";
import saibariya from "../assets/saibariya.png";
import hunnybi from "../assets/hunnybi.png";
import inficlothing from "../assets/inficlothing.png";
import gulla from "../assets/gulla.png";
import cosmichome from "../assets/cosmichome.png";
import amzfarm from "../assets/amzfarm.png";
import cleansotrichy from "../assets/cleansotrichy.png";
import jaiarts from "../assets/jaiarts.png";
import wowcolour from "../assets/wowcolour.png";
import cupsambrani from "../assets/cupsambrani.png";
import annaporani from "../assets/annaporani.png";
import rathnafood from "../assets/rathnafood.png";
import cleansoindia from "../assets/cleansoindia.png";
import surfsamudra from "../assets/surfsamudra.png";

// Types
type Project = { img: string; link: string };
type Category = { title: string; projects: Project[] };

// --- Data ---
const categories: Category[] = [
  {
    title: "₹40,000 Websites",
    projects: [
      { img: littledevotee.src, link: "https://littledevotee.in/" },
      { img: futurenature.src, link: "https://futurenature.in/" },
      { img: nimalas.src, link: "https://nimalas.com/" },
      { img: sarusmagizham.src, link: "https://sarusmagizham.com/" },
    ],
  },
  {
    title: "₹30,000 Websites",
    projects: [
      { img: vaseegrahveda.src, link: "https://vaseegrahveda.shop/" },
      { img: hunnybi.src, link: "https://hunnybi.com/" },
      { img: inficlothing.src, link: "https://inficlothing.in/" },
      { img: gulla.src, link: "https://gulla.ca/" },
      { img: saibariya.src, link: "https://saibariya.com/" },
    ],
  },
  {
    title: "₹20,000 Websites",
    projects: [
      { img: cosmichome.src, link: "https://cosmichome.in/" },
      { img: amzfarm.src, link: "https://amzfarm.com/" },
      { img: cleansotrichy.src, link: "https://cleansotrichy.com/" },
      { img: jaiarts.src, link: "https://jaiartsandculture.sg/" },
      { img: wowcolour.src, link: "https://wowcolourcrackers.com/" },
    ],
  },
  {
    title: "₹10,000 Websites",
    projects: [
      { img: cupsambrani.src, link: "https://cupsambrani.com/" },
      { img: annaporani.src, link: "https://annaporani.com/" },
      { img: rathnafood.src, link: "https://rathnafood.com/" },
      { img: cleansoindia.src, link: "https://cleansoindia.com/" },
      { img: surfsamudra.src, link: "https://surfsamudra.in/" },
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-6 py-12 bg-white max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Website Packages
      </h2>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-48 flex flex-col gap-3">
          <h4 className="font-semibold text-gray-700 mb-2">CATEGORIES</h4>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`text-left px-4 py-2 rounded-lg transition ${
                activeIndex === idx
                  ? "bg-green-600 text-white font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Projects section */}
        <div className="flex-1 overflow-hidden">
          <h3 className="text-2xl font-semibold mb-6">
            {categories[activeIndex].title}
          </h3>

          {/* Scrollable row without visible scrollbar */}
          <div
            className="
              flex flex-nowrap gap-6 overflow-x-auto
              scrollbar-hide pb-2
              snap-x snap-mandatory
            "
            style={{ scrollBehavior: "smooth" }}
          >
            {categories[activeIndex].projects.map((project, idx) => (
              <div
                key={idx}
                className="
                  w-[260px] sm:w-[300px] flex-shrink-0
                  rounded-xl overflow-hidden shadow hover:shadow-lg transition
                  bg-white snap-start
                "
              >
                <img
                  src={project.img}
                  alt="Website preview"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="text-center py-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    🔗 View Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
