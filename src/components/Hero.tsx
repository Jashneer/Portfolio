import { Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Jashneer Kaur
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            B.E. Computer Science Student | Java DSA Specialist | Open Source Contributor
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A CS student with a CGPA of 8.60, specializing in Java-based algorithmic 
            problem solving and modular frontend architecture.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/JashneerKaur_Resume.pdf"
            download="Jashneer_Kaur_Resume.pdf"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/20"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
          <a 
            href="#projects"
            className="border border-slate-700 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}