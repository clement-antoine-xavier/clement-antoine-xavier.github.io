import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              &copy; {new Date().getFullYear()} XAVIER Clément Antoine. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-slate-700 dark:text-slate-300 text-sm flex items-center">
              Built with <Heart size={14} className="mx-1 text-red-500" /> and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;