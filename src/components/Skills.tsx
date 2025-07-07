import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Skill } from '../types';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Adobe XD', level: 80, category: 'design' }
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'bg-blue-600' },
    backend: { name: 'Backend', color: 'bg-green-600' },
    design: { name: 'Design', color: 'bg-purple-600' },
    tools: { name: 'Outils', color: 'bg-orange-600' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mes compétences
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique diversifiée acquise au fil des années et des projets, 
              constamment mise à jour avec les dernières technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div 
                key={category}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${categories[category as keyof typeof categories].color}`}></div>
                    {categories[category as keyof typeof categories].name}
                  </h3>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${categories[category as keyof typeof categories].color} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
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

export default Skills;