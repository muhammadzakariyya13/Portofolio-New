import React, { useState } from 'react';
import Image from './common/Image';

function Projects({ projects, onSelectProject }) {
  const { graphicProjects, softwareProjects } = projects || {
    graphicProjects: {},
    softwareProjects: []
  };
  
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract all graphic design projects into a flat array for "All" category view
  const allGraphicProjects = [
    ...(graphicProjects.uiuxProjects || []),
    ...(graphicProjects.logoProjects || []),
    ...(graphicProjects.socialMediaProjects || []),
    ...(graphicProjects.mockupProjects || [])
  ];

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
        return allGraphicProjects;
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
              className={`btn button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
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
              <div className="col-md-4 mb-5" key={project.id}>
                <div className={`project-card ${project.category === 'Logo Design' ? 'logo-project' : ''}`}>
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} />
                    <div className="project-category-badge">{project.category}</div>
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-meta">
                      <div className="project-info-row">
                        <span className="info-value">{project.client}</span>
                      </div>
                    </div>
                    <div className="project-buttons">
                      <button 
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
