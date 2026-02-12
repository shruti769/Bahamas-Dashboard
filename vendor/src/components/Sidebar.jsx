"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { path: "/", label: "Performance Overview", icon: "/images/performance.svg" },
  { path: "/Inventory", label: "Experience & Inventory Management", icon: "/images/Order.svg" },
  { path: "/order-management", label: "Reservation & Order Management", icon: "/images/reservation.svg" },
  { path: "/financial-payouts", label: "Financials & Payouts", icon: "/images/financial.svg" },
  { path: "/reviews", label: "Communication & Reviews", icon: "/images/reviews.svg" },
  { path: "/logout", label: "Logout", icon: "/images/Logout.svg", isLogout: true },
];

function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 bg-opacity-80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[20px] p-8 w-[380px] shadow-xl">
        {/* Icon with arrows */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[220px] h-[120px]">
           <img src="/images/logout-icon.svg" alt="logout"/>
          </div>
        </div>
        
        {/* Text */}
        <h2 className="text-center poppins text-[#666666] text-lg font-regular mb-8">
          Are you sure you want to<br />Log out ?
        </h2>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-6 py-3 bg-[#3D90BB] text-sm text-white rounded-md font-regular hover:bg-[#2B6A8A] transition-colors min-w-[130px]"
          >
            Yes, Log Out
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 text-[#131313] text-sm font-normal hover:bg-gray-100 rounded-md transition-colors min-w-[130px]"
          >
            Keep, Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
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
        <nav className="space-y-3">
          {menu.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            // Handle logout separately
            if (item.isLogout) {
              return (
                <button
                  key={item.path}
                  onClick={() => setShowLogoutModal(true)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition w-full text-left
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
                </button>
              );
            }

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

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}