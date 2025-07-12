import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';
import { SocialLink } from '../types';
import kvLogo from '../asset/kv_bleu.png';
import kvLogoWhite from '../asset/kv_blanc.png';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/VincentDev237', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
    { name: 'Email', url: 'mailto:kabiagnen.v@gmail.com', icon: 'Mail' }
  ];

  const { isDark } = useTheme();

  const getIcon = (iconName: string) => {
    const icons = {
      Github: <Github size={20} />,
      Linkedin: <Linkedin size={20} />,
      Twitter: <Twitter size={20} />,
      Mail: <Mail size={20} />
    };
    return icons[iconName as keyof typeof icons];
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
            <div className="flex items-center">
              <img 
                src={isDark ? kvLogoWhite : kvLogo} 
                alt="KV Dev Solutions" 
                style={{ height: '120px', width: 'auto' }}
                className="mr-2"
              />
            </div>
              <p className="text-gray-400 leading-relaxed">
                Développeur passionné créant des expériences numériques exceptionnelles 
                avec les technologies modernes.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase().replace('à propos', 'about'));
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Douala, Cameroun</p>
                <p>kabiagnen.v@gmail.com</p>
                <p>+237 697 23 62 62</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:text-pink-500 dark:text-yellow-300 transition-all duration-200"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <span>Fait avec</span>
              <Heart size={16} className="text-pink-500 dark:text-yellow-300" />
              <span>par Vincent</span>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>&copy; 2025 <span className='text-pink-500 dark:text-yellow-300'>VincentDev237</span>. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;