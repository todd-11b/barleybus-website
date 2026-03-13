"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { XMarkIcon, FunnelIcon } from "@heroicons/react/24/outline";

interface HotelListingFiltersProps {
  filters: {
    priceRange: number[];
    starRatings: string[];
    amenities: string[];
    locations: string[];
    roomTypes: string[];
    specialOffers: string[];
  };
  onFilterChange: (filterType: string, value: any) => void;
}

const HotelListingFilters = ({
  filters,
  onFilterChange,
}: HotelListingFiltersProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const locations = [
    {
      id: "cox-bazar",
      name: "Cox's Bazar",
      icon: "🏖️",
    },
    {
      id: "dhaka",
      name: "Dhaka",
      icon: "🏙️",
    },
    {
      id: "chittagong",
      name: "Chittagong",
      icon: "🌊",
    },
    {
      id: "sylhet",
      name: "Sylhet",
      icon: "🏔️",
    },
    {
      id: "rajshahi",
      name: "Rajshahi",
      icon: "🌾",
    },
  ];

  const starRatings = [
    { value: "5", label: "5 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "2", label: "2 Stars" },
    { value: "1", label: "1 Star" },
  ];

  const amenities = [
    "Free WiFi",
    "Swimming Pool",
    "Spa & Wellness",
    "Restaurant",
    "Fitness Center",
    "Parking",
    "Airport Shuttle",
    "Room Service",
    "Business Center",
    "Pet Friendly",
  ];

  const roomTypes = [
    "Standard Room",
    "Deluxe Room",
    "Suite",
    "Family Room",
    "Executive Room",
    "Presidential Suite",
  ];

  const handleLocationChange = (locationId: string) => {
    const newLocations = filters.locations.includes(locationId)
      ? filters.locations.filter((l) => l !== locationId)
      : [...filters.locations, locationId];
    onFilterChange("locations", newLocations);
  };

  const handleStarRatingChange = (rating: string) => {
    const newRatings = filters.starRatings.includes(rating)
      ? filters.starRatings.filter((r) => r !== rating)
      : [...filters.starRatings, rating];
    onFilterChange("starRatings", newRatings);
  };

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    onFilterChange("amenities", newAmenities);
  };

  const handleRoomTypeChange = (roomType: string) => {
    const newRoomTypes = filters.roomTypes.includes(roomType)
      ? filters.roomTypes.filter((r) => r !== roomType)
      : [...filters.roomTypes, roomType];
    onFilterChange("roomTypes", newRoomTypes);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value, value];
    onFilterChange("priceRange", range);
  };

  const clearAllFilters = () => {
    onFilterChange("priceRange", [50, 500]);
    onFilterChange("starRatings", []);
    onFilterChange("amenities", []);
    onFilterChange("locations", []);
    onFilterChange("roomTypes", []);
    onFilterChange("specialOffers", []);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-1 text-white rounded-lg font-medium"
        >
          <FunnelIcon className="w-5 h-5" />
          Filters & Sort
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${
          showMobileFilters ? "block" : "hidden lg:block"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary-1 hover:underline"
            >
              Clear all
            </button>
            <button
              onClick={() => setShowMobileFilters(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Price Range (per night)
          </h4>
          <div className="px-2">
            <Slider
              range
              min={20}
              max={1000}
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: "#E8604C", height: 6 }]}
              handleStyle={[
                {
                  backgroundColor: "#E8604C",
                  borderColor: "#E8604C",
                  width: 20,
                  height: 20,
                },
                {
                  backgroundColor: "#E8604C",
                  borderColor: "#E8604C",
                  width: 20,
                  height: 20,
                },
              ]}
              railStyle={{ backgroundColor: "#E5E7EB", height: 6 }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Locations
          </h4>
          <div className="space-y-2">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationChange(location.id)}
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-200 min-h-[40px] w-full ${
                  filters.locations.includes(location.id)
                    ? "bg-blue-50 border-blue-200 text-blue-800"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-sm flex-shrink-0">{location.icon}</span>
                  <span className="text-xs font-medium truncate text-left">
                    {location.name}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      filters.locations.includes(location.id)
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.locations.includes(location.id) && (
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Star Ratings */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Star Rating
          </h4>
          <div className="space-y-3">
            {starRatings.map((rating) => (
              <label key={rating.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.starRatings.includes(rating.value)}
                  onChange={() => handleStarRatingChange(rating.value)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700 flex items-center gap-1">
                  {rating.label}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < parseInt(rating.value)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Amenities
          </h4>
          <div className="space-y-3">
            {amenities.map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Room Types */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Room Types
          </h4>
          <div className="space-y-3">
            {roomTypes.map((roomType) => (
              <label key={roomType} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.roomTypes.includes(roomType)}
                  onChange={() => handleRoomTypeChange(roomType)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{roomType}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Special Offers
          </h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700">
                Free Cancellation
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700">
                Breakfast Included
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700">
                Best Price Guarantee
              </span>
            </label>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-primary-1 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-2 transition-colors">
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default HotelListingFilters;
