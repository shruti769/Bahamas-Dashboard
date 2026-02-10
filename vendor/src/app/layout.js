
import "./globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <div className="min-h-screen flex gap-6 p-6">
          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
