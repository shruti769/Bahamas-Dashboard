"use client";

import { useState } from "react";
import OrderCard from "@/components/OrderCard";
import FilterPanel from "@/components/FilterPanel";
import { orders } from "@/data/order";

export default function OrdersPage() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Order History</h1>

        <div className="flex gap-3">
          <input
            placeholder="Search"
            className="border px-4 py-2 rounded-lg text-sm w-56"
          />

          <button
            onClick={() => setOpenFilter(true)}
            className="bg-[#3D90BB] text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Filter
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="space-y-5">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      {/* FILTER PANEL */}
      <FilterPanel
        open={openFilter}
        onClose={() => setOpenFilter(false)}
      />
    </div>
  );
}
