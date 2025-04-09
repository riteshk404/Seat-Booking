import React from 'react';
import { cn } from '../utils/cn';

interface SeatProps {
  id: string;
  isBooked: boolean;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const Seat: React.FC<SeatProps> = ({ id, isBooked, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => !isBooked && onSelect(id)}
      disabled={isBooked}
      className={cn(
        'w-10 h-10 sm:w-16 sm:h-16 rounded transition-all duration-200 flex items-center justify-center',
        isBooked && 'bg-gray-300 cursor-not-allowed',
        isSelected && 'bg-green-500 hover:bg-green-600',
        !isBooked && !isSelected && 'bg-blue-500 hover:bg-blue-600',
        'relative'
      )}
      aria-label={`Seat ${id}`}
    >
      <span className="text-white text-sm sm:text-base font-medium">{id}</span>
    </button>
  );
};

