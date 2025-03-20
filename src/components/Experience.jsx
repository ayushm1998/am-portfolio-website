import React from "react";
import celebalLogo from "../assets/celeballogo.png";
import infosysLogo from "../assets/infosyslogo.png";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div class="experience-item">
        <img src={celebalLogo} alt="Celebal Technologies" class="company-logo"
        />
        <div class="experience-details">
          <h3>Azure Integration & Backend Developer</h3>
          <p>Celebal Technologies | Nov 2021 - Aug 2023</p>
          <hr></hr>

          <p>
            At Celebal Technologies, I worked as an Azure Integration & Backend
            Developer, specializing in building scalable and efficient backend
            services. My role involved developing cloud-based solutions using
            Node.js, JavaScript, SQL, and Azure Cloud Services.<br></br>
            Key contributions:<br></br>
            <ul></ul>- <b>Backend Development:</b> Designed and optimized
            RESTful APIs, ensuring high performance and scalability.<br></br>-{" "}
            <b>SQL Database Management:</b> Improved query performance with
            indexing, stored procedures, and efficient data retrieval
            strategies.<br></br>- <b>Cloud Automation:</b> Developed and
            launched the Cloud Automation Tool, streamlining cloud
            infrastructure management.<br></br>-{" "}
            <b>Enterprise Integrations: </b>Worked on data integration projects,
            including WorkSpan Marketplace listing, automating partner ecosystem
            workflows.<br></br>
            <br></br>
            My experience at Celebal strengthened my expertise in backend
            development, cloud computing, and enterprise integrations, enabling
            me to build seamless and scalable solutions.
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
