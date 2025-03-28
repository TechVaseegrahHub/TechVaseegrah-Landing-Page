import React from 'react';
import Image from 'next/image';
import {
 ArrowBigDown,
  ArrowRight,
  ChevronRight,
  Heart,
  MoveUpRight,
} from 'lucide-react';

function About() {
  return (
    <div className='w-[400px] relative mt-4 h-[430px] group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col mb-12'>
      <div className='w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300'>
        <Image
          src="/ceo2.jpg"  // This points to public/ceo.jpg
          alt="CEO"
          width={400}
          height={400}
          className='h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
          priority
        />
      </div>
      <article className='relative overflow-hidden flex-grow'>
        <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
          <p className='md:text-2xl font-semibold section-title text-left'>SreeKarrthiyen Mahadevan</p>
          <p className='sm:text-base text-sm section-description text-left'>CEO & Design Engineer</p>
        </div>
        <button className='absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-3xl font-medium transition-all duration-300 w-full text-center section-title'>
           Founder & CEO 
        </button>
      </article>
    </div>
  );
}

export default About;