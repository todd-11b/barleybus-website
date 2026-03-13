"use client";

import { useState } from "react";
import FlightListingHeader from "@/components/FlightListings/FlightListingHeader";
import FlightListingFilters from "@/components/FlightListings/FlightListingFilters";
import FlightListingGrid from "@/components/FlightListings/FlightListingGrid";
import FlightListingPagination from "@/components/FlightListings/FlightListingPagination";
import SearchFormOne from "@/components/HomeOne/ui/SearchFormOne";

const FlightListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [filters, setFilters] = useState({
    priceRange: [100, 2000],
    airlines: [] as string[],
    stops: [] as string[],
    departureTimes: [] as string[],
    arrivalTimes: [] as string[],
    aircraftTypes: [] as string[],
    specialOffers: [] as string[],
  });

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <>
      {/* Search Form Section */}
      <div className="z-0 relative bg-[url('/assets/images/banner/sky.jpg')] bg-cover bg-center bg-no-repeat py-16">
        <div className="absolute inset-0 bg-black opacity-25 -z-1"></div>
        <div className="container">
          <div className="flex justify-center">
            <SearchFormOne />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-3 col-span-12">
              <FlightListingFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Right Content - Listings */}
            <div className="lg:col-span-9 col-span-12">
              <FlightListingHeader
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
              <FlightListingGrid
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
              />
              <FlightListingPagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightListings;
