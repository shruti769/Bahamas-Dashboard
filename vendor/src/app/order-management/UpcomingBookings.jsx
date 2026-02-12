"use client";

import { bookings } from "@/data/booking";
import { Trash2 } from "lucide-react";
import { useState } from "react";


function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 bg-opacity-80"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[20px] p-8 w-[380px] shadow-xl">
        {/* Icon with arrows */}
        <div className="flex justify-center mb-2">
          <div className="relative w-[150px] h-[120px]">
            <img src="/images/delete-icon.svg" alt="Delete" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-center poppins text-[#666666] text-lg font-regular mb-8">
          Are you sure you want to
          <br />delete your Review ?
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-6 py-3 bg-[#D2002E] text-sm text-white rounded-md font-regular hover:bg-[#D2002E] transition-colors min-w-[130px]"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 text-[#131313] text-sm font-normal hover:bg-gray-100 rounded-md transition-colors min-w-[130px]"
          >
            Keep, Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingBookings() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
  };



  return (
    <div className="space-y-4">

      {/* Header Row */}
      <div className="grid grid-cols-9 text-center rounded-xl px-6 py-3 text-sm font-medium text-[#242424] border-[0.5px] border-[#00000066]">
        <div>Costumer Id</div>
        <div>Name</div>
        <div>Time</div>
        <div>Date</div>
        <div>Email</div>
        <div>No. Of Guests</div>
        <div>Price</div>
        <div >Mobile no.</div>
        <div className=""></div>
      </div>

      {/* Data Rows */}
      {bookings.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-9 items-center text-center font-regular rounded-xl px-6 py-3 text-sm text-[#4B4B4B] border-[0.5px] border-[#00000066] hover:shadow-sm transition"
        >
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.time}</div>
          <div>{item.date}</div>
          <div>{item.email}</div>
          <div>{item.guests}</div>
          <div>{item.price}</div>
          <div>{item.mobile}</div>
          <div className="flex justify-center items-center">
            <Trash2
              onClick={() => setShowDeleteModal(true)}
              className="text-[#D2002E] cursor-pointer hover:scale-110 transition"
              size={16}
            />
          </div>
        </div>
      ))}

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
