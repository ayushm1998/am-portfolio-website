import React from 'react';
import profileImage from '../assets/ayushpic.png'; // Import a profile image

const About = () => {
  return (
    <section id="about">
      <img src={profileImage} alt="Profile" />
      <div>
        <h2>About Me</h2>
        <p>
        Hello! I’m Ayush Mehta, a Master's student in Computer Science at CSU Sacramento, specializing in Artificial Intelligence (AI) and Machine Learning (ML). I hold a Bachelor’s in Information Technology and have gained hands-on experience at Celebal Technologies and Infosys Ltd.

Throughout my career, I’ve worked on backend services, automation solutions, and AI-driven applications. I have expertise in a variety of technologies, including JavaScript, Python, SQL, Node.js, and Azure Cloud Services. I’m passionate about leveraging technology to solve real-world problems and improve systems.

Currently, I’m seeking full-time software engineering opportunities with a focus on backend development. Feel free to explore my portfolio to learn more about my projects, and let’s connect!
        </p>
      </div>
    </section>
  );
};

export default About;
