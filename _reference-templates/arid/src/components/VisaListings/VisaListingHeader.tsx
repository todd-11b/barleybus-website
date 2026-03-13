"use client";

import { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface VisaListingHeaderProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  filters: {
    priceRange: number[];
    countries: string[];
    visaTypes: string[];
    processingTimes: string[];
    requirements: string[];
  };
  onFilterChange: (key: string, value: any) => void;
}

const VisaListingHeader = ({
  viewMode,
  onViewModeChange,
  filters,
  onFilterChange,
}: VisaListingHeaderProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeFiltersCount =
    filters.countries.length +
    filters.visaTypes.length +
    filters.processingTimes.length +
    filters.requirements.length;

  const clearAllFilters = () => {
    onFilterChange("countries", []);
    onFilterChange("visaTypes", []);
    onFilterChange("processingTimes", []);
    onFilterChange("requirements", []);
    onFilterChange("priceRange", [50, 500]);
  };

  return (
    <div className="mb-8">
      {/* Results Info and Controls */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-1 to-primary-2 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl leading-1 font-bold text-gray-900">
                Available Visas
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-600">156 visas found</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-primary-1 font-medium">
                  Updated 2 minutes ago
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FunnelIcon className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-primary-1 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => onViewModeChange("grid")}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-white text-primary-1 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Grid
              </button>
              <button
                onClick={() => onViewModeChange("list")}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-white text-primary-1 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="bg-gradient-to-r from-primary-1/5 to-primary-2/5 rounded-xl p-4 border border-primary-1/20">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-1 rounded-lg flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Active filters:
              </span>
            </div>

            {filters.countries.map((country) => (
              <span
                key={country}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-1 to-primary-2 text-white text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="font-medium">{country}</span>
                <button
                  onClick={() =>
                    onFilterChange(
                      "countries",
                      filters.countries.filter((c) => c !== country)
                    )
                  }
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.visaTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-1 to-primary-2 text-white text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="font-medium">{type}</span>
                <button
                  onClick={() =>
                    onFilterChange(
                      "visaTypes",
                      filters.visaTypes.filter((t) => t !== type)
                    )
                  }
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.processingTimes.map((time) => (
              <span
                key={time}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-1 to-primary-2 text-white text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="font-medium">{time}</span>
                <button
                  onClick={() =>
                    onFilterChange(
                      "processingTimes",
                      filters.processingTimes.filter((t) => t !== time)
                    )
                  }
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.requirements.map((req) => (
              <span
                key={req}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-1 to-primary-2 text-white text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="font-medium">{req}</span>
                <button
                  onClick={() =>
                    onFilterChange(
                      "requirements",
                      filters.requirements.filter((r) => r !== req)
                    )
                  }
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              onClick={clearAllFilters}
              className="text-sm text-primary-1 hover:text-primary-2 font-medium px-3 py-2 rounded-lg hover:bg-primary-1/10 transition-colors"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaListingHeader;
