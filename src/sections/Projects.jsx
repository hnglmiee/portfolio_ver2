import React from 'react'
import Carousel from '~/components/Carousel'
import GradientSpheres from '~/components/GradientSpheres'
import TitleHeader from '~/components/TitleHeader'

function Projects() {
  return (
    <section className='w-full h-full flex-center relative md:px-10 xl:px-20' id='project'>
      <GradientSpheres sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"} />

      <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"MY PROJECTS"}
            number={"03"}
            text={"Some Things I've Built"}
          />
        </div>
        <div className="md: mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Projects
