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
  }, []);  // Project data state to pass to components
  const [projectsData] = useState({
    graphicProjects: {
      uiuxProjects: [
        {
          id: 'ux-1',
          title: 'Katalk App',
          image: '/images/projek/Katalk.png',
          category: 'UI/UX Design',
          date: 'September 2024 - October 2024',
          client: 'Course Project',
          role: 'UI/UX Designer',
          tools: ['Figma'],
          description: 'Katalk is an edtech business innovation platform based on AI, AR, and image preprocessing to support the learning of children with dyscalcula.',
          details: [
            'User-centered design approach',
            'Chat interface optimization',
            'Feature-rich UI components',
            'Cross-platform consistency'
          ],
          gallery: [
            // { src: '/images/projek/Katalk.png', alt: 'Katalk App Overview', title: 'Katalk Messenger App' },
            { src: '/images/projek/Katalk Detail 1.png', alt: 'Chat Interface', title: 'Chat Interface Design' },
            { src: '/images/projek/Katalk Detail 2.png', alt: 'User Profiles', title: 'User Profile Design' },
            { src: '/images/projek/Katalk Detail 3.png', alt: 'Settings Screen', title: 'Settings Interface' },
            { src: '/images/projek/Katalk Detail 4.png', alt: 'Media Sharing', title: 'Media Sharing Feature' },
            { src: '/images/projek/Katalk Detail 5.png', alt: 'Notifications', title: 'Notification Design' }
          ]
        },
        {
          id: 'ux-2',
          title: 'Cariness App',
          image: '/images/projek/Cariness.png',
          category: 'UI/UX Design',
          date: 'September 2024',
          client: 'Course Project',
          role: 'UI/UX Designer',
          tools: ['Figma'],
          description: 'Healthcare application designed to improve patient experience with intuitive appointment scheduling and health monitoring features.',
          details: [
            'Accessibility-focused design',
            'Medical dashboard interface',
            'Health data visualization',
            'Patient-doctor communication portal'
          ],
          gallery: [
            // { src: '/images/projek/Cariness.png', alt: 'Cariness App Overview', title: 'Cariness Health App' },
            { src: '/images/projek/Cariness Detail 1.png', alt: 'Appointment Screen', title: 'Appointment Booking' },
            { src: '/images/projek/Cariness Detail 2.png', alt: 'Health Tracker', title: 'Health Tracking Dashboard' },
            { src: '/images/projek/Cariness Detail 3.png', alt: 'Doctor Profile', title: 'Doctor Profile Interface' }
          ]
        },
        {
          id: 'ux-3',
          title: 'SeconDrive Website',
          image: '/images/projek/SeconDrive.png',
          category: 'UI/UX Design',
          date: 'December 2024',
          client: 'Course Project',
          role: 'UI/UX Designer',
          tools: ['Figma'],
          description: 'SeconDrive emerges as a solution to the challenges in the used car market by combining digital technology with a user-oriented approach. Through its web-based platform, SeconDrive not only connects buyers and sellers directly, but also provides various tools to enhance efficiency, transparency, and convenience throughout the transaction process. The platform aims to build a more modern and trustworthy ecosystem for buying and selling used cars.',
          details: [
            'Intuitive vehicle search interface',
            'Seller dashboard design',
            'In-app messaging system',
            'Vehicle comparison feature'
          ],
          gallery: [
            // { src: '/images/projek/SeconDrive.png', alt: 'SeconDrive App Overview', title: 'SeconDrive App' },
            { src: '/images/projek/SeconDrive Detail.png', alt: 'Vehicle Listing', title: 'Vehicle Listing Interface' }
          ]
        },
        {
          id: 'ux-4',
          title: 'DigiCosplay Platform',
          image: '/images/projek/DigiCosplay.png',
          category: 'UI/UX Design',
          date: 'June 2025',
          client: 'Course Project',
          role: 'UI/UX Designer',
          tools: ['Figma'],
          description: 'DigiCosplay is an innovative digital platform designed to facilitate the rental and trade of cosplay costumes. With a focus on security, affordability, and speed, DigiCosplay empowers users to engage in the cosplay community through a seamless and reliable online experience.',
          details: [
            'Social feed interface design',
            'Event discovery features',
            'User profile showcasing',
            'Community interaction elements'
          ],
          gallery: [
            { src: '/images/projek/DigiCosplay.png', alt: 'DigiCosplay Overview', title: 'DigiCosplay Platform' },
            { src: '/images/projek/DigiCosplay Detail.png', alt: 'User Profile', title: 'User Profile Design' }
          ]
        }
      ],      logoProjects: [
        {
          id: 'logo-1',
          title: 'MahaBisa Brand Identity',
          image: '/images/projek/MahaBisa.png',
          category: 'Logo Design',
          date: 'December 2023',
          client: 'Course Project',
          role: 'Brand Designer',
          tools: ['Adobe Illustrator'],
          description: 'Comprehensive brand identity design for an educational foundation empowering students with entrepreneurial skills.',
          details: [
            'Logo design with meaningful symbolism',
            'Brand color system development',
            'Typography and visual language',
            'Brand application guidelines'
          ],
          gallery: [
            { src: '/images/projek/MahaBisa.png', alt: 'MahaBisa Logo', title: 'MahaBisa Primary Logo' },
            { src: '/images/projek/MahaBisa-1.png', alt: 'Logo Alternative', title: 'Logo Alternative Version' },
            { src: '/images/projek/MahaBisa Detail.png', alt: 'Brand Guidelines', title: 'Brand Guidelines Preview' }
          ]
        },
        {
          id: 'logo-2',
          title: 'Insoft Identity Design',
          image: '/images/projek/Insoft.png',
          category: 'Logo Design',
          date: 'January 2024',
          client: 'Course Project',
          role: 'Logo Designer',
          tools: ['Adobe Illustrator'],
          description: 'Modern and versatile logo design for a technology company specializing in software solutions and digital services.',
          details: [
            'Minimalist technology-focused design',
            'Adaptable logo system',
            'Color variations for different applications',
            'Digital and print media optimization'
          ],
          gallery: [
            { src: '/images/projek/Insoft.png', alt: 'Insoft Logo', title: 'Insoft Corporate Logo' }
          ]
        },
        {
          id: 'logo-3',
          title: 'IMAGIRI 2025 Logo',
          image: '/images/projek/IMAGIRI 2025.png',
          category: 'Logo Design',
          date: 'April 2024',
          client: 'Course Project',
          role: 'Logo Designer',
          tools: ['Adobe Illustrator'],
          description: 'Distinctive logo design for IMAGIRI 2025 event, combining modern aesthetics with elements that represent innovation and community.',
          details: [
            'Event branding logo design',
            'Color palette selection',
            'Typography for event materials',
            'Logo variations for different applications'
          ],
          gallery: [
            { src: '/images/projek/IMAGIRI 2025.png', alt: 'IMAGIRI Logo', title: 'IMAGIRI 2025 Main Logo' }
          ]
        },
        {
          id: 'logo-4',
          title: 'Bedah Skripsi 2024 Logo',
          image: '/images/projek/Bedah Skripsi 2024.png',
          category: 'Logo Design',
          date: 'January 2024',
          client: 'Course Project',
          role: 'Logo Designer',
          tools: ['Adobe Illustrator', 'Adobe Photoshop'],
          description: 'Academic event logo design for a thesis review program that communicates scholarly focus with a modern approach.',
          details: [
            'Educational event branding',
            'Academic-focused logo design',
            'Typography for formal setting',
            'Visual elements for university event'
          ],
          gallery: [
            { src: '/images/projek/Bedah Skripsi 2024.png', alt: 'Bedah Skripsi Logo', title: 'Bedah Skripsi 2024 Logo' }
          ]
        }
      ],
      socialMediaProjects: [
        {
          id: 'social-1',
          title: 'I-Secret Event Campaign',
          image: '/images/projek/I-Secret.png',
          category: 'Social Media Design',
          date: 'February 20, 2024',
          client: 'I-Secret Event Organizer',
          role: 'Social Media Designer',
          tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
          description: 'Comprehensive social media campaign for a special event with consistent branding across multiple platforms.',
          details: [
            'Event promotional materials',
            'Social media post templates',
            'Event announcement visuals',
            'Online advertising assets'
          ],
          gallery: [
            { src: '/images/projek/I-Secret.png', alt: 'I-Secret Main Visual', title: 'I-Secret Event Key Visual' },
            { src: '/images/projek/IsecretDetail.png', alt: 'Campaign Details', title: 'Campaign Design Details' },
            { src: '/images/projek/LANYARD I-SECRET 2024.png', alt: 'Event Lanyard', title: 'Event Lanyard Design' }
          ]
        },
        {
          id: 'social-2',
          title: 'IMAGIRI 2025 Campaign',
          image: '/images/projek/IMAGIRI 2025.png',
          category: 'Social Media Design',
          date: 'April 5, 2024',
          client: 'IMAGIRI Committee',
          role: 'Content Designer',
          tools: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects'],
          description: 'Engaging visual campaign for IMAGIRI 2025 event, including social media content and event merchandise designs.',
          details: [
            'Event branding package',
            'Social media content strategy',
            'Merchandise design for event',
            'Digital promotion materials'
          ],
          gallery: [
            { src: '/images/projek/IMAGIRI 2025.png', alt: 'IMAGIRI Main Visual', title: 'IMAGIRI 2025 Main Visual' },
            { src: '/images/projek/LANYARD IMAGIRI 2025.png', alt: 'IMAGIRI Lanyard', title: 'Event Lanyard Design' },
            { src: '/images/projek/PDH IMAGIRI 2024.png', alt: 'Official Uniform', title: 'Official Event Uniform 2024' },
            { src: '/images/projek/PDH IMAGIRI 2025 1.png', alt: 'Official Uniform 2025', title: 'Official Event Uniform 2025 Front' },
            { src: '/images/projek/PDH IMAGIRI 2025 2.png', alt: 'Official Uniform Back', title: 'Official Event Uniform 2025 Back' },
            { src: '/images/projek/WORKSHIRT IMAGIRI 1.png', alt: 'Workshop Shirt Front', title: 'Workshop Shirt Design Front' },
            { src: '/images/projek/WORKSHIRT IMAGIRI 2.png', alt: 'Workshop Shirt Back', title: 'Workshop Shirt Design Back' }
          ]
        }      ],      mockupProjects: [
        {
          id: 'mockup-1',
          title: 'Bedah Skripsi 2024',
          image: '/images/projek/Bedah Skripsi 2024.png',
          category: 'Mockup Design',
          date: 'January 15, 2024',
          client: 'University Academic Committee',
          role: 'Design Specialist',
          tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
          description: 'Educational event branding and design package for a thesis review program at the university level.',
          details: [
            'Event banner and poster design',
            'Digital invitation templates',
            'Program booklet layout',
            'Certificate design for participants'
          ],
          gallery: [
            { src: '/images/projek/Bedah Skripsi 2024.png', alt: 'Bedah Skripsi Banner', title: 'Bedah Skripsi 2024 Banner' }
          ]
        },
        {
          id: 'mockup-2',
          title: 'IMAGIRI Event Materials',
          image: '/images/projek/PDH IMAGIRI 2024.png',
          category: 'Mockup Design',
          date: 'March 12, 2024',
          client: 'IMAGIRI Event Committee',
          role: 'Mockup Designer',
          tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
          description: 'Comprehensive mockup designs for event materials including uniforms, lanyards, and workshop shirts for IMAGIRI events.',
          details: [
            'Official event uniform design (PDH)',
            'Workshop shirt mockups',
            'Event lanyard designs',
            'Branded merchandise concepts'
          ],
          gallery: [
            { src: '/images/projek/PDH IMAGIRI 2024.png', alt: 'PDH 2024', title: 'Official Event Uniform 2024' },
            { src: '/images/projek/PDH IMAGIRI 2025 1.png', alt: 'PDH 2025 Front', title: 'Official Event Uniform 2025 Front' },
            { src: '/images/projek/PDH IMAGIRI 2025 2.png', alt: 'PDH 2025 Back', title: 'Official Event Uniform 2025 Back' },
            { src: '/images/projek/WORKSHIRT IMAGIRI 1.png', alt: 'Workshop Shirt Front', title: 'Workshop Shirt Design Front' },
            { src: '/images/projek/WORKSHIRT IMAGIRI 2.png', alt: 'Workshop Shirt Back', title: 'Workshop Shirt Design Back' },
            { src: '/images/projek/LANYARD IMAGIRI 2025.png', alt: 'IMAGIRI Lanyard', title: 'Event Lanyard Design' }
          ]
        },
        {
          id: 'mockup-3',
          title: 'I-Secret Event Materials',
          image: '/images/projek/LANYARD I-SECRET 2024.png',
          category: 'Mockup Design',
          date: 'February 25, 2024',
          client: 'I-Secret Event Organizers',
          role: 'Product Designer',
          tools: ['Adobe Photoshop', 'Adobe Illustrator'],
          description: 'Event materials design for I-Secret 2024 conference including lanyards and branded merchandise.',
          details: [
            'Conference lanyard design',
            'Branded merchandise concepts',
            'Event swag item mockups',
            'Identity materials for participants'
          ],
          gallery: [
            { src: '/images/projek/LANYARD I-SECRET 2024.png', alt: 'I-Secret Lanyard', title: 'I-Secret Event Lanyard 2024' },
            { src: '/images/projek/I-Secret.png', alt: 'I-Secret Main Visual', title: 'I-Secret Event Key Visual' }
          ]
        }
      ]
    },
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
      // {
      //   id: 'sw-2',
      //   title: 'Digital Library',
      //   image: '/images/work-1.png',
      //   description: 'Online library collection management system',
      //   client: 'Public Library Network',
      //   role: 'Backend Developer',
      //   technologies: ['Laravel', 'MySQL', 'AWS'],
      //   features: [
      //     'Advanced catalog search with filters',
      //     'User borrowing management system',
      //     'E-book integration with reading capabilities',
      //     'Admin dashboard for inventory management'
      //   ],
      //   demoLink: 'https://digital-library.example.com',
      //   githubLink: 'https://github.com/username/digital-library',
      //   figmaLink: 'https://figma.com/file/design/digital-library',
      //   gallery: [
      //     { src: '/images/work-1.png', alt: 'Library home page' },
      //     { src: '/images/work-2.png', alt: 'Book detail page' },
      //     { src: '/images/work-3.png', alt: 'Admin panel' }
      //   ]
      // },
      // {
      //   id: 'sw-3',
      //   title: 'Tourism Portal',
      //   image: '/images/work-2.png',
      //   description: 'Indonesia tourism web portal for showcasing hidden gems',
      //   client: 'Indonesia Tourism Board',
      //   role: 'Frontend Developer',
      //   technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
      //   features: [
      //     'Interactive map with location highlights',
      //     'Virtual tours of popular destinations',
      //     'Booking integration with local tour guides',
      //     'Multi-language support for international tourists'
      //   ],
      //   demoLink: 'https://tourism-portal.example.com',
      //   githubLink: 'https://github.com/username/tourism-portal',
      //   figmaLink: 'https://figma.com/file/design/tourism-portal',
      //   gallery: [
      //     { src: '/images/work-2.png', alt: 'Tourism portal home' },
      //     { src: '/images/work-3.png', alt: 'Destination details' },
      //     { src: '/images/work-1.png', alt: 'Interactive map' }
      //   ]
      // }
    ]
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (projectId) => {
    // Create a flat array of all projects for searching
    const allGraphicProjects = [
      ...(projectsData.graphicProjects.uiuxProjects || []),
      ...(projectsData.graphicProjects.logoProjects || []),
      ...(projectsData.graphicProjects.socialMediaProjects || []),
      ...(projectsData.graphicProjects.mockupProjects || [])
    ];
    
    const project = 
      [...allGraphicProjects, ...projectsData.softwareProjects]
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
