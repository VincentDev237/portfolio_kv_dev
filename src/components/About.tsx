import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Développement',
      description: 'Expert en technologies modernes avec une approche clean code'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      description: 'Création d\'interfaces utilisateur intuitives et esthétiques'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimisation pour des expériences ultra-rapides'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Travail d\'équipe efficace et communication transparente'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              À propos de moi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications 
              web et mobiles innovantes. Je transforme les idées en solutions digitales impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Portrait professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ma passion pour le développement a commencé il y a plusieurs années et n'a cessé de grandir. 
                  J'aime créer des solutions qui non seulement fonctionnent parfaitement, mais qui offrent 
                  également une expérience utilisateur exceptionnelle.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Chaque projet est une nouvelle opportunité d'apprendre et d'innover. Je m'efforce 
                  constamment d'améliorer mes compétences et de rester à jour avec les dernières 
                  technologies et meilleures pratiques.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mb-2">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;