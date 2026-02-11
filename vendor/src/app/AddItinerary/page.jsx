"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Check, Upload, X, MapPin } from "lucide-react";

// Mock amenities data
const AMENITIES_OPTIONS = [
  "WiFi",
  "Pool",
  "Parking",
  "Air Conditioning",
  "Kitchen",
  "TV",
  "Washer",
  "Gym",
  "Hot Tub",
  "Pet Friendly",
];

// Mock availability options
const AVAILABILITY_OPTIONS = ["Available", "Not Available", "Limited"];

export default function AddItinerary() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);

  // Step 1 state
  const [formData, setFormData] = useState({
    placeName: "",
    description: "",
    guestMin: "",
    guestMax: "",
    hotelRoom: "",
    amenities: [],
    houseRules: "",
    healthSafety: "",
    whatToBring: "",
  });

  // Step 2 state
  const [locationData, setLocationData] = useState({
    address: "",
    country: "",
    state: "",
    landmark: "",
    pinCode: "",
  });

  // Step 3 state
  const [selectedDate, setSelectedDate] = useState(4);
  const [dateSlots, setDateSlots] = useState([
    { id: 1, from: "25 December", to: "1 January", guests: "Up to 10 guests", price: "$32,30" },
    { id: 2, from: "25 December", to: "1 January", guests: "Up to 10 guests", price: "$32,30" },
    { id: 3, from: "25 December", to: "1 January", guests: "Up to 10 guests", price: "$32,30" },
  ]);
  const [slotForm, setSlotForm] = useState({
    from: "",
    till: "",
    availability: "",
    price: "",
  });

  // Step 4 state
  const [photos, setPhotos] = useState([
    "/api/placeholder/600/400",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
  ]);

  // Calendar data for January 2026
  const calendarDays = [
    { day: 28, disabled: true },
    { day: 29, disabled: true },
    { day: 30, disabled: true },
    { day: 31, disabled: true },
    { day: 1, disabled: false },
    { day: 2, disabled: false },
    { day: 3, disabled: false },
    { day: 4, disabled: false, selected: true },
    { day: 5, disabled: false },
    { day: 6, disabled: false },
    { day: 7, disabled: false },
    { day: 8, disabled: false },
    { day: 9, disabled: false },
    { day: 10, disabled: false },
    { day: 11, disabled: false },
    { day: 12, disabled: false },
    { day: 13, disabled: false },
    { day: 14, disabled: false },
    { day: 15, disabled: false },
    { day: 16, disabled: false },
    { day: 17, disabled: false },
    { day: 18, disabled: true },
    { day: 19, disabled: true },
    { day: 20, disabled: true },
    { day: 21, disabled: true },
    { day: 22, disabled: true },
    { day: 23, disabled: true },
    { day: 24, disabled: true },
    { day: 25, disabled: false },
    { day: 26, disabled: false },
    { day: 27, disabled: false },
    { day: 28, disabled: false },
    { day: 29, disabled: false },
    { day: 30, disabled: false },
    { day: 1, disabled: true },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleAmenityToggle = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    // In real implementation, handle file upload
    console.log("Files to upload:", files);
  };

  // Step 1 Component
  const Step1 = () => (
    <div className="space-y-6">
      {/* Place Name */}
      <div>
        <label className="poppins block text-sm font-medium text-[#696969] mb-2">Place Name</label>
        <input
          type="text"
          placeholder="Enter place name"
          value={formData.placeName}
          onChange={(e) => setFormData({ ...formData, placeName: e.target.value })}
          className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
        />
      </div>

      {/* Description */}
      <div>
        <label className="poppins block text-sm font-medium text-[#696969] mb-2">Description</label>
        <textarea
          placeholder="Enter your Description Here"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all resize-none"
        />
      </div>

      {/* Guest, Hotel Room, Amenities Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guest */}
        <div>
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">Guest</label>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Minimum"
              value={formData.guestMin}
              onChange={(e) => setFormData({ ...formData, guestMin: e.target.value })}
              className="w-43 px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
            />
            <input
              type="text"
              placeholder="Maximum"
              value={formData.guestMax}
              onChange={(e) => setFormData({ ...formData, guestMax: e.target.value })}
              className="w-43 px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
            />
          </div>
        </div>

        {/* Hotel Room */}
        <div>
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">Hotel Room</label>
          <input
            type="text"
            placeholder="Enter number of bedroom"
            value={formData.hotelRoom}
            onChange={(e) => setFormData({ ...formData, hotelRoom: e.target.value })}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
          />
        </div>

        {/* Amenities Dropdown */}
        <div className="relative">
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">Amenities</label>
          <button
            type="button"
            onClick={() => setAmenitiesOpen(!amenitiesOpen)}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all flex items-center justify-between text-left"
          >
            <span className="text-gray-400">
              {formData.amenities.length > 0
                ? `${formData.amenities.length} selected`
                : "Select amenities"}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#4A9BB8] transition-transform ${amenitiesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {amenitiesOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white text-sm placeholder:text-[#AAAAAA] border border-gray-200 rounded-mdshadow-lg max-h-48 overflow-auto">
              {AMENITIES_OPTIONS.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="mr-3 w-4 h-4 text-[#4A9BB8] rounded border-gray-300 focus:ring-[#4A9BB8]"
                  />
                  <span className="text-sm text-[#696969]">{amenity}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* House Rules, Health & Safety, What to Bring Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">House rules</label>
          <textarea
            placeholder="Enter house rules"
            value={formData.houseRules}
            onChange={(e) => setFormData({ ...formData, houseRules: e.target.value })}
            rows={8}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all resize-none"
          />
        </div>

        <div>
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">
            Health & Safety Requirements
          </label>
          <textarea
            placeholder="Enter your safety requirements"
            value={formData.healthSafety}
            onChange={(e) => setFormData({ ...formData, healthSafety: e.target.value })}
            rows={8}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all resize-none"
          />
        </div>

        <div>
          <label className="poppins block text-sm font-medium text-[#696969] mb-2">What to bring list</label>
          <textarea
            placeholder="Enter your what to bring list"
            value={formData.whatToBring}
            onChange={(e) => setFormData({ ...formData, whatToBring: e.target.value })}
            rows={8}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );

  // Step 2 Component
  const Step2 = () => (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="relative w-full h-[300px] rounded-md overflow-hidden shadow-xs">
        {/* Placeholder map - in real implementation use Google Maps or similar */}
        <div className="w-full h-full bg-gray-100 relative">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.6943%2C44.8194%2C-0.5343%2C44.8694&layer=mapnik"
            className="w-full h-full border-0"
            title="Map"
          />
          {/* Location Pin Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="relative">
              <div className=" px-4 py-2 rounded-lg shadow-md text-sm text-gray-600 whitespace-nowrap mb-2">
                Exact location provided after booking
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#696969] mb-2">Address</label>
          <textarea
            placeholder="Enter number of bedroom"
            value={locationData.address}
            onChange={(e) => setLocationData({ ...locationData, address: e.target.value })}
            rows={4}
            className="w-full h-35 px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all resize-none"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#696969] mb-2">Country</label>
            <input
              type="text"
              placeholder="Enter number of bedroom"
              value={locationData.country}
              onChange={(e) => setLocationData({ ...locationData, country: e.target.value })}
              className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#696969] mb-2">State</label>
            <input
              type="text"
              placeholder="Enter number of bedroom"
              value={locationData.state}
              onChange={(e) => setLocationData({ ...locationData, state: e.target.value })}
              className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#696969] mb-2">Land Mark</label>
          <input
            type="text"
            placeholder="Enter number of bedroom"
            value={locationData.landmark}
            onChange={(e) => setLocationData({ ...locationData, landmark: e.target.value })}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#696969] mb-2">Pin code</label>
          <input
            type="text"
            placeholder="Enter number of bedroom"
            value={locationData.pinCode}
            onChange={(e) => setLocationData({ ...locationData, pinCode: e.target.value })}
            className="w-full px-4 py-3 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] transition-all"
          />
        </div>
      </div>
    </div>
  );

  // Step 3 Component
  const Step3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side - Calendar */}
      <div>
        <h3 className="text-sm font-medium text-[#696969] mb-4">Availability calendar</h3>
        <div className="text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm p-4 ">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-gray-800">January 2026</span>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-sm text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((item, index) => (
              <button
                key={index}
                onClick={() => !item.disabled && setSelectedDate(item.day)}
                disabled={item.disabled}
                className={`
                  py-2 text-sm rounded-3xl transition-all
                  ${item.disabled ? "text-gray-300 cursor-not-allowed" : "text-[#696969] hover:bg-gray-100"}
                  ${selectedDate === item.day && !item.disabled ? "bg-[#3D90BB] text-white hover:bg-[#4A9BB8]" : ""}
                `}
              >
                {item.day}
              </button>
            ))}
          </div>

          {/* Slot Form */}
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#696969] mb-2">Date</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="From"
                    value={slotForm.from}
                    onChange={(e) => setSlotForm({ ...slotForm, from: e.target.value })}
                    className="w-30 px-3 py-2 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm  text-sm focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8]"
                  />
                  <input
                    type="text"
                    placeholder="Till"
                    value={slotForm.till}
                    onChange={(e) => setSlotForm({ ...slotForm, till: e.target.value })}
                    className="w-30 px-3 py-2 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm  text-sm focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8]"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-[#696969] mb-2">Availability</label>
                <button
                  type="button"
                  onClick={() => setAvailabilityOpen(!availabilityOpen)}
                  className="w-full px-3 py-2 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm  text-sm focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8] flex items-center justify-between"
                >
                  <span className="text-gray-400">
                    {slotForm.availability || "Enter slot availability"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${availabilityOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {availabilityOpen && (
                  <div className="absolute z-10 w-full mt-1  text-sm placeholder:text-[#AAAAAA] border border-gray-200 bg-white rounded-sm shadow-lg">
                    {AVAILABILITY_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSlotForm({ ...slotForm, availability: option });
                          setAvailabilityOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#696969] mb-2">Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  value={slotForm.price}
                  onChange={(e) => setSlotForm({ ...slotForm, price: e.target.value })}
                  className="w-full px-3 py-2 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm  text-sm focus:outline-none focus:ring-2 focus:ring-[#4A9BB8]/20 focus:border-[#4A9BB8]"
                />
              </div>
              <button
                onClick={() => {
                  if (slotForm.from && slotForm.till && slotForm.price) {
                    setDateSlots([
                      ...dateSlots,
                      {
                        id: dateSlots.length + 1,
                        from: slotForm.from,
                        to: slotForm.till,
                        guests: "Up to 10 guests",
                        price: slotForm.price,
                      },
                    ]);
                    setSlotForm({ from: "", till: "", availability: "", price: "" });
                  }
                }}
                className="w-12 h-12 bg-[#3D90BB] rounded-full flex items-center justify-center hover:bg-[#3d8499] transition-colors"
              >
                <Check className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Date Slots */}
      <div>
        
        <h3 className="text-sm font-medium text-[#696969] mb-4">Date Slots</h3>
        <div className="space-y-4 border border-[#3D90BB] rounded-sm p-6">
          {dateSlots.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between p-3 text-sm placeholder:text-[#AAAAAA] border border-[#00000080] rounded-2xl bg-white"
            >
              <div>
                <span className="font-bold text-[16px] text-[#222222]">
                  {slot.from} - {slot.to}
                </span>
              </div>
              <div className="text-[#353535] font-medium  text-sm">{slot.guests}</div>
              <div className="font-medium text-[#353535]">{slot.price}</div>
            </div>
          ))}
        </div>
   
      </div>
    </div>
  );

  // Step 4 Component
  const Step4 = () => (
    <div className="flex gap-6">
      {/* Upload Button */}
      <div>
        <label className="inline-flex items-center gap-2 px-4 py-2 text-sm placeholder:text-[#AAAAAA] border border-[#3D90BB] rounded-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <Upload className="w-4 h-4 text-[#3D90BB]" />
          <span className="text-[#3D90BB] text-sm">Upload photos</span>
          <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} className="hidden" />
        </label>
      </div>

      {/* Photo Grid */}
      <div className="flex-1 grid grid-cols-4 gap-2">
        {/* Large featured image */}
        <div className="col-span-2 row-span-2">
          <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-cyan-400 to-cyan-600 relative">
            <img
              src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop"
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Small images - Top row */}
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop"
            alt="Island 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
            alt="Island 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small images - Second row */}
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=300&h=200&fit=crop"
            alt="Palm trees"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
            alt="Island 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom row */}
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&h=200&fit=crop"
            alt="Palm trees 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1476673160081-cf065607f449?w=300&h=200&fit=crop"
            alt="Mountain island"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1468413253725-0d5181091126?w=300&h=200&fit=crop"
            alt="Mountain view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#3D90BB]">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=300&h=200&fit=crop"
            alt="Aerial island"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className=" rounded-md px-4 py-8 max-w-md w-full mx-4 text-center bg-white">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-6">
          <img src="/images/Vector.svg"/>
        </div>

        <h2 className="text-2xl poppins font-regular text-[#666666] mb-3">Journey Planned!</h2>
        <p className="text-[#666666] text-sm mb-4">We've securely saved your itinerary for future access.</p>
        <div className="bg-[#13131347] h-[1px] mb-4"></div>
        <button
          onClick={() => {
            setShowModal(false);
            setCurrentStep(1);
            // Reset form data
            setFormData({
              placeName: "",
              description: "",
              guestMin: "",
              guestMax: "",
              hotelRoom: "",
              amenities: [],
              houseRules: "",
              healthSafety: "",
              whatToBring: "",
            });
            setLocationData({
              address: "",
              country: "",
              state: "",
              landmark: "",
              pinCode: "",
            });
          }}
          className="w-50 py-2 bg-[#3D90BB] text-white rounded-md font-regular hover:bg-[#3D90BB] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Step Header */}
        <h1 className="text-2xl poppins font-semibold text-[#252328] mb-6">Step-{currentStep}</h1>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-15 py-2 bg-[#3D90BB] text-white rounded-md font-regular hover:bg-[#3d8499] transition-colors"
          >
            {currentStep === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && <SuccessModal />}
    </div>
  );
}