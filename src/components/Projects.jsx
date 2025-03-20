import React from 'react';

// Assuming project images are stored in the 'assets' folder
import project1Image from '../assets/gptproject.png';
import project2Image from '../assets/migration.png';
import project3Image from '../assets/service.jpg';
import project4Image from '../assets/lisitng.svg';
import project5Image from '../assets/csmart.png';
import project6Image from '../assets/ipge.png';


const projects = [
  {
    title: `IPGE Chatbot (Master's Project at Sac State) - In Progress`,
    description: 'The IPGE Chatbot is my latest project, developed as part of my master’s program for a department at Sac Satte. Designed primarily to assist students, this chatbot addresses a range of queries related to international admissions, travel, documents, and more. It streamlines communication by providing quick, accurate responses, thereby reducing the administrative burden and enhancing the overall student experience.',
    imageUrl:  project6Image,
    link: 'https://example.com',
  },
  {
    title: 'Google Calendar Meeting Scheduler (OpenAI Powerered)',
    description: `The Google Calendar Meeting Scheduler project leverages OpenAI's GPT-4o to automate the scheduling of meetings through natural language processing. Users can simply interact with the chatbot, and the system processes the inputs to create calendar events, manage meeting times, and send out invitations—all integrated with Google Calendar. The tool aims to reduce the time and effort spent on manual scheduling while providing a seamless, efficient solution for users.`,
    imageUrl:  project1Image,
    link: 'https://example.com',
  },
  {
    title: 'Cloud Automation Tool (In-House Product)',
    description: 'The Cloud Automation Tool is a platform I developed at Celebal Technologies to streamline cloud infrastructure management by automating provisioning, monitoring, and resource optimization. It enhanced efficiency and reduced manual intervention in cloud operations.',
    imageUrl: project5Image,
    link: 'https://azuremarketplace.microsoft.com/en-in/marketplace/apps/celebaltechnologies.csmart?tab=Overview',
  },
  {
    title: 'WorkSpan Marketplace Listing  (For a US Client)',
    description: 'The WorkSpan Marketplace Listing project was developed for a US-based client to automate and optimize the process of listing and managing partner ecosystem data on the WorkSpan platform. The goal was to improve efficiency in managing marketplace listings, ensuring accurate and timely data flow between partners and the marketplace. This solution facilitated better collaboration between the client and its partners, enabling seamless integration and data management.',
    imageUrl: project4Image
  },
  {
    title: 'Azure Migration for Airline Company',
    description: 'As an Azure Integration SME, I oversaw the migration of the airline company’s Azure iPaaS and PaaS services, ensuring a smooth transition from on-premises infrastructure to the cloud. My role involved guiding the migration of integration platforms, service management systems, and applications to Azure Cloud, optimizing cloud-based processes while maintaining operational continuity.',
    imageUrl: project2Image,
    link: 'https://example.com',
  },
   {
    title: 'Service Qualification Dashboard',
    description: 'Developed a Service Qualification Dashboard to analyze and visualize service availability based on geographic and infrastructure data. The dashboard helps businesses determine network coverage, feasibility, and service eligibility.',
    imageUrl: project3Image,
    link: 'https://example.com',
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
