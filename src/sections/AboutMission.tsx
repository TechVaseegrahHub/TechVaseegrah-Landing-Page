import { useEffect, useRef } from 'react';

export default function AboutMission() {
  // Refs for the counter elements with proper typing
  const websiteRef = useRef<HTMLSpanElement>(null);
  const studentsRef = useRef<HTMLSpanElement>(null);
  const clientsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Function to handle the counting animation with proper parameter types
    const startCounting = (ref: React.RefObject<HTMLSpanElement>, target: number, duration = 2000) => {
      const node = ref.current;
      if (!node) return;

      let start = 0;
      const increment = target / (duration / 16); // 60fps

      const updateCounter = () => {
        start += increment;
        if (start < target) {
          node.textContent = Math.floor(start) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          node.textContent = target + '+';
        }
      };

      // Start the animation when the element is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      if (node) {
        observer.observe(node);
      }

      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    };

    // Start counting animations
    startCounting(websiteRef, 80, 1800);
    startCounting(studentsRef, 50, 1500);
    startCounting(clientsRef, 100, 2000);

    return () => {
      // Cleanup is handled within each startCounting function
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 rounded-lg bg-white ml-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Left column - Mission statement */}
        <div className="space-y-5 pt-0 md:pt-4 mr-0 lg:mr-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter 
                bg-gradient-to-b from-black to-[#001E80] 
                text-transparent bg-clip-text mb-4 sm:mb-6">Our Mission</h2>
          <p className="w-full text-lg sm:text-xl md:w-[140%] md:text-[22px] leading-relaxed sm:leading-[30px] tracking-tight text-[#010D3E] ">
            Tech Vaseegrah, our mission is to
            transform small businesses into smart
            businesses by providing innovative
            technology solutions, streamlining
            operations, and driving sustainable
            growth. We are committed to
            empowering entrepreneurs with tools
            and insights to thrive in a digital world.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter 
                        bg-gradient-to-b from-black to-[#001E80] 
                        text-transparent bg-clip-text mb-4 sm:mb-6 ">Our Vision</h2>
          <p className="w-full text-lg sm:text-xl md:w-[140%] md:text-[22px] leading-relaxed sm:leading-[30px] tracking-tight text-[#010D3E] mt-4 sm:mt-6">
            Our vision at Tech Vaseegrah is to be a leading catalyst in the digital
            transformation of small businesses,fostering innovation and sustainability.
            We aim to create a future where every business, regardless of size, thrives
            through smart technology and seamless integration.
          </p>
        </div>
        
        {/* Right column - Statistics - Centered on mobile */}
        <div className="flex flex-col items-center md:items-start justify-center py-4 sm:py-8 md:py-0 ml-0 lg:ml-48 mt-8 md:mt-12 text-center md:text-left">
          <div className="space-y-8 sm:space-y-14">
            <div>
              <h3 className="text-3xl text-center sm:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
                              text-transparent bg-clip-text">
                <span ref={websiteRef}>0+</span>
              </h3>
              <p className="text-base text-center sm:text-lg leading-relaxed sm:leading-[30px] tracking-tight text-[#010D3E] mt-1">Websites Developed</p>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-3xl text-center sm:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
                              text-transparent bg-clip-text">
                <span ref={studentsRef}>0+</span>
              </h3>
              <p className="text-base text-center sm:text-lg leading-relaxed sm:leading-[30px] tracking-tight text-[#010D3E] mt-1">Trained Students</p>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-3xl text-center sm:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
                              text-transparent bg-clip-text">
                <span ref={clientsRef}>0+</span>
              </h3>
              <p className="text-base text-center sm:text-lg leading-relaxed sm:leading-[30px] tracking-tight text-[#010D3E] mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}