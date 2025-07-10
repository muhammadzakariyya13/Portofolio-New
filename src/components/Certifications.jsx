import React, { useState, useEffect } from 'react';
import Image from './common/Image';

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Getting Started with Programming with Python",
      issuer: "Dicoding",
      date: "May 2024",
      description: "Professional certification in Adobe Creative Suite with expertise in Photoshop, Illustrator, and XD.",
      skills: ["Photoshop", "Illustrator", "XD", "Design Systems", "Digital Art"],
      credentialId: "ADB-ACE-2024-78912",
      certLink: "https://drive.google.com/file/d/1oSWFTNvTAq5aGYs1hmTZKbZ4El3r22pS/view?usp=sharing" // Link ke sertifikat Adobe
    },
    {
      id: 2,
      title: "UI/UX Design Professional",
      issuer: "Interaction Design Foundation",
      date: "December 2023",
      description: "Comprehensive certification in user interface and user experience design principles and methodologies.",
      skills: ["Wireframing", "Prototyping", "User Research", "Accessibility", "Usability Testing"],
      credentialId: "IDF-UX-2023-45678",
      certLink: "https://www.interaction-design.org/certificate/example-ux-cert" // Link ke sertifikat IDF
    },
    {
      id: 3,
      title: "Front-End Web Development",
      issuer: "freeCodeCamp",
      date: "August 2023",
      description: "Certification in HTML5, CSS3, JavaScript, responsive web design, and modern front-end frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      credentialId: "FCC-FE-2023-23456",
      certLink: "https://www.freecodecamp.org/certification/example-frontend-cert" // Link ke sertifikat freeCodeCamp
    }
  ];  // Tidak lagi membutuhkan handleCertClick karena sekarang menggunakan link langsung
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-4">Certifications</h2>
            <p className="section-subtitle">Professional certifications and educational achievements</p>
          </div>
        </div>
        
        <div className="row certifications-container">
          {certificates.map(cert => (            <div className="col-lg-4 col-md-6 mb-5" key={cert.id}>
              <div className="certification-card">
                <div className="certification-header">
                  <div className="cert-icon">
                    <Image src="/images/logo/LOGO MZ.svg" alt="Logo" className="cert-logo" />
                  </div>
                  <div className="cert-date">{cert.date}</div>
                </div>
                
                <div className="certification-body">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-divider"></div>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-footer">
                    <a 
                      href={cert.certLink}
                      className="view-certificate-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="external-link-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}        </div>      </div>
      {/* Modal telah dihapus dan diganti dengan link langsung ke sertifikat */}
    </section>
  );
}

export default Certifications;
