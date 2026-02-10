"use client";

export default function FilterPanel({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* PANEL */}
      <div className="fixed right-6 top-20 z-50 bg-white rounded-2xl shadow-xl w-[520px] p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Filter</h3>
          <button onClick={onClose}>✕</button>
        </div>

        {/* CALENDAR MOCK (UI only) */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="font-medium mb-2">February 2022</p>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-400">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-full ${
                    i === 3 ? "bg-[#3D90BB] text-white" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">March 2022</p>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-400">
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-full ${
                    i === 9 ? "bg-[#3D90BB] text-white" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
