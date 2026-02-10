"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Hello, Archit</h1>
        <p className="text-gray-500">Welcome Back!</p>
      </div>

      <div className="flex items-center gap-4">
        {/* 🔔 NAVIGATE */}
        <button
          onClick={() => router.push("/notifications")}
          className="cursor-pointer text-xl hover:scale-110 transition"
        >
          🔔
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 ring-blue-500"
        />
      </div>
    </div>
  );
}
