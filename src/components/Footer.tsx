import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-indigo-400" />
            <span className="text-slate-300">Jashneer Kaur</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2025 Jashneer Kaur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}