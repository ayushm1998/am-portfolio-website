import React, { useState, useEffect } from 'react';
import jsImage from '../assets/javascript.png'; 
import tsImage from '../assets/typescript.png'; 
import javaImage from '../assets/java.png'; 
import pythonImage from '../assets/python.png'; 
import react from '../assets/react.png'; 
import node from '../assets/node.png'; 
import docker from '../assets/docker.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png'; 
import mongo from '../assets/mongo.png'; 
import git from '../assets/git.png'; 
import cicd from '../assets/cicd.png'; 
import claude from '../assets/claude.png';
import openai from '../assets/openai.png'; 
import cursor from '../assets/cursor.png';
import sqlImage from '../assets/sql.png';
import spring from '../assets/springboot.png';
import express from '../assets/express.png';
import postman from '../assets/postman.png';
import swagger from '../assets/swagger.png';

const FallingSkills = () => {
  // Organize skills by category for organized falling
  const leftColumnSkills = [
    // Web Programming & SQL
    { image: jsImage, name: 'JavaScript' },
    { image: tsImage, name: 'TypeScript' },
    { image: react, name: 'React' },
    { image: node, name: 'Node.js' },
    { image: express, name: 'Express' },
    { image: spring, name: 'Spring Boot' },
    { image: javaImage, name: 'Java' },
    { image: pythonImage, name: 'Python' },
    { image: sqlImage, name: 'SQL' },
    { image: mongo, name: 'MongoDB' },
  ];

  const rightColumnSkills = [
    // Tools & Cloud
    { image: docker, name: 'Docker' },
    { image: aws, name: 'AWS' },
    { image: azure, name: 'Azure' },
    { image: git, name: 'Git' },
    { image: cicd, name: 'CI/CD' },
    { image: claude, name: 'Claude' },
    { image: cursor, name: 'Cursor' },
    { image: openai, name: 'OpenAI' },
    { image: postman, name: 'Postman' },
    { image: swagger, name: 'Swagger' },
  ];

  const [fallingSkills, setFallingSkills] = useState([]);

  useEffect(() => {
    let leftIdx = 0;
    let rightIdx = 0;
    let id = 0;

    const interval = setInterval(() => {
      const newSkills = [];

      // Add one skill from left column (2-8% from left)
      const leftSkill = leftColumnSkills[leftIdx % leftColumnSkills.length];
      newSkills.push({
        id: id++,
        image: leftSkill.image,
        name: leftSkill.name,
        left: 2 + Math.random() * 6, // 2-8% (safer margins)
        delay: 0,
      });
      leftIdx++;

      // Add one skill from right column (87-93% from left)
      const rightSkill = rightColumnSkills[rightIdx % rightColumnSkills.length];
      newSkills.push({
        id: id++,
        image: rightSkill.image,
        name: rightSkill.name,
        left: 87 + Math.random() * 6, // 87-93% (safer margins)
        delay: 0.15,
      });
      rightIdx++;

      setFallingSkills((prev) => [...prev, ...newSkills]);
    }, 2000); // Add new skills every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (skillId) => {
    // Remove only after animation completes
    setFallingSkills((prev) => prev.filter((skill) => skill.id !== skillId));
  };

  return (
    <div className="falling-skills-container">
      {fallingSkills.map((skill) => (
        <div
          key={skill.id}
          className="falling-skill"
          style={{
            left: `${skill.left}%`,
            animationDelay: `${skill.delay}s`,
          }}
          onAnimationEnd={() => handleAnimationEnd(skill.id)}
        >
          <img src={skill.image} alt={skill.name} title={skill.name} />
        </div>
      ))}
    </div>
  );
};

export default FallingSkills;
