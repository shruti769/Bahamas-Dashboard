import Image from "next/image";
import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Reviews</h1>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-sm p-4 flex gap-4"
          >
            {/* IMAGE */}
            <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{review.title}</h3>
                <span className="text-sm text-yellow-500">
                  ⭐ {review.rating}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {review.comment}
              </p>

              <div className="text-xs text-gray-400 mt-2">
                {review.reviewer} · {review.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
