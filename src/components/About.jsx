import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from '../styles'; // Ensure this path is correct
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper'; // Ensure this path is correct
import profilePic from '../assets/head.jpg'; // Update with the correct path to your image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  console.log('About component rendered');
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-2/3 flex flex-col justify-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          👋 Hello world! My name is Arish Shahab, and I am an incoming student at McMaster University's Integrated Biomedical Engineering and Health Sciences (iBioMed) program. My journey is driven by a profound interest in merging biomedical engineering with cutting-edge medical research.<br /><br />
          
          📚 At McMaster, I am exploring innovative solutions for healthcare, with a particular focus on smart drug delivery systems. My academic pursuits are complemented by hands-on research experiences, including collaborations with esteemed professors and involvement in projects that leverage AI and machine learning for optimized healthcare solutions.<br /><br />
          
          🌱 My passion for biomedical engineering is fueled by a desire to make meaningful contributions to patient care and medical technology. I am dedicated to advancing research in drug delivery devices and automated medical injectors, aiming to bring transformative changes to healthcare systems.<br /><br />
          
          🚀 Recently, I have been working on developing a smart liposomal drug delivery system for interstitial lung disease and exploring the impact of disinfectants on biomaterials used in joint replacements. As I continue my academic and professional journey, I am committed to applying my skills to real-world medical challenges and improving patient outcomes.<br /><br />
          
          ⚽ Hobbies: Reading, Travelling, Playing Soccer, Research, Technology<br />
          💬 Let's Chat About: Biomedical Engineering, Drug Delivery Systems, AI in Healthcare, Medical Research, Lung Disease Treatment
        </motion.p>
      </div>

      <div className='w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0'>
        <div className='relative'>
          <img
            src={profilePic}
            alt="Profile"
            className='w-64 h-64 rounded-full border-4 border-white shadow-lg object-cover'
            style={{ marginTop: '10%' }} // Adjust this value to position the image in the middle
          />
        </div>
      </div>

      <div className='w-full mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
