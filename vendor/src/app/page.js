import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import BookingInfo from "@/components/Notifications";
import QuickActions from "@/components/UpcomingBookings";
import { bookings } from "@/data/booking";
import UpcomingBookings from "@/components/UpcomingBookings";
import Notifications from "@/components/Notifications";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <>
  <h2 className="font-medium text-xl text-[#8E95A9] pl-3">Total Revenue </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pl-3 pr-6">
      <StatsCard
        title="All-Time"
        value="$7,825"
        percentage="+22%"
        trend="up"
        color="orange"
      />

      <StatsCard
        title="Day"
        value="920"
        percentage="-25%"
        trend="down"
        color="red"
      />

      <StatsCard
        title="Week"
        value="15.5K"
        percentage="+49%"
        trend="up"
        color="green"
      />

      <StatsCard
        title="Month"
        value="28%"
        percentage="+1.9%"
        trend="up"
        color="orange"
      />
    </div>

      {/* UPCOMING BOOKINGS */}
      <section className="pr-6 pl-3 mt-12" >
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="font-semibold text-lg">Top Performing Experience </h2>

          <Link
            href="/orders"
            className="inline-flex items-center px-4 py-2 text-sm font-sm text-white bg-[#3D90BB] rounded-lg"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </section>

      {/* ACTIONS + INFO */}
      <section className="flex flex-col sm:flex-row gap-4 mt-12 pr-6 pl-3">
        <UpcomingBookings />
        <div className="lg:col-span-2">
          <Notifications />
        </div>
      </section>
    </>
  );
}
