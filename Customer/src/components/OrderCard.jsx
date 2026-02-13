"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function OrderCard({ order, onViewItinerary }) {
  if (!order) return null;

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col xl:flex-row gap-6 xl:gap-8">

      {/* IMAGE */}
      <div className="relative w-full xl:w-[420px] h-[220px] md:h-[240px] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={order.image}
          alt={order.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 min-w-0">

        {/* TOP SECTION */}
        <div>
          <h3
            className={`${poppins.className} text-[18px] leading-[28px] font-semibold text-gray-900`}
          >
            {order.title}
          </h3>

          <p
            className={`${poppins.className} text-[15px] leading-[26px] font-normal text-gray-700 mt-2`}
          >
            {order.description}
          </p>

          {/* INFO GRID */}
          <div
            className={`${poppins.className} mt-6 grid grid-cols-2 gap-x-6 md:gap-x-12 text-[12px]`}
          >
            <div className="space-y-2 text-gray-400">
              <p className="uppercase tracking-wide">Time</p>
              <p className="uppercase tracking-wide">Date</p>
              <p className="uppercase tracking-wide">Location</p>
            </div>

            <div className="space-y-2 text-right text-gray-700 break-words">
              <p>Starts in {order.startsIn}</p>
              <p>{order.dateRange}</p>
              <p>
                {order.locationLine1}
                <br />
                {order.locationLine2}
              </p>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-8 flex-col md:flex-row w-full">

          {/* PRIMARY BUTTON */}
          <button
            onClick={() => onViewItinerary(order)}
            className={`${poppins.className}
              h-[44px] w-full md:flex-1
              px-6
              rounded-lg text-sm font-medium
              flex items-center justify-center
              bg-[#3D90BB] text-white
              hover:opacity-90 transition`}
          >
            View Itinerary
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className={`${poppins.className}
              h-[44px] w-full md:flex-1
              px-6
              rounded-lg text-sm font-medium
              flex items-center justify-center
              border border-[#3D90BB] text-[#3D90BB]
              hover:bg-blue-50 transition`}
          >
            Invoices
          </button>

        </div>
      </div>
    </div>
  );
}
