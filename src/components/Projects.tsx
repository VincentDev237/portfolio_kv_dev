import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Project } from '../types';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion des commandes, paiements et dashboard administrateur.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application mobile de gestion de tâches avec synchronisation en temps réel et collaboration d\'équipe.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Dashboard d\'analyse alimenté par l\'IA avec visualisations avancées et insights prédictifs.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'React', 'TensorFlow', 'D3.js'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 4,
      title: 'Desktop Photo Editor',
      description: 'Éditeur photo desktop avec filtres avancés et traitement d\'images en temps réel.',
      image: 'https://images.pexels.com/photos/38271/pexels-photo-38271.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Electron', 'Vue.js', 'WebGL'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'desktop'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Application météo avec prévisions détaillées, géolocalisation et notifications push.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React Native', 'OpenWeatherMap API', 'Redux'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec système de thème et animations fluides.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'desktop', name: 'Desktop' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mes projets
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Une sélection de projets qui démontrent ma polyvalence technique et ma créativité. 
              Chaque projet raconte une histoire d'innovation et de résolution de problèmes.
            </p>
          </div>

          {/* Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Filter className="text-gray-500 dark:text-gray-400" size={20} />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.demoUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;