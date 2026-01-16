import React, { useState } from "react";
import {
  Armchair,
  Laptop,
  Calendar,
  Users,
  Clock,
  MapPin,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { Seat } from "./components/Seat";
import { Legend } from "./components/Legend";
import { Header } from "./components/Header";
import { WorkshopInfo } from "./components/WorkshopInfo";
import { BookingSummary } from "./components/BookingSummary";
import { Modal } from "./components/Modal";

// Generate seats for a specific column
const generateColumnSeats = (columnLetter: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${columnLetter}${i + 1}`,
    isBooked: false,
  }));
};

// Generate initial seats data
const generateSeats = () => {
  return {
    leftOuter: generateColumnSeats("A", 18),
    middleLeft: generateColumnSeats("B", 15),
    middleRight: generateColumnSeats("C", 15),
    rightOuter: generateColumnSeats("D", 18),
  };
};

function App() {
  const [seats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [step, setStep] = useState<"info" | "booking">("info");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSeatSelect = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBookingConfirm = () => {
    setIsConfirmationOpen(false);
    setSelectedSeats([]);
    setStep("info");
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }
    setIsConfirmationOpen(true);
  };

  const renderColumn = (
    seats: Array<{ id: string; isBooked: boolean }>,
    label: string
  ) => (
    <div className="flex flex-col gap-0.5 sm:gap-1">
      <div className="text-center font-semibold text-gray-700 mb-0.5 sm:mb-1 text-[10px] sm:text-sm">
        Column {label}
      </div>
      {seats.map((seat) => (
        <Seat
          key={seat.id}
          id={seat.id}
          isBooked={seat.isBooked}
          isSelected={selectedSeats.includes(seat.id)}
          onSelect={handleSeatSelect}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="container mx-auto px-1 sm:px-4 py-2 sm:py-8">
        {step === "info" ? (
          <div className="max-w-4xl mx-auto">
            <WorkshopInfo onContinue={() => setStep("booking")} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setStep("info")}
              className="mb-2 sm:mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2 text-sm bg-gray-200 rounded-lg px-2 py-1"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Workshop Info
            </button>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-2xl shadow-xl p-1">
              <div className="bg-white rounded-md sm:rounded-xl p-2 sm:p-8">
                <h2 className="text-xl sm:text-3xl font-bold text-center mb-2 sm:mb-8 text-gray-800">
                  Select Your Seats
                </h2>

                {/* Room Layout according to bca lab */}
                <div className="relative bg-gray-50 rounded-md sm:rounded-xl p-2 sm:p-8 border-2 border-gray-200">
                  <div className="w-full">
                    {" "}
                    {/* Full width container */}
                    {/* Instructor Area */}
                    <div className="flex flex-col items-center mb-4 sm:mb-12">
                      <Laptop className="w-6 h-6 sm:w-12 sm:h-12 text-gray-400 mb-1 sm:mb-2" />
                      <div className="w-2/3 h-2 sm:h-4 bg-gray-200 rounded-lg mb-4 sm:mb-12">
                        <div className="text-center text-[10px] sm:text-sm text-gray-500 mt-2 sm:mt-6">
                          Instructor Area
                        </div>
                      </div>
                    </div>
                    {/* Left Wall */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-l" />
                    {/* Right Wall */}
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 sm:w-2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-r" />
                    {/* Seats Grid */}
                    <div className="flex justify-between gap-1 sm:gap-8 mb-4 sm:mb-12">
                      {/* Column A (Against Left Wall) */}
                      <div className="pl-1 sm:pl-4">
                        {renderColumn(seats.leftOuter, "A")}
                      </div>

                      {/* Middle Walking Space */}
                      <div className="w-4 sm:w-16 flex items-center justify-center">
                        <div className="text-gray-400 text-[8px] sm:text-sm rotate-90">
                          Waalking Space
                        </div>
                      </div>

                      {/* Middle Columns (B & C) */}
                      <div className="flex gap-1 sm:gap-4">
                        {renderColumn(seats.middleLeft, "B")}
                        {renderColumn(seats.middleRight, "C")}
                      </div>

                      {/* Middle Walking Space */}
                      <div className="w-4 sm:w-16 flex items-center justify-center">
                        <div className="text-gray-400 text-[8px] sm:text-sm rotate-90">
                          Walking Space
                        </div>
                      </div>

                      {/* Column D (Against Right Wall) */}
                      <div className="pr-1 sm:pr-4">
                        {renderColumn(seats.rightOuter, "D")}
                      </div>
                    </div>
                    <Legend />
                  </div>
                </div>

                {/* Booking Summary */}
                <BookingSummary
                  selectedSeats={selectedSeats}
                  onBook={handleBooking}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Modal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleBookingConfirm}
        title="Confirm Booking"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            You are about to book the following seats:
          </p>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-medium text-gray-800">
              {selectedSeats.join(", ")}
            </p>
          </div>
          <p className="text-gray-600">
            {/* Total amount: ${selectedSeats.length * 0} */}
          </p>
          <p className="text-sm text-gray-500">
            Please confirm your booking. This action cannot be undone.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
