import React, {useState, useCallback, useEffect} from 'react';

// Icons Component for reusability
const Icons = {
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  PlayStore: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.51 6.03l3.98 3.98C7.18 8.64 7 7.87 7 7c0-1.66 1.34-3 3-3 .87 0 1.64.18 2.32.51l3.68-3.68c-.78-.52-1.7-.83-2.68-.83-2.21 0-4.08 1.51-4.7 3.57L3.51 6.03zM12 15c-1.66 0-3-1.34-3-3 0-.87.18-1.64.51-2.32L6.03 3.51C5.52 4.29 5.21 5.21 5.21 6.21c0 2.21 1.51 4.08 3.57 4.7l3.98 3.98c.78.52 1.7.83 2.68.83 2.21 0 4.08-1.51 4.7-3.57l-3.98-3.98C13.64 14.82 12.87 15 12 15z" />
      <path d="M12 17c-1.66 0-3-1.34-3-3 0-.87.18-1.64.51-2.32l-3.98-3.98C5.02 9.49 4.21 10.4 4.21 11.4c0 2.21 1.51 4.08 3.57 4.7l3.98 3.98c.78.52 1.7.83 2.68.83 2.21 0 4.08-1.51 4.7-3.57l-3.98-3.98c-.68.33-1.45.51-2.32.51zm4.7-3.57l3.98 3.98c.52-.78.83-1.7.83-2.68 0-2.21-1.51-4.08-3.57-4.7l-3.98-3.98c-.78-.52-1.7-.83-2.68-.83-2.21 0-4.08 1.51-4.7 3.57l3.98 3.98c.68-.33 1.45-.51 2.32-.51 1.66 0 3 1.34 3 3 0 .87-.18 1.64-.51 2.32l3.98 3.98c.52-.78.83-1.7.83-2.68 0-2.21-1.51-4.08-3.57-4.7z" />
    </svg>
  ),
  AppStore: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.917c-.948 0-2.415-1.078-3.961-1.06-2.035.02-3.905 1.183-4.942 3.014-2.105 3.642-.538 9.039 1.497 12.013 1.012 1.458 2.208 3.1 3.792 3.046 1.522-.06 2.095-.982 3.938-.982 1.837 0 2.35.982 3.927.958 1.637-.025 2.67-1.458 3.667-2.93 1.155-1.686 1.629-3.325 1.66-3.418-.036-.014-3.193-1.223-3.225-4.85-.031-3.041 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.322-4.389-2.371-2.003-.162-3.697 1.09-4.65 1.09zm-.981-1.752c.717-.871 1.205-2.08 1.074-3.313-1.04.043-2.297.692-3.044 1.563-.671.776-1.252 2.03-1.095 3.213 1.158.09 2.347-.581 3.065-1.463z" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'QR Code Attendance System',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      logo: 'https://via.placeholder.com/100',
      description: 'Revolutionize attendance tracking with our smart QR code solution',
      fullDescription: 'A comprehensive attendance management system that leverages QR technology to streamline check-ins, tracking, and reporting for organizations of all sizes.',
      features: ['Instant digital check-in', 'Real-time tracking', 'Comprehensive reporting', 'Mobile and web compatibility'],
      technologies: ['React Native', 'Firebase', 'GraphQL'],
      downloads: {
        apk: '/path/to/attendancesystem.apk',
        playStore: 'https://play.google.com/store/apps/details?id=com.yourcompany.attendancesystem',
        appStore: 'https://apps.apple.com/app/your-app-id'
      }
    },
    {
      id: 2,
      title: 'Community Event Management',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      logo: 'https://via.placeholder.com/100',
      description: 'Seamless event organization and participant management',
      fullDescription: 'An intuitive platform designed to simplify event planning, registration, and management with powerful digital tools.',
      features: ['Easy event creation', 'Digital invitations', 'Attendance tracking', 'Analytics dashboard'],
      technologies: ['Next.js', 'Tailwind', 'Prisma']
    },
    {
      id: 3,
      title: 'Digital Membership Platform',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80',
      logo: 'https://via.placeholder.com/100',
      description: 'Modern membership management with digital credentials',
      fullDescription: 'A comprehensive digital platform for managing memberships, access control, and member engagement with cutting-edge technology.',
      features: ['Profile management', 'Digital membership cards', 'Access control', 'Renewal notifications'],
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  const openProjectModal = useCallback(project => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Handle keyboard accessibility
  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    },
    [selectedProject, closeProjectModal]
  );

  // Add event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Header */}
        <div className="text-center mb-12 transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 
            transition-all duration-300 hover:text-blue-600"
          >
            Our Innovative Solutions
          </h2>
          <p
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto 
            transition-colors duration-300 hover:text-blue-700"
          >
            Transforming community management with cutting-edge technology
          </p>
        </div>

        {/* Responsive Grid of Projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="relative group cursor-pointer transform transition-all duration-300 
              hover:scale-105 hover:shadow-lg active:scale-95"
              onClick={() => openProjectModal(project)}
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-md 
              transition-all duration-300 ease-in-out"
              >
                {/* Project Image with Overlay */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-64 object-cover 
                    transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black opacity-40 
                  group-hover:opacity-50 transition-opacity"
                  ></div>
                </div>

                {/* Project Details Overlay */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center mb-2 md:mb-4">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 border-2 border-white 
                      transition-transform duration-300 group-hover:rotate-6"
                    />
                    <h3
                      className="text-xl md:text-2xl font-bold transition-colors duration-300 
                    group-hover:text-blue-300"
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs md:text-sm opacity-90 transition-opacity duration-300 
                  group-hover:opacity-100"
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center 
            p-4 overflow-y-auto"
            onClick={closeProjectModal}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
              transform transition-all duration-300 ease-in-out 
              hover:shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 md:h-64 object-cover rounded-t-2xl" />
                <button
                  onClick={closeProjectModal}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 
                  rounded-full p-2 transition-all duration-300 
                  hover:rotate-90 active:scale-90"
                >
                  <Icons.Close />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <img
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} logo`}
                    className="w-16 h-16 mb-4 md:mb-0 md:mr-6 rounded-full border-4 border-gray-200 
                    transition-transform duration-300 hover:rotate-12"
                  />
                  <div className="text-center md:text-left">
                    <h2
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 
                    transition-colors duration-300 hover:text-blue-700"
                    >
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Full Description</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700 
                          transition-all duration-300 hover:pl-2 hover:text-blue-600"
                        >
                          <Icons.Check />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm 
                        transition-all duration-300 hover:bg-blue-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* App Download Section */}
                {selectedProject.downloads && (
                  <div className="p-6 bg-gray-50 rounded-b-2xl mt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Download Our App</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                      {/* Direct APK Download */}
                      <a
                        href={selectedProject.downloads.apk}
                        download
                        className="flex items-center justify-center bg-green-500 text-white 
                        px-6 py-3 rounded-lg hover:bg-green-600 transition-colors 
                        space-x-2 w-full md:w-auto"
                      >
                        <Icons.Download />
                        <span>Download APK</span>
                      </a>

                      {/* Play Store Link */}
                      <a
                        href={selectedProject.downloads.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-black text-white 
                        px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors 
                        space-x-2 w-full md:w-auto"
                      >
                        <Icons.PlayStore />
                        <span>Google Play</span>
                      </a>

                      {/* App Store Link */}
                      <a
                        href={selectedProject.downloads.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-blue-600 text-white 
                        px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors 
                        space-x-2 w-full md:w-auto"
                      >
                        <Icons.AppStore />
                        <span>App Store</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
