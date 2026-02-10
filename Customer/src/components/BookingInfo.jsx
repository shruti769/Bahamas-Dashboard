import Image from "next/image";

export default function BookingInfo() {
  return (
    <div className="bg-white py-6 px-3 rounded-2xl shadow-sm flex items-center justify-between gap-9">
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4">Booking Info</h3>

        <p className="font-medium mb-2">“What to Bring” list</p>

        <ul className="text-sm text-gray-500 space-y-2 list-disc ml-7">
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        </ul>

        <button className="mt-5 bg-[#3D90BB] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
          View Itinerary
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block">
        <Image
          src="/images/man.png"
          alt="Man with map"
          width={260}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
}
