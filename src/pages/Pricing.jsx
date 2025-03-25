import React, {useState} from 'react';
import {Code, Globe, Zap, Database, Smartphone, CloudLightning, ArrowRight} from 'lucide-react';

const projectCategories = {
  webDevelopment: [
    {
      name: 'E-Commerce Platform for Local Artisans',
      duration: '4 months',
      cost: 'PKR 2.5M',
      description: 'Digital marketplace connecting Pakistani handicraft sellers with national and international buyers.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      complexity: 'High'
    },
    {
      name: 'Corporate Website Redesign',
      duration: '2 months',
      cost: 'PKR 1.2M',
      description: 'Modern, responsive website with advanced SEO and performance optimization.',
      technologies: ['Next.js', 'Tailwind', 'Prisma'],
      complexity: 'Medium'
    }
  ],
  mobileApps: [
    {
      name: 'AgriTech Mobile Solution',
      duration: '3 months',
      cost: 'PKR 1.8M',
      description: 'Mobile app providing farmers with crop pricing, weather forecasts, and market linkages.',
      technologies: ['Flutter', 'Firebase', 'GraphQL'],
      complexity: 'High'
    },
    {
      name: 'Telemedicine Platform',
      duration: '3 months',
      cost: 'PKR 2.7M',
      description: 'Multilingual telemedicine solution connecting patients with doctors across Pakistan.',
      technologies: ['React Native', 'WebRTC', 'Stripe'],
      complexity: 'Very High'
    }
  ],
  aiSolutions: [
    {
      name: 'Islamic FinTech AI Platform',
      duration: '5 months',
      cost: 'PKR 4.5M',
      description: 'Shariah-compliant AI-powered digital banking with advanced financial insights.',
      technologies: ['Python', 'TensorFlow', 'Kubernetes'],
      complexity: 'Very High'
    },
    {
      name: 'Predictive Analytics Engine',
      duration: '4 months',
      cost: 'PKR 3.8M',
      description: 'Machine learning system for business forecasting and strategic decision-making.',
      technologies: ['PyTorch', 'Pandas', 'Docker'],
      complexity: 'High'
    }
  ],
  cloudServices: [
    {
      name: 'Enterprise Cloud Migration',
      duration: '4 months',
      cost: 'PKR 3.5M',
      description: 'Comprehensive cloud transformation strategy and implementation.',
      technologies: ['AWS', 'Terraform', 'Kubernetes'],
      complexity: 'Very High'
    },
    {
      name: 'Hybrid Cloud Infrastructure',
      duration: '5 months',
      cost: 'PKR 4.2M',
      description: 'Custom cloud solution balancing security, performance, and cost-effectiveness.',
      technologies: ['Azure', 'GCP', 'Ansible'],
      complexity: 'High'
    }
  ]
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('webDevelopment');

  const categories = [
    {
      key: 'webDevelopment',
      label: 'Web Development',
      icon: <Globe className="mr-2" />
    },
    {
      key: 'mobileApps',
      label: 'Mobile Apps',
      icon: <Smartphone className="mr-2" />
    },
    {
      key: 'aiSolutions',
      label: 'AI Solutions',
      icon: <Code className="mr-2" />
    },
    {
      key: 'cloudServices',
      label: 'Cloud Services',
      icon: <CloudLightning className="mr-2" />
    }
  ];

  const ComplexityBadge = ({level}) => {
    const complexityColors = {
      Low: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      High: 'bg-orange-100 text-orange-800',
      'Very High': 'bg-red-100 text-red-800'
    };

    return (
      <span
        className={`
        px-2 py-1 rounded-full text-xs font-semibold
        ${complexityColors[level] || 'bg-gray-100 text-gray-800'}
      `}
      >
        {level} Complexity
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Digital Solutions for Pakistani Enterprises</h1>
        <p className="text-xl max-w-2xl mx-auto text-white/90">Cutting-edge technology solutions tailored to transform your business</p>
      </div>

      {/* Category Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`
                flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.key ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'}
              `}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectCategories[activeCategory].map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-indigo-800">{project.name}</h3>
                  <ComplexityBadge level={project.complexity} />
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {project.duration}</span>
                    <span>Cost: {project.cost}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition-colors">
                  Explore Project <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
