const notifications = [
  {
    type: "new",
    name: "Rita Sharma",
    message:
      "booked a Thailand trip for 4 travelers on 20 Dec.",
    time: "6 March 2034 | 12:12 AM",
  },
  {
    type: "inquiry",
    name: "Inayat Kapoor",
    message: "added a Inquiry.",
    time: "6 March 2034 | 12:12 AM",
  },
  {
    type: "cancel",
    name: "Anuradha Verma",
    message:
      "a Thailand trip for 4 travelers on 20 Dec.",
    time: "Today | 01:12 PM",
  },
  {
    type: "booked",
    name: "Rita Sharma",
    message:
      "booked a Thailand trip for 4 travelers on 20 Dec.",
    time: "6 March 2034 | 12:12 AM",
  },
];

export default function Notifications() {
  return (
    <div className="bg-white rounded-xl p-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Notification</h2>
        <button className="bg-[#3D90BB] text-white px-4 py-2 rounded-md text-sm">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between pb-2 border-b border-[#F2F6FA] gap-4"
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 p-2 rounded-full bg-[#5C263F] text-white flex items-center justify-center text-sm font-semibold">
                AK
              </div>

              {/* Text */}
              <div className="text-sm font-regular">
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
