"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderCard({ order }) {
  const router = useRouter();
  if (!order) return null;

  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm flex gap-8">
      {/* IMAGE */}
      <div className="relative w-[380px] h-[210px] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={order.image}
          alt={order.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1">
        {/* TOP */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {order.title}
          </h3>

          <p className="text-sm text-gray-500 max-w-2xl mb-6 leading-relaxed">
            {order.description}
          </p>

          {/* META */}
          <div className="grid grid-cols-3 gap-12 text-xs">
            <div>
              <p className="uppercase tracking-wide text-gray-400">Time</p>
              <p className="text-gray-700 font-medium mt-1">
                {order.time}
              </p>
            </div>

            <div>
              <p className="uppercase tracking-wide text-gray-400">Date</p>
              <p className="text-gray-700 font-medium mt-1">
                {order.date}
              </p>
            </div>

            <div>
              <p className="uppercase tracking-wide text-gray-400">Location</p>
              <p className="text-gray-700 font-medium mt-1 truncate">
                {order.location}
              </p>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-5 mt-8">
          <button
            onClick={() => router.push(`/orders/${order.id}`)}
            className="bg-[#3D90BB] text-white px-10 py-2.5 rounded-lg text-sm font-medium w-[190px]"
          >
            View Itinerary
          </button>

          <button
            className="border border-[#3D90BB] text-[#3D90BB] px-10 py-2.5 rounded-lg text-sm font-medium w-[190px]"
          >
            Invoices
          </button>
        </div>
      </div>
    </div>
  );
}
