import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const letterRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      gsap.fromTo(lineRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            toggleActions: 'play none none none',
          }
        });

      // Letters animation
      gsap.fromTo(letterRefs.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            toggleActions: 'play none none none',
          }
        });
    }, containerRef); // use gsap.context to cleanup properly

    return () => ctx.revert();
  }, []);

  const name = 'Lamiee';

  return (
    <div ref={containerRef} className='w-full flex flex-col items-center mt-10'>
      <div
        ref={lineRef}
        className='h-[2px] bg-[#37568f] mb-4'
        style={{ width: '100%' }}
      />
      <p className='font-regular md:text-lg text-sm text-[#37568f] mb-4 flex gap-[2px]'>
        {name.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            className='inline-block'
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Footer;
