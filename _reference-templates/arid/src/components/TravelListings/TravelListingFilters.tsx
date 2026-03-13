"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { XMarkIcon, FunnelIcon } from "@heroicons/react/24/outline";

interface TravelListingFiltersProps {
  filters: {
    priceRange: number[];
    categories: string[];
    durations: string[];
    ratings: string[];
    specialOffers: string[];
  };
  onFilterChange: (filterType: string, value: any) => void;
}

const TravelListingFilters = ({
  filters,
  onFilterChange,
}: TravelListingFiltersProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = [
    {
      id: "16",
      name: "Attractions & Shows",
      icon: "icon-tour-attractions",
    },
    {
      id: "15",
      name: "Activities & Experiences",
      icon: "icon-tour-activities",
    },
    {
      id: "14",
      name: "Sightseeing & Day-Tours",
      icon: "icon-tour-sightseeing",
    },
    {
      id: "17",
      name: "Day-Out Packages",
      icon: "icon-tour-dayout",
    },
    {
      id: "18",
      name: "Adventure",
      icon: "icon-tour-adventure",
    },
  ];

  const durations = [
    "Half Day (2-4 hours)",
    "Full Day (8+ hours)",
    "2-3 Days",
    "4-7 Days",
    "1 Week+",
  ];

  const ratings = [
    { value: "5", label: "5 Stars & Up" },
    { value: "4", label: "4 Stars & Up" },
    { value: "3", label: "3 Stars & Up" },
    { value: "2", label: "2 Stars & Up" },
  ];

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    onFilterChange("categories", newCategories);
  };

  const handleDurationChange = (duration: string) => {
    const newDurations = filters.durations.includes(duration)
      ? filters.durations.filter((d) => d !== duration)
      : [...filters.durations, duration];
    onFilterChange("durations", newDurations);
  };

  const handleRatingChange = (rating: string) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];
    onFilterChange("ratings", newRatings);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value, value];
    onFilterChange("priceRange", range);
  };

  const clearAllFilters = () => {
    onFilterChange("priceRange", [50, 500]);
    onFilterChange("categories", []);
    onFilterChange("durations", []);
    onFilterChange("ratings", []);
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
            Price Range
          </h4>
          <div className="px-2">
            <Slider
              range
              min={0}
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

        {/* Categories */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Categories
          </h4>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 min-w-[140px] ${
                  filters.categories.includes(category.id)
                    ? "bg-blue-50 border-blue-200 text-blue-800"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold leading-tight">
                    {category.name}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <i className={`tour-category ${category.icon} w-6 h-6`}></i>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Duration</h4>
          <div className="space-y-3">
            {durations.map((duration) => (
              <label key={duration} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.durations.includes(duration)}
                  onChange={() => handleDurationChange(duration)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{duration}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Rating</h4>
          <div className="space-y-3">
            {ratings.map((rating) => (
              <label key={rating.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating.value)}
                  onChange={() => handleRatingChange(rating.value)}
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
                Instant Confirmation
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

export default TravelListingFilters;
