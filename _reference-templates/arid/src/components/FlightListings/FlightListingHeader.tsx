"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

interface FlightListingHeaderProps {
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  filters?: {
    priceRange: number[];
    airlines: string[];
    stops: string[];
    departureTimes: string[];
    arrivalTimes: string[];
    aircraftTypes: string[];
    specialOffers: string[];
  };
  onFilterChange?: (filterType: string, value: any) => void;
}

const FlightListingHeader = ({
  viewMode = "list",
  onViewModeChange,
  filters,
  onFilterChange,
}: FlightListingHeaderProps) => {
  const [sortBy, setSortBy] = useState("price");
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: "price", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "duration", label: "Duration: Shortest" },
    { value: "departure", label: "Departure Time" },
    { value: "arrival", label: "Arrival Time" },
    { value: "airline", label: "Airline" },
  ];

  const airlineMap = {
    emirates: "Emirates",
    qatar: "Qatar Airways",
    etihad: "Etihad Airways",
    biman: "Biman Bangladesh",
    "us-bangla": "US-Bangla Airlines",
    novoair: "Novoair",
  };

  const removeAirlineFilter = (airlineId: string) => {
    if (onFilterChange && filters) {
      const newAirlines = filters.airlines.filter((a) => a !== airlineId);
      onFilterChange("airlines", newAirlines);
    }
  };

  const removePriceFilter = () => {
    if (onFilterChange) {
      onFilterChange("priceRange", [100, 2000]);
    }
  };

  const clearAllFilters = () => {
    if (onFilterChange) {
      onFilterChange("priceRange", [100, 2000]);
      onFilterChange("airlines", []);
      onFilterChange("stops", []);
      onFilterChange("departureTimes", []);
      onFilterChange("arrivalTimes", []);
      onFilterChange("aircraftTypes", []);
      onFilterChange("specialOffers", []);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Results Info */}
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-xl font-semibold text-gray-900">
            Available Flights
          </h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
            247 flights found
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
        (filters.airlines.length > 0 ||
          filters.priceRange[0] !== 100 ||
          filters.priceRange[1] !== 2000) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {/* Airline Filters */}
                {filters.airlines.map((airlineId) => (
                  <span
                    key={airlineId}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-1 text-white text-sm rounded-full"
                  >
                    {airlineMap[airlineId as keyof typeof airlineMap]}
                    <button
                      onClick={() => removeAirlineFilter(airlineId)}
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
                {(filters.priceRange[0] !== 100 ||
                  filters.priceRange[1] !== 2000) && (
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

export default FlightListingHeader;
