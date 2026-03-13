import React from "react";
import celebalLogo from "../assets/celeballogo.png";
import infosysLogo from "../assets/infosyslogo.png";
import onesynergeeLogo from "../assets/onesynergeei.png"
import harnessLogo from "../assets/harness-logo.png";
import csusLogo from '../assets/sacstatelogo.png';  

const Experience = () => {
  const experiences = [
    {
      id: 1,
      logo: harnessLogo,
      alt: "Harness",
      title: "Software Engineer",
      company: "Harness",
      duration: "Jan 2026 - Present",
      bullets: [
        "Remediating platform security vulnerabilities identified via container image scanning and customer security findings.",
        "Contributing to Kubernetes and Helm-based configuration of Harness Self-Managed Platform (SMP) deployments.",
        "Built Java flex-pricing features for License Management module, shipping 4+ enhancements and reducing manual setup by ~30%."
      ]
    },
    {
      id: 2,
      logo: onesynergeeLogo,
      alt: "OneSynergee",
      title: "Software Engineer",
      company: "OneSynergee",
      duration: "July 2025 - January 2026",
      bullets: [
        "<b>Backend Architecture:</b> Architected and led the backend infrastructure for AgriCharity Harvest Tracker, designing scalable APIs and database schemas.",
        "<b>API Development:</b> Built and deployed secure RESTful services using Node.js and SQL Server to support analytics dashboards.",
        "<b>System & DevOps:</b> Set up and managed system architecture, CI/CD pipelines, and version control for smooth deployments.",
        "<b>Team Collaboration:</b> Guided the build team and collaborated with stakeholders to deliver stable, high-quality releases."
      ]
    },
    {
      id: 3,
      logo: csusLogo,
      alt: "California State University, Sacramento",
      title: "Graduate Teaching Assistant (AI)",
      company: "California State University, Sacramento",
      duration: "Jan 2024 - May 2025",
      bullets: [
        "<b>Academic Support:</b> Assisted with grading and evaluation for CSC 215 – Artificial Intelligence course.",
        "<b>Student Mentorship:</b> Mentored 30+ students in advanced AI topics including vector search, embeddings, and LLM prompting.",
        "<b>Generative AI Workshops:</b> Led hands-on GenAI workshops where students built end-to-end LLM applications.",
      ]
    },
    {
      id: 4,
      logo: celebalLogo,
      alt: "Celebal Technologies",
      title: "Software Engineer, Full Stack",
      company: "Celebal Technologies",
      duration: "Nov 2021 - Aug 2023",
      bullets: [
        "<b>Cloud Automation & Backend Systems:</b> Developed a cloud automation tool to provision and manage Azure resources, supporting 300+ concurrent deployments and improving provisioning speed by 60%.",
        "<b>API & Workflow Development:</b> Built REST and GraphQL APIs with event-driven data flows and workflow orchestration to enable scalable integrations.",
        "<b>Frontend Development:</b> Built React-based user interfaces with reusable components, improving user experience by 30%.",
        "<b>Reliability & Performance:</b> Improved application reliability, reducing load times by 40% while maintaining 99.9% uptime."
      ]
    },
    {
      id: 5,
      logo: infosysLogo,
      alt: "Infosys",
      title: "Systems Engineer",
      company: "Infosys Ltd",
      duration: "Nov 2020 - Oct 2021",
      bullets: [
        "<b>Software Development:</b> Developed and maintained enterprise applications, ensuring performance and reliability.",
        "<b>Database Management:</b> Designed and optimized SQL queries, improving data retrieval efficiency.",
        "<b>System Integration:</b> Worked on integrating software components to enhance system functionality and scalability.",
        "<b>Agile Development:</b> Collaborated with cross-functional teams in an Agile environment to deliver efficient solutions."
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <img src={exp.logo} alt={exp.alt} className="experience-card-logo" />
            <h3>{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration}</p>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2>Projects</h2>
    </section>
  );
};

export default Experience;
