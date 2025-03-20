import React from 'react';
import { FaEnvelope, FaMobile, FaGithub, FaDownload } from 'react-icons/fa';
import resumePDF from '../assets/Ayush_Mehta_Resume.pdf'; // Update with your actual resume file

const Contact = () => {
  return (
    <section id="contact">
      <h3 className="contact-heading">Got a project waiting to be realized? Let's collaborate and make it happen!</h3>

      <div className="contact-container">
        <div className="contact-details">
          <p><FaEnvelope className="contact-icon" /> <a href="mailto:ayushmehta09@gmail.com">ayushmehta09@gmail.com</a></p>
          <p><FaMobile className="contact-icon" /> <a href="tel:+1-(916)-507-4898">+1-(916)-507-4898</a></p>
          
        </div>

        <div className="resume-section">
          <a href={resumePDF} download="Ayush_Mehta_Resume.pdf" className="resume-button">
            <FaDownload className="resume-icon" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
