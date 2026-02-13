// app/layout.js
"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#F0F0F0]">
        <div className="min-h-screen flex gap-2 xs:gap-3 sm:gap-4 lg:gap-6 p-2 xs:p-3 sm:p-4 lg:p-6">
          {/* SIDEBAR */}
          <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />

          {/* OVERLAY for mobile/tablet */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMenu}
            />
          )}

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}