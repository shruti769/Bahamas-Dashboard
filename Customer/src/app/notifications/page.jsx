import Image from "next/image";
import { notifications } from "../../data/notifications";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});
export default function NotificationsPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-5 mb-4">
        <h2 className={`${inter.className} text-[20px] font-semibold`}>
  Notifications
</h2>

        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border">
          <Image
            src="/images/search.svg"
            alt="Search"
            width={14}
            height={14}
          />
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 flex gap-4 shadow-sm items-center"
          >
            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg shadow-sm">
              <Image
                src="/images/bell.svg"
                alt="Notification"
                width={50}
                height={50}
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className={`${poppins.className} text-[13px] font-normal text-gray-600`}>
  {item.message}
</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
