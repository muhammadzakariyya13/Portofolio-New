import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  useEffect(() => {
    // Add smooth scrolling to all links
    const handleAnchorClick = (event) => {
      const target = event.target.closest('a');
      if (target && target.hash && target.hash !== '') {
        event.preventDefault();
        
        const hash = target.hash;
        const element = document.querySelector(hash);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth'
          });
          
          // Update active state in navbar
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          target.classList.add('active');
        }
      }
    };
    
    // Add click event listener to all links
    document.addEventListener('click', handleAnchorClick);
    
    // Handle navbar active state on scroll
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      
      document.querySelectorAll('section').forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        
        if (scrollPos >= top && scrollPos <= bottom) {
          const id = section.getAttribute('id');
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
        }
      });
      
      // Add background to navbar on scroll
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (scrollPos > 50) {
          navbar.style.padding = '10px 0';
          navbar.style.background = 'rgba(15, 26, 43, 0.9)';
        } else {
          navbar.style.padding = '15px 0';
          navbar.style.background = 'rgba(15, 26, 43, 0.7)';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Project data state to pass to components
  const [projectsData] = useState({
    graphicProjects: [
      {
        id: 'gd-1',
        title: 'Biografi Gus Dur',
        image: '/images/work-1.png',
        category: 'Diplom',
        date: 'Maret 20, 2022',
        pages: 200,
        client: 'Historical Publication House',
        role: 'Lead Designer',
        tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
        description: 'A comprehensive biography book design that captures the essence of Gus Dur\'s life and legacy through thoughtful typography and elegant layouts.',
        details: [
          'Complete cover design with special finishing',
          'Custom typography and chapter designs',
          'Historical photo restoration and enhancement',
          'Full color printing with premium binding'
        ],
        gallery: [
          { src: '/images/work-1.png', alt: 'Book cover' },
          { src: '/images/work-2.png', alt: 'Book spread 1' },
          { src: '/images/work-3.png', alt: 'Book spread 2' }
        ]
      },
      {
        id: 'gd-2',
        title: 'Naruto Shippuden Vol.1',
        image: '/images/work-2.png',
        category: 'Paranoid',
        date: 'Maret 20, 2022',
        pages: 200,
        client: 'Manga Publication',
        role: 'Cover Artist & Layout Designer',
        tools: ['Procreate', 'Adobe Photoshop', 'Clip Studio Paint'],
        description: 'A fresh take on the Naruto manga series with custom cover art and interior page layouts that enhance the reading experience.',
        details: [
          'Original cover illustration with dynamic composition',
          'Custom page layouts optimized for reading flow',
          'Typography selection for maximum readability',
          'Special effects for action scenes and transitions'
        ],
        gallery: [
          { src: '/images/work-2.png', alt: 'Manga cover' },
          { src: '/images/work-1.png', alt: 'Manga spread 1' },
          { src: '/images/work-3.png', alt: 'Manga spread 2' }
        ]
      }
    ],
    softwareProjects: [
      {
        id: 'sw-1',
        title: 'PDS Tracking System',
        image: '/images/work-3.png',
        description: 'Document tracking system for better workflow management',
        client: 'Government Agency',
        role: 'Full-stack Developer',
        technologies: ['React', 'Node.js', 'MongoDB'],
        features: [
          'Real-time document tracking with status updates',
          'User role management and access control',
          'Automated notifications and reminders',
          'Comprehensive analytics dashboard'
        ],
        demoLink: 'https://pds-tracking.example.com',
        githubLink: 'https://github.com/username/pds-tracking',
        figmaLink: 'https://figma.com/file/design/pds-tracking',
        gallery: [
          { src: '/images/work-3.png', alt: 'Dashboard view' },
          { src: '/images/work-1.png', alt: 'Document tracking screen' },
          { src: '/images/work-2.png', alt: 'Analytics view' }
        ]
      },
      {
        id: 'sw-2',
        title: 'Digital Library',
        image: '/images/work-1.png',
        description: 'Online library collection management system',
        client: 'Public Library Network',
        role: 'Backend Developer',
        technologies: ['Laravel', 'MySQL', 'AWS'],
        features: [
          'Advanced catalog search with filters',
          'User borrowing management system',
          'E-book integration with reading capabilities',
          'Admin dashboard for inventory management'
        ],
        demoLink: 'https://digital-library.example.com',
        githubLink: 'https://github.com/username/digital-library',
        figmaLink: 'https://figma.com/file/design/digital-library',
        gallery: [
          { src: '/images/work-1.png', alt: 'Library home page' },
          { src: '/images/work-2.png', alt: 'Book detail page' },
          { src: '/images/work-3.png', alt: 'Admin panel' }
        ]
      },
      {
        id: 'sw-3',
        title: 'Tourism Portal',
        image: '/images/work-2.png',
        description: 'Indonesia tourism web portal for showcasing hidden gems',
        client: 'Indonesia Tourism Board',
        role: 'Frontend Developer',
        technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
        features: [
          'Interactive map with location highlights',
          'Virtual tours of popular destinations',
          'Booking integration with local tour guides',
          'Multi-language support for international tourists'
        ],
        demoLink: 'https://tourism-portal.example.com',
        githubLink: 'https://github.com/username/tourism-portal',
        figmaLink: 'https://figma.com/file/design/tourism-portal',
        gallery: [
          { src: '/images/work-2.png', alt: 'Tourism portal home' },
          { src: '/images/work-3.png', alt: 'Destination details' },
          { src: '/images/work-1.png', alt: 'Interactive map' }
        ]
      }
    ]
  });



  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (projectId) => {
    const project = 
      [...projectsData.graphicProjects, ...projectsData.softwareProjects]
      .find(p => p.id === projectId);
    setSelectedProject(project);
    
    // Scroll to top when viewing a project
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <Navbar />
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
      ) : (
        <>
          <Home />
          <Projects projects={projectsData} onSelectProject={handleSelectProject} />
          <Certifications />
          <Skills />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App
