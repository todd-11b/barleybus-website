"use client";

import { useState } from "react";
import SearchFormOne from "@/components/HomeOne/ui/SearchFormOne";
import VisaListingHeader from "@/components/VisaListings/VisaListingHeader";
import VisaListingFilters from "@/components/VisaListings/VisaListingFilters";
import VisaListingGrid from "@/components/VisaListings/VisaListingGrid";
import VisaListingPagination from "@/components/VisaListings/VisaListingPagination";

type ViewMode = "grid" | "list";

interface Filters {
  priceRange: number[];
  countries: string[];
  visaTypes: string[];
  processingTimes: string[];
  requirements: string[];
}

const VisaListingsPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filters, setFilters] = useState<Filters>({
    priceRange: [50, 500],
    countries: [],
    visaTypes: [],
    processingTimes: [],
    requirements: [],
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Search Form */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/assets/images/banner/sky.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Perfect Visa
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover visa options for countries worldwide with our
              comprehensive search and comparison tools
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <SearchFormOne />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
          {/* Filters Sidebar */}
          <div className="xl:w-1/4 lg:w-1/3">
            <div className="sticky top-8">
              <VisaListingFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Results */}
          <div className="xl:w-3/4 lg:w-2/3">
            <VisaListingHeader
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              filters={filters}
              onFilterChange={handleFilterChange}
            />

            <VisaListingGrid
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              filters={filters}
            />

            <VisaListingPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaListingsPage;
