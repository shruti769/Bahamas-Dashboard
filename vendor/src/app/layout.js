
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        
      className="bg-[#F0F0F0]">
        <div className="min-h-screen flex gap-3 ">
          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="flex-1 ">
            <Header />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
