import { Award, Target } from 'lucide-react';

const achievements = [
  {
    title: "Winner - VISION UI (1st Place)",
    description: "Achieved first place for high-fidelity design and innovative execution in a competitive design-to-code challenge.",
    icon: Award,
    color: "text-yellow-400"
  },
  {
    title: "Winner - Wall Street Challenge (\"Bull of Wall Street\")",
    description: "Secured 1st place for implementing optimized Java-based DSA to solve financial risk problems.",
    icon: Award,
    color: "text-emerald-400"
  },
  {
    title: "DSA MasterMind - Rank 1241",
    description: "Ranked 1241st out of thousands in a nationwide algorithmic logic round.",
    icon: Target,
    color: "text-indigo-400"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Key Achievements</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <achievement.icon className={`w-8 h-8 ${achievement.color} mt-1`} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}