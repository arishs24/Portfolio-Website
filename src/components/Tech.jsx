import React from "react";
import { SectionWrapper } from "../hoc";
import TechBox from "./TechBox"; // Ensure the correct import path

const techCategories = {
  "Programming Languages": ["Python", "Java", "JavaScript", "C++", "HTML", "CSS"],
  "Frameworks & Libraries": ["R Studio", "React", "Next.js", "ThreeJS", "TailwindCSS", "Framer Motion", "JavaFX", "TensorFlow", "Keras", "Scikit-learn"],
  "Tools & Technologies": ["AWS", "Azure", "SQL", "MATLAB", "COMSOL", "Arduino IDE", "Raspberry Pi", "Google Maps API", "REDCap", "Git"],
  "Certifications": ["AWS Certified Cloud Practitioner", "AWS Certified Machine Learning"]
};

const Tech = () => {
  return (
    <div>
      {Object.keys(techCategories).map((category, index) => (
        <div key={category} className="mb-10">
          <h2 className="text-white text-2xl font-bold mb-4">{category}</h2>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {techCategories[category].map((item, idx) => (
              <TechBox key={item} index={idx} name={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
