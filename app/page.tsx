"use client";

import { useState } from 'react';
import { Moon, Sun, ExternalLink, Github, Code, Zap, Globe, Rocket, ChevronRight, ArrowLeft, Star } from 'lucide-react';

interface Web3Project {
  id: number;
  title: string;
  description: string;
  tech: string[];// ["Solidity", "React", "Web3.js", "Ethereum"],
  status: string;
  hackathon: string;
  image: string;
  longDescription: string;
  features: string[]; //["Auto-rebalancing", "Multi-protocol support", "Gas optimization", "Real-time analytics"],
  demoUrl: string;
  githubUrl: string;
}

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "DeFi Yield Optimizer",
      description: "Smart contract platform for optimizing yield farming across multiple protocols",
      tech: ["Solidity", "React", "Web3.js", "Ethereum"],
      status: "Live",
      hackathon: "ETHGlobal Istanbul 2024",
      image: "🚀",
      longDescription: "A comprehensive DeFi platform that automatically optimizes yield farming strategies across multiple protocols. Uses advanced algorithms to rebalance portfolios and maximize returns while minimizing gas costs.",
      features: ["Auto-rebalancing", "Multi-protocol support", "Gas optimization", "Real-time analytics"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Decentralized marketplace for trading unique digital assets with zero fees",
      tech: ["Next.js", "IPFS", "Polygon", "The Graph"],
      status: "In Progress",
      hackathon: "Polygon Hackathon 2024",
      image: "🎨",
      longDescription: "A next-generation NFT marketplace built on Polygon with zero trading fees. Features advanced search, rarity rankings, and creator royalties with instant settlements.",
      features: ["Zero fees", "IPFS storage", "Rarity ranking", "Creator royalties"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "DAO Governance Tool",
      description: "Modern governance platform for decentralized organizations",
      tech: ["TypeScript", "Hardhat", "Aragon", "React"],
      status: "Beta",
      hackathon: "Hackathon Global Web3 2024",
      image: "🏛️",
      longDescription: "A comprehensive DAO governance platform that simplifies proposal creation, voting, and execution. Features quadratic voting, delegation, and advanced analytics.",
      features: ["Quadratic voting", "Vote delegation", "Proposal templates", "Analytics dashboard"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const AnimatedCharacter = () => (
    <div className="relative">
      <div className={`w-48 h-48 rounded-full ${theme === 'dark' ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} flex items-center justify-center animate-pulse shadow-2xl`}>
        <div className="text-6xl animate-bounce">👨‍💻</div>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );

  const ProjectCard = ({project}:any) => (
    <div 
      className={`${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border ${theme === 'dark' ? 'border-gray-700 hover:border-purple-500' : 'border-gray-200 hover:border-purple-400'}`}
      onClick={() => {
        setSelectedProject(project);
        setCurrentView('project-detail');
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{project.image}</div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'Live' ? 'bg-green-100 text-green-800' :
          project.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {project.status}
        </span>
      </div>
      
      <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {project.title}
      </h3>
      
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech:any, index:any) => (
          <span 
            key={index}
            className={`px-2 py-1 rounded text-xs ${theme === 'dark' ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {project.hackathon}
        </span>
        <ChevronRight className={`w-4 h-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
      </div>
    </div>
  );

  const ProjectDetail = ({ project }:any) => (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => setCurrentView('home')}
        className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>
      
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-2xl`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-6xl">{project.image}</div>
          <div>
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
              {project.hackathon}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              About This Project
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
              {project.longDescription}
            </p>
            
            <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature:any, index:any) => (
                <li key={index} className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Zap className="w-4 h-4 text-purple-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech:any, index:any) => (
                <span 
                  key={index}
                  className={`px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="space-y-3">
              <a 
                href={project.demoUrl}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}`}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
              
              <a 
                href={project.githubUrl}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section id='about' className="text-center py-20">
        <div className="flex justify-center mb-8">
          <AnimatedCharacter />
        </div>
        
        <h1 className={`text-5xl font-bold mb-4`}>
          Aditya Wisnu
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code className="w-6 h-6 text-purple-500" />
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Web2 → Web3 Frontend Developer
          </p>
        </div>
        
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          Transitioning from traditional web development to the decentralized future. 
          Building innovative DApps and exploring blockchain technologies through global hackathons 
          and cutting-edge projects.
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
            <Globe className="w-4 h-4" />
            Web3 Enthusiast
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
            <Rocket className="w-4 h-4" />
            Hackathon Participant
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills'>
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-900/80 border border-gray-800' : 'bg-white'} shadow-2xl backdrop-blur-sm`}>
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              Web2 Background
            </h3>
            <div className="space-y-4">
              {[
                { skill: 'React.js', level: 5, color: 'bg-blue-500' },
                { skill: 'Next.js', level: 4, color: 'bg-gray-500' },
                { skill: 'TypeScript', level: 4, color: 'bg-blue-600' },
                { skill: 'Tailwind CSS', level: 5, color: 'bg-cyan-500' },
                { skill: 'Node.js', level: 4, color: 'bg-green-500' }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      {item.skill}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 transition-colors ${
                            i < item.level 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className={`w-full h-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${(item.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-900/80 border border-purple-800/50' : 'bg-white'} shadow-2xl backdrop-blur-sm relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} flex items-center gap-3 relative z-10`}>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              Web3 Learning
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                { skill: 'Solidity', level: 3, color: 'bg-purple-500' },
                { skill: 'Web3.js', level: 4, color: 'bg-orange-500' },
                { skill: 'Ethers.js', level: 3, color: 'bg-blue-500' },
                { skill: 'IPFS', level: 3, color: 'bg-teal-500' },
                { skill: 'Polygon', level: 2, color: 'bg-purple-600' },
                { skill: 'The Graph', level: 2, color: 'bg-pink-500' }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      {item.skill}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 transition-colors ${
                            i < item.level 
                              ? 'text-purple-400 fill-purple-400' 
                              : theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className={`w-full h-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${(item.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects'>
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Hackathon Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'} rounded-full opacity-5 animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'} rounded-full opacity-5 animate-ping`}></div>
        <div className={`absolute top-1/2 right-1/3 w-32 h-32 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-300'} rounded-full opacity-5 animate-bounce`}></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 relative z-10">
        {currentView === 'home' && <HomePage />}
        {currentView === 'project-detail' && selectedProject && <ProjectDetail project={selectedProject} />}
      </main>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-md border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} mt-16`}>
        <div className="container mx-auto px-6 py-8 text-center">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Aditya Wisnu. Building the decentralized future, one project at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;