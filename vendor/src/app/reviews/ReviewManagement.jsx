"use client";

import { Trash2, CornerUpLeft } from "lucide-react";
import { useState } from "react";


function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 bg-opacity-80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[20px] p-8 w-[380px] shadow-xl">
        {/* Icon with arrows */}
        <div className="flex justify-center mb-2">
          <div className="relative w-[150px] h-[120px]">
           <img src="/images/delete-icon.svg" alt="Delete"/>
          </div>
        </div>
        
        {/* Text */}
        <h2 className="text-center poppins text-[#666666] text-lg font-regular mb-8">
       Are you sure you want to
<br />delete your Review ?
        </h2>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-6 py-3 bg-[#D2002E] text-sm text-white rounded-md font-regular hover:bg-[#D2002E] transition-colors min-w-[130px]"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 text-[#131313] text-sm font-normal hover:bg-gray-100 rounded-md transition-colors min-w-[130px]"
          >
            Keep, Review
          </button>
        </div>
      </div>
    </div>
  );
}


function ShareModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#4A4A4A]/80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[20px] w-[420px] shadow-xl overflow-hidden">
        {/* Illustration Container */}
        <div className="mt-[-30px] w-full h-[220px] overflow-hidden">
          <img 
            src="/images/share-img.png" 
            alt="Share illustration" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content */}
        <div className="px-8 py-6">
          {/* Text */}
          <p className="text-center text-[#666666] text-lg leading-relaxed mb-6">
            This place is exactly like the picture posted<br />on Chisfis.
          </p>
          
          {/* Divider */}
          <div className="border-t border-[#E5E5E5] -mx-8" />
          
          {/* Button Container */}
          <div className="flex justify-center pt-5 pb-2">
            <button
              onClick={onConfirm}
              className="px-20 py-2 bg-[#3D90BB] text-white text-base font-medium rounded-lg hover:bg-[#2B6A8A] transition-colors min-w-[140px]"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function ReviewManagement() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
    const handleDelete = () => {
      setShowDeleteModal(false); 
    };

     const [showShareModal, setShowShareModal] = useState(false);
  
    const handleShare = () => {
      setShowShareModal(false); 
    };
  
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
                    <img onClick={() => setShowShareModal(true)} className="cursor-pointer" src="/images/arrow.svg" width={16} height={16} />
                    <Trash2  onClick={() => setShowDeleteModal(true)} className="text-[#D2002E] cursor-pointer" size={16} />
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
       <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
       <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        onConfirm={handleShare}
      />
    </div>
  );
}


