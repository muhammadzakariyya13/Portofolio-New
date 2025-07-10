import React, { useState } from 'react';
import Image from './common/Image';

function Projects({ projects, onSelectProject }) {
  const { graphicProjects, softwareProjects } = projects || {
    graphicProjects: {},
    softwareProjects: []
  };
  const [activeCategory, setActiveCategory] = useState('ui-ux');  const [popupImage, setPopupImage] = useState(null);  // Handle logo and mockup project clicks to show popup instead of details
  const handleProjectClick = (project) => {
    if (project.category === 'Logo Design' || project.category === 'Mockup Design') {
      // For logo and mockup projects, show the image directly in popup
      // Use the first gallery image or fallback to main image
      const popupImageSrc = project.gallery && project.gallery.length > 0 
        ? project.gallery[0].src 
        : project.image;
      setPopupImage(popupImageSrc);
    } else {
      // For other projects, go to project detail
      onSelectProject(project.id);
    }
  };

  // Function to get projects based on active category
  const getProjectsByCategory = () => {
    switch(activeCategory) {
      case 'ui-ux':
        return graphicProjects.uiuxProjects || [];
      case 'logo':
        return graphicProjects.logoProjects || [];
      case 'social':
        return graphicProjects.socialMediaProjects || [];
      case 'mockup':
        return graphicProjects.mockupProjects || [];
      default:
        return graphicProjects.uiuxProjects || []; // Default to UI/UX projects
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-4">My Projects</h2>
          </div>
        </div>
        
        {/* Graphic Designer Projects */}
        <div className="project-section">
          <h3 className="project-category-title mb-4">Graphic Designer Projects</h3>
            {/* Category Tabs */}
          <div className="experience-tabs mb-4">
            <button 
              className={`btn button ${activeCategory === 'ui-ux' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ui-ux')}
            >
              UI/UX Design
            </button>
            <button 
              className={`btn button ${activeCategory === 'logo' ? 'active' : ''}`}
              onClick={() => setActiveCategory('logo')}
            >
              Logo Design
            </button>
            <button 
              className={`btn button ${activeCategory === 'social' ? 'active' : ''}`}
              onClick={() => setActiveCategory('social')}
            >
              Social Media Design
            </button>
            <button 
              className={`btn button ${activeCategory === 'mockup' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mockup')}
            >
              Mockup Design
            </button>
          </div>
          <div className="row">            {getProjectsByCategory().map((project) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={project.id}>
                <div 
                  className={`project-card ${project.category === 'Logo Design' ? 'logo-project' : ''} ${project.category === 'UI/UX Design' ? 'uiux-project' : ''} ${project.category === 'Social Media Design' ? 'social-project' : ''} ${project.category === 'Mockup Design' ? 'mockup-project' : ''}`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} />
                    <div className="project-category-badge">{project.category}</div>                    <div className="project-overlay">
                      <div className="view-text">
                        {project.category === 'Logo Design' ? 'View Logo' : 
                         project.category === 'Mockup Design' ? 'View Mockup' : 'View Project'}
                      </div>
                    </div>
                  </div>                  <div className="project-details">
                    <h4 className="project-title">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Software Engineer Projects */}
        <div className="project-section mt-5">
          <h3 className="project-category-title mb-4">Software Engineer Projects</h3>          <div className="row">
            {softwareProjects.map((project) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={project.id}>
                <div className="project-card software-project"><div className="project-image">
                    <Image src={project.image} alt={project.title} />
                  </div>
                  <div className="project-details">                    <h4 className="project-title">{project.title}</h4>
                    {project.description && (
                      <div className="project-description-wrapper">
                        <p className="project-description">{project.description}</p>
                      </div>
                    )}
                    <div className="project-info-container">
                      <div className="project-technologies">
                        {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-badge">{tech}</span>
                        ))}
                      </div>                      <div className="project-links">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link github-link"
                            aria-label="View GitHub repository"
                          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.demoLink && (
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link demo-link"
                            aria-label="View live demo"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Image Popup for Logo and Mockup Designs */}
      {popupImage && (
        <div className="image-popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="image-popup-container">
            <img src={popupImage} alt="Project Image" className="image-popup logo-popup" />
            <button className="close-popup" onClick={(e) => {
              e.stopPropagation();
              setPopupImage(null);
            }}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
