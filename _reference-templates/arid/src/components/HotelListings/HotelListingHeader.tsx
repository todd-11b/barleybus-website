"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

interface HotelListingHeaderProps {
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  filters?: {
    priceRange: number[];
    starRatings: string[];
    amenities: string[];
    locations: string[];
    roomTypes: string[];
    specialOffers: string[];
  };
  onFilterChange?: (filterType: string, value: any) => void;
}

const HotelListingHeader = ({
  viewMode = "grid",
  onViewModeChange,
  filters,
  onFilterChange,
}: HotelListingHeaderProps) => {
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "stars", label: "Star Rating" },
    { value: "distance", label: "Distance" },
  ];

  const locationMap = {
    "cox-bazar": "Cox's Bazar",
    dhaka: "Dhaka",
    chittagong: "Chittagong",
    sylhet: "Sylhet",
    rajshahi: "Rajshahi",
  };

  const removeLocationFilter = (locationId: string) => {
    if (onFilterChange && filters) {
      const newLocations = filters.locations.filter((l) => l !== locationId);
      onFilterChange("locations", newLocations);
    }
  };

  const removePriceFilter = () => {
    if (onFilterChange) {
      onFilterChange("priceRange", [50, 500]);
    }
  };

  const clearAllFilters = () => {
    if (onFilterChange) {
      onFilterChange("priceRange", [50, 500]);
      onFilterChange("starRatings", []);
      onFilterChange("amenities", []);
      onFilterChange("locations", []);
      onFilterChange("roomTypes", []);
      onFilterChange("specialOffers", []);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Results Info */}
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-xl font-semibold text-gray-900">
            Available Hotels
          </h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
            189 hotels found
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange?.("grid")}
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-primary-1 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Squares2X2Icon className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange?.("list")}
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-primary-1 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <ListBulletIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FunnelIcon className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {filters &&
        (filters.locations.length > 0 ||
          filters.priceRange[0] !== 50 ||
          filters.priceRange[1] !== 500) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {/* Location Filters */}
                {filters.locations.map((locationId) => (
                  <span
                    key={locationId}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-1 text-white text-sm rounded-full"
                  >
                    {locationMap[locationId as keyof typeof locationMap]}
                    <button
                      onClick={() => removeLocationFilter(locationId)}
                      className="ml-1 hover:text-gray-200"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                ))}

                {/* Price Range Filter */}
                {(filters.priceRange[0] !== 50 ||
                  filters.priceRange[1] !== 500) && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-1 text-white text-sm rounded-full">
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                    <button
                      onClick={removePriceFilter}
                      className="ml-1 hover:text-gray-200"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                )}

                <button
                  onClick={clearAllFilters}
                  className="text-sm text-primary-1 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default HotelListingHeader;
