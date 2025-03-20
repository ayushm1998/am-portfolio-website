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
      <h2 className="certifications-heading">Certifications</h2>
      
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <img src={cert.logo} alt={cert.title} className="certification-logo" />
            <div className="certification-details">
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
