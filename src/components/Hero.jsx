import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Function to check screen width and update the state
    const checkScreenWidth = () => {
      const isLarge = window.innerWidth >= 768;
      setIsLargeScreen(isLarge);
    };

    // Initial check on component mount
    checkScreenWidth();

    // Add an event listener to handle window resizing
    window.addEventListener('resize', checkScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>VISHAL MASKI</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build responsive web applications <br className='sm:block hidden' />
            with a focus on seamless user experiences.
          </p>
        </div>
      </div>

      {/* Conditionally render ComputersCanvas only on larger screens */}
      {isLargeScreen && <ComputersCanvas />}

      <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
