"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { XMarkIcon, FunnelIcon } from "@heroicons/react/24/outline";

interface FlightListingFiltersProps {
  filters: {
    priceRange: number[];
    airlines: string[];
    stops: string[];
    departureTimes: string[];
    arrivalTimes: string[];
    aircraftTypes: string[];
    specialOffers: string[];
  };
  onFilterChange: (filterType: string, value: any) => void;
}

const FlightListingFilters = ({
  filters,
  onFilterChange,
}: FlightListingFiltersProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const airlines = [
    {
      id: "emirates",
      name: "Emirates",
      icon: "✈️",
    },
    {
      id: "qatar",
      name: "Qatar Airways",
      icon: "🛫",
    },
    {
      id: "etihad",
      name: "Etihad Airways",
      icon: "✈️",
    },
    {
      id: "biman",
      name: "Biman Bangladesh",
      icon: "🛩️",
    },
    {
      id: "us-bangla",
      name: "US-Bangla Airlines",
      icon: "✈️",
    },
    {
      id: "novoair",
      name: "Novoair",
      icon: "🛫",
    },
  ];

  const stops = ["Non-stop", "1 Stop", "2+ Stops"];

  const departureTimes = [
    "Early Morning (12AM - 6AM)",
    "Morning (6AM - 12PM)",
    "Afternoon (12PM - 6PM)",
    "Evening (6PM - 12AM)",
  ];

  const arrivalTimes = [
    "Early Morning (12AM - 6AM)",
    "Morning (6AM - 12PM)",
    "Afternoon (12PM - 6PM)",
    "Evening (6PM - 12AM)",
  ];

  const aircraftTypes = [
    "Boeing 737",
    "Boeing 777",
    "Boeing 787",
    "Airbus A320",
    "Airbus A330",
    "Airbus A350",
  ];

  const handleAirlineChange = (airlineId: string) => {
    const newAirlines = filters.airlines.includes(airlineId)
      ? filters.airlines.filter((a) => a !== airlineId)
      : [...filters.airlines, airlineId];
    onFilterChange("airlines", newAirlines);
  };

  const handleStopsChange = (stop: string) => {
    const newStops = filters.stops.includes(stop)
      ? filters.stops.filter((s) => s !== stop)
      : [...filters.stops, stop];
    onFilterChange("stops", newStops);
  };

  const handleDepartureTimeChange = (time: string) => {
    const newTimes = filters.departureTimes.includes(time)
      ? filters.departureTimes.filter((t) => t !== time)
      : [...filters.departureTimes, time];
    onFilterChange("departureTimes", newTimes);
  };

  const handleArrivalTimeChange = (time: string) => {
    const newTimes = filters.arrivalTimes.includes(time)
      ? filters.arrivalTimes.filter((t) => t !== time)
      : [...filters.arrivalTimes, time];
    onFilterChange("arrivalTimes", newTimes);
  };

  const handleAircraftChange = (aircraft: string) => {
    const newAircraft = filters.aircraftTypes.includes(aircraft)
      ? filters.aircraftTypes.filter((a) => a !== aircraft)
      : [...filters.aircraftTypes, aircraft];
    onFilterChange("aircraftTypes", newAircraft);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value, value];
    onFilterChange("priceRange", range);
  };

  const clearAllFilters = () => {
    onFilterChange("priceRange", [100, 2000]);
    onFilterChange("airlines", []);
    onFilterChange("stops", []);
    onFilterChange("departureTimes", []);
    onFilterChange("arrivalTimes", []);
    onFilterChange("aircraftTypes", []);
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
              min={50}
              max={3000}
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

        {/* Airlines */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Airlines</h4>
          <div className="space-y-2">
            {airlines.map((airline) => (
              <button
                key={airline.id}
                onClick={() => handleAirlineChange(airline.id)}
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-200 min-h-[40px] w-full ${
                  filters.airlines.includes(airline.id)
                    ? "bg-blue-50 border-blue-200 text-blue-800"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      filters.airlines.includes(airline.id)
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.airlines.includes(airline.id) && (
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
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-xs font-medium truncate text-left">
                    {airline.name}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm">{airline.icon}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stops */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Stops</h4>
          <div className="space-y-3">
            {stops.map((stop) => (
              <label key={stop} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.stops.includes(stop)}
                  onChange={() => handleStopsChange(stop)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{stop}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Departure Time */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Departure Time
          </h4>
          <div className="space-y-3">
            {departureTimes.map((time) => (
              <label key={time} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.departureTimes.includes(time)}
                  onChange={() => handleDepartureTimeChange(time)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{time}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Arrival Time */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Arrival Time
          </h4>
          <div className="space-y-3">
            {arrivalTimes.map((time) => (
              <label key={time} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.arrivalTimes.includes(time)}
                  onChange={() => handleArrivalTimeChange(time)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{time}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Aircraft Type */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Aircraft Type
          </h4>
          <div className="space-y-3">
            {aircraftTypes.map((aircraft) => (
              <label key={aircraft} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.aircraftTypes.includes(aircraft)}
                  onChange={() => handleAircraftChange(aircraft)}
                  className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
                />
                <span className="ml-3 text-sm text-gray-700">{aircraft}</span>
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
              <span className="ml-3 text-sm text-gray-700">Free Baggage</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-1 border-gray-300 rounded focus:ring-primary-1 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700">Flexible Dates</span>
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

export default FlightListingFilters;
