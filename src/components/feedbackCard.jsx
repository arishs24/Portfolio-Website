import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const feedbackCard = ({ school, degree, field, date, image }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.5, 0.75)}
    className='w-full max-w-[400px] mx-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-10 px-12 flex justify-evenly items-center flex-col'>
      <img src={image} alt={`education-${school}`} className='w-24 h-24 rounded-full object-cover' />
      <div className='mt-5 text-center'>
        <p className='text-white tracking-wider text-[20px]'>{school}</p>
        <p className='text-white font-medium text-[18px]'>
          <span className='blue-text-gradient'>{degree}</span> in {field}
        </p>
        <p className='mt-1 text-secondary text-[14px]'>{date}</p>
      </div>
    </div>
  </motion.div>
);

export default feedbackCard;
