import Image from 'next/image';
import React from 'react';
const items = [
  
  {
    id: '2',
    url: '/priya.png',
    title: 'Mrs. Priyadharshini',
    description: 'Web Developer',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },

  {
    id: '1',
    url: '/balaji1.jpg',
    title: 'Mr. Balaji Selvaraj',
    description: 'Website Developer',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },

  {
    id: '3',
    url: '/prem.jpeg',
    title: 'Prem ',
    description: 'MERN Stack Developer',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },

  {
    id: '4',
    url: '/hariprasath.jpg',
    title: 'Hari Prasath ',
    description: 'MERN Stack Developer',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
];
function WebDevPhoto() {
  return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]  flex items-center justify-center p-4">
          <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h1 className="text-4xl tracking-tighter 
             bg-gradient-to-b from-black to-[#001E80] 
             text-transparent bg-clip-text font-bold md:text-5xl">Professional Web Development Team</h1>
    
              <p className="text-[#010D3E] mt-6">
              At Tech Vaseegrah, we understand that startups need quick, secure, and efficient solutions. That's why we helped UBS create secure demo versions of their products to showcase their services without compromising data privacy. With our frontend and UI expertise, we ensure your ideas are brought to life, enabling you to present your business confidently to clients and investors.
              </p>

            </div>
    
            {/* Right content - Laptop image */}
            <div className="relative">
                    <>
      <div className='group flex max-md:flex-col justify-center gap-2 w-[100%] mx-auto mb-10 mt-3'>
        {items.map((item, i: number) => {
          return (
            <article className='group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300'>
              <a
                className='absolute inset-0 text-white z-10  p-3 flex flex-col justify-end'
                href='#0'
              >
                <h1 className=' text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
                  {item?.title}
                </h1>
                <span className=' text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
                  {item?.description}
                </span>
              </a>
              <Image
                className='object-cover h-72 md:h-[420px]  w-full'
                src={item?.url}
                width='960'
                height='480'
                alt='Image 01'
              />
            </article>
          );
        })}
      </div>
    </>
      </div>
      </div>
      </div>
 
  );
}
export default WebDevPhoto;