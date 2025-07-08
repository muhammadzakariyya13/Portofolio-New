import React from 'react';
import Image from './common/Image';

function Projects({ projects, onSelectProject }) {
  const { graphicProjects, softwareProjects } = projects || {
    graphicProjects: [],
    softwareProjects: []
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
          <div className="row">
            {graphicProjects.map((project) => (              <div className="col-md-6 mb-5" key={project.id}>
                <div className="project-card">
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} />
                    <div className="project-category-badge">{project.category}</div>
                  </div>
                  <div className="project-details">                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-meta">
                      <div className="project-info-row">
                        <span className="info-value">{project.date}</span>
                      </div>
                      <div className="project-info-row">
                        <span className="info-value">{project.client}</span>
                      </div>
                    </div>
                    <div className="project-buttons">                      <button 
                        onClick={() => onSelectProject(project.id)} 
                        className="view-project-btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Software Engineer Projects */}
        <div className="project-section mt-5">
          <h3 className="project-category-title mb-4">Software Engineer Projects</h3>
          <div className="row">
            {softwareProjects.map((project) => (              <div className="col-md-4 mb-5" key={project.id}>
                <div className="project-card">
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} />
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">{project.title}</h4>
                      <div className="project-meta">
                      <div className="project-info-row">
                        <span className="info-value">{project.client}</span>
                      </div>
                    </div>                    <div className="project-buttons">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn github-icon"
                        aria-label="GitHub"
                      >
                        <Image src="/images/GitHub.svg" alt="GitHub" />
                      </a>
                      <a 
                        href={project.figmaLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn figma-icon"
                        aria-label="Figma"
                      >
                        <Image src="/images/FIGMA.svg" alt="Figma" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
