"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const menu = [
  { path: "/", label: "My Itinerary", icon: "/images/Itinery.svg" },
  { path: "/orders", label: "Order History", icon: "/images/Order.svg" },
  { path: "/reviews", label: "Reviews", icon: "/images/Reviews.svg" },
    { path: "/upcoming-bookings", label: "Upcoming Bookings", icon: "/images/Itinery.svg" },
  { path: "/logout", label: "Logout", icon: "/images/Logout.svg", isLogout: true },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    if (onClose) onClose();
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    console.log("User logged out");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`${inter.className} hidden -mt-[23px] lg:block w-48 xl:w-56 2xl:w-64 bg-white rounded-xl p-4 xl:p-5 2xl:p-6 shadow-sm flex-shrink-0 -ml-[20px]`}
      >
        <SidebarContent
          pathname={pathname}
          onClose={onClose}
          onLogoutClick={handleLogoutClick}
        />
      </aside>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`${inter.className}
          fixed top-0 left-0 h-full w-64 max-w-[85vw] bg-white shadow-2xl z-50 
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full overflow-y-auto p-6">
          <SidebarContent
            pathname={pathname}
            onClose={onClose}
            onLogoutClick={handleLogoutClick}
            isMobile
          />
        </div>
      </aside>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#3D90BB]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center text-gray-700 mb-6 text-[14px] font-semibold">
              Are you sure you want to <br /> Log out?
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmLogout}
                className="flex-1 bg-[#3D90BB] hover:bg-[#2d7a9f] text-white font-semibold text-[14px] py-2.5 rounded-lg transition"
              >
                Yes, Log Out
              </button>
              <button
                onClick={handleCancelLogout}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-[14px] py-2.5 rounded-lg border border-gray-300 transition"
              >
                Keep, Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({ pathname, onClose, onLogoutClick, isMobile = false }) {
  return (
    <>
      {/* LOGO */}
      <div className="flex items-center  mt-3 mb-8">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-7 h-7"
        />
        <h2 className="text-[18px] font-bold truncate">
          BahaMoments
        </h2>
      </div>

      {/* MENU */}
      <nav className="space-y-2 mt-20">
        {menu.map((item) => {
          const isActive =
            item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

          if (item.isLogout) {
            return (
              <button
                key={item.path}
                onClick={onLogoutClick}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[12px] font-semibold transition text-left
                ${
                  isActive
                    ? "bg-[#3D90BB] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-5 h-5 ${
                    isActive ? "brightness-0 invert" : "opacity-70"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={isMobile ? onClose : undefined}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[12px] font-semibold transition
              ${
                isActive
                  ? "bg-[#3D90BB] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-5 h-5 ${
                  isActive ? "brightness-0 invert" : "opacity-70"
                }`}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
