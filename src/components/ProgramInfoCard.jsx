import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ProgramInfoCard = () => (
  <motion.div
    variants={fadeIn('right', 'spring', 1, 0.75)}
    className='w-full max-w-[400px] mx-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-10 px-12 flex justify-evenly items-center flex-col'>
      <div className='mt-5 text-center'>
        <p className='text-white tracking-wider text-[16px]'>
          This program is the first in Canada to offer a truly interdisciplinary 5-year biomedical program that integrates Engineering with Health Sciences. It is also the only Health Sciences program in health, engineering science and entrepreneurship.
        </p>
        <p className='text-white font-medium text-[16px] mt-5'>
          After a common first year, students will enter either the Bachelor of Engineering and Biomedical Engineering or the Honours Bachelor of Health Sciences in Health Engineering Science and Entrepreneurship degree program.
        </p>
      </div>
    </div>
  </motion.div>
);

export default ProgramInfoCard;
