"use client";

import { useState } from "react";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function generateDays(totalDays) {
  return Array.from({ length: totalDays }, (_, i) => i + 1);
}

export default function FilterPanel({ open, onClose, onSelectRange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  if (!open) return null;

  const handleSelect = (day, month) => {
    const selected = `2022-${month}-${String(day).padStart(2, "0")}`;

    if (!startDate) {
      setStartDate(selected);
      setEndDate(null);
    } else if (!endDate) {
      let start = startDate;
      let end = selected;

      if (new Date(end) < new Date(start)) {
        [start, end] = [end, start];
      }

      setStartDate(start);
      setEndDate(end);

      onSelectRange(start, end);
      onClose();
    } else {
      setStartDate(selected);
      setEndDate(null);
    }
  };

  const isInRange = (day, month) => {
    if (!startDate) return false;

    const current = new Date(
      `2022-${month}-${String(day).padStart(2, "0")}`
    );

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : start;

    return current >= start && current <= end;
  };

  const renderMonth = (monthName, monthNumber, totalDays) => (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm sm:text-base">
          {monthName} 2022
        </span>
      </div>

      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {generateDays(totalDays).map((day) => (
          <div
            key={day}
            onClick={() => handleSelect(day, monthNumber)}
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors
              ${
                isInRange(day, monthNumber)
                  ? "bg-[#3D90BB] text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* RESPONSIVE PANEL */}
      <div
        className="
          fixed z-50 bg-white shadow-2xl
          rounded-t-2xl sm:rounded-2xl
          w-full sm:w-[90%] md:w-[700px]
          right-0 sm:right-auto
          left-0 sm:left-1/2
          sm:-translate-x-1/2
          top-auto sm:top-20
          bottom-0 sm:bottom-auto
          p-4 sm:p-6
          max-h-[90vh] overflow-y-auto
          transition-all duration-300 ease-out
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Filter by Date Range
          </span>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            ×
          </button>
        </div>

        {/* MONTHS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {renderMonth("February", "02", 28)}
          {renderMonth("March", "03", 31)}
        </div>
      </div>
    </>
  );
}
