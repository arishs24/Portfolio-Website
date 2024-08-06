import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import styles from "../styles";
import { ComputersCanvas } from "./canvas";

const roles = ["Biomedical Engineer", "Medical Researcher", "Software Engineer", "Aspiring Neurosurgeon"];

const useTypewriter = (words, loop = true, speed = 150, delay = 2000) => {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      setText(prev => deleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1));

      if (!deleting && text === currentWord) {
        setTimeout(() => setDeleting(true), delay);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }

      const typingSpeed = deleting ? speed / 2 : speed;
      timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    };

    timeoutRef.current = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIndex, words, speed, delay]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(roles);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Arish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>{typedText}</span> <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
