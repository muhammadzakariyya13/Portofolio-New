import React, { useState, useRef, useEffect } from 'react';

function Experience() {
  const [activeDetails, setActiveDetails] = useState({});
  const [activeTab, setActiveTab] = useState('work');
  const detailRefs = useRef({});
  
  const toggleDetail = (id) => {
    setActiveDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Update heights after rendering
  useEffect(() => {
    // Reset heights when tab changes
    Object.keys(detailRefs.current).forEach(key => {
      const el = detailRefs.current[key];
      if (el && activeDetails[key]) {
        el.style.maxHeight = `${el.scrollHeight}px`;
      }
    });
  }, [activeDetails, activeTab]);

  const workExperiences = [
    {
      id: 1,
      title: "Ikatan Mahasiswa Berprestasi Kabupaten Wonogiri",
      role: "Staff of Media and Information Publication Division",
      period: "Jan 2025 – Jun 2025",
      location: "Semarang, Indonesia",
      details: "Supported the planning and execution of content strategies across various platforms (Instagram, LinkedIn, TikTok, YouTube, and the official website), while editing and optimizing multimedia materials to ensure consistency and professionalism. Collaborated with division leaders to uphold content quality standards and contributed to internal coordination, fostering a productive and creative team environment.",
      skills: ["Content Strategy", "Social Media", "Graphic Design", "Team Collaboration"],
      achievements: ["Increased social media engagement by 35%", "Designed promotional materials for 5 major events"]
    },
    {
      id: 2,
      title: "Ikatan Mahasiswa Kabupaten Wonogiri UNNES",
      role: "Head of Media and Information Division",
      period: "Jan 2025 – Present",
      location: "Semarang, Indonesia",
      details: "Led the Media and Information Division by managing a creative team responsible for producing and publishing digital content across social media platforms. Developed content strategies aligned with organizational goals to boost engagement and enhance the association's public image. Supervised the creation of visual and written materials, ensuring consistent branding and quality. Provided training and guidance to improve the team's technical skills in design, editing, and digital communication.",
      skills: ["Leadership", "Team Management", "Digital Content Creation", "Brand Strategy"],
      achievements: ["Redesigned organization's visual identity", "Led team of 8 designers and content creators"]
    },
    {
      id: 3,
      title: "I-Secret UNNES",
      role: "UI/UX Designer",
      period: "Apr 2024 - Aug 2024",
      location: "Semarang, Indonesia",
      details: "Designed mid- and high-fidelity mockups using Figma, developed interactive prototypes, and conducted user research to define personas, user flows, and wireframes. Collaborated closely with the development team to ensure seamless implementation of user-centered designs into functional interfaces.",
      skills: ["UI Design", "UX Research", "Prototyping", "Figma", "User Testing"],
      achievements: ["Improved user satisfaction scores by 40%", "Reduced user onboarding time by 50%"]
    }
  ];
  
  const educationExperiences = [
    {
      id: 101,
      title: "Universitas Negeri Semarang",
      role: "Bachelor's Degree in Computer Science",
      period: "2023 - Present",
      location: "Semarang, Indonesia",
      details: "Currently pursuing a Bachelor's degree in Computer Science with a focus on software development and design. Relevant coursework includes Data Structures and Algorithms, Database Management Systems, Web Development, UI/UX Design, and Software Engineering Principles.",
      skills: ["Programming", "Software Development", "UI/UX Design", "Research"],
      achievements: ["Dean's List (3 semesters)", "GPA: 3.8/4.0"]
    },
    {
      id: 102,
      title: "SMA Negeri 1 Wonogiri",
      role: "High School Diploma, Science Program",
      period: "2020 - 2023",
      location: "Wonogiri, Indonesia",
      details: "Completed high school education with a focus on the science and mathematics track. Participated in various extracurricular activities including the Computer Club and Design Team.",
      skills: ["Mathematics", "Physics", "Basic Programming", "Analytical Thinking"],
      achievements: ["Graduated with honors", "Winner of Regional Design Competition"]
    }
  ];
  const renderExperienceItems = (experiences) => {
    return experiences.map((exp) => (
      <div className="experience-item" key={exp.id}>        <div className="experience-item-header">
          <div className="experience-title-container">
            <h5>{exp.title}</h5>
            <div className="experience-subtitle">
              <strong>{exp.role}</strong>
              <div className="experience-meta">
                <span><i className="bi bi-calendar"></i> {exp.period}</span>
                <span><i className="bi bi-geo-alt"></i> {exp.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div 
          id={`details-${exp.id}`}
          ref={el => detailRefs.current[exp.id] = el}
          className={`experience-item-detail ${activeDetails[exp.id] ? 'expanded' : ''}`}
          style={{ 
            maxHeight: activeDetails[exp.id] ? 
              (detailRefs.current[exp.id]?.scrollHeight + 'px' || 'none') : 
              '0px' 
          }}
        >
          <p>{exp.details}</p>
          
          {exp.skills && (
            <div className="experience-skills">
              <h6>Key Skills:</h6>
              <div className="skill-pills">
                {exp.skills.map((skill, idx) => (
                  <span className="skill-pill" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          )}
          
          {exp.achievements && (
            <div className="experience-achievements">
              <h6>Key Achievements:</h6>
              <ul>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>          )}
          
          <div className="show-more-container">
            <button 
              className={`btn show-more-btn ${activeDetails[exp.id] ? 'active' : ''}`} 
              onClick={() => toggleDetail(exp.id)}
              aria-expanded={activeDetails[exp.id] ? 'true' : 'false'}
              aria-controls={`details-${exp.id}`}
            >
              {activeDetails[exp.id] ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="row mb-5">
          <div className="col-15 text-center">
            <h2 className="section-title mb-4">Experience</h2>
            
            <div className="experience-tabs">
              <button 
                className={`experience-tab ${activeTab === 'work' ? 'active' : ''}`}
                onClick={() => setActiveTab('work')}
              >
                Organizational Experience
              </button>
              <button 
                className={`experience-tab ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
          </div>
        </div>
        
        <div className="experience-list">
          {activeTab === 'work' ? renderExperienceItems(workExperiences) : renderExperienceItems(educationExperiences)}
        </div>
      </div>
    </section>
  );
}

export default Experience;
