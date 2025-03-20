import React from 'react';

import { FaJsSquare, FaJava, FaPython, FaNodeJs, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import jsImage from '../assets/javascript.png'; 
import csharpImage from '../assets/csharp.png'; 
import cppImage from '../assets/cpp.png'; 
import pythonImage from '../assets/python.png'; 
import sqlImage from '../assets/sql.png'; 

import node from '../assets/node.png'; 
import express from '../assets/express.png'; 
import react from '../assets/react.png'; 
import html from '../assets/html.png'; 
import dotnet from '../assets/dotnet.png'; 

import mysql from '../assets/mysql.png'; 
import sqlserver from '../assets/sqlserver.png'; 
import mongo from '../assets/mongo.png'; 
import nosql from '../assets/nosql.png'; 

import jest from '../assets/jest.png'; 
import mocha from '../assets/mocha.png';
import chai from '../assets/chai.png'; 


import azure from '../assets/azure.png'; 
import aws from '../assets/aws.png';


import devops from '../assets/devops.png'; 
import docker from '../assets/docker.png';
import git from '../assets/git.png'; 
import cicd from '../assets/cicd.png'; 

import postman from '../assets/postman.png'; 
import swagger from '../assets/swagger.png';
import json from '../assets/json.png'; 
import rest from '../assets/rest.png'; 
import yaml from '../assets/yaml.png'; 
import vscode from '../assets/vscode.png'; 

const Skills = () => {
  return (
    <section id="skills">
     
      <h2>Skills</h2>
      <h3>Programming Languages</h3>
      <img src={jsImage} alt="Profile" />
      <img src={csharpImage} alt="Profile" />
      <img src={sqlImage} alt="Profile" />
      <img src={cppImage} alt="Profile" />
      <img src={pythonImage} alt="Profile" />
      <h3>Web & Testing Frameworks</h3>
      <img src={dotnet} alt="Profile" />
      <img src={node} alt="Profile" />
      <img src={express} alt="Profile" />
      <img src={react} alt="Profile" />
      <img src={html} alt="Profile" />
      <img src={jest} alt="Profile" />
      <img src={chai} alt="Profile" />
      <img src={mocha} alt="Profile" />
      <h3>Databases</h3>
      <img src={mysql} alt="Profile" />
      <img src={sqlserver} alt="Profile" />
      <img src={mongo} alt="Profile" />
      <img src={nosql} alt="Profile" />
      <h3>Cloud Services</h3>
      <img src={azure} alt="Profile" />
      <img src={aws} alt="Profile" />
      <h3>DevOps Tools</h3>
      <img src={devops} alt="Profile" />
      <img src={docker} alt="Profile" />
      <img src={git} alt="Profile" />
      <img src={cicd} alt="Profile" />
     <h3> Technical Tools</h3>
     <img src={postman} alt="Profile" />
     <img src={swagger} alt="Profile" />
     <img src={rest} alt="Profile" />
     <img src={yaml} alt="Profile" />
     <img src={json} alt="Profile" />
     <img src={vscode} alt="Profile" />
    </section>
  );
};

export default Skills;
