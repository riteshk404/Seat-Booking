import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

interface WorkshopInfoProps {
  onContinue: () => void;
}

export const WorkshopInfo: React.FC<WorkshopInfoProps> = ({ onContinue }) => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
      <div className="h-48 md:h-64 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }} />
      
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Git and Github Sessions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm md:text-base">March 15-20, 2024</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm md:text-base">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm md:text-base">MMC Campus, BCA and BIM Lab</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm md:text-base">66 Seats Available</span>
          </div>
        </div>

        <div className="prose max-w-none mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">About This Session</h2>
          <p className="text-sm md:text-base text-gray-600">
            In this 4-day workshop, you'll learn the basics of Git and Github from a campus
            expert. 
          </p>
          
          <h2 className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-3 md:mb-4">What You'll Learn</h2>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-600">
            <li>How to create a Github account and join the developer community</li>
            <li>Basic Git commands and best practices</li>
            <li>How to create a new repository, clone, and push code</li>
            <li>How to create a pull request and collaborate with others</li>
            <li>How to add and commit changes to a repository</li>
            <li>How to create and manage branches</li>
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 md:pt-6 border-t">
          <div>
            <p className="text-xl md:text-2xl font-bold text-gray-800">Free</p>
            <p className="text-xs md:text-sm text-gray-500">Closes in 2 days</p>
          </div>
          <button
            onClick={onContinue}
            className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 
                     transition-colors flex items-center gap-2 text-sm md:text-base"
          >
            Select Your Seat
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}