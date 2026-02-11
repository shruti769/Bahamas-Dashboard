"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { path: "/", label: "Performance Overview", icon: "/images/performance.svg" },
  { path: "/Inventory", label: "Experience & Inventory Management", icon: "/images/Order.svg" },
   { path: "/reservations", label: "Reservation & Order Management", icon: "/images/reservation.svg" },
   { path: "/financial-payouts", label: "Financials & Payouts", icon: "/images/financial.svg" },
  { path: "/reviews", label: "Communication & Reviews", icon: "/images/reviews.svg" },
  { path: "/logout", label: "Logout", icon: "/images/Logout.svg" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white rounded-r-[30px] p-4 shadow-sm">
      {/* LOGO */}
      <div className="flex items-center gap-2 mt-8 mb-14 justify-center">
        <Image
          src="/images/Workflow.svg"
          alt="Logo"
          width={150}
          height={100}
        />
        
      </div>

      {/* MENU */}
      <nav className="space-y-3 ">
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
                width={22}
                height={22}
                className={isActive ? "brightness-0 invert" : "opacity-70"}
              />
              <span className="text-[14px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
