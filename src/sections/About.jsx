import { Canvas } from '@react-three/fiber'
import React from 'react'
import GradientSpheres from '~/components/GradientSpheres'
import TitleHeader from '~/components/TitleHeader'
import { OrbitControls } from '@react-three/drei'
import { Cat } from '../../public/models/Koi_cat'
import { bentoSocialLinks } from '~/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {
    // slide in animations for the cards
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        // markers: true
      }
    });
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        // markers: true
      }
    })
  }, [])

  return (
    <section id='about' className='flex-center relative md:px-10 xl:px-20 text-[#2E2E2E]'>
      {/* <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"} /> */}
      <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-2"} />
      <div className='container w-full h-full md:mt-40 mt-20 relative z-10'>

        <TitleHeader title={"About Me"} text={"Software Developer"} number={"01"} />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-11 gap-5">
            <div className='md:col-span-12 col-span-12 row-span-4'>
              <div className='border border-[#495f87] rounded-2xl p-7 w-full h-full'>
                <div>
                  <img src='/images/flower.svg' alt='flower' className='md:w-32 w-16 flower' />
                </div>
                <div className="mt-5">
                  <h1 className='text-[#37568f] md:text-5xl text-3xl'>Software Engineering Student</h1>
                  <p className='md: text-2xl mt-2'>Profcient in Java and experienced with the Spring ecosystem, including Spring Boot, Spring MVC, Spring Data JPA, and Spring Security, for building robust, scalable, and secure web applications.</p>
                </div>
              </div>
            </div>
            {/* 3d cat
            <div className='md:col-span-5 col-span-12 row-span-5'>
              <div className='hover:cursor-grab rounded-2xl w-full h-full'>
                <div className='w-full h-full'>
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Cat scale={1} position={[0, 0, 0]} rotation={[0, -5.5, 0]} />
                  </Canvas>
                </div>
              </div>
            </div> */}

            {/* web design card */}
            <div id='card' className='md:col-span-6 col-span-12 row-span-3'>
              <div className='border border-[#495f87] rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center'>
                  <h1 className='text-[#37568f] md:text-3xl text-2xl font-medium' animated-text>Web Designer</h1>
                  <p className='md:text-2xl max-w-120' animated-text> Familiar with RESTful API development, relational databases, and backend best practices.</p>
                </div>
              </div>
            </div>

            {/* UI Design Card */}
            <div id='card' className='md:col-span-6 col-span-12 row-span-3'>
              <div className='border border-[#495f87] rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center'>
                  <h1 className='text-[#37568f] md:text-3xl text-2xl font-medium' animated-text>Developer</h1>
                  <p className='md:text-2xl max-w-120' animated-text> Familiar with RESTful API development, relational databases, and backend best practices.</p>
                </div>
              </div>
            </div>


            {/* Moti Card
            <div className='md:col-span-4 col-span-12 row-span-4'>
              <div className='border border-[#495f87] rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col justify-between h-full'>
                  {
                    [
                      "BE YOURSELF",
                      "BE DIFFERENT",
                      "BUILD DIFFERENT",
                    ].map(
                      (text, index) => (
                        <h1 className='text-[#37568f] md:text-5xl text-3xl font-bold' key={index}>
                          {text}
                        </h1>
                      )
                    )
                  }
                </div>
              </div>
            </div> */}

            {/* 3d cat */}
            <div className='md:col-span-4 col-span-12 row-span-4'>
              <div className='hover:cursor-grab rounded-2xl w-full h-full'>
                <div className='w-full h-full'>
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Cat scale={1.3} position={[0, -0.5, 0]} rotation={[0, -5.5, 0]} />
                  </Canvas>
                </div>
              </div>
            </div>

            {/* Bento social link */}
            {
              bentoSocialLinks.map((item, index) => {
                return (
                  <div key={index} className='md:col-span-4 col-span-12 row-span-2'>
                    <div className='border border-[#495f87] rounded-2xl p-7 w-full h-full group cursor-pointer'>
                      <div className="flex justify-between items-center h-full">
                        <div className="flex items-center md:gap-5">
                          <img src={item.icon} alt={item.icon} />
                          <h1 className='text-[#37568f] md:text-3xl text-xl md:m-0 ms-5 font-medium'>{item.name}</h1>
                        </div>
                        <div className="div">
                          <img src='/images/arrowupright.svg' alt='arrow-up' className='lg:scale-100 scale-50' />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>

      </div>
    </section>
  )
}

export default About
