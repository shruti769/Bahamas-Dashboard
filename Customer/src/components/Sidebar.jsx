"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { path: "/", label: "My Itinerary", icon: "/images/Itinery.svg" },
  { path: "/orders", label: "Order History", icon: "/images/Order.svg" },
  { path: "/reviews", label: "Reviews", icon: "/images/Review.svg" },
  { path: "/logout", label: "Logout", icon: "/images/Logout.svg" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white rounded-xl p-6 shadow-sm">
      {/* LOGO */}
      <div className="flex items-center gap-2 mb-8">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={24}
          height={24}
        />
        <h2 className="font-bold text-lg">BahaMoments</h2>
      </div>

      {/* MENU */}
      <nav className="space-y-2">
        {menu.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
              ${
                isActive
                  ? "bg-[#3D90BB] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={isActive ? "brightness-0 invert" : "opacity-70"}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
