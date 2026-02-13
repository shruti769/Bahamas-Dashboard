"use client";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-200 px-4 py-2 rounded-lg text-sm w-56 focus:outline-none focus:ring-2 focus:ring-[#3D90BB]"
    />
  );
}
