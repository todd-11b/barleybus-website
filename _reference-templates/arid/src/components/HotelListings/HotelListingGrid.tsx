"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  StarIcon,
  MapPinIcon,
  WifiIcon,
  TruckIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarSolidIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

// Comprehensive hotel data with multiple properties
const hotelData = [
  {
    id: "1",
    name: "Hotel Sea Crown",
    location: "Cox's Bazar",
    address: "Beach Road, Cox's Bazar",
    rating: 4.8,
    reviewCount: 1247,
    price: 120,
    originalPrice: 150,
    stars: 5,
    image: "/assets/images/hero/h1.webp",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Parking"],
    roomType: "Deluxe Sea View",
    distance: "0.2 km from beach",
    isFavorite: false,
    features: ["Ocean View", "Balcony", "Air Conditioning", "Mini Bar"],
  },
  {
    id: "2",
    name: "Grand Hotel Dhaka",
    location: "Dhaka",
    address: "Gulshan Avenue, Dhaka",
    rating: 4.6,
    reviewCount: 892,
    price: 85,
    originalPrice: 110,
    stars: 4,
    image: "/assets/images/hero/h2.webp",
    amenities: ["Free WiFi", "Fitness Center", "Restaurant", "Business Center"],
    roomType: "Executive Suite",
    distance: "5 km from city center",
    isFavorite: true,
    features: ["City View", "Work Desk", "Air Conditioning", "Room Service"],
  },
  {
    id: "3",
    name: "Resort Paradise",
    location: "Cox's Bazar",
    address: "Marine Drive, Cox's Bazar",
    rating: 4.9,
    reviewCount: 2156,
    price: 200,
    originalPrice: 250,
    stars: 5,
    image: "/assets/images/hero/h3.webp",
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Parking"],
    roomType: "Presidential Suite",
    distance: "0.1 km from beach",
    isFavorite: false,
    features: [
      "Ocean View",
      "Private Balcony",
      "Jacuzzi",
      "Mini Bar",
      "Butler Service",
    ],
  },
  {
    id: "4",
    name: "Business Hotel Chittagong",
    location: "Chittagong",
    address: "Agrabad, Chittagong",
    rating: 4.3,
    reviewCount: 456,
    price: 65,
    originalPrice: 80,
    stars: 3,
    image: "/assets/images/hero/h4.webp",
    amenities: ["Free WiFi", "Restaurant", "Business Center", "Parking"],
    roomType: "Standard Room",
    distance: "2 km from port",
    isFavorite: false,
    features: ["City View", "Work Desk", "Air Conditioning"],
  },
  {
    id: "5",
    name: "Hill Resort Sylhet",
    location: "Sylhet",
    address: "Srimangal, Sylhet",
    rating: 4.7,
    reviewCount: 634,
    price: 95,
    originalPrice: 120,
    stars: 4,
    image: "/assets/images/hero/h5.webp",
    amenities: ["Free WiFi", "Restaurant", "Parking", "Garden"],
    roomType: "Deluxe Room",
    distance: "1 km from tea garden",
    isFavorite: true,
    features: ["Garden View", "Balcony", "Air Conditioning", "Tea Service"],
  },
  {
    id: "6",
    name: "Luxury Suites Dhaka",
    location: "Dhaka",
    address: "Banani, Dhaka",
    rating: 4.5,
    reviewCount: 723,
    price: 150,
    originalPrice: 180,
    stars: 4,
    image: "/assets/images/packages/p1-1.webp",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Fitness Center",
    ],
    roomType: "Luxury Suite",
    distance: "3 km from airport",
    isFavorite: false,
    features: [
      "City View",
      "Living Area",
      "Air Conditioning",
      "Mini Bar",
      "Room Service",
    ],
  },
  {
    id: "7",
    name: "Beach Resort Cox's Bazar",
    location: "Cox's Bazar",
    address: "Kolatoli Beach, Cox's Bazar",
    rating: 4.4,
    reviewCount: 567,
    price: 110,
    originalPrice: 140,
    stars: 4,
    image: "/assets/images/packages/p1-2.webp",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Parking",
      "Beach Access",
    ],
    roomType: "Beach View Room",
    distance: "0.05 km from beach",
    isFavorite: true,
    features: ["Beach View", "Balcony", "Air Conditioning", "Beach Towels"],
  },
  {
    id: "8",
    name: "City Hotel Rajshahi",
    location: "Rajshahi",
    address: "Shaheb Bazar, Rajshahi",
    rating: 4.2,
    reviewCount: 289,
    price: 45,
    originalPrice: 60,
    stars: 3,
    image: "/assets/images/packages/p1-3.webp",
    amenities: ["Free WiFi", "Restaurant", "Parking"],
    roomType: "Standard Room",
    distance: "1 km from university",
    isFavorite: false,
    features: ["City View", "Air Conditioning", "Work Desk"],
  },
  {
    id: "9",
    name: "Mountain View Resort",
    location: "Sylhet",
    address: "Jaflong, Sylhet",
    rating: 4.8,
    reviewCount: 445,
    price: 75,
    originalPrice: 95,
    stars: 4,
    image: "/assets/images/packages/p1-4.webp",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Garden",
      "Mountain View",
    ],
    roomType: "Mountain View Room",
    distance: "0.5 km from Jaflong",
    isFavorite: true,
    features: ["Mountain View", "Balcony", "Air Conditioning", "Nature Tours"],
  },
  {
    id: "10",
    name: "Executive Hotel Dhaka",
    location: "Dhaka",
    address: "Dhanmondi, Dhaka",
    rating: 4.1,
    reviewCount: 378,
    price: 70,
    originalPrice: 90,
    stars: 3,
    image: "/assets/images/packages/p1-5.webp",
    amenities: ["Free WiFi", "Restaurant", "Business Center", "Parking"],
    roomType: "Executive Room",
    distance: "4 km from city center",
    isFavorite: false,
    features: ["City View", "Work Desk", "Air Conditioning", "Room Service"],
  },
  {
    id: "11",
    name: "Seaside Villa",
    location: "Cox's Bazar",
    address: "Inani Beach, Cox's Bazar",
    rating: 4.6,
    reviewCount: 512,
    price: 180,
    originalPrice: 220,
    stars: 5,
    image: "/assets/images/packages/p1-6.webp",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Private Beach",
    ],
    roomType: "Villa Suite",
    distance: "0.1 km from beach",
    isFavorite: false,
    features: [
      "Private Beach",
      "Villa",
      "Air Conditioning",
      "Private Pool",
      "Butler Service",
    ],
  },
  {
    id: "12",
    name: "Budget Inn Chittagong",
    location: "Chittagong",
    address: "Panchlaish, Chittagong",
    rating: 3.9,
    reviewCount: 198,
    price: 35,
    originalPrice: 45,
    stars: 2,
    image: "/assets/images/packages/p1-7.webp",
    amenities: ["Free WiFi", "Restaurant"],
    roomType: "Standard Room",
    distance: "3 km from city center",
    isFavorite: false,
    features: ["Air Conditioning", "Shared Bathroom"],
  },
];

