import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-4 md:px-6 py-3 md:py-4 border-b">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        
        <div className="px-4 md:px-6 py-3 md:py-4">
          {children}
        </div>
        
        <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-3 md:px-4 py-2 text-sm md:text-base text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 md:px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}