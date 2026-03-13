import React from 'react';

// Assuming university logos are stored in the 'assets' folder
import csusLogo from '../assets/sacstatelogo.png';  // Example logo path for CSUS
import rtuLogo from '../assets/rtulogo.png';    // Example logo path for RTU

const educationData = [
  {
    school: 'California State University, Sacramento',
    degree: 'Master of Science in Computer Science',
    period: 'Aug 2023 - May 2025',
    gpa: 'GPA: 3.88',
    logo: csusLogo,
  },
  {
    school: 'Rajasthan Technical University, India',
    degree: 'Bachelor of Technology in Information Technology',
    period: 'Aug 2016 - Nov 2020',
    gpa: 'GPA: 3.2',
    logo: rtuLogo,
  },
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <img src={edu.logo} alt={edu.school} className="education-logo" />
            <h3>{edu.school}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-period">{edu.period}</p>
            <p className="education-gpa">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
