import React from 'react';

// Assuming university logos are stored in the 'assets' folder
import csusLogo from '../assets/sacstatelogo.png';  // Example logo path for CSUS
import rtuLogo from '../assets/rtulogo.png';    // Example logo path for RTU

const Education = () => {
  return (
    <section id="education">
      <h2 className="education-heading">Education</h2>
      
      <div className="education-container">
        <div className="education-item">
          <img src={csusLogo} alt="California State University, Sacramento" className="university-logo" />
          <div className="education-details">
            <h3>California State University, Sacramento</h3>
            <p><b>Master of Science in Computer Science</b></p>
            <p>Aug 2023 - May 2025 | GPA: 3.88 </p>
          </div>
        </div>
        <div className="education-item">
          <img src={rtuLogo} alt="Rajasthan Technical University" className="university-logo" />
          <div className="education-details">
            <h3>Rajasthan Technical University, India</h3>
            <p><b>Bachelor of Technology in Information Technology</b></p>
            <p>Aug 2016 - Nov 2020 | GPA: 3.2 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
