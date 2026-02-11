"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { notifications } from "@/data/notifications";
import { Search } from "lucide-react";

export default function NotificationsPage() {
  const [search, setSearch] = useState("");

  // 🔍 Filter notifications
  const filteredNotifications = useMemo(() => {
    return notifications.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="px-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#666666]" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm bg-white rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3D90BB]/20"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="bg-white rounded-xl p-4 py-6">
        <div className="space-y-5">
          {filteredNotifications.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-2 border-b border-[#F2F6FA] gap-4"
            >
              <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 p-2 rounded-full bg-[#5C263F] text-white flex items-center justify-center text-sm font-semibold">
                  {item.name?.charAt(0)}
                </div>

                {/* Text */}
                <div className="text-sm">
                  <NotificationText item={item} />
                  <p className="text-xs text-gray-400 mt-1">
                    {item.time}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {item.type === "new" && (
                  <>
                    <button className="bg-[#13821A] text-white px-3 py-1 rounded text-xs">
                      Accept
                    </button>
                    <button className="bg-[#C00404] text-white px-3 py-1 rounded text-xs">
                      Decline
                    </button>
                  </>
                )}

                {item.type === "inquiry" && (
                  <button className="bg-gray-100 px-3 py-1 rounded text-xs">
                    See Now
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredNotifications.length === 0 && (
            <p className="text-center text-gray-400 text-sm">
              No notifications found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function NotificationText({ item }) {
  if (item.type === "cancel") {
    return (
      <>
        <span className="font-medium">
          {item.name}{" "}
        </span>
        <span className="text-[#FF0000] font-medium">
          Canceled
        </span>{" "}
        {item.message}
      </>
    );
  }

  if (item.type === "booked") {
    return (
      <>
        <span className="text-[#0E5E0E] font-semibold">
          Trip booked!
        </span>{" "}
        <span  className="font-semibold">{item.name}</span> {item.message}
      </>
    );
  }

   if (item.type === "inquiry") {
    return (
      <>
        <span className="font-medium">
          {item.name}{" "}
        </span>
        <span
          className="font-medium"
          style={{ color: "#D8B323" }}
        >
          Inquiry
        </span>
        .
      </>
    );
  }

  return (
    <>
      <span className="font-regular">
        {item.name}{" "}
      </span>
      {item.message}
    </>
  );
}
