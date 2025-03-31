import Image from "next/image"

export default function AboutHeading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter 
         bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text">
            “Tech Vaseegrah isn&apos;t just a tech company or an IT startup — it&apos;s a military squad, fiercely trained and highly equipped to conquer the digital world.”<br/> <span className="block text-right">- Sreekarrthikeyan</span>
          </h2>
          <p className=" text-[#010D3E]">
            Our team of dedicated engineers, designers, and innovators is committed to creating cutting-edge solutions
            that transform how businesses operate. We combine technical expertise with creative thinking to develop
            products that make a real difference.
          </p>
          <p className="text-[#010D3E]">
            Founded with a vision to revolutionize the tech landscape, we continue to push boundaries and explore new
            possibilities. Our collaborative approach and customer-centric focus drive everything we do.
          </p>
        </div>
      <div className='w-[400px] relative mt-4 h-[430px] group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col'>
         <div className='w-full  rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300'>
           <Image
             src={'/ceo3.jpg'}
             alt='shoes'
             width={600}
             height={600}
             className='h-full w-full  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
           />
         </div>
         <article className='relative overflow-hidden  flex-grow'>
           <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
             <p className='md:text-2xl font-semibold  bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text'>Mr. SreeKarrthiyen Mahadevan</p>
             <p className='sm:text-base text-sm  text-[#010D3E]'>CEO &amp; Founder</p>
           </div>
           <button className='absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text'>
             CEO &amp; Founder
           </button>
         </article>
       </div>
      </div>
    </div>
  )
}

