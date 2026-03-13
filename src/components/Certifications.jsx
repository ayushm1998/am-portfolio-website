import React from 'react';

// Import certification logos
import azureFundamentalsLogo from '../assets/azure-fundamentals.png';
import azureDeveloperLogo from '../assets/azure-developer.png';

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    date: 'Issued June 2022',
    logo: azureFundamentalsLogo,
  },
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    organization: 'Microsoft',
    date: 'Issued Feb 2023',
    logo: azureDeveloperLogo,
  },
];

const Certification = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.logo} alt={cert.title} className="certification-logo" />
            <h3>{cert.title}</h3>
            <p className="certification-organization">{cert.organization}</p>
            <p className="certification-date">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
