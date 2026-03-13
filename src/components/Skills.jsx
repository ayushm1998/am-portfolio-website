import React from 'react';

import jsImage from '../assets/javascript.png'; 
import tsImage from '../assets/typescript.png'; 
import javaImage from '../assets/java.png'; 
import csharpImage from '../assets/csharp.png'; 
import cppImage from '../assets/cpp.png'; 
import pythonImage from '../assets/python.png'; 
import sqlImage from '../assets/sql.png'; 

import node from '../assets/node.png'; 
import express from '../assets/express.png'; 
import react from '../assets/react.png'; 
import html from '../assets/html.png'; 
import css from '../assets/css.webp'; 
import dotnet from '../assets/dotnet.png'; 
import spring from '../assets/springboot.png'; 

import mysql from '../assets/mysql.png'; 
import sqlserver from '../assets/sqlserver.png'; 
import mongo from '../assets/mongo.png'; 
import nosql from '../assets/nosql.png'; 

import jest from '../assets/jest.png'; 
import mocha from '../assets/mocha.png';
import chai from '../assets/chai.png'; 

import azure from '../assets/azure.png'; 
import aws from '../assets/aws.png';
import saas from '../assets/saas.png';
import paas from '../assets/paas.png';
import terraform from '../assets/terraform.jpeg';

import devops from '../assets/devops.png'; 
import openai from '../assets/openai.png'; 
import pandas from '../assets/pandas.png'; 
import scikit from '../assets/scikit.png'; 
import docker from '../assets/docker.png';
import git from '../assets/git.png'; 
import cicd from '../assets/cicd.png'; 
import claude from '../assets/claude.png';
import cursor from '../assets/cursor.png'; 

import postman from '../assets/postman.png'; 
import swagger from '../assets/swagger.png';
import json from '../assets/json.png'; 
import rest from '../assets/rest.png'; 
import yaml from '../assets/yaml.png'; 
import vscode from '../assets/vscode.png'; 

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", image: jsImage },
        { name: "TypeScript", image: tsImage },
        { name: "Java", image: javaImage },
        { name: "C#", image: csharpImage },
        { name: "C++", image: cppImage },
        { name: "Python", image: pythonImage },
        { name: "SQL", image: sqlImage },
      ]
    },
    {
      title: "Web & Testing Frameworks",
      skills: [
        { name: ".NET", image: dotnet },
        { name: "Node.js", image: node },
        { name: "Express", image: express },
        { name: "React", image: react },
        { name: "Spring Boot", image: spring },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "Jest", image: jest },
        { name: "Chai", image: chai },
        { name: "Mocha", image: mocha },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", image: mysql },
        { name: "SQL Server", image: sqlserver },
        { name: "MongoDB", image: mongo },
        { name: "NoSQL", image: nosql },
      ]
    },
    {
      title: "Cloud Services",
      skills: [
        { name: "Azure", image: azure },
        { name: "AWS", image: aws },
        { name: "SaaS", image: saas },
        { name: "PaaS", image: paas },
        { name: "Terraform", image: terraform },
      ]
    },
    {
      title: "AI & DevOps Tools",
      skills: [
        { name: "OpenAI", image: openai },
        { name: "Claude", image: claude },
        { name: "Cursor", image: cursor },
        { name: "Pandas", image: pandas },
        { name: "Scikit-learn", image: scikit },
        { name: "DevOps", image: devops },
        { name: "Docker", image: docker },
        { name: "Git", image: git },
        { name: "CI/CD", image: cicd },
      ]
    },
    {
      title: "Technical Tools",
      skills: [
        { name: "Postman", image: postman },
        { name: "Swagger", image: swagger },
        { name: "REST", image: rest },
        { name: "YAML", image: yaml },
        { name: "JSON", image: json },
        { name: "VS Code", image: vscode },
      ]
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skillCategories.map((category, idx) => (
        <div key={idx}>
          <h3>{category.title}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIdx) => (
              <div key={skillIdx} className="skill-card">
                <img src={skill.image} alt={skill.name} loading="lazy" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
