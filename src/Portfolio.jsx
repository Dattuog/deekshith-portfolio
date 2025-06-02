import React, { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Twitter, User, Code, Globe, Sun, Moon, X, Github, Phone, GraduationCap } from 'lucide-react';
// import React, { useState, useRef, useEffect } from 'react';
// import { Mail, Linkedin, Twitter, User, Code, Globe, Sun, Moon, X, Github, Phone, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      shortDescription: "Developed a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment gateway integration.",
      fullDescription: "A comprehensive e-commerce solution built from the ground up, featuring a modern and responsive user interface. The platform includes secure user authentication and authorization, a dynamic product catalog with search and filtering capabilities, a fully functional shopping cart system, and integrated payment processing. The backend is built with robust APIs for managing products, orders, and user data, while the frontend provides an intuitive shopping experience across all devices.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT", "CSS3", "JavaScript"],
      features: [
        "User registration and authentication",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment gateway integration",
        "Order management system",
        "Responsive design for all devices",
        "Admin panel for product management"
      ],
      icon: Globe,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 2,
      title: "Mobile Task Manager",
      shortDescription: "Created a mobile task manager application with features for task creation, scheduling, prioritization, and progress tracking.",
      fullDescription: "A feature-rich mobile task management application designed to boost productivity and organization. The app allows users to create, organize, and track tasks with various priority levels and due dates. It includes advanced features like task categorization, progress tracking, reminder notifications, and data visualization for productivity insights. The application is optimized for mobile devices with an intuitive touch-friendly interface.",
      technologies: ["React Native", "Firebase", "AsyncStorage", "React Navigation", "Expo", "JavaScript", "Redux"],
      features: [
        "Task creation and editing",
        "Priority-based task organization",
        "Calendar integration and scheduling",
        "Progress tracking and analytics",
        "Push notifications and reminders",
        "Offline functionality",
        "Data synchronization across devices"
      ],
      icon: Code,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonBg: isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300',
    buttonText: isDarkMode ? 'text-white' : 'text-gray-900',
    hoverBg: isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
    iconBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    linkHover: isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600',
    dropdownBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    dropdownBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300'
  };

  return (
    <div className={`relative flex min-h-screen flex-col ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className={`flex items-center justify-between whitespace-nowrap border-b ${themeClasses.border} px-10 py-3 relative`}>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Logo */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={16} className="text-white" /> : <Moon size={16} className="text-white" />}
            </button>
            <h2 className={`${themeClasses.text} text-lg font-bold`}>Ravikoti Deekshith</h2>
          </div>
          
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className={`${themeClasses.text} text-sm font-medium ${themeClasses.linkHover} transition-colors cursor-pointer`} href="#about">About</a>
              <a className={`${themeClasses.text} text-sm font-medium ${themeClasses.linkHover} transition-colors cursor-pointer`} href="#projects">Projects</a>
              <a className={`${themeClasses.text} text-sm font-medium ${themeClasses.linkHover} transition-colors cursor-pointer`} href="#contact">Contact</a>
            </div>
            <div className="flex gap-2">
            <button 
  className={`flex items-center justify-center rounded-full h-10 w-10 ${themeClasses.buttonBg} ${themeClasses.buttonText} transition-colors`}
  onClick={() => window.open("https://twitter.com", "_blank")}
>
  <Twitter size={20} />
</button>
              <button className={`flex items-center justify-center rounded-full h-10 w-10 ${themeClasses.buttonBg} ${themeClasses.buttonText} transition-colors`}
               onClick={() => window.open("https://www.linkedin.com/in/deekshith-ravikoti-b65ba9225/", "_blank")}
               >
                <Linkedin size={20} />
              </button>
              <button className={`flex items-center justify-center rounded-full h-10 w-10 ${themeClasses.buttonBg} ${themeClasses.buttonText} transition-colors`}
               onClick={() => window.open("https://github.com/Dattuog", "_blank")}
               >
                <Github size={20} />
              </button>
            </div>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleProfileDropdown}
                className={`w-10 h-10 ${themeClasses.iconBg} rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer`}
              >
                <User size={20} className={themeClasses.buttonText} />
              </button>
              
              {/* Dropdown Menu */}
              {showProfileDropdown && (
                <div className={`absolute right-0 top-12 w-80 ${themeClasses.dropdownBg} ${themeClasses.border} border rounded-lg shadow-lg z-50 overflow-hidden`}>
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <User size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Ravikoti Deekshith</h3>
                        <p className="text-blue-100 text-sm">Software Engineering Enthusiast</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile Details */}
                  <div className="p-4 space-y-3">
                  {/* University (Clickable) */}
<div 
  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 transition-colors cursor-pointer"
  onClick={() => window.open("https://www.iitbhu.ac.in/", "_blank")}
>
  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
    <GraduationCap size={16} className="text-green-600" />
  </div>
  <div>
    <p className={`text-xs ${themeClasses.textSecondary}`}>University</p>
    <p className={`text-sm font-medium ${themeClasses.text}`}>IIT BHU, Varanasi</p>
  </div>
</div>

{/* Email (Clickable - Opens Mail Client) */}
<div 
  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 transition-colors cursor-pointer"
  onClick={() => window.location.href = "mailto:deekshith.ravikoti@email.com"}
>
  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
    <Mail size={16} className="text-blue-600" />
  </div>
  <div>
    <p className={`text-xs ${themeClasses.textSecondary}`}>Email</p>
    <p className={`text-sm font-medium ${themeClasses.text}`}>prsds10082003@gmail.com</p>
  </div>
</div>
                    
                    {/* Contact Number */}
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 transition-colors">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Phone size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className={`text-xs ${themeClasses.textSecondary}`}>Contact</p>
                        <p className={`text-sm font-medium ${themeClasses.text}`}>+91 90634 13089</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dropdown Footer */}
                  <div className={`border-t ${themeClasses.border} p-3`}>
                    <button 
                      className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      onClick={closeProfileDropdown}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-4xl flex-1">
            {/* Hero Section */}
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User size={48} className="text-white" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className={`${themeClasses.text} text-2xl font-bold text-center`}>Ravikoti Deekshith</p>
                    <p className={`${themeClasses.textSecondary} text-base text-center`}>Software Engineering Enthusiast | IIT BHU, Varanasi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section id="about" className="mt-8">
              <h2 className={`${themeClasses.text} text-2xl font-bold px-4 pb-3 pt-5`}>About</h2>
              <div className="flex p-4">
                <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-start">
                  <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={48} className="text-white" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className={`${themeClasses.text} text-xl font-bold mb-3`}>About Me</p>
                      <p className={`${themeClasses.textSecondary} text-base leading-relaxed`}>
                        I am Ravikoti Deekshith, a passionate software engineering enthusiast and a student at the Indian Institute of Technology (BHU), Varanasi. My academic
                        background in engineering has provided me with a strong foundation in problem-solving and analytical thinking, which I apply to my software development
                        projects. I am eager to contribute to innovative projects and continuously expand my skills in the ever-evolving tech landscape. My skills include Python,
                        JavaScript, React, Node.js, Git, SQL, HTML, and CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mt-8">
              <h2 className={`${themeClasses.text} text-2xl font-bold px-4 pb-3 pt-5`}>Skills</h2>
              <div className="px-4 space-y-8">
                {/* Programming Languages */}
                <div>
                  <h3 className={`${themeClasses.text} text-lg font-semibold mb-4`}>Programming Languages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>C</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>C++</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-700 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>Python</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>JavaScript</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-3">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>HTML</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>CSS</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>SQL</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools and Frameworks */}
                <div>
                  <h3 className={`${themeClasses.text} text-lg font-semibold mb-4`}>Tools and Frameworks</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-3">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>Bootstrap</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>Node.js</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-green-500 to-green-700 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>React.js</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>VS Code</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-3">
                        <Github size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>Git</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-red-500 to-red-700 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-lg flex items-center justify-center mb-3">
                        <Github size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>GitHub</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-gray-700 to-black h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mb-3">
                        <Code size={24} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-sm mb-2`}>MySQL Workbench</h4>
                      <div className={`w-full bg-gray-200 rounded-full h-2`}>
                        <div className="bg-gradient-to-r from-orange-500 to-orange-700 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <h3 className={`${themeClasses.text} text-lg font-semibold mb-4`}>Area of Interest</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className={`${themeClasses.cardBg} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <Code size={32} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-base mb-2`}>Data Structures and Algorithms</h4>
                      <p className={`${themeClasses.textSecondary} text-sm`}>Passionate about optimizing solutions and solving complex problems efficiently</p>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                        <Globe size={32} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-base mb-2`}>Problem Solving</h4>
                      <p className={`${themeClasses.textSecondary} text-sm`}>Enjoy tackling challenging problems with analytical thinking and creativity</p>
                    </div>

                    <div className={`${themeClasses.cardBg} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                        <Code size={32} className="text-white" />
                      </div>
                      <h4 className={`${themeClasses.text} font-semibold text-base mb-2`}>Software Development</h4>
                      <p className={`${themeClasses.textSecondary} text-sm`}>Building scalable applications and learning new technologies continuously</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mt-8">
              <h2 className={`${themeClasses.text} text-2xl font-bold px-4 pb-3 pt-5`}>Projects</h2>
              <div className="overflow-x-auto">
                <div className="flex items-stretch p-4 gap-6 min-w-max">
                  {projects.map((project) => {
                    const IconComponent = project.icon;
                    return (
                      <div key={project.id} className={`flex flex-col gap-4 rounded-xl ${themeClasses.cardBg} shadow-lg min-w-80 max-w-80`}>
                        <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-t-xl flex items-center justify-center`}>
                          <IconComponent size={64} className="text-white" />
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                          <div>
                            <p className={`${themeClasses.text} text-lg font-semibold mb-2`}>{project.title}</p>
                            <p className={`${themeClasses.textSecondary} text-sm leading-relaxed`}>
                              {project.shortDescription}
                            </p>
                          </div>
                          <button 
                            onClick={() => openProjectModal(project)}
                            className={`flex items-center justify-center rounded-full h-10 px-4 ${themeClasses.buttonBg} ${themeClasses.buttonText} text-sm font-bold transition-colors`}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex px-4 py-6 justify-center">
                <button className="flex items-center justify-center rounded-full h-12 px-6 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                  View All Projects
                </button>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mt-8">
  <h2 className={`${themeClasses.text} text-2xl font-bold px-4 pb-3 pt-5`}>
    Let’s Build Something Amazing Together! ✨
  </h2>
  <p className={`${themeClasses.text} text-base px-4 pb-6`}>
    Whether it’s a project, mentorship, or just a tech chat—my inbox is always open. 
    <span className="block pt-2">Drop me a message and let’s connect!</span>
  </p>
  
  {/* Email Card (Clickable + Placeholder Effect) */}
  <div 
    onClick={() => window.location.href = "mailto:prsds10082003@gmail.com"}
    className={`group flex items-center gap-4 px-4 py-3 ${themeClasses.hoverBg} rounded-lg mx-4 transition-all cursor-pointer hover:scale-[1.02] active:scale-100`}
  >
    <div className={`${themeClasses.buttonText} flex items-center justify-center rounded-lg ${themeClasses.iconBg} w-12 h-12 group-hover:bg-blue-500 transition-colors`}>
      <Mail size={24} className="group-hover:scale-110 transition-transform" />
    </div>
    <div className="flex-1">
      <p className={`${themeClasses.textSecondary} text-sm`}>Email Me</p>
      <div className="relative">
        <p className={`${themeClasses.text} text-base`}>prsds10082003@gmail.com</p>
        <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
      </div>
    </div>
    <span className="text-xs opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity">
      Click to reach out →
    </span>
  </div>
  
  {/* LinkedIn Card (Clickable + Placeholder Effect) */}
  <div 
    onClick={() => window.open("https://www.linkedin.com/in/deekshith-ravikoti-b65ba9225/", "_blank")}
    className={`group flex items-center gap-4 px-4 py-3 ${themeClasses.hoverBg} rounded-lg mx-4 mt-3 transition-all cursor-pointer hover:scale-[1.02] active:scale-100`}
  >
    <div className={`${themeClasses.buttonText} flex items-center justify-center rounded-lg ${themeClasses.iconBg} w-12 h-12 group-hover:bg-[#0A66C2] transition-colors`}>
      <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
    </div>
    <div className="flex-1">
      <p className={`${themeClasses.textSecondary} text-sm`}>Let’s Connect</p>
      <div className="relative">
        <p className={`${themeClasses.text} text-base`}>Ravikoti Deekshith</p>
        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0A66C2] group-hover:w-full transition-all duration-300"></span>
      </div>
    </div>
    <span className="text-xs opacity-0 group-hover:opacity-100 text-[#0A66C2] transition-opacity">
      Open profile →
    </span>
  </div>
</section>
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${themeClasses.cardBg} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-600">
                <h3 className={`${themeClasses.text} text-2xl font-bold`}>{selectedProject.title}</h3>
                <button
                  onClick={closeProjectModal}
                  className={`${themeClasses.buttonBg} ${themeClasses.buttonText} rounded-full p-2 hover:bg-gray-600 transition-colors`}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Icon */}
                <div className={`w-full h-32 bg-gradient-to-br ${selectedProject.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <selectedProject.icon size={48} className="text-white" />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className={`${themeClasses.text} text-lg font-semibold mb-3`}>Description</h4>
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`${themeClasses.text} text-lg font-semibold mb-3`}>Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`${themeClasses.text} text-lg font-semibold mb-3`}>Key Features</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2`}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={closeProjectModal}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;