"use client";

import Image from "next/image";

export default function ItineraryModal({ open, onClose, order }) {
  if (!open || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-xl w-[95%] max-w-6xl h-[90vh] overflow-y-auto z-10">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* TITLE */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold">{order.title}</h1>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* IMAGE GRID */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-80">
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                <Image src={order.image} fill className="object-cover" alt="" />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative rounded-xl overflow-hidden">
                  <Image src={order.image} fill className="object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* PROPERTY INFO */}
            <div>
              <h2 className="text-lg font-semibold">
                Entire rental unit in {order.location}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                4 guests · 2 bedrooms · 2 beds · 2 bathrooms
              </p>
            </div>

      

            {/* WHERE YOU'LL SLEEP */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold mb-4">
                Where you'll sleep
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-xl p-3">
                  <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                    <Image src={order.image} fill className="object-cover" alt="" />
                  </div>
                  <p className="text-sm font-medium">Bedroom 1</p>
                  <p className="text-xs text-gray-500">1 queen bed</p>
                </div>

                <div className="border rounded-xl p-3">
                  <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                    <Image src={order.image} fill className="object-cover" alt="" />
                  </div>
                  <p className="text-sm font-medium">Bedroom 2</p>
                  <p className="text-xs text-gray-500">1 queen bed</p>
                </div>
              </div>
            </div>

            {/* HOST */}
            <div className="flex items-center gap-4 border-t pt-6">
              <Image
                src="https://i.pravatar.cc/40"
                width={40}
                height={40}
                className="rounded-full"
                alt="Host"
              />
              <div>
                <p className="font-medium">Hosted by Noella</p>
                <p className="text-xs text-gray-500">
                  Superhost · 2 years hosting
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-4 border-t pt-6 text-sm">
              <div>
                <p className="font-medium">Entire home</p>
                <p className="text-gray-500">
                  You'll have the apartment to yourself
                </p>
              </div>

              <div>
                <p className="font-medium">Enhanced Clean</p>
                <p className="text-gray-500">
                  This host committed to Airbnb's 5-step enhanced cleaning
                  process
                </p>
              </div>

              <div>
                <p className="font-medium">Self check-in</p>
                <p className="text-gray-500">
                  Check yourself in with the keypad
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="sticky top-6 h-fit space-y-6">
            {/* DESCRIPTION TEXT ABOVE BOOKING BOX */}
            <div className="text-xs text-gray-600 leading-relaxed">
              <p>
                Come and stay in this superb duplex 1.2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram in a few minutes. You will enjoy all the amenities and comfort for a peaceful and comfortable stay.
              </p>
            </div>

            {/* BOOKING BOX */}
            <div className="border rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="line-through text-gray-400">$32.30</span>
                <span className="text-xl font-semibold">
                  ${order.price}
                </span>
                <span className="text-sm text-gray-500">
                  for 2 nights
                </span>
              </div>

              <div className="border rounded-lg overflow-hidden text-sm">
                <div className="flex border-b">
                  <div className="flex-1 p-3">
                    <p className="text-xs text-gray-400">CHECK-IN</p>
                    <p>{order.date}</p>
                  </div>
                  <div className="flex-1 p-3 border-l">
                    <p className="text-xs text-gray-400">CHECKOUT</p>
                    <p>{order.date}</p>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-xs text-gray-400">GUESTS</p>
                  <p>2 guests</p>
                </div>
              </div>

              <button className="mt-4 w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50">
                Cancel Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}