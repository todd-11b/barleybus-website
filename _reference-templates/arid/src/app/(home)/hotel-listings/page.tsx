"use client";

import { useState } from "react";
import HotelListingHeader from "@/components/HotelListings/HotelListingHeader";
import HotelListingFilters from "@/components/HotelListings/HotelListingFilters";
import HotelListingGrid from "@/components/HotelListings/HotelListingGrid";
import HotelListingPagination from "@/components/HotelListings/HotelListingPagination";
import SearchFormOne from "@/components/HomeOne/ui/SearchFormOne";

const HotelListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    priceRange: [50, 500],
    starRatings: [] as string[],
    amenities: [] as string[],
    locations: [] as string[],
    roomTypes: [] as string[],
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
              <HotelListingFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Right Content - Listings */}
            <div className="lg:col-span-9 col-span-12">
              <HotelListingHeader
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
              <HotelListingGrid
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
              />
              <HotelListingPagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListings;
