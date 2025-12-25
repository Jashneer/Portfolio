import { Code, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    // Emphasizing the transition to type-safe code
    skills: ["Java", "TypeScript", "JavaScript (ES6+)"],
    color: "text-indigo-400"
  },
  {
    title: "Frontend",
    icon: Globe,
    // Adding modern tooling used in your projects
    skills: ["React.js", "Tailwind CSS", "Vite"],
    color: "text-emerald-400"
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    // Highlighting your high-velocity open source tools
    skills: ["Git", "GitHub", "VS Code"],
    color: "text-purple-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:-translate-y-2 hover:border-indigo-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-slate-200 font-medium hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}