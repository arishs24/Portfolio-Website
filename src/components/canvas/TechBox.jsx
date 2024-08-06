import React from 'react';

const TechBox = ({ icon, name }) => {
  return (
    <div className="tech-box flex flex-col items-center justify-center bg-[#1d1836] rounded-lg shadow-md p-4 m-2 w-28 h-28">
      <img src={icon} alt={name} className="w-16 h-16 object-contain" />
      <p className="mt-2 text-center text-white">{name}</p>
    </div>
  );
};

export default TechBox;
