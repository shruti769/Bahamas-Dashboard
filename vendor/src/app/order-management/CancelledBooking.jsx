"use client";

import { bookings } from "@/data/booking";

export default function CancelledBooking() {

  return (
    <div className="space-y-4">

      {/* Header Row */}
      <div className="grid grid-cols-8 text-center rounded-xl px-6 py-3 text-sm font-medium text-[#242424] border-[0.5px] border-[#00000066]">
        <div>Costumer Id</div>
         <div>Name</div>
        <div>Time</div>
        <div>Date</div>
       <div>Email</div>
        <div>No. Of Guests</div>
         <div>Price</div>
        <div >Mobile no.</div>
      </div>

      {/* Data Rows */}
      {bookings.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-8 items-center text-center font-regular rounded-xl px-6 py-3 text-sm text-[#4B4B4B] border-[0.5px] border-[#00000066] hover:shadow-sm transition"
        >
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.time}</div>
          <div>{item.date}</div>
          <div>{item.email}</div>
          <div>{item.guests}</div>
           <div>{item.price}</div>
          <div>{item.mobile}</div>

         
        </div>
      ))}
    </div>
  );
}
