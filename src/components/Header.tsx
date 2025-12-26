import { Github, Linkedin, Mail, Code2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements'];
      
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

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
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const navLinks = [
    { name: 'Home', id: 'home', href: '#' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Achievements', id: 'achievements', href: '#achievements' },
  ];

  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <Code2 className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white">Jashneer Kaur</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href}
                onClick={link.id === 'home' ? scrollToTop : () => {}}
                className={`transition-colors font-medium ${
                  activeSection === link.id 
                    ? 'text-indigo-400' 
                    : 'text-slate-300 hover:text-indigo-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Social Links & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
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

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  if (link.id === 'home') scrollToTop(e);
                  setIsMenuOpen(false);
                }}
                className={`block transition-colors font-medium ${
                  activeSection === link.id 
                    ? 'text-indigo-400' 
                    : 'text-slate-300 hover:text-indigo-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Socials (Visible only inside hamburger) */}
            <div className="flex pt-4 border-t border-slate-800 space-x-6">
              <a href="https://github.com/Jashneer" target="_blank" rel="noopener noreferrer" className="text-slate-400"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/jashneer-kaur-441bb4301/" target="_blank" rel="noopener noreferrer" className="text-slate-400"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:jashneerkaur9@gmail.com" className="text-slate-400"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}