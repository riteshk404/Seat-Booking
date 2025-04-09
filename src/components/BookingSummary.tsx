import React from 'react';
import { Armchair } from 'lucide-react';

interface BookingSummaryProps {
  selectedSeats: string[];
  onBook: () => void;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ selectedSeats, onBook }) => {
  const calculateTotal = () => {
    // return selectedSeats.length * 999;
    return 0 ;
  };

  return (
    <div className="mt-6 md:mt-12 border-t pt-4 md:pt-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Booking Summary</h3>
          <p className="text-sm md:text-base text-gray-600">Selected Seats: {selectedSeats.length}</p>
          <p className="text-xs md:text-sm text-gray-500">
            {selectedSeats.length > 0
              ? `Seats: ${selectedSeats.join(', ')}`
              : 'No seats selected'}
          </p>
          {selectedSeats.length > 0 && (
            <p className="mt-3 md:mt-4 text-xl md:text-2xl font-bold text-gray-800">
              Total: ${calculateTotal()}
            </p>
          )}
        </div>
        <button
          onClick={onBook}
          disabled={selectedSeats.length === 0}
          className="w-full md:w-auto bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg 
                    hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors
                    flex items-center justify-center md:justify-start gap-2 text-sm md:text-base"
        >
          <Armchair className="w-4 h-4 md:w-5 md:h-5" />
          Confirm Seats
        </button>
      </div>
    </div>
  );
}