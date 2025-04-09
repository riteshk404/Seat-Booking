import React from 'react';

export const Legend: React.FC = () => {
  return (
    <div className="flex gap-2 sm:gap-6 items-center justify-center mt-2 sm:mt-8 flex-wrap">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-2 h-2 sm:w-4 sm:h-4 bg-blue-500 rounded" />
        <span className="text-[10px] sm:text-sm">Available</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-2 h-2 sm:w-4 sm:h-4 bg-gray-300 rounded" />
        <span className="text-[10px] sm:text-sm">Booked</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded" />
        <span className="text-[10px] sm:text-sm">Selected</span>
      </div>
    </div>
  );
};