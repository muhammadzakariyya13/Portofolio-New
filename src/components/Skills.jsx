import React from 'react';
import Image from './common/Image';

function Skills() {
  const softwareSkills = [
    { icon: '/images/logo/HTML.svg', name: 'HTML' },
    { icon: '/images/logo/CSS.svg', name: 'CSS' },
    { icon: '/images/logo/JS.svg', name: 'JavaScript' },
    { icon: '/images/logo/LARAVEL.svg', name: 'Laravel' },
    { icon: '/images/logo/BS.svg', name: 'Bootstrap' },
    { icon: '/images/logo/REACT.svg', name: 'React' },
    { icon: '/images/logo/PHP.svg', name: 'PHP' }
  ];

  const designSkills = [
    { icon: '/images/logo/FIGMA.svg', name: 'Figma' },
    { icon: '/images/logo/PS.svg', name: 'Photoshop' },
    { icon: '/images/logo/COREL.svg', name: 'CorelDRAW' },
    { icon: '/images/logo/CANVA.svg', name: 'Canva' }
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-4">Skills</h2>
          </div>
        </div>
        
        <div className="row skills-container">
          <div className="col-md-6">
            <div className="skills-category design-skills">
              <h3 className="mb-4">Graphic Design Skills</h3>
              <div className="skill-icons-container">                {designSkills.map((skill, index) => (
                  <div className="skill-icon-item" key={index} title={skill.name}>
                    <div className="skill-icon">
                      <Image src={skill.icon} alt={skill.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="skills-category software-skills">
              <h3 className="mb-4">Software Engineering Skills</h3>
              <div className="skill-icons-container">                {softwareSkills.map((skill, index) => (
                  <div className="skill-icon-item" key={index} title={skill.name}>
                    <div className="skill-icon">
                      <Image src={skill.icon} alt={skill.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
