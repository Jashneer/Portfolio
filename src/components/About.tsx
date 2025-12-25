export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Engineering Student & Problem Solver</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm a Computer Science student focused on algorithmic problem solving and building scalable frontend architectures. 
                My technical foundation is built on **Java-based Data Structures and Algorithms**, complemented by modern **React and TypeScript development**.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I successfully completed a high-velocity open-source tenure where I developed a strong foundation in writing production-level code. 
                I enjoy translating complex logic into elegant, modular technical solutions that prioritize performance and maintainability.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">Problem Solving</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Frontend Architecture</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Open Source</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/40 rounded-lg p-5 border-l-4 border-indigo-500">
                <h4 className="text-lg font-semibold text-white mb-1">Education</h4>
                <p className="text-slate-300 font-medium">B.E. Computer Science</p>
                <p className="text-slate-400 text-sm">CGPA: 8.06 • Expected Graduation: 2028</p>
              </div>
              
              <div className="bg-slate-700/40 rounded-lg p-5">
                <h4 className="text-lg font-semibold text-white mb-3">Key Milestones</h4>
                <ul className="text-slate-300 space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-emerald-400 font-semibold">Successfully Completed SSoC'25 (Rank 31)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span>Java Data Structures & Algorithms Mastery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span>React.js, TypeScript & Vite Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span>Competitive Programming & Open Source</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600/50">
                <h4 className="text-lg font-semibold text-white mb-2 text-sm uppercase tracking-wider text-slate-400">Primary Stack</h4>
                <p className="text-slate-300 text-sm">
                  Java, React.js, TypeScript, Tailwind CSS, Vite, Git/GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}