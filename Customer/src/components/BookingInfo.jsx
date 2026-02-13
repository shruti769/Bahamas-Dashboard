"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function BookingInfo() {
  return (
    <div className="bg-white py-5 px-4 sm:py-6 sm:px-6 rounded-2xl shadow-sm 
                    flex flex-col md:flex-row 
                    items-center md:items-center 
                    justify-between 
                    gap-6 md:gap-9">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 w-full text-center md:text-left">

        {/* Booking Info Heading */}
        <h3
          className={`${poppins.className} text-[22px] font-semibold mb-3`}
        >
          Booking Info
        </h3>

        {/* What to Bring Title */}
        <p
          className={`${poppins.className} text-[21px] font-medium mb-3`}
        >
          “What to Bring” list
        </p>

        {/* List */}
        <ul
          className={`${poppins.className} text-[13px] font-normal text-gray-500 
          space-y-2 list-disc ml-6 md:ml-7 text-left`}
        >
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button
            className={`${poppins.className} mt-5 bg-[#3D90BB] text-white 
            px-5 py-2 rounded-lg text-sm font-medium 
            hover:opacity-90 transition`}
          >
            View Itinerary
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-auto flex justify-center">
        <Image
          src="/images/man.png"
          alt="Man with map"
          width={220}
          height={180}
          className="object-contain md:w-[260px] md:h-[200px]"
        />
      </div>
    </div>
  );
}
