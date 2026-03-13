"use client";

import { useState } from "react";
import TravelListingHeader from "@/components/TravelListings/TravelListingHeader";
import TravelListingFilters from "@/components/TravelListings/TravelListingFilters";
import TravelListingGrid from "@/components/TravelListings/TravelListingGrid";
import TravelListingPagination from "@/components/TravelListings/TravelListingPagination";
import SearchFormOne from "@/components/HomeOne/ui/SearchFormOne";

const TravelListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    priceRange: [50, 500],
    categories: [] as string[],
    durations: [] as string[],
    ratings: [] as string[],
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
        <div className="relative z-10 container">
          <div className="flex justify-center">
            <SearchFormOne />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container py-8">
          <div className="grid grid-cols-12 lg:gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-4 xl:col-span-3 col-span-12">
              <TravelListingFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Right Content - Listings */}
            <div className="lg:col-span-8 xl:col-span-9 col-span-12">
              <TravelListingHeader
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
              <TravelListingGrid
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filters={filters}
              />
              <TravelListingPagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelListings;
