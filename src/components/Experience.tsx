import { GitBranch, ChevronDown, ChevronUp, ExternalLink, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  const [showContributions, setShowContributions] = useState(false);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Professional Experience</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
          {/* Rank Badge */}
          <div className="absolute top-0 right-0 bg-indigo-500 text-white px-6 py-2 rounded-bl-xl flex items-center gap-2 shadow-lg">
            <Trophy className="w-4 h-4" />
            <span className="font-bold text-sm tracking-tight">Rank 31 Nationally</span>
          </div>

          <div className="flex items-start space-x-4 mb-6 pt-4 md:pt-0">
            <GitBranch className="w-8 h-8 text-emerald-400 mt-1" />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Social Summer of Code (SSoC'25)</h3>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/20">Completed</span>
              </div>
              <p className="text-emerald-400 font-medium mb-1 text-sm uppercase tracking-wider">Open Source Contributor • June 2025 – August 2025</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Ranked 31st nationally among a highly competitive pool of contributors for technical excellence. 
                Focused on React ecosystem improvements and frontend architecture optimization in production-level repositories.
              </p>
              
              <button
                onClick={() => setShowContributions(!showContributions)}
                className="flex items-center space-x-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg transition-colors mb-4"
              >
                <span>{showContributions ? "Hide Contributions" : "View Contributions"}</span>
                {showContributions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showContributions && (
                <div className="mt-6 bg-slate-700/30 rounded-lg p-6 border border-slate-600/50">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Contributions & Impact:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">
                        <strong className="text-emerald-300">15 Merged Pull Requests:</strong> Successfully merged 15 high-impact PRs across diverse React and TypeScript ecosystems.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">
                        <strong className="text-emerald-300">Modular Component Design:</strong> Refactored legacy UI sections into reusable functional components for better maintainability.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">
                        <strong className="text-emerald-300">Bug Resolution:</strong> Identified and resolved critical navigation state and routing bugs using React Router.
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/pulls?q=is%3Apr+author%3AJashneer+is%3Amerged+created%3A2025-06-14..2025-08-14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors border border-slate-600"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify 15 Merged PRs on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}