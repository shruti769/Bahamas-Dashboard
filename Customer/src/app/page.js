import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import BookingInfo from "@/components/BookingInfo";
import QuickActions from "@/components/QuickActions";
import { bookings } from "@/data/booking";

export default function Home() {
  return (
    <>
      {/* UPCOMING BOOKINGS */}
      <section >
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="font-semibold text-lg">Upcoming Bookings</h2>

          <Link
            href="/orders"
            className="inline-flex items-center
    px-6 py-2
    text-sm font-sm
    text-white
    bg-[#3D90BB]
    rounded-lg"
          >
            View All Bookings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </section>

      {/* ACTIONS + INFO */}
      <section className="grid grid-cols-1 lg:grid-cols-3 mt-6">
        <QuickActions />
        <div className="lg:col-span-2">
          <BookingInfo />
        </div>
      </section>
    </>
  );
}
