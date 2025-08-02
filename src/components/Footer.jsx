import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = () => {
  const lineRef = useRef(null);
  const letterRefs = useRef([]);

  useEffect(() => {
    // Line animation
    gsap.fromTo(lineRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.2,
        ease: 'power2.out',
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
        delay: 0.5,
      });
  }, []);

  const name = 'Lamiee';

  return (
    <div className='w-full flex flex-col items-center mt-10'>
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
