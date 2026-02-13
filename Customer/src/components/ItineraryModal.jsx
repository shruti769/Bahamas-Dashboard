"use client";

import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600","500"], // include both Regular + SemiBold
});

export default function ItineraryModal({ open, onClose, order }) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!open || !order) return null;

  // Extract data with fallbacks
  const {
    title = "Property Title",
    image = "/placeholder.jpg",
    images = [], // Array of additional images
    price = "0.00",
    description = "No description available.",
    dateRange = "Date not set",
    locationLine1 = "Location",
    locationLine2 = "",
  } = order;

  // Create gallery array: use images array if provided, otherwise repeat main image
  const galleryImages = images.length > 0 ? images : Array(5).fill(image);
  
  // Ensure we have at least 5 images for the layout (pad with main image if needed)
  while (galleryImages.length < 5) {
    galleryImages.push(image);
  }

  // Main image (first in array)
  const mainImage = galleryImages[0];
  
  // Thumbnail images (next 4)
  const thumbnailImages = galleryImages.slice(1, 5);

  const handleShowAllPhotos = () => {
    setCurrentImageIndex(0);
    setShowGallery(true);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
    setCurrentImageIndex(0);
  };

  return (
    <>
      {/* MAIN MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4">
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* MODAL */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto z-10">
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-20 w-7 h-7 xs:w-8 xs:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors bg-white shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 xs:w-5 xs:h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* CONTENT */}
          <div className="p-3 xs:p-4 sm:p-5 md:p-6">
            {/* TITLE */}
            <h1
  className={`${poppins.className} text-[27px] font-semibold text-gray-900 mb-4`}
>
  {title}
</h1>

            {/* MAIN LAYOUT */}
            <div className="flex flex-col lg:flex-row gap-4 xs:gap-5 sm:gap-6">
              {/* LEFT COLUMN */}
              <div className="flex-1 space-y-4 xs:space-y-5 sm:space-y-6">
                {/* IMAGE GRID */}
                <div className="grid grid-cols-2 gap-1.5 xs:gap-2">
                  {/* Large Image */}
                  <div className="col-span-2 relative h-40 xs:h-48 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
                    <Image 
                      src={mainImage} 
                      fill 
                      className="object-cover" 
                      alt={title} 
                    />
                  </div>
                  
                  {/* Small Images */}
                  {thumbnailImages.map((img, i) => (
                    <div key={i} className="relative h-20 xs:h-24 sm:h-28 md:h-32 rounded-lg sm:rounded-xl overflow-hidden">
                      <Image 
                        src={img} 
                        fill 
                        className="object-cover" 
                        alt={`${title} - Image ${i + 2}`} 
                      />
                      {i === 3 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <button 
                            onClick={handleShowAllPhotos}
                            className="text-white text-[10px] xs:text-xs sm:text-sm font-medium px-2 hover:underline"
                          >
                            {images.length > 5 ? `+${images.length - 5} more photos` : 'Show all photos'}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* PROPERTY DETAILS */}
                <div>
                 <h2
  className={`${poppins.className} text-[25.04px] font-semibold text-gray-900`}
>
  Entire rental unit in {locationLine2 || locationLine1}
</h2>
                <div
  className={`${poppins.className} flex flex-wrap items-center gap-2 mt-2 text-[14.08px] font-normal text-gray-700`}
>
  <span className="flex items-center gap-1 ">
    <span className="text-orange-500">•</span> 4 Guests
  </span>

  <span className="text-orange-500">•</span>

  <span>2 Bedrooms</span>

  <span className="text-orange-500">•</span>

  <span>2 Beds</span>

  <span className="text-orange-500">•</span>

  <span>2 Bathrooms</span>
</div>

                </div>

                {/* HOST INFO */}
                <div className="flex items-center gap-2 xs:gap-3 py-3 xs:py-4 ">
                  <Image
                    src="https://i.pravatar.cc/48"
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 xs:w-12 xs:h-12"
                    alt="Host"
                  />
                  <div>
                    <p
  className={`${poppins.className} text-[25.04px] font-semibold text-gray-900`}
>
  Hosted by Noella
</p>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">Superhost • 2 year hosting</p>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="space-y-3 xs:space-y-4">
                  <div className="flex gap-2 xs:gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 xs:w-6 xs:h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900">Entire home</p>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">You'll have the apartment to yourself</p>
                    </div>
                  </div>

                  <div className="flex gap-2 xs:gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 xs:w-6 xs:h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900">Enhanced Clean</p>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">
                        This host committed to Airbnb's 5-step enhanced cleaning process. 
                        <button className="text-gray-900 underline font-medium ml-1">Show more</button>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 xs:gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 xs:w-6 xs:h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900">Self check-in</p>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">Check yourself in with the keypad.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - BOOKING BOX */}
              <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
                <div className="lg:sticky lg:top-6">
                  {/* DESCRIPTION */}
                  <p
  className={`${poppins.className} text-[12px] font-normal leading-[150%] text-gray-600`}
>
  {description}
</p>

                  {/* WHERE YOU'LL SLEEP */}
                  <div className="mb-4 xs:mb-5 sm:mb-6">
                   <h3
  className={`${poppins.className} text-[18.78px] font-medium leading-[25.04px] text-gray-900 mt-3 mb-2`}
>
  Where you’ll sleep
</h3>
                    <div className="grid grid-cols-2 gap-2 xs:gap-3">
                      <div className=" rounded-lg xs:rounded-xl p-2 xs:p-3">
                        <div className="relative h-20 xs:h-24 rounded-lg overflow-hidden mb-1.5 xs:mb-2">
                          <Image src={galleryImages[1] || image} fill className="object-cover" alt="Bedroom 1" />
                        </div>
                        <p className="text-xs xs:text-sm font-medium">Bedroom 1</p>
                        <p className="text-[10px] xs:text-xs text-gray-500">1 queen bed</p>
                      </div>
                      <div className=" rounded-lg xs:rounded-xl p-2 xs:p-3">
                        <div className="relative h-20 xs:h-24 rounded-lg overflow-hidden mb-1.5 xs:mb-2">
                          <Image src={galleryImages[2] || image} fill className="object-cover" alt="Bedroom 2" />
                        </div>
                        <p className="text-xs xs:text-sm font-medium">Bedroom 2</p>
                        <p className="text-[10px] xs:text-xs text-gray-500">1 queen bed</p>
                      </div>
                    </div>
                  </div>

                  {/* BOOKING CARD */}
                  <div className="rounded-xl p-4 xs:p-5 shadow-[0_0_25px_rgba(0,0,0,0.12)]">
                    {/* PRICE */}
                    <div className="flex items-baseline gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                      <span className="line-through text-gray-400 text-xs xs:text-sm">$32,30</span>
                      <span className="text-xl xs:text-2xl font-semibold">${price}</span>
                      <span className="text-xs xs:text-sm text-gray-600">for 2 nights</span>
                    </div>

                    {/* DATE INPUTS */}
                    <div className="border rounded-lg overflow-hidden mb-3 xs:mb-4">
                      <div className="flex border-b">
                        <div className="flex-1 p-2 xs:p-3 border-r">
                          <label className="text-[9px] xs:text-[10px] font-semibold text-gray-900 uppercase block">Check-in</label>
                          <p className="text-xs xs:text-sm text-gray-700 mt-0.5">{dateRange.split(' - ')[0] || 'TBD'}</p>
                        </div>
                        <div className="flex-1 p-2 xs:p-3">
                          <label className="text-[9px] xs:text-[10px] font-semibold text-gray-900 uppercase block">Checkout</label>
                          <p className="text-xs xs:text-sm text-gray-700 mt-0.5">{dateRange.split(' - ')[1] || 'TBD'}</p>
                        </div>
                      </div>
                      <div className="p-2 xs:p-3">
                        <label className="text-[9px] xs:text-[10px] font-semibold text-gray-900 uppercase block">Guests</label>
                        <select className="w-full text-xs xs:text-sm text-gray-700 mt-0.5 bg-transparent focus:outline-none">
                          <option>2 guests</option>
                          <option>3 guests</option>
                          <option>4 guests</option>
                        </select>
                      </div>
                    </div>

                    {/* CANCEL BUTTON */}
                    <button className="w-full border-2 border-red-500 text-red-500 py-2 xs:py-2.5 sm:py-3 rounded-lg text-xs xs:text-sm font-semibold hover:bg-red-50 transition-colors">
                      Cancel Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO GALLERY - FULL SCREEN */}
      {showGallery && (
        <div className="fixed inset-0 z-[60] bg-black">
          {/* HEADER */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <p className="text-sm text-gray-300">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
                <h2 className="text-lg sm:text-xl font-semibold mt-1">{title}</h2>
              </div>
              
              <button
                onClick={handleCloseGallery}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* MAIN IMAGE */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 pt-24 pb-32 sm:pb-40">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[currentImageIndex]}
                fill
                className="object-contain"
                alt={`${title} - Photo ${currentImageIndex + 1}`}
                priority
              />
            </div>

            {/* NAVIGATION ARROWS */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all ${
                    currentImageIndex === index
                      ? "ring-2 ring-white opacity-100 scale-105"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <Image
                    src={img}
                    fill
                    className="object-cover"
                    alt={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      )}
    </>
  );
}