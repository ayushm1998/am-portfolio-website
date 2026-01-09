import React from 'react';
import profileImage from '../assets/profile-pic (1).png'; // Import a profile image

const About = () => {
  return (
    <section id="about">
      <img src={profileImage} alt="Profile" />
      <div>
        <h2>About Me</h2>
        <p>
      Hello! I’m Ayush Mehta, a Full Stack Software Engineer with 3+ years of experience building and operating production web applications. I’ve delivered scalable APIs, workflow-driven backend systems, and responsive user interfaces that improved performance, reduced load times by up to 40%, and increased release reliability.

I hold a Master’s degree in Computer Science from CSU Sacramento, with a specialization in Artificial Intelligence and Machine Learning, and a Bachelor’s in Information Technology. My experience spans roles at Celebal Technologies and Infosys, where I worked across backend services, frontend development, and cloud-based systems using technologies such as Java, JavaScript, Python, SQL, Node.js, and Azure.

I’m currently focused on building well-designed systems, strengthening backend fundamentals, and shipping reliable, user-centric software at scale. Feel free to explore my portfolio to learn more about my work, and let’s connect.
        </p>
      </div>
    </section>
  );
};

export default About;
