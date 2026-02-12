"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import { bookings } from "@/data/booking";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // 🔍 Filter bookings
const filteredBookings = useMemo(() => {
  const query = search.toLowerCase();

  return bookings.filter((booking) =>
    [booking.name, booking.location, booking.id, booking.email]
      .some(field => field?.toLowerCase().includes(query))
  );
}, [search]);


  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  // 📄 Get bookings for current page
  const currentBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="pr-6 pl-3 mt-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Existing itinerary</h2>

        <div className="flex items-center gap-4">
          {/*  Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#666666]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-4 py-2 text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D90BB]/20"
            />
          </div>

          {/* Add Button */}
          <Link
            href="/AddItinerary"
            className="inline-flex items-center px-4 py-2 text-sm text-white bg-[#3D90BB] rounded-md"
          >
            Add Itinerary
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {currentBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mb-12">
          {/* Left Arrow */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="p-2 mr-8 rounded-full border border-[#3D90BB] hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="text-[#3D90BB]" size={16} />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 lato text-sm border border-[#3D90BB] text-[#333333] ${
                  currentPage === page
                    ? "bg-[#3D90BB] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Right Arrow */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="p-2 ml-8 rounded-full border border-[#3D90BB] hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="text-[#3D90BB]" size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
