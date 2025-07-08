import React, { useState, useEffect } from 'react';
import Image from './common/Image';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('cert-modal-overlay')) {
        setShowModal(false);
      }
    };
    
    if (showModal) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  const certificates = [
    {
      id: 1,
      title: "Adobe Certified Expert",
      issuer: "Adobe, Inc.",
      date: "May 2024",
      description: "Professional certification in Adobe Creative Suite with expertise in Photoshop, Illustrator, and XD.",
      skills: ["Photoshop", "Illustrator", "XD", "Design Systems", "Digital Art"],
      credentialId: "ADB-ACE-2024-78912"
    },
    {
      id: 2,
      title: "UI/UX Design Professional",
      issuer: "Interaction Design Foundation",
      date: "December 2023",
      description: "Comprehensive certification in user interface and user experience design principles and methodologies.",
      skills: ["Wireframing", "Prototyping", "User Research", "Accessibility", "Usability Testing"],
      credentialId: "IDF-UX-2023-45678"
    },
    {
      id: 3,
      title: "Front-End Web Development",
      issuer: "freeCodeCamp",
      date: "August 2023",
      description: "Certification in HTML5, CSS3, JavaScript, responsive web design, and modern front-end frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      credentialId: "FCC-FE-2023-23456"
    }
  ];  const handleCertClick = (id) => {
    setSelectedCert(id);
    setShowModal(true);
  };
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
          {certificates.map(cert => (
            <div className="col-md-4 mb-5" key={cert.id}>
              <div className="certification-card">
                <div className="certification-header">
                  <div className="cert-icon">
                    <Image src="/images/cert-icon.svg" alt="Certification" />
                  </div>
                  <div className="cert-date">{cert.date}</div>
                </div>
                
                <div className="certification-body">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-divider"></div>
                  <p className="cert-description">{cert.description}</p>
                  
                  <div className="cert-skills">
                    {cert.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="cert-skill-tag">{skill}</span>
                    ))}
                    {cert.skills.length > 3 && <span className="cert-skill-more">+{cert.skills.length - 3}</span>}
                  </div>
                  
                  <div className="cert-footer">
                    <button 
                      className="view-certificate-btn"
                      onClick={() => handleCertClick(cert.id)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}        </div>
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCert && (
        <div className="cert-modal-overlay">
          <div className="cert-modal">
            <button className="cert-modal-close" onClick={() => setShowModal(false)}>×</button>
            
            {certificates.filter(cert => cert.id === selectedCert).map(cert => (
              <div className="cert-modal-content" key={cert.id}>
                <div className="cert-modal-header">
                  <div className="cert-modal-icon">
                    <Image src="/images/cert-icon.svg" alt="Certification" />
                  </div>
                  <div className="cert-modal-title-container">
                    <h3 className="cert-modal-title">{cert.title}</h3>
                    <p className="cert-modal-issuer">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <div className="cert-modal-body">
                  <div className="cert-modal-section">
                    <h4>Description</h4>
                    <p>{cert.description}</p>
                  </div>
                  
                  <div className="cert-modal-section">
                    <h4>Credential ID</h4>
                    <p className="cert-credential-id">{cert.credentialId}</p>
                  </div>
                  
                  <div className="cert-modal-section">
                    <h4>Skills</h4>
                    <div className="cert-modal-skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="cert-modal-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="cert-modal-footer">
                  <button className="cert-verify-btn">
                    Verify Certificate
                  </button>
                  <button className="cert-download-btn">
                    Download Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
