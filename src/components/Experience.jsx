import React from "react";
import celebalLogo from "../assets/celeballogo.png";
import infosysLogo from "../assets/infosyslogo.png";
import onesynergeeLogo from "../assets/onesynergeei.png"
import csusLogo from '../assets/sacstatelogo.png';  

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div class="experience-item">
        <img src={onesynergeeLogo} alt="OneSynergee" class="company-logo"
        />
        <div class="experience-details">
          <h3>Software Engineer</h3>
          <p>OneSynergee | July 2025 - Present</p>
          <hr></hr>

          <p>
            At OneSynergee, I work as a Software Developer on a contract basis, leading the
            backend development for the AgriCharity Harvest Tracker. My role focuses on
            designing scalable backend systems and delivering reliable data-driven
            solutions for real-world use cases.<br></br>
            Key contributions:<br></br>
            <ul></ul>- <b>Backend Architecture:</b> Architected and led the backend
            infrastructure, designing scalable APIs, database schemas, and real-time data
            flows.<br></br>- <b>API Development:</b> Built and deployed secure RESTful
            services using Node.js and SQL Server to support analytics dashboards and
            reporting.<br></br>- <b>System & DevOps:</b> Set up and managed system
            architecture, CI/CD pipelines, and version control to ensure smooth
            deployments.<br></br>- <b>Team Collaboration:</b> Guided the build team and
            collaborated closely with stakeholders to deliver stable, high-quality
            releases.<br></br>
            <br></br>
            This role has strengthened my expertise in backend architecture, cloud-native
            development, and delivering scalable systems in a production environment.
          </p>
        </div>
      </div>

      <div class="experience-item">
        <img src={csusLogo} alt="California State University, Sacramento" class="company-logo" />
        <div class="experience-details">
          <h3>Graduate Teaching Assistant (Artificial Intelligence)</h3>
          <p>California State University, Sacramento | Jan 2024 - May 2025</p>
          <hr></hr>

          <p>
            At California State University, Sacramento, I worked as a Graduate Teaching
            Assistant for the Artificial Intelligence course (CSC 215), supporting
            instruction and hands-on learning in applied AI concepts. My role focused on
            mentoring students, evaluating coursework, and guiding practical AI system
            development.<br></br>
            Key contributions:<br></br>
            <ul></ul>- <b>Academic Support:</b> Assisted Professor Molokwu with grading and
            evaluation for CSC 215 – Artificial Intelligence, ensuring consistent and
            fair assessment.<br></br>- <b>Student Mentorship:</b> Mentored 30+ students in
            advanced AI topics including vector search, embeddings, LLM prompting, and
            model evaluation.<br></br>- <b>Generative AI Workshops:</b> Led hands-on GenAI
            workshops where students built end-to-end LLM applications with retrieval,
            reasoning, and evaluation pipelines.<br></br>
            <br></br>
            This experience strengthened my expertise in applied artificial intelligence,
            technical mentorship, and translating complex concepts into practical systems.
          </p>
        </div>
      </div>


      <div class="experience-item">
        <img src={celebalLogo} alt="Celebal Technologies" class="company-logo"
        />
        <div class="experience-details">
          <h3>Software Engineer, Full Stack</h3>
          <p>Celebal Technologies | Nov 2021 - Aug 2023</p>
          <hr></hr>

          <p>
            At Celebal Technologies, I worked as a Software Engineer, contributing across
            the full stack to build scalable, cloud-native applications. My role involved
            designing backend services, building frontend interfaces, and delivering
            reliable production systems using modern cloud and web technologies.<br></br>
            Key contributions:<br></br>
            <ul></ul>- <b>Cloud Automation & Backend Systems:</b> Developed a cloud
            automation tool to provision and manage Azure resources, supporting 300+
            concurrent deployments and improving provisioning speed by 60%.<br></br>-{" "}
            <b>API & Workflow Development:</b> Built REST and GraphQL APIs with
            event-driven data flows and workflow orchestration to enable scalable
            integrations and efficient data movement.<br></br>-{" "}
            <b>Frontend Development:</b> Built React-based user interfaces with reusable
            components and state management, improving user experience and frontend
            performance by 30%.<br></br>-{" "}
            <b>Reliability & Performance:</b> Improved application reliability and
            availability, reducing load times by 40% while maintaining 99.9% uptime in
            production environments.<br></br>-{" "}
            <b>Data Modeling & Storage:</b> Designed and optimized SQL and NoSQL data
            models to ensure consistency, scalability, and efficient data retrieval at
            scale.<br></br>
            <br></br>
            This experience strengthened my full-stack expertise across backend systems,
            frontend development, cloud infrastructure, and scalable application design.
          </p>
        </div>
      </div>



      <div class="experience-item">
        <img src={infosysLogo} alt="Infosys" class="company-logo" />
        <div class="experience-details">
          <h3>Systems Engineer</h3>
          <p>Infosys Ltd | Nov 2020 - Oct 2021</p>
          <hr></hr>
          <p>
            At Infosys, I worked as a Systems Engineer, focusing on software
            development, system integration, and enterprise solutions. My role
            involved working with Java, SQL, and enterprise-level applications,
            contributing to high-quality software solutions for global clients.
            <br></br>
            Key contributions:<br></br>
            <ul></ul>
            - <b>Software Development:</b> Developed and maintained enterprise
            applications, ensuring performance and reliability.<br></br>
            - <b>Database Management:</b> Designed and optimized SQL queries,
            improving data retrieval efficiency.<br></br>
            - <b>System Integration:</b> Worked on integrating software
            components to enhance system functionality and scalability.<br></br>
            - <b>Agile Development:</b> Collaborated with cross-functional teams
            in an Agile environment to deliver efficient solutions.<br></br>
            <br></br>
            This experience provided me with a strong foundation in software
            engineering, database management, and enterprise system development,
            preparing me for complex backend and integration projects.
          </p>
        </div>
      </div>
      <br></br><br></br>
      <h2>Projects</h2>
    </section>

  );
};

export default Experience;
