"use client";

import { useState } from "react";

import ReviewManagement from "@/app/reviews/ReviewManagement";
import SupportSystem from "@/app/reviews/SupportSystem";
import { Search } from "lucide-react";
import UpcomingBookings from "./UpcomingBookings";
import PastBooking from "./PastBooking";
import CancelledBooking from "./CancelledBooking";

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState("upcoming");


  return (
    <div className="bg-[#F0F0F0] min-h-screen p-6">
      <div className="flex justify-between">
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
    ${activeTab === "upcoming"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img
              width={14} height={14}
              src={
                activeTab === "upcoming"
                  ? "/images/upcoming-white.svg"
                  : "/images/upcoming.svg"
              }
              alt="upcoming"
            />
            Upcoming Bookings
          </button>

          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
            ${activeTab === "past"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img width={14} height={14} src={
              activeTab === "past"
                ? "/images/past-white.svg"
                : "/images/past.svg"
            } />
            Past Bookings
          </button>

          <button
            onClick={() => setActiveTab("cancel")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
            ${activeTab === "cancel"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img width={14} height={14} src={
              activeTab === "cancel"
                ? "/images/cancel-white.svg"
                : "/images/cancel.svg"
            } />
           Cancelled Bookings
          </button>
        </div>

      </div>
      {/* Content */}
      {activeTab === "cancel" && <CancelledBooking />}
      {activeTab === "past" && <PastBooking />}
      {activeTab === "upcoming" && <UpcomingBookings />}
    </div>
  );
}
