import React from 'react';
import Image from './common/Image';

function ProjectDetail({ project, onBack }) {
  if (!project) {
    return (
      <section className="project-detail not-found">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Project Not Found</h2>
              <p>The project you're looking for doesn't exist or has been removed.</p>
              <button 
                className="btn btn-primary mt-3" 
                onClick={onBack}
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Determine if this is a graphic or software project
  const isGraphicProject = project.id.startsWith('gd-');
    return (
    <section className="project-detail">
      <div className="container">
        {/* Simplified Header with Back Button */}
        <div className="project-detail-header">
          <button 
            className="back-button" 
            onClick={onBack}
          >
            <i className="bi bi-arrow-left"></i> Back to Projects
          </button>
        </div>
        
        <div className="project-detail-content">
          {/* Title and Subtitle above image */}
          <div className="project-title-container">
            <h1 className="project-detail-title">{project.title}</h1>
            <h3 className="project-detail-subtitle">
              {isGraphicProject ? 'Graphic Design Project' : project.role || 'Software Project'}
            </h3>
              {/* Links Section for Software Projects - Positioned vertically */}
            {!isGraphicProject && (
              <div className="project-actions-vertical">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    className="project-action-button-vertical" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i> GitHub Repository
                  </a>
                )}
                {project.figmaLink && (
                  <a 
                    href={project.figmaLink} 
                    className="project-action-button-vertical" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-pencil-square"></i> Figma Design
                  </a>
                )}
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    className="project-action-button-vertical" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-display"></i> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
          
          <div className="row">
            {/* Left Column - Featured Image */}
            <div className="col-lg-5">
              <div className="project-detail-image">
                <Image src={project.image} alt={project.title} />
              </div>
            </div>
            
            {/* Right Column - Project Info */}
            <div className="col-lg-7">
              {/* Project Description */}
              <div className="project-detail-section">
                <h2 className="section-title">About this project</h2>
                <p className="section-text">{project.description}</p>
              </div>
              
              {/* Project Meta Information - Only showing Date and Role */}
              <div className="project-detail-info">
                <div className="detail-info-grid">
                  {project.date && (
                    <div className="info-item">
                      <span className="info-label">Date</span>
                      <span className="info-value">{project.date}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="info-item">
                      <span className="info-label">Role</span>
                      <span className="info-value">{project.role}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Tools Section */}
              <div className="project-detail-section">
                <h2 className="section-title">
                  {isGraphicProject ? 'Tools Used' : 'Technologies'}
                </h2>
                <div className="tools-list">
                  {(isGraphicProject ? project.tools : project.technologies).map((item, index) => (
                    <span key={index} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Project Gallery with Image Names and Tools */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="project-gallery">
            <h2 className="section-title mt-4">Project Gallery</h2>
            <div className="row gallery-grid">
              {project.gallery.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 gallery-item">
                  <div className="gallery-card">
                    <div className="gallery-image">
                      <Image src={image.src} alt={image.title || `Gallery image ${index + 1}`} />
                    </div>
                    <div className="gallery-info">
                      <h5>{image.title || `Project Image ${index + 1}`}</h5>
                      {image.tools && image.tools.length > 0 && (
                        <div className="gallery-tools">
                          {image.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="gallery-tool">{tool}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}        {/* No CTA section anymore */}
      </div>
    </section>
  );
}

export default ProjectDetail;
