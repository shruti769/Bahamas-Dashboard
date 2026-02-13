"use client";

import { useState } from "react";
import OrderCard from "../../components/OrderCard";
import FilterPanel from "../../components/FilterPanel";
import ItineraryModal from "../../components/ItineraryModal";
import SearchBar from "../../components/SearchBar";
import { orders } from "../../data/order";

export default function OrdersPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openItinerary, setOpenItinerary] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleViewItinerary = (order) => {
    setSelectedOrder(order);
    setOpenItinerary(true);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesDate = true;

    if (startDate && endDate) {
      const orderDate = new Date(order.date + "T00:00:00");
      const start = new Date(startDate + "T00:00:00");
      const end = new Date(endDate + "T23:59:59");

      matchesDate = orderDate >= start && orderDate <= end;
    }

    return matchesSearch && matchesDate;
  });

  return (
    <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-5 lg:mb-6 gap-3 sm:gap-4">
        {/* Title - Hidden on mobile, visible on desktop */}
        <h1 className="hidden lg:block text-xl font-semibold text-gray-900">
          Order History
        </h1>

        {/* Search and Filter - Full width on mobile, auto width on desktop */}
        <div className="flex gap-2 sm:gap-3 w-full lg:w-auto lg:ml-auto">
          <div className="flex-1 lg:flex-initial lg:w-auto">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <button
            onClick={() => setOpenFilter(true)}
            className="bg-[#3D90BB] text-white px-3 xs:px-4 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#2d7a9f] active:bg-[#236485] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Filter
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onViewItinerary={handleViewItinerary}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 xs:py-16 sm:py-20 text-center">
            <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3 xs:mb-4">
              <svg
                className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-1 xs:mb-2">
              No orders found
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-gray-500 max-w-sm px-4">
              {searchTerm || startDate || endDate
                ? "Try adjusting your filters"
                : "You don't have any orders yet"}
            </p>
            {(searchTerm || startDate || endDate) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStartDate(null);
                  setEndDate(null);
                }}
                className="mt-4 xs:mt-5 sm:mt-6 text-xs xs:text-sm text-[#3D90BB] hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* MODALS */}
      <ItineraryModal
        open={openItinerary}
        order={selectedOrder}
        onClose={() => setOpenItinerary(false)}
      />

      <FilterPanel
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        onSelectRange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />
    </div>
  );
}