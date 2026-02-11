"use client";

import { Mail, Phone } from "lucide-react";

export default function GuestCoordination() {
  const guests = [
    {
      id: "123459998#",
      place: "Lorem Ipsum",
      time: "8:00 AM",
      date: "21-08-25",
      name: "Archit",
      guests: 2,
    },
    {
      id: "123459998#",
      place: "Lorem Ipsum",
      time: "8:00 AM",
      date: "21-08-25",
      name: "Archit",
      guests: 2,
    },
    {
      id: "123459998#",
      place: "Lorem Ipsum",
      time: "8:00 AM",
      date: "21-08-25",
      name: "Archit",
      guests: 2,
    },
    {
      id: "123459998#",
      place: "Lorem Ipsum",
      time: "8:00 AM",
      date: "21-08-25",
      name: "Archit",
      guests: 2,
    },
  ];

  return (
    <div className="space-y-4">

      {/* Header Row */}
      <div className="grid grid-cols-7 text-center rounded-xl px-6 py-3 text-sm font-medium text-[#242424] border-[0.5px] border-[#00000066]">
        <div>Costumer Id</div>
        <div>Place</div>
        <div>Departure Time</div>
        <div>Departure Date</div>
        <div>Name</div>
        <div>No. Of Guests</div>
        <div className="text-right">Contact</div>
      </div>

      {/* Data Rows */}
      {guests.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-7 items-center text-center font-regular rounded-xl px-6 py-3 text-sm text-[#4B4B4B] border-[0.5px] border-[#00000066] hover:shadow-sm transition"
        >
          <div>{item.id}</div>
          <div>{item.place}</div>
          <div>{item.time}</div>
          <div>{item.date}</div>
          <div>{item.name}</div>
          <div>{item.guests}</div>

          <div className="flex justify-end gap-4 text-[#3D90BB]">
            <Mail size={18} strokeWidth={1.2} className="cursor-pointer hover:scale-110 transition" />
            <Phone size={18} strokeWidth={1.2} className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      ))}
    </div>
  );
}
