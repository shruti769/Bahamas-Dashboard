// components/ReviewCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export default function ReviewCard({ review, onDelete }) {
  const { id, image, title, rating, reviewCount, description } = review;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <Image
        key={i}
        src="/images/Review.svg"
        alt="star"
        width={20}
        height={20}
        className={i < fullStars ? "" : "opacity-30"}
      />
    ));
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    onDelete(id);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl p-4 xl:p-6 shadow-sm border border-[#D6EAF5] relative">
        {/* Delete Icon - Top Right */}
        <button
          onClick={handleDeleteClick}
          className="absolute top-3 xl:top-4 right-3 xl:right-4 w-8 h-8 flex items-center justify-center rounded-md hover:bg-red-50 transition-colors group z-10"
          aria-label="Delete review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-red-500 group-hover:text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>

        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
          {/* LEFT IMAGE */}
          <div className="relative w-full xl:w-[180px] h-[180px] xl:h-[160px] flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col flex-1 xl:pr-8 min-w-0">
            {/* TOP ROW */}
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 xl:gap-0 min-w-0">
              <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 pr-10 xl:pr-0 min-w-0">
                {title}
              </h3>
              
              {/* Rating Section */}
              <div className="flex items-center gap-2 flex-shrink-0 xl:mt-3">
                <span className="text-base font-semibold text-gray-900">
                  {rating}
                </span>
                <div className="flex items-center gap-1">
                  {renderStars(rating)}
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">
                  ({reviewCount})
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
             <p
              className={`${poppins.className} 
              text-[14px] 
              font-normal 
             
              text-gray-600 
              mt-3`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl">
            {/* Trash Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center relative">
                {/* Decorative X marks */}
                <span className="absolute top-2 left-3 text-red-300 text-xs">×</span>
                <span className="absolute top-4 right-2 text-red-300 text-xs">×</span>
                <span className="absolute bottom-3 left-2 text-red-300 text-xs">×</span>
                <span className="absolute bottom-2 right-4 text-red-300 text-xs">×</span>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <p className="text-center text-gray-700 mb-6 text-sm">
              Are you sure you want to<br />delete your Review?
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg border border-gray-300 transition-colors"
              >
                Keep, Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}