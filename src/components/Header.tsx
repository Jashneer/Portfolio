import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements'];
      
      // 1. If we are near the very top, set active section to 'home'
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // 2. Determine which section is currently in the upper third of the viewport
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set state correctly on page load
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for smooth scrolling to top
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name - Acts as Home link */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <Code2 className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white">Jashneer Kaur</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={scrollToTop}
              className={`transition-colors font-medium ${
                activeSection === 'home' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`transition-colors font-medium ${
                activeSection === 'about' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              About
            </a>
            <a 
              href="#experience" 
              className={`transition-colors font-medium ${
                activeSection === 'experience' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className={`transition-colors font-medium ${
                activeSection === 'projects' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`transition-colors font-medium ${
                activeSection === 'skills' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              Skills
            </a>
            <a 
              href="#achievements" 
              className={`transition-colors font-medium ${
                activeSection === 'achievements' 
                  ? 'text-indigo-400' 
                  : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              Achievements
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Jashneer" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jashneer-kaur-441bb4301/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jashneerkaur9@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}