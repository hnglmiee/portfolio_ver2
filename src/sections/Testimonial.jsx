import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '~/constants'
import TestimonialCard from '~/components/TestimonialCard'

function Testimonial() {
  return (
    <section id='testimonail' className='flex-center relative md:px-10 xl:px-20'>
      <GradientSpheres sphere1Class={"testimonial-gradient-sphere testimonial-sphere-1"}
        sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"} />

      <div className="w-full h-full container relative z-10 md:my-40 my-20">
        <TitleHeader
          title={"ACTIVITIES"}
          number={"04"}
          text={"Some Things I've Joint"}
        />
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {
              testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
