"use client";

import { useState } from "react";
import Image from "next/image";
import ItineraryModal from "./ItineraryModal";
import ViewItineraryButton from "./ViewItineraryButton";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function BookingCard({ booking }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${poppins.className} bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow`}
      >
        {/* IMAGE */}
        <div className="relative h-36 w-full rounded-xl overflow-hidden">
          <Image
            src={booking.image}
            alt={booking.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-[15px] font-semibold text-gray-800">
          {booking.title}
        </h3>

        {/* PRICE */}
        <p className="text-[#3D90BB] font-bold text-[15px] mt-1">
          ${booking.price}
        </p>

        {/* THIN HORIZONTAL LINE */}
        <div className="border-t border-[#0000001C] mt-3"></div>

        {/* DETAILS */}
        <div className="text-[11px] font-normal text-gray-500 mt-3 space-y-1">
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
        <div className="mt-4">
          <ViewItineraryButton onClick={() => setOpen(true)} />
        </div>
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
