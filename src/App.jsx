import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Certifications from './components/Certifications' // Dinonaktifkan sementara
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
      uiuxProjects: [        {
          id: 'ux-1',
          title: 'Katalk App',
          image: '/images/projek/Katalk.png',
          category: 'UI/UX Design',
          date: 'September 2024 - October 2024',
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
            { src: '/images/projek/Katalk Detail 1.png', alt: 'Chat Interface', title: 'Interface Design' },
            { src: '/images/projek/Katalk Detail 2.png', alt: 'User Profiles', title: 'User Profile Design' },
            { src: '/images/projek/Katalk Detail 3.png', alt: 'Settings Screen', title: 'Settings Interface' },
            { src: '/images/projek/Katalk Detail 4.png', alt: 'Media Sharing', title: 'Design Learning' },
            { src: '/images/projek/Katalk Detail 5.png', alt: 'Notifications', title: 'Premium Features Design' },
            { src: '/images/projek/Katalk Detail 6.png', alt: 'Notifications', title: 'Chatbot Design' }
          ]
        },        {
          id: 'ux-2',
          title: 'Cariness App',
          image: '/images/projek/Cariness.png',
          category: 'UI/UX Design',
          date: 'September 2024',
          role: 'UI/UX Designer',
          tools: ['Figma'],
          description: 'Cariness is an application designed to help final-year students and alumni easily access the Career Center services of Universitas Negeri Semarang through the official website (unnes.ac.id). The platform serves as a bridge between academic life and professional careers by providing convenient access to job opportunities, training programs, and career development resources. The initial development process involved group discussions to evaluate user needs and determine which features should be improved or added to ensure the application remains relevant, user-friendly, and aligned with current career trends.',
          details: [
            'Accessibility-focused design',
            'Medical dashboard interface',
            'Health data visualization',
            'Patient-doctor communication portal'
          ],
          gallery: [
            // { src: '/images/projek/Cariness.png', alt: 'Cariness App Overview', title: 'Cariness Health App' },
            { src: '/images/projek/Cariness Detail 1.png', alt: 'Appointment Screen', title: 'Design Partner Lists & Manage Training' },
            { src: '/images/projek/Cariness Detail 2.png', alt: 'Health Tracker', title: 'Design Added Job Fair & Added Training' },
            { src: '/images/projek/Cariness Detail 3.png', alt: 'Doctor Profile', title: 'Partner Detail Design & Training' }
          ]
        },        {
          id: 'ux-3',
          title: 'SeconDrive Website',
          image: '/images/projek/SeconDrive.png',
          category: 'UI/UX Design',
          date: 'December 2024',
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
            { src: '/images/projek/SeconDrive Detail.png', alt: 'Vehicle Listing', title: 'Secondrive Website Interface Design' }
          ]
        },        {
          id: 'ux-4',
          title: 'DigiCosplay Website',
          image: '/images/projek/DigiCosplay.png',
          category: 'UI/UX Design',
          date: 'June 2025',
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
            // { src: '/images/projek/DigiCosplay.png', alt: 'DigiCosplay Overview', title: 'DigiCosplay Platform' },
            { src: '/images/projek/DigiCosplay Detail.png', alt: 'User Profile', title: 'Digicosplay Website Interface Design' }
          ]
        },        {
          id: 'ux-5',
          title: 'MahaBisa Website',
          image: '/images/projek/MahaBisa.png',
          category: 'UI/UX Design',
          date: 'January 2024',
          role: 'UI/UX Designer',
          tools: ['Figma', 'Adobe XD'],
          description: 'MahaBisa is a self-development platform for Indonesian students through training, mentoring, and collaborative projects.',
          details: [
            'Responsive educational dashboard',
            'Resource library interface',
            'Mentorship connection system',
            'Event registration platform'
          ],
          gallery: [
            { src: '/images/projek/MahaBisa Detail.png', alt: 'MahaBisa Website Overview', title: 'Mahabisa Website Interface Design' }
          ]
        },        {
          id: 'ux-6',
          title: 'I-Secret Website',
          image: '/images/projek/I-Secret.png',
          category: 'UI/UX Design',
          date: 'February 2024',
          role: 'UI/UX Designer',
          tools: ['Figma', 'Adobe Photoshop'],
          description: 'I-Secret is an organization under the Computer Science Department of UNNES focused on technology research and digital innovation development.',
          details: [
            'Conference schedule visualizer',
            'Speaker profile showcase',
            'Interactive venue maps',
            'Resource download center'
          ],
          gallery: [
            // { src: '/images/projek/I-Secret.png', alt: 'I-Secret Website', title: 'I-Secret Conference Platform' },
            { src: '/images/projek/IsecretDetail.png', alt: 'I-Secret Materials', title: 'I-Secret Website Interface Design' }
          ]
        }
      ],      logoProjects: [          {
          id: 'logo-1',
          title: 'MahaBisa Website Logo',
          image: '/images/projek/COVER LOGO MAHABISA.png',
          category: 'Logo Design',
          date: 'December 2023',
          role: 'Brand Designer',
          tools: ['Figma'],
          description: 'Comprehensive brand identity design for an educational foundation empowering students with entrepreneurial skills.',
          gallery: [
            { src: '/images/projek/COVER LOGO MAHABISA.png', alt: 'MahaBisa Logo', title: 'MahaBisa Brand Identity' }
          ]
        },          {
          id: 'logo-2',
          title: 'Insoft Website Logo',
          image: '/images/projek/COVER LOGO INSOFT.png',
          category: 'Logo Design',
          date: 'January 2024',
          role: 'Logo Designer',
          tools: ['Adobe Illustrator'],
          description: 'Modern and versatile logo design for a technology company specializing in software solutions and digital services.',
          gallery: [
            { src: '/images/projek/COVER LOGO INSOFT.png', alt: 'Insoft Logo', title: 'Insoft Corporate Logo' }
          ]
        },          {
          id: 'logo-3',
          title: 'IMAGIRI Organization Logo',
          image: '/images/projek/COVER LOGO INSOFT-1.png',
          category: 'Logo Design',
          date: 'February 2024',
          role: 'Logo Designer',
          tools: ['CorelDraw', 'Figma'],
          description: 'Alternative design concept for Insoft corporate identity with a different visual approach.',
          gallery: [
            { src: '/images/projek/COVER LOGO INSOFT-1.png', alt: 'Insoft Alternative Logo', title: 'Insoft Alternative Design' }
          ]
        },          {
          id: 'logo-4',
          title: 'Bedah Skripsi 2024 Logo',
          image: '/images/projek/COVER LOGO BEDAH SKRIPSI.png',
          category: 'Logo Design',
          date: 'January 2024',
          role: 'Logo Designer',
          tools: ['CorelDraw', 'Figma'],
          description: 'Academic event logo design for a thesis review program that communicates scholarly focus with a modern approach.',
          gallery: [
            { src: '/images/projek/COVER LOGO BEDAH SKRIPSI.png', alt: 'Bedah Skripsi Logo', title: 'Bedah Skripsi 2024 Logo' }
          ]
        },        {
          id: 'logo-5',
          title: 'DigiCosplay Website Logo',
          image: '/images/projek/COVER LOGO DIGICOSPLAY.png',
          category: 'Logo Design',
          date: 'March 2024',
          role: 'Logo Designer',
          tools: ['CorelDraw', 'Figma'],
          description: 'Creative logo design for a digital cosplay platform that connects cosplay enthusiasts and facilitates costume rentals.',
          gallery: [
            { src: '/images/projek/COVER LOGO DIGICOSPLAY.png', alt: 'DigiCosplay Logo', title: 'DigiCosplay Brand Identity' }
          ]
        },        {
          id: 'logo-6',
          title: 'SeconDrive Website Logo',
          image: '/images/projek/COVER LOGO SECONDRIVE.png',
          category: 'Logo Design',
          date: 'April 2024',
          role: 'Logo Designer',
          tools: ['CorelDraw', 'Figma'],
          description: 'Modern logo design for a used car marketplace platform that connects buyers and sellers with a trustworthy digital experience.',
          gallery: [
            { src: '/images/projek/COVER LOGO SECONDRIVE.png', alt: 'SeconDrive Logo', title: 'SeconDrive Brand Identity' }
          ]
        }
      ],      socialMediaProjects: [        {
          id: 'social-1',
          title: 'IMAPRES Social Media',
          image: '/images/projek/IMAPRES POST.png',
          category: 'Social Media Design',
          date: 'March 15, 2025',
          role: 'Social Media Designer',
          tools: ['Figma', 'Canva'],
          description: 'The Media, Information, and Communication Division serves as the primary channel for disseminating information and building a positive public image of IMAPRES Wonogiri. This division plays a strategic role in documenting activities, managing digital platforms, and ensuring that all organizational communications are effective, informative, and engaging. It is responsible for handling official social media accounts, creating visual and written content, producing photo and video documentation, and maintaining smooth communication with the public, stakeholders, and internal members. Additionally, the division archives digital records of events and supports the distribution of internal information across divisions.',
          details: [
            'Social media content strategy',
            'Post template design system',
            'Promotional announcement visuals',
            'Digital marketing assets'
          ],
          gallery: [
            // { src: '/images/projek/IMAPRES POST.png', alt: 'IMAPRES Main Post', title: 'IMAPRES Main Campaign Visual' },
            { src: '/images/projek/IMAPRES POST 1.png', alt: 'IMAPRES Secondary Post', title: 'IMAPRES Announcement Post' },
            { src: '/images/projek/IMAPRES POST 2.png', alt: 'IMAPRES Post 1', title: 'IMAPRES Story Post' },
            { src: '/images/projek/IMAPRES POST 3.png', alt: 'IMAPRES Post 2', title: 'IMAPRES Puzzle Instagram Post' },
            { src: '/images/projek/IMAPRES POST 4.png', alt: 'IMAPRES Post 3', title: 'IMAPRES Zoom Background Design' }
          ]
        },        {
          id: 'social-2',
          title: 'IMAGIRI Social Media',
          image: '/images/projek/IMAGIRI POST.png',
          category: 'Social Media Design',
          date: 'April 5, 2025',
          role: 'Content Designer',
          tools: ['Figma', 'Adobe Photoshop', 'Canva'],
          description: 'The Media and Information Division of Imagiri UNNES is responsible for managing the organization’s communication channels and digital presence. This division creates and distributes informative and creative content to promote events, document activities, and maintain a strong connection between members and the public. It oversees social media management, graphic design, and publication efforts to ensure all information is conveyed clearly, attractively, and in line with the organization’s values. By doing so, the division plays a vital role in shaping the image and visibility of Imagiri UNNES within and beyond the campus community.',
          details: [
            'Event announcement posts',
            'Social media content calendar',
            'Promotional material design',
            'Digital campaign assets'
          ],
          gallery: [
            // { src: '/images/projek/IMAGIRI POST.png', alt: 'IMAGIRI Main Post', title: 'IMAGIRI Main Campaign Visual' },
            { src: '/images/projek/IMAGIRI POST 1.png', alt: 'IMAGIRI Post 1', title: 'IMAGIRI Announcement Post' },
            { src: '/images/projek/IMAGIRI POST 2.png', alt: 'IMAGIRI Post 2', title: 'IMAGIRI Story Post' },
            { src: '/images/projek/IMAGIRI POST 3.png', alt: 'IMAGIRI Post 3', title: 'IMAGIRI Banner Design' },
            { src: '/images/projek/IMAGIRI POST 4.png', alt: 'IMAGIRI Post 4', title: 'IMAGIRI Puzzle Instagram Post' }
          ]
        }],      mockupProjects: [        {          id: 'mockup-1',
          title: 'IMAGIRI 2025 Organization Work Shirt',
          image: '/images/projek/WORKSHIRT IMAGIRI 1.png',
          category: 'Mockup Design',
          // date: 'January 15, 2024',
          // role: 'Design Specialist',
          // tools: ['CorelDraw'],
          // description: 'Educational event branding and design package for a thesis review program at the university level.',
          gallery: [
            { src: '/images/projek/WORKSHIRT IMAGIRI 1.png', alt: 'Bedah Skripsi Banner', title: 'Bedah Skripsi 2024 Banner' }
          ]
        },        {          id: 'mockup-2',
          title: 'IMAGIRI 2025 Organizational Uniform',
          image: '/images/projek/PDH IMAGIRI 2025 1.png',
          category: 'Mockup Design',
          // date: 'March 12, 2024',
          // role: 'Mockup Designer',
          // tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
          // description: 'Comprehensive mockup designs for event materials including uniforms, lanyards, and workshop shirts for IMAGIRI events.',
          gallery: [
            { src: '/images/projek/PDH IMAGIRI 2025 1.png', alt: 'PDH 2024', title: 'Official Event Uniform 2024' }
            // { src: '/images/projek/PDH IMAGIRI 2025 1.png', alt: 'PDH 2025 Front', title: 'Official Event Uniform 2025 Front' },
            // { src: '/images/projek/PDH IMAGIRI 2025 2.png', alt: 'PDH 2025 Back', title: 'Official Event Uniform 2025 Back' },
            // { src: '/images/projek/WORKSHIRT IMAGIRI 1.png', alt: 'Workshop Shirt Front', title: 'Workshop Shirt Design Front' },
            // { src: '/images/projek/WORKSHIRT IMAGIRI 2.png', alt: 'Workshop Shirt Back', title: 'Workshop Shirt Design Back' },
            // { src: '/images/projek/LANYARD IMAGIRI 2025.png', alt: 'IMAGIRI Lanyard', title: 'Event Lanyard Design' }
          ]
        },        {          id: 'mockup-3',
          title: 'IMAGIRI 2024 Organizational Uniform',
          image: '/images/projek/PDH IMAGIRI 2024.png',
          category: 'Mockup Design',
          // date: 'February 25, 2024',
          // role: 'Product Designer',
          // tools: ['Adobe Photoshop', 'Adobe Illustrator'],
          // description: 'Event materials design for I-Secret 2024 conference including lanyards and branded merchandise.',
          gallery: [
            { src: '/images/projek/PDH IMAGIRI 2024.png', alt: 'I-Secret Lanyard', title: 'I-Secret Event Lanyard 2024' }
            // { src: '/images/projek/I-Secret.png', alt: 'I-Secret Main Visual', title: 'I-Secret Event Key Visual' }
          ]
        }, {          id: 'mockup-4',
          title: 'Lanyard I-SECRET 2024',
          image: '/images/projek/LANYARD I-SECRET 2024.png',
          category: 'Mockup Design',
          // date: 'February 25, 2024',
          // role: 'Product Designer',
          // tools: ['Adobe Photoshop', 'Adobe Illustrator'],
          // description: 'Event materials design for I-Secret 2024 conference including lanyards and branded merchandise.',
          gallery: [
            { src: '/images/projek/LANYARD I-SECRET 2024.png', alt: 'I-Secret Lanyard', title: 'I-Secret Event Lanyard 2024' }
            // { src: '/images/projek/I-Secret.png', alt: 'I-Secret Main Visual', title: 'I-Secret Event Key Visual' }
          ]
        }, {          id: 'mockup-5',
          title: 'Lanyard IMAGIRI 2025',
          image: '/images/projek/LANYARD IMAGIRI 2025.png',
          category: 'Mockup Design',
          // date: 'February 25, 2024',
          // role: 'Product Designer',
          // tools: ['Adobe Photoshop', 'Adobe Illustrator'],
          // description: 'Event materials design for I-Secret 2024 conference including lanyards and branded merchandise.',
          gallery: [
            { src: '/images/projek/LANYARD IMAGIRI 2025.png', alt: 'I-Secret Lanyard', title: 'I-Secret Event Lanyard 2024' }
            // { src: '/images/projek/I-Secret.png', alt: 'I-Secret Main Visual', title: 'I-Secret Event Key Visual' }
          ]
        }
      ]
    },
    softwareProjects: [
      {
        id: 'sw-1',
        title: 'Personal Portolio Website',
        image: '/images/projek/PortofolioWeb.png',
        description: 'Developed a modern portfolio website using React and modular CSS architecture, featuring dynamic section navigation and animated transitions. The site showcases personal details, categorized design and development projects, skills, certifications, and contact information with a responsive glassmorphism-themed UI design. Interactive project galleries and smooth scroll behavior enhance the user experience across devices.',
        client: 'Government Agency',
        role: 'Full-stack Developer',
        technologies: ['React.js', 'JavaScript'],
        features: [
          'Real-time document tracking with status updates',
          'User role management and access control',
          'Automated notifications and reminders',
          'Comprehensive analytics dashboard'
        ],
        demoLink: 'https://mzakariyya.vercel.app/',
        githubLink: 'https://github.com/muhammadzakariyya13/Portofolio-New',
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
    
    // Only search in graphic projects, not software projects
    const project = allGraphicProjects.find(p => p.id === projectId);
    
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
        <>          <Home />
          <Projects projects={projectsData} onSelectProject={handleSelectProject} />
          {/* Sertifikat dinonaktifkan sementara */}
          {/* <Certifications /> */}
          <Skills />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App
