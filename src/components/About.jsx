import React from 'react';
import profileImage from '../assets/profile-pic (1).png'; // Import a profile image

const About = () => {
  return (
    <section id="about">
      <img src={profileImage} alt="Profile" />
      <div>
        <h2>About Me</h2>
        <p>
          Hi! I'm Ayush Mehta, and my journey in software engineering started in high school when I built my first desktop application using NetBeans, Java, and MySQL. That experience sparked a lifelong passion for building systems that work and matter.
        </p>
        <p>
          I pursued a Master's degree in Computer Science from CSU Sacramento (AI/ML specialization) and gained professional experience across Infosys (large-scale enterprise systems), Celebal Technologies, and OneSynergee (startup agility and full-stack ownership). With 3+ years of experience, I've delivered production APIs, optimized database queries reducing latency by 40%, and built reliable web applications across the full stack - Java, Python, JavaScript, SQL, Azure, Docker, and Kubernetes.
        </p>
        <p>
          Currently at Harness working on platform security and licensing features, while actively exploring opportunities to solve meaningful problems with talented teams. Let's connect if you're looking for a full-stack engineer who loves building scalable systems!
        </p>
      </div>
    </section>
  );
};

export default About;
