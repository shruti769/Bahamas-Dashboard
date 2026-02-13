"use client";

import { useState } from "react";
import BookingInfo from "../components/BookingInfo";
import QuickActions from "../components/QuickActions";
import { bookings } from "../data/booking";
import Link from "next/link";
import BookingCard from "../components/BookingCard";

export default function Home() {
  const itemsPerPage = 8;
  const [currentPage] = useState(1);

  const currentBookings = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );  

  return (
    <>
      {/* Upcoming Bookings */}
      <section className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">
            Upcoming Bookings
          </h2>

          <Link
            href="/upcoming-bookings"
            className="inline-flex items-center px-6 py-2 text-sm text-white bg-[#3D90BB] rounded-lg"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentBookings.slice(0, 4).map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </section>

      {/* Actions + Info */}
      <section className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-6">
        <QuickActions />
        <div className="lg:col-span-2">
          <BookingInfo />
        </div>
      </section>
    </>
  );
}
