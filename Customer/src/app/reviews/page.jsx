// app/reviews/page.jsx
"use client";

import ReviewCard from "../../components/ReviewCard";
import { useState } from "react";
import reviews from "../../data/reviews";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState(reviews);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = reviewsList.filter((review) =>
    review.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteReview = (reviewId) => {
    setReviewsList(reviewsList.filter((review) => review.id !== reviewId));
  };

  return (
    <div className="min-h-screen p-4 md:p-8">

      {/* Header */}
      <h1
        className={`${poppins.className} text-[21px] font-medium text-gray-900 mb-6 md:mb-6`}
      >
        Review And Rating
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* LEFT SIDE - REVIEWS */}
        <div className="flex-1 space-y-4 order-2 md:order-1">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onDelete={handleDeleteReview}
              />
            ))
          ) : (
            <div className="bg-white rounded-xl p-8 md:p-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No reviews found
              </h3>
              <p className="text-sm text-gray-500">
                {searchQuery
                  ? "Try adjusting your search"
                  : "No reviews available yet"}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE - SIDEBAR */}
        <div className="w-full md:w-80 flex-shrink-0 order-1 md:order-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 md:sticky md:top-8">

            {/* SEARCH */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            {/* SHARE REVIEW BUTTON */}
            <button
              className={`${poppins.className}
                w-full h-[44px]
                bg-[#4A8FB0] text-white
                rounded-lg
                font-medium
                flex items-center justify-center gap-2
                hover:opacity-90 transition
                text-sm mb-3`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="6" r="2.5" />
                <circle cx="18" cy="18" r="2.5" />
                <line x1="8.5" y1="11" x2="15.5" y2="7.5" strokeLinecap="round" />
                <line x1="8.5" y1="13" x2="15.5" y2="16.5" strokeLinecap="round" />
              </svg>

              Share Review
            </button>

            {/* DOWNLOAD BUTTON */}
            <button
              className={`${poppins.className}
                w-full h-[44px]
                bg-white border border-gray-300 text-gray-700
                rounded-lg
                font-medium
                flex items-center justify-center gap-2
                hover:bg-gray-50 transition
                text-sm`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v10m0 0l-4-4m4 4l4-4"
                />
              </svg>

              Download
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
