"use client";

export default function ViewItineraryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" w-full bg-[#3D90BB] text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
    >
      View Itinerary
    </button>
  );
}
