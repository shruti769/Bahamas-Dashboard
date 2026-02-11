import Link from "next/link";

const bookings = {
  today: [
    {
      name: "Ritu Sharma",
      email: "ritu@gmail.com",
      phone: "98765432102",
      guests: "2 adults, 1 child",
      date: "Thursday, 1 January",
      time: "8:00am - 2:45pm",
      price: "$10,600",
    },
    {
      name: "Ritu Sharma",
      email: "ritu@gmail.com",
      phone: "98765432102",
      guests: "2 adults, 1 child",
      date: "Thursday, 1 January",
      time: "8:00am - 2:45pm",
      price: "$10,600",
    },
  ],
  yesterday: [
    {
      name: "Ritu Sharma",
      email: "ritu@gmail.com",
      phone: "98765432102",
      guests: "2 adults, 1 child",
      date: "Thursday, 1 January",
      time: "8:00am - 2:45pm",
      price: "$10,600",
    },
    {
      name: "Ritu Sharma",
      email: "ritu@gmail.com",
      phone: "98765432102",
      guests: "2 adults, 1 child",
      date: "Thursday, 1 January",
      time: "8:00am - 2:45pm",
      price: "$10,600",
    },
  ],
};

export default function UpcomingBookings() {
  return (
    <div className=" bg-white rounded-xl p-3">
       <div className="border border-[#F2F6FA] bg-white rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
      
         <Link
            href="/reservations"
            className="inline-flex items-center px-4 py-2 text-sm font-sm text-white bg-[#3D90BB] rounded-lg"
          >
            View All
          </Link>
      </div>

      <Section title="Today" data={bookings.today} />
      <Section title="Yesterday" data={bookings.yesterday} />
      </div>
    </div>
  );
}

function Section({ title, data }) {
  return (
    <>
      <h3 className="p-2 text-md border-b border-[#F2F6FA] font-semibold text-black mb-4">
        {title}
      </h3>

      <div className="space-y-4 mb-6">
        {data.map((item, index) => (
      <div
  key={index}
  className="border border-[#F2F6FA] rounded-lg p-2"
>
  {/* Booking header */}
  <div className="flex items-center justify-between mb-3">
    <p className="text-[#AAAAAA] text-[12px]">
      Booking for <span className="font-medium text-[#6B7280]">Thailand</span>
    </p>
    <p className="text-[#AAAAAA] text-[12px]">
      Today | 01:12 PM
    </p>
  </div>

  <div className="flex gap-2">
    {/* Avatar */}
    <div className="w-7 h-7 rounded-full bg-[#5C263F] text-white flex items-center justify-center text-sm font-semibold">
      AK
    </div>

    {/* Content */}
    <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
      <p className="text-[#696969] text-[13px] font-semibold">
        <span className="text-[#252328] font-medium">
          Customer Name :
        </span>{" "}
        {item.name}
      </p>

      <p className="text-[#696969] text-[13px] font-semibold">
        <span className="text-[#252328] font-medium">
          Mobile Number :
        </span>{" "}
        {item.phone}
      </p>

      <p className="text-[#696969] text-[13px] font-semibold">
        <span className="text-[#252328] font-medium">
          Customer Email :
        </span>{" "}
        {item.email}
      </p>

      <p className="text-[#696969] text-[13px] font-semibold">
        <span className="text-[#252328] font-medium">
          Guests :
        </span>{" "}
        {item.guests}
      </p>

      <p className="text-[#696969] text-[13px] font-semibold">
        <span className="text-[#252328] font-medium">
          Date :
        </span>{" "}
        {item.date}
        <br />
        <span className="text-gray-400">
          {item.time}
        </span>
      </p>

      <p className="text-[#696969] font-semibold">
        <span className="text-[#252328] font-medium">
          Price :
        </span>{" "}
        {item.price}
      </p>
    </div>
  </div>
</div>

        ))}
      </div>
    </>
  );
}
