"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface VisaListingFiltersProps {
  filters: {
    priceRange: number[];
    countries: string[];
    visaTypes: string[];
    processingTimes: string[];
    requirements: string[];
  };
  onFilterChange: (key: string, value: any) => void;
}

const VisaListingFilters = ({
  filters,
  onFilterChange,
}: VisaListingFiltersProps) => {
  const countries = [
    { id: "usa", name: "United States", flag: "🇺🇸" },
    { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { id: "france", name: "France", flag: "🇫🇷" },
    { id: "germany", name: "Germany", flag: "🇩🇪" },
    { id: "japan", name: "Japan", flag: "🇯🇵" },
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "canada", name: "Canada", flag: "🇨🇦" },
    { id: "italy", name: "Italy", flag: "🇮🇹" },
    { id: "spain", name: "Spain", flag: "🇪🇸" },
    { id: "netherlands", name: "Netherlands", flag: "🇳🇱" },
    { id: "switzerland", name: "Switzerland", flag: "🇨🇭" },
    { id: "singapore", name: "Singapore", flag: "🇸🇬" },
  ];

  const visaTypes = [
    { id: "tourist", name: "Tourist Visa", icon: "🏖️" },
    { id: "business", name: "Business Visa", icon: "💼" },
    { id: "student", name: "Student Visa", icon: "🎓" },
    { id: "work", name: "Work Visa", icon: "💻" },
    { id: "transit", name: "Transit Visa", icon: "✈️" },
  ];

  const processingTimes = [
    { id: "express", name: "Express (1-3 days)", value: "1-3" },
    { id: "standard", name: "Standard (5-10 days)", value: "5-10" },
    { id: "regular", name: "Regular (10-15 days)", value: "10-15" },
    { id: "extended", name: "Extended (15-30 days)", value: "15-30" },
  ];

  const requirements = [
    { id: "passport", name: "Valid Passport", icon: "📘" },
    { id: "photo", name: "Passport Photo", icon: "📸" },
    { id: "bank", name: "Bank Statement", icon: "🏦" },
    { id: "invitation", name: "Invitation Letter", icon: "📝" },
    { id: "insurance", name: "Travel Insurance", icon: "🛡️" },
  ];

  const handleCountryChange = (country: string) => {
    const newCountries = filters.countries.includes(country)
      ? filters.countries.filter((c) => c !== country)
      : [...filters.countries, country];
    onFilterChange("countries", newCountries);
  };

  const handleVisaTypeChange = (type: string) => {
    const newTypes = filters.visaTypes.includes(type)
      ? filters.visaTypes.filter((t) => t !== type)
      : [...filters.visaTypes, type];
    onFilterChange("visaTypes", newTypes);
  };

  const handleProcessingTimeChange = (time: string) => {
    const newTimes = filters.processingTimes.includes(time)
      ? filters.processingTimes.filter((t) => t !== time)
      : [...filters.processingTimes, time];
    onFilterChange("processingTimes", newTimes);
  };

  const handleRequirementChange = (req: string) => {
    const newReqs = filters.requirements.includes(req)
      ? filters.requirements.filter((r) => r !== req)
      : [...filters.requirements, req];
    onFilterChange("requirements", newReqs);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value, value];
    onFilterChange("priceRange", range);
  };

  const clearAllFilters = () => {
    onFilterChange("priceRange", [50, 500]);
    onFilterChange("countries", []);
    onFilterChange("visaTypes", []);
    onFilterChange("processingTimes", []);
    onFilterChange("requirements", []);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-1 to-primary-2 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
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
          <h3 className="text-lg font-semibold text-gray-900">Smart Filters</h3>
        </div>
        <button
          onClick={clearAllFilters}
          className="text-sm text-primary-1 hover:text-primary-2 font-medium px-3 py-1 rounded-lg hover:bg-primary-1/10 transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Price Range
          </h4>
          <div className="px-2">
            <Slider
              range
              min={50}
              max={1000}
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: "#E8604C", height: 6 }]}
              handleStyle={[
                {
                  backgroundColor: "#E8604C",
                  borderColor: "#E8604C",
                  height: 20,
                  width: 20,
                  marginTop: -7,
                },
                {
                  backgroundColor: "#E8604C",
                  borderColor: "#E8604C",
                  height: 20,
                  width: 20,
                  marginTop: -7,
                },
              ]}
              railStyle={{ backgroundColor: "#E5E7EB", height: 6 }}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Countries</h4>
          <div className="space-y-2">
            {countries.map((country) => (
              <label
                key={country.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.countries.includes(country.id)}
                  onChange={() => handleCountryChange(country.id)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1"
                />
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                  <span className="text-lg">{country.flag}</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">{country.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Visa Types */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Visa Types</h4>
          <div className="space-y-2">
            {visaTypes.map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.visaTypes.includes(type.id)}
                  onChange={() => handleVisaTypeChange(type.id)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1"
                />
                <span className="text-lg">{type.icon}</span>
                <span className="text-sm text-gray-700">{type.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Processing Times */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Processing Time
          </h4>
          <div className="space-y-2">
            {processingTimes.map((time) => (
              <label
                key={time.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.processingTimes.includes(time.value)}
                  onChange={() => handleProcessingTimeChange(time.value)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1"
                />
                <span className="text-sm text-gray-700">{time.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Requirements
          </h4>
          <div className="space-y-2">
            {requirements.map((req) => (
              <label
                key={req.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.requirements.includes(req.id)}
                  onChange={() => handleRequirementChange(req.id)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1"
                />
                <span className="text-lg">{req.icon}</span>
                <span className="text-sm text-gray-700">{req.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaListingFilters;
