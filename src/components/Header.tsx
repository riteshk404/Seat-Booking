import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <span className="text-lg md:text-xl font-bold text-gray-800">TechCamp</span>
          </div>
          <nav>
            <ul className="flex gap-4 md:gap-6">
              <li>
                <a href="#" className="text-sm md:text-base text-gray-600 hover:text-gray-800">Workshops</a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-gray-600 hover:text-gray-800">Schedule</a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-gray-600 hover:text-gray-800">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}