import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt , FaGithub} from 'react-icons/fa'; // Import icons for LinkedIn, Email, and Phone
import { FaUserTie, FaLaptopCode, FaCloud, FaRegLightbulb } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      
    <h1><span style={{ fontSize: '4rem', fontWeight: 'bold' }}>A</span>yush <span style={{ fontSize: '4rem', fontWeight: 'bold' }}>M</span>ehta</h1>
    <p> <FaLaptopCode style={{ color:"rgb(185, 182, 173)",fontSize:"20px" }}/> Software Developer | <FaCloud style={{ color:"rgb(185, 182, 173)",fontSize:"20px" }}/>  Cloud Enthusiast | <FaRegLightbulb style={{ color:"rgb(185, 182, 173)",fontSize:"20px" }} /> Problem Solver </p> 
    <div className="contact-info">
      <a href="https://www.linkedin.com/in/ayushm98/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="icon" />
      </a>
      <a href="mailto:ayushmehta09@gmail.com">
        <FaEnvelope size={30} className="icon" />
      </a>
      <a href="https://github.com/ayushm1998" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="icon" />
      </a>
    </div>
    </header>
  );
};

export default Header;
