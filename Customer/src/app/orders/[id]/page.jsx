import { orders } from "@/data/order";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function OrderDetails({ params }) {
  const order = orders.find(
    (o) => o.id === Number(params.id)
  );

  if (!order) return notFound();

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src={order.image}
              alt={order.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-xl font-semibold">{order.title}</h1>
          <p className="text-gray-500">{order.description}</p>

          <div className="flex gap-6 text-sm">
            <span>⭐ {order.rating} ({order.reviews} reviews)</span>
            <span>📍 {order.location}</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border rounded-xl p-6 h-fit">
          <p className="text-xl font-semibold">${order.price}</p>
          <p className="text-sm text-gray-500 mb-4">per trip</p>

          <button className="w-full bg-red-500 text-white py-2 rounded-lg">
            Cancel Tour
          </button>
        </div>
      </div>
    </div>
  );
}
