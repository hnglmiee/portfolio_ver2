import React from 'react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='col-span-1 bg-[#495f87] testimonial-card group rounded-xl'>
      <div className="group-hover:bg-[#6ECBFF] transition-all duration-700 p-10 rounded-xl">
        <div className="flex items-center justify-between">
          <img src={testimonial.imgPath} alt="cover"
            className='md:w-36 md: h-36 w-24 h-24 border border-transparent rounded-full group-hover:border-white group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700'
          />
          <img src="/images/quote.png" alt="quote" className='md:w-28 md: h-28 w-14 h-14 group-hover:mix-blend-screen transition-all duration-700' />
        </div>
        <div className="mt-10">
          <p className='md:text-2xl font-light text-[#ffffff] group-hover:text-[#495f87] transition-all duration-700'>{testimonial.review}</p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between md:mt-20 mt-10 gap-5">
          <div>
            <h1 className='text-[#ffffff] md:text-3xl text-lg font-medium mb-1 group-hover:text-[#495f87] transition-all duration-700'>{testimonial.name}</h1>
            <p className='md:text-xl text-sm opacity-70 font-light text-[#ffffff] group-hover:text-[#495f87] transition-all duration-700'>{testimonial.pos}</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/images/x.svg" alt="" className='md:size-12 size-5 group-hover:mix-blend-luminosity transition-all duration-700' />
            <img src="/images/fb.svg" alt="" className='md:size-12 size-5 group-hover:mix-blend-luminosity transition-all duration-700' />
          </div>
        </div>


      </div>
    </div>
  )
};

export default TestimonialCard
