"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Header({ onMenuClick, isMenuOpen }) {
  const router = useRouter();

  return (
    <header className="px-1 xs:px-2 sm:px-0">
      
      {/* HEADER CONTENT */}
      <div className="flex justify-between items-center mb-3 xs:mb-4 sm:mb-5 lg:mb-6">
        
        <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
          
          {/* ANIMATED HAMBURGER MENU */}
          <button
            onClick={onMenuClick}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 hover:bg-gray-100 rounded-lg transition-colors active:bg-gray-200 relative flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span
              className={`w-4 xs:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 absolute
              ${isMenuOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1.5"}`}
            ></span>

            <span
              className={`w-4 xs:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300
              ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>

            <span
              className={`w-4 xs:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 absolute
              ${isMenuOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-1.5"}`}
            ></span>
          </button>

          {/* USER GREETING */}
          <div className={`min-w-0 ${poppins.className}`}>
            
            <h1 className="text-[18px] sm:text-[20px] lg:text-[32px] font-semibold truncate">
              Hello, Archit
            </h1>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-500 truncate">
              Welcome Back!
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-5 flex-shrink-0">
    <button
  onClick={() => router.push("/notifications")}
  className="relative cursor-pointer p-2 bg-white rounded-full shadow-sm hover:shadow-md"
  aria-label="Notifications"
>
  <Image
    src="/images/bells.svg"
    alt="Notifications"
    width={18}
    height={18}
  />
</button>



         <button className="relative group flex-shrink-0" aria-label="User menu">
  <img
    src="https://i.pravatar.cc/40"
    alt="User Avatar"
    className="w-[40px] h-[40px] xs:w-[40px] xs:h-[40px] sm:w-[40px] sm:h-[40px] lg:w-[55px] lg:h-[55px] rounded-full cursor-pointer hover:ring-2 ring-blue-500 transition-all"
  />
</button>
        </div>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="border-t border-[#0000001C] "></div>

    </header>
  );
}
