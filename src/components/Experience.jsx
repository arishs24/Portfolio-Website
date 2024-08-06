import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import styles from '../styles'; // Ensure this path is correct
import { experiences, volunteerExperiences, publishedResearch } from '../constants'; // Ensure you add publishedResearch
import SectionWrapper from '../hoc/SectionWrapper'; // Ensure this path is correct
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name || experience.journal} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name || experience.journal}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>

      {experience.link && (
        <div className="mt-5">
          <a href={experience.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Read the full paper
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [activeSection, setActiveSection] = useState('work');

  let sectionData;
  if (activeSection === 'work') {
    sectionData = experiences;
  } else if (activeSection === 'volunteer') {
    sectionData = volunteerExperiences;
  } else if (activeSection === 'research') {
    sectionData = publishedResearch;
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          {activeSection === 'work' && "Work Experience"}
          {activeSection === 'volunteer' && "Volunteer Experience"}
          {activeSection === 'research' && "Published Research"}
        </h2>
      </motion.div>

      <div className="flex justify-center my-10">
        <button
          onClick={() => setActiveSection('work')}
          className={`px-4 py-2 mx-2 ${activeSection === 'work' ? "bg-[#915EFF]" : "bg-gray-500"} text-white rounded-lg`}
        >
          Work
        </button>
        <button
          onClick={() => setActiveSection('volunteer')}
          className={`px-4 py-2 mx-2 ${activeSection === 'volunteer' ? "bg-[#915EFF]" : "bg-gray-500"} text-white rounded-lg`}
        >
          Volunteer
        </button>
        <button
          onClick={() => setActiveSection('research')}
          className={`px-4 py-2 mx-2 ${activeSection === 'research' ? "bg-[#915EFF]" : "bg-gray-500"} text-white rounded-lg`}
        >
          Research
        </button>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {sectionData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
