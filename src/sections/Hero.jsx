import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import GradientSpheres from '~/components/GradientSpheres'

function Hero() {
  const line1Ref = useRef([]);
  const line2Ref = useRef([]);
  const heyRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heyRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2 }
    );

    gsap.fromTo(line1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo(line2Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out', delay: 1 }
    );

    gsap.fromTo(developerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: 'power2.out' }
    );
  }, []);

  const splitText = (text, refArr) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        ref={(el) => (refArr.current[i] = el)}
        className='inline-block'
      >
        {char}
      </span>
    ));

  return (
    <section
      id='home'
      className='h-dvh relative text-[#37568f] px-5 md:px-10 xl:px-20'
    >
      <GradientSpheres sphere1Class={'gradient-sphere sphere-1'} />

      <div className='w-full h-full flex-center'>
        <div className='container relative w-full h-full'>
          <div className='md:mt-40 mt-20'>
            <p
              ref={heyRef}
              className='font-medium md:text-2xl text-base'
            >
              ✌️ Hey, I'm here
            </p>
            <h1 className='font-bold md:text-9xl text-5xl'>
              {splitText('LAMIEE', line1Ref)}
            </h1>
            <h1 className='font-bold md:text-9xl text-5xl relative z-20'>
              {splitText('CREATIVE', line2Ref)}
            </h1>
          </div>

          <div className='absolute w-full z-30 bottom-20 right-0 '>
            <div className='flex justify-between items-end'>
              <div className='flex flex-col items-center md:gap-5 gap-1'>
                <p className='md:text-base text-xs'>Explore</p>
                <img
                  src='images/arrowdown.svg'
                  alt='arrowdown'
                  className='size-7 animate-bounce'
                />
              </div>

              <div className='flex flex-col items-end'>
                <h1
                  ref={developerRef}
                  className='font-bold md:text-9xl text-5xl'
                >
                  DEVELOPER
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full absolute inset-0'>
        {/* <HeroExperience /> */}
      </div>
    </section>
  );
}

export default Hero;
