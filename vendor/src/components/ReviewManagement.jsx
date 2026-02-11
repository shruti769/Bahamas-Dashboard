"use client";

import { Trash2, CornerUpLeft } from "lucide-react";

export default function ReviewManagement() {
  const reviews = Array(4).fill({
    title: "Island",
    description:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay! This place is exactly like the picture posted on Chisfis.",
    rating: 4.9,
    count: 2323,
  });

  return (
    <div className="bg-white border border-[#00000033] rounded-2xl min-h-screen p-4 py-6">

      {/* Cards */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg border border-[#3D90BB4D] overflow-hidden"
          >
            {/* Image */}
            <img
              src="/images/island.png"
              alt="Island"
              className="w-64 h-48 object-cover"
            />
            <div className=" p-6">
              {/* Content */}
              <div className="flex justify-between mb-2">
                <h2 className="text-2xl text-[#131313] poppins font-semibold mb-3">
                  {review.title}
                </h2>
                {/* Icons */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex gap-2">
                    <img className="cursor-pointer" src="/images/arrow.svg" width={16} height={16} />
                    <Trash2 className="text-[#D2002E] cursor-pointer" size={16} />
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="text-[#111827] text-sm">{review.rating}</span>
                    <div className="flex">
                      <img
                        src="/images/Review-icon.svg"
                        alt="Island"
                        width={16}
                        height={16}
                      />
                      <img
                        src="/images/Review-icon.svg"
                        alt="Island"
                        width={16}
                        height={16}
                      />
                      <img
                        src="/images/Review-icon.svg"
                        alt="Island"
                        width={16}
                        height={16}
                      />
                      <img
                        src="/images/Review-icon.svg"
                        alt="Island"
                        width={16}
                        height={16}
                      />
                      <img
                        src="/images/Review-icon.svg"
                        alt="Island"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-[#111827] font-regular text-xs">
                      ({review.count})
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#666666] poppins text-sm leading-relaxed mb-4">
                {review.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