interface HotelListingGridProps {
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
}

const HotelListingGrid = ({
  viewMode = "grid",
  onViewModeChange,
  filters,
}: HotelListingGridProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [displayedHotels, setDisplayedHotels] = useState(6);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const loadMoreHotels = () => {
    setDisplayedHotels((prev) => Math.min(prev + 6, hotelData.length));
  };

  const visibleHotels = hotelData.slice(0, displayedHotels);
  const hasMoreHotels = displayedHotels < hotelData.length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const renderHotelCard = (hotel: any) => {
    if (viewMode === "grid") {
      return (
        <div
          key={hotel.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
        >
          {/* Hotel Image */}
          <div className="relative h-48">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => toggleFavorite(hotel.id)}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                {favorites.includes(hotel.id) ? (
                  <HeartSolidIcon className="w-4 h-4 text-red-500" />
                ) : (
                  <HeartIcon className="w-4 h-4 text-gray-600" />
                )}
              </button>
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-primary-1 text-white px-2 py-1 rounded-full text-xs font-medium">
                {hotel.stars} Star
              </span>
            </div>
          </div>

          {/* Hotel Details */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="mb-3">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {hotel.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                <MapPinIcon className="w-4 h-4" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                {renderStars(hotel.rating)}
                <span className="text-xs text-gray-500">
                  ({hotel.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1 mb-3">
              {hotel.amenities
                .slice(0, 3)
                .map((amenity: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
            </div>

            {/* Room Type & Distance */}
            <div className="text-sm text-gray-600 mb-3">
              <div>{hotel.roomType}</div>
              <div className="text-xs">{hotel.distance}</div>
            </div>

            {/* Price and Book */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      ${hotel.price}
                    </span>
                    {hotel.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${hotel.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">per night</span>
                </div>
                <Link
                  href="/package-details"
                  className="bg-primary-1 text-white px-3 py-2 rounded-lg font-medium hover:bg-primary-2 transition-colors text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // List view
      return (
        <div
          key={hotel.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex gap-6">
            {/* Hotel Image */}
            <div className="relative w-48 h-32 flex-shrink-0">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => toggleFavorite(hotel.id)}
                  className="p-1 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  {favorites.includes(hotel.id) ? (
                    <HeartSolidIcon className="w-4 h-4 text-red-500" />
                  ) : (
                    <HeartIcon className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-primary-1 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {hotel.stars} Star
                </span>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl mb-1">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    {renderStars(hotel.rating)}
                    <span className="text-sm text-gray-500">
                      ({hotel.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold text-gray-900">
                      ${hotel.price}
                    </span>
                    {hotel.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${hotel.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">per night</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mb-3">
                {hotel.amenities.map((amenity: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              {/* Room Type & Distance */}
              <div className="text-sm text-gray-600 mb-4">
                <div>{hotel.roomType}</div>
                <div className="text-xs">{hotel.distance}</div>
              </div>

              {/* Book Button */}
              <Link
                href="/package-details"
                className="bg-primary-1 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-2 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Hotels Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        {visibleHotels.map(renderHotelCard)}
      </div>

      {/* Load More Button - Only show if there are more hotels */}
      {hasMoreHotels && (
        <div className="text-center pt-8">
          <button
            onClick={loadMoreHotels}
            className="bg-white border border-primary-1 text-primary-1 px-8 py-3 rounded-lg font-medium hover:bg-primary-1 hover:text-white transition-colors"
          >
            Load More Hotels ({hotelData.length - displayedHotels} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelListingGrid;
