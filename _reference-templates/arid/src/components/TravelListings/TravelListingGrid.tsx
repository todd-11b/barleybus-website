"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarSolidIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

interface TravelPackage {
  id: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  isFavorite: boolean;
  features: string[];
  description: string;
}

interface TravelListingGridProps {
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  filters?: {
    priceRange: number[];
    categories: string[];
    durations: string[];
    ratings: string[];
    specialOffers: string[];
  };
}

const TravelListingGrid = ({
  viewMode = "grid",
  onViewModeChange,
  filters,
}: TravelListingGridProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [displayedPackages, setDisplayedPackages] = useState(6);

  const packages: TravelPackage[] = [
    {
      id: "1",
      title: "Cox's Bazar Beach Adventure Tour",
      image: "/assets/images/packages/p1-1.webp",
      location: "Cox's Bazar, Bangladesh",
      duration: "3 Days",
      groupSize: "2-12 People",
      price: 120,
      originalPrice: 150,
      rating: 4.8,
      reviewCount: 127,
      category: "Adventure Tours",
      isFavorite: false,
      features: ["Beach Activities", "Local Guide", "Transportation"],
      description:
        "Experience the longest sea beach in the world with our comprehensive tour package.",
    },
    {
      id: "2",
      title: "St. Martin Island Day Trip",
      image: "/assets/images/packages/p1-2.webp",
      location: "St. Martin Island, Bangladesh",
      duration: "1 Day",
      groupSize: "4-15 People",
      price: 85,
      rating: 4.6,
      reviewCount: 89,
      category: "Day Trips",
      isFavorite: true,
      features: ["Boat Ride", "Snorkeling", "Lunch Included"],
      description:
        "Discover the only coral island of Bangladesh with crystal clear waters.",
    },
    {
      id: "3",
      title: "Cox's Bazar Cultural Heritage Tour",
      image: "/assets/images/packages/p1-3.webp",
      location: "Cox's Bazar, Bangladesh",
      duration: "2 Days",
      groupSize: "2-8 People",
      price: 95,
      rating: 4.7,
      reviewCount: 156,
      category: "Cultural Tours",
      isFavorite: false,
      features: ["Local Markets", "Traditional Food", "Cultural Sites"],
      description:
        "Immerse yourself in the rich cultural heritage of Cox's Bazar region.",
    },
    {
      id: "4",
      title: "Inani Beach & Himchari Waterfall",
      image: "/assets/images/packages/p1-4.webp",
      location: "Inani Beach, Bangladesh",
      duration: "1 Day",
      groupSize: "2-10 People",
      price: 75,
      originalPrice: 90,
      rating: 4.5,
      reviewCount: 203,
      category: "Nature Tours",
      isFavorite: false,
      features: ["Waterfall Visit", "Beach Time", "Photography"],
      description:
        "Explore the pristine Inani Beach and witness the beautiful Himchari Waterfall.",
    },
    {
      id: "5",
      title: "Cox's Bazar Food & Street Tour",
      image: "/assets/images/packages/p1-5.webp",
      location: "Cox's Bazar, Bangladesh",
      duration: "Half Day",
      groupSize: "2-6 People",
      price: 45,
      rating: 4.9,
      reviewCount: 78,
      category: "Food Tours",
      isFavorite: true,
      features: ["Local Cuisine", "Street Food", "Cultural Experience"],
      description:
        "Taste the authentic flavors of Cox's Bazar through our guided food tour.",
    },
    {
      id: "6",
      title: "Cox's Bazar Photography Workshop",
      image: "/assets/images/packages/p1-6.webp",
      location: "Cox's Bazar, Bangladesh",
      duration: "2 Days",
      groupSize: "3-8 People",
      price: 110,
      rating: 4.8,
      reviewCount: 45,
      category: "Photography Tours",
      isFavorite: false,
      features: ["Professional Guide", "Equipment", "Editing Session"],
      description:
        "Capture stunning moments with our professional photography workshop.",
    },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const loadMorePackages = () => {
    setDisplayedPackages((prev) => Math.min(prev + 6, packages.length));
  };

  const visiblePackages = packages.slice(0, displayedPackages);
  const hasMorePackages = displayedPackages < packages.length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const renderPackageCard = (pkg: TravelPackage) => {
    if (viewMode === "list") {
      return (
        <div
          key={pkg.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col w-full min-w-0"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative md:w-80 flex-shrink-0">
              <Link href="/package-details">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(pkg.id)}
                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                {favorites.includes(pkg.id) ? (
                  <HeartSolidIcon className="w-5 h-5 text-red-500" />
                ) : (
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Discount Badge */}
              {pkg.originalPrice && (
                <div className="absolute top-3 left-3 bg-primary-1 text-white px-2 py-1 rounded-full text-sm font-medium">
                  {Math.round(
                    ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
                  )}
                  % OFF
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                {pkg.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
              <div className="flex flex-col h-full w-full min-w-0">
                {/* Title & Location */}
                <div className="mb-3 min-w-0">
                  <Link href="/package-details">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-1 transition-colors line-clamp-2 min-w-0">
                      {pkg.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1 min-w-0">
                    <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate min-w-0">{pkg.location}</span>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {renderStars(pkg.rating)}
                    <span className="text-sm text-gray-500">
                      ({pkg.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Duration & Group Size */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4 flex-1">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>

                {/* Price & Book Button */}
                <div className="flex items-center justify-between mt-auto w-full min-w-0">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-xl font-bold text-gray-900">
                      ${pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-base text-gray-500 line-through">
                        ${pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-gray-600">per person</span>
                  </div>
                  <Link
                    href="/package-details"
                    className="bg-primary-1 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-2 transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Grid View
    return (
      <div
        key={pkg.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col w-full min-w-0"
      >
        {/* Image Section */}
        <div className="relative">
          <Link href="/package-details">
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(pkg.id)}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            {favorites.includes(pkg.id) ? (
              <HeartSolidIcon className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Discount Badge */}
          {pkg.originalPrice && (
            <div className="absolute top-3 left-3 bg-primary-1 text-white px-2 py-1 rounded-full text-sm font-medium">
              {Math.round(
                ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
              )}
              % OFF
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
            {pkg.category}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Title & Location */}
          <div className="mb-3 min-w-0">
            <Link href="/package-details">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-1 transition-colors line-clamp-2 min-w-0">
                {pkg.title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1 min-w-0">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate min-w-0">{pkg.location}</span>
            </div>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {renderStars(pkg.rating)}
              <span className="text-sm text-gray-500">({pkg.reviewCount})</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Duration & Group Size */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <UserGroupIcon className="w-4 h-4" />
              <span>{pkg.groupSize}</span>
            </div>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1"></div>

          {/* Price & Book Button */}
          <div className="flex items-center justify-between mt-auto w-full min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="text-lg font-bold text-gray-900">
                ${pkg.price}
              </span>
              {pkg.originalPrice && (
                <span className="text-base text-gray-500 line-through">
                  ${pkg.originalPrice}
                </span>
              )}
              <span className="text-xs text-gray-600">per person</span>
            </div>
            <Link
              href="/package-details"
              className="bg-primary-1 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-primary-2 transition-colors whitespace-nowrap flex-shrink-0"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Packages Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr"
            : "space-y-6"
        }
      >
        {visiblePackages.map(renderPackageCard)}
      </div>

      {/* Load More Button - Only show if there are more packages */}
      {hasMorePackages && (
        <div className="text-center pt-8">
          <button
            onClick={loadMorePackages}
            className="bg-white border border-primary-1 text-primary-1 px-8 py-3 rounded-lg font-medium hover:bg-primary-1 hover:text-white transition-colors"
          >
            Load More Tours ({packages.length - displayedPackages} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelListingGrid;
