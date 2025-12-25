import { Users, Zap, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Alumni Network",
    subtitle: "Hackspire 2025 • Microsoft Learn",
    icon: Users,
    description: "A centralized digital ecosystem engineered to bridge the communication gap between institutions and their global alumni networks.",
    techSpecs: "Solved the challenge of scattered alumni data by building a unified system for mentorship and career tracking. Replaced informal communication channels with a secure, searchable directory and real-time event management system. Designed to empower students through direct access to alumni mentorship and internship opportunities.",
    color: "text-blue-400",
    githubUrl: "https://github.com/Jashneer/Alumni_Network",
    liveUrl: "https://alumni-network.vercel.app/"
  },
  {
    title: "TradeASkill",
    subtitle: "Peer-to-Peer Exchange Platform",
    icon: Zap,
    description: "A peer-to-peer exchange platform focusing on modular state management and React-based logic.",
    techSpecs: "Engineered a dynamic frontend using React to manage complex user-to-user interaction flows. Implemented a modular component architecture for high code reusability. Designed an efficient client-side search and filtering system using JavaScript to minimize latency.",
    color: "text-indigo-400",
    githubUrl: "https://github.com/Jashneer/trade-a-skill",
    liveUrl: "https://trade-a-skill-r5lu.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start space-x-4 mb-4">
                <project.icon className={`w-8 h-8 ${project.color} mt-1`} />
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className={`text-sm font-medium ${project.color}`}>{project.subtitle}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Technical Specifications:</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.techSpecs}
                </p>
              </div>
              
              <div className="mt-auto flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 border border-slate-600 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}