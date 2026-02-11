"use client";

import { useState } from "react";

import ReviewManagement from "@/components/ReviewManagement";
import SupportSystem from "@/components/SupportSystem";
import GuestCoordination from "@/components/GuestCoordination";
import { Search } from "lucide-react";

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState("review");


  return (
    <div className="bg-[#F0F0F0] min-h-screen p-6">
      <div className="flex justify-between">
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("guest")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
    ${activeTab === "guest"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img
              width={14} height={14}
              src={
                activeTab === "guest"
                  ? "/images/guest-white.svg"
                  : "/images/guest.svg"
              }
              alt="guest"
            />
            Guest Coordination
          </button>

          <button
            onClick={() => setActiveTab("review")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
            ${activeTab === "review"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img width={14} height={14} src={
              activeTab === "review"
                ? "/images/review-tab-white.svg"
                : "/images/review-tab.svg"
            } />
            Review Management
          </button>

          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-2 text-sm rounded-lg flex items-center gap-2 transition-all
            ${activeTab === "support"
                ? "bg-[#3D90BB] text-white"
                : "border border-[#3D90BB] text-[#3D90BB] bg-white"
              }`}
          >
            <img width={14} height={14} src={
              activeTab === "support"
                ? "/images/support-white.svg"
                : "/images/support.svg"
            } />
            Support System
          </button>
        </div>

        {/*  Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#666666]" />
          <input
            type="text"
            placeholder="Search"

            className="pl-9 pr-4 py-2 text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D90BB]/20"
          />
        </div>
      </div>
      {/* Content */}
      {activeTab === "review" && <ReviewManagement />}
      {activeTab === "support" && <SupportSystem />}
      {activeTab === "guest" && <GuestCoordination />}
    </div>
  );
}
