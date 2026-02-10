"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-6 mr-4 p-6 border-b border-[#0000001C]">
      <div>
        <h1 className="text-2xl font-semibold poppins text-[#171414]">Hello, Archit</h1>
        <p className="text-gray-600 text-md poppins text-[#666666]">Welcome Back!</p>
      </div>

      <div className="flex items-center gap-4">
        {/* 🔔 NAVIGATE */}
        <button
          onClick={() => router.push("/notifications")}
          className="cursor-pointer text-xl hover:scale-110 transition"
        >
          <img src="/images/carbon_notification.svg" alt="Notification" className="w-6 h-6"/>

        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-14 h-14 rounded-full cursor-pointer "
        />
      </div>
    </div>
  );
}
