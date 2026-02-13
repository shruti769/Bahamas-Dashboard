"use client";

import { useState } from "react";

import Pagination from "../../components/Pagination";
import { bookings } from "../../data/booking";
import Link from "next/link";
import BookingCard from "../../components/BookingCard";


export default function UpcomingBookings() {
  const itemsPerPage = 8;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  // If viewAll is true → show everything
  const currentBookings = viewAll
    ? bookings
    : bookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  return (
    <>
      {/* THIN HORIZONTAL LINE + UPCOMING BOOKINGS */}
      <section className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Upcoming Bookings</h2>

          {/*<button
            onClick={() => setViewAll(!viewAll)}
            className="inline-flex items-center px-6 py-2 text-sm text-white bg-[#3D90BB] rounded-lg"
          >
            {viewAll ? "Show Less" : "View All Bookings"}
          </button>*/}
           <Link
            href="/upcoming-bookings"
            className="inline-flex items-center px-6 py-2 text-sm text-white bg-[#3D90BB] rounded-lg cursor-pointer"
          >
           View All 
          </Link>
        </div>

        {/* BOOKINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>

        {/* PAGINATION (Hide when viewAll is true) */}
        {!viewAll && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          />
        )}
      </section>

      
    </>
  );
}
