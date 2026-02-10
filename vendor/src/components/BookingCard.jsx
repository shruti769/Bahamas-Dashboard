"use client";

import { useState } from "react";
import Image from "next/image";
import ItineraryModal from "./ItineraryModal";

export default function BookingCard({ booking }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* IMAGE */}
        <div className="relative h-36 w-full rounded-lg overflow-hidden">
          <Image
            src={booking.image}
            alt={booking.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-sm font-semibold text-gray-800">
          {booking.title}
        </h3>

        {/* PRICE */}
        <p className="text-[#3D90BB] font-semibold text-sm mt-0.5">
          ${booking.price}
        </p>

        {/* DETAILS */}
        <div className="text-xs text-gray-500 mt-3 space-y-1 border-t border-[#E9EBED] pt-4">
          <div className="flex justify-between">
            <span>Time</span>
            <span>{booking.time}</span>
          </div>

          <div className="flex justify-between">
            <span>Date</span>
            <span>{booking.date}</span>
          </div>

          <div className="flex justify-between">
            <span>Location</span>
            <span className="text-right">{booking.location}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full bg-[#3D90BB] text-white py-2 rounded-lg text-sm font-regular hover:opacity-90 transition"
        >
          View Itinerary
        </button>
      </div>

      {/* MODAL */}
      <ItineraryModal
        open={open}
        order={booking}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
