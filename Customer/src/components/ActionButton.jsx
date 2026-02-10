"use client";

export default function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-white
        border
        py-6
        rounded-lg
        text-[#3D90BB]
        cursor-pointer
        font-medium
      "
    >
      {label}
    </button>
  );
}
