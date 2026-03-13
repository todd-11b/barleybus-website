"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarSolidIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
// import { flightData } from "@/constant/FlightListings/FlightListingData";

// Comprehensive flight data with multiple airlines and routes
const flightData = [
  {
    id: "1",
    airline: "Emirates",
    airlineCode: "EK",
    flightNumber: "EK 583",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "14:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "DXB",
      city: "Dubai",
      time: "18:45",
      date: "2024-01-15",
    },
    duration: "4h 15m",
    stops: "Non-stop",
    price: 450,
    originalPrice: 520,
    aircraft: "Boeing 777",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.8,
    reviewCount: 1247,
    features: ["Free WiFi", "Entertainment", "Meals"],
    departureTime: "Afternoon (12PM - 6PM)",
    arrivalTime: "Evening (6PM - 12AM)",
    isFavorite: false,
  },
  {
    id: "2",
    airline: "Qatar Airways",
    airlineCode: "QR",
    flightNumber: "QR 671",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "02:15",
      date: "2024-01-15",
    },
    arrival: {
      airport: "DOH",
      city: "Doha",
      time: "05:30",
      date: "2024-01-15",
    },
    duration: "3h 15m",
    stops: "Non-stop",
    price: 380,
    originalPrice: 420,
    aircraft: "Boeing 787",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.9,
    reviewCount: 2156,
    features: ["Free WiFi", "Entertainment", "Meals", "Lounge Access"],
    departureTime: "Early Morning (12AM - 6AM)",
    arrivalTime: "Early Morning (12AM - 6AM)",
    isFavorite: true,
  },
  {
    id: "3",
    airline: "Etihad Airways",
    airlineCode: "EY",
    flightNumber: "EY 331",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "22:45",
      date: "2024-01-15",
    },
    arrival: {
      airport: "AUH",
      city: "Abu Dhabi",
      time: "02:30",
      date: "2024-01-16",
    },
    duration: "3h 45m",
    stops: "Non-stop",
    price: 420,
    originalPrice: 480,
    aircraft: "Airbus A330",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.7,
    reviewCount: 892,
    features: ["Free WiFi", "Entertainment", "Meals"],
    departureTime: "Evening (6PM - 12AM)",
    arrivalTime: "Early Morning (12AM - 6AM)",
    isFavorite: false,
  },
  {
    id: "4",
    airline: "Biman Bangladesh",
    airlineCode: "BG",
    flightNumber: "BG 101",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "08:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "LHR",
      city: "London",
      time: "14:45",
      date: "2024-01-15",
    },
    duration: "6h 15m",
    stops: "1 Stop",
    price: 680,
    originalPrice: 750,
    aircraft: "Boeing 777",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.5,
    reviewCount: 634,
    features: ["Entertainment", "Meals"],
    departureTime: "Morning (6AM - 12PM)",
    arrivalTime: "Afternoon (12PM - 6PM)",
    isFavorite: false,
  },
  {
    id: "5",
    airline: "US-Bangla Airlines",
    airlineCode: "BS",
    flightNumber: "BS 201",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "11:20",
      date: "2024-01-15",
    },
    arrival: {
      airport: "KUL",
      city: "Kuala Lumpur",
      time: "16:35",
      date: "2024-01-15",
    },
    duration: "5h 15m",
    stops: "Non-stop",
    price: 320,
    originalPrice: 380,
    aircraft: "Boeing 737",
    class: "Economy",
    baggage: "20kg included",
    rating: 4.3,
    reviewCount: 456,
    features: ["Meals"],
    departureTime: "Morning (6AM - 12PM)",
    arrivalTime: "Afternoon (12PM - 6PM)",
    isFavorite: true,
  },
  {
    id: "6",
    airline: "Novoair",
    airlineCode: "VQ",
    flightNumber: "VQ 301",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "16:45",
      date: "2024-01-15",
    },
    arrival: {
      airport: "BKK",
      city: "Bangkok",
      time: "20:30",
      date: "2024-01-15",
    },
    duration: "3h 45m",
    stops: "Non-stop",
    price: 280,
    originalPrice: 320,
    aircraft: "Airbus A320",
    class: "Economy",
    baggage: "20kg included",
    rating: 4.4,
    reviewCount: 378,
    features: ["Meals"],
    departureTime: "Afternoon (12PM - 6PM)",
    arrivalTime: "Evening (6PM - 12AM)",
    isFavorite: false,
  },
  {
    id: "7",
    airline: "Emirates",
    airlineCode: "EK",
    flightNumber: "EK 585",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "06:15",
      date: "2024-01-15",
    },
    arrival: {
      airport: "DXB",
      city: "Dubai",
      time: "10:30",
      date: "2024-01-15",
    },
    duration: "4h 15m",
    stops: "Non-stop",
    price: 480,
    originalPrice: 520,
    aircraft: "Boeing 777",
    class: "Business",
    baggage: "32kg included",
    rating: 4.9,
    reviewCount: 1567,
    features: [
      "Free WiFi",
      "Entertainment",
      "Meals",
      "Lounge Access",
      "Priority Boarding",
    ],
    departureTime: "Early Morning (12AM - 6AM)",
    arrivalTime: "Morning (6AM - 12PM)",
    isFavorite: true,
  },
  {
    id: "8",
    airline: "Qatar Airways",
    airlineCode: "QR",
    flightNumber: "QR 673",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "19:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "DOH",
      city: "Doha",
      time: "22:45",
      date: "2024-01-15",
    },
    duration: "3h 15m",
    stops: "Non-stop",
    price: 400,
    originalPrice: 450,
    aircraft: "Boeing 787",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.8,
    reviewCount: 1892,
    features: ["Free WiFi", "Entertainment", "Meals"],
    departureTime: "Evening (6PM - 12AM)",
    arrivalTime: "Evening (6PM - 12AM)",
    isFavorite: false,
  },
  {
    id: "9",
    airline: "Etihad Airways",
    airlineCode: "EY",
    flightNumber: "EY 333",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "13:20",
      date: "2024-01-15",
    },
    arrival: {
      airport: "AUH",
      city: "Abu Dhabi",
      time: "17:35",
      date: "2024-01-15",
    },
    duration: "4h 15m",
    stops: "Non-stop",
    price: 410,
    originalPrice: 460,
    aircraft: "Airbus A350",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.6,
    reviewCount: 723,
    features: ["Free WiFi", "Entertainment", "Meals"],
    departureTime: "Afternoon (12PM - 6PM)",
    arrivalTime: "Evening (6PM - 12AM)",
    isFavorite: false,
  },
  {
    id: "10",
    airline: "Biman Bangladesh",
    airlineCode: "BG",
    flightNumber: "BG 103",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "21:10",
      date: "2024-01-15",
    },
    arrival: {
      airport: "JFK",
      city: "New York",
      time: "06:30",
      date: "2024-01-16",
    },
    duration: "9h 20m",
    stops: "1 Stop",
    price: 850,
    originalPrice: 950,
    aircraft: "Boeing 777",
    class: "Economy",
    baggage: "23kg included",
    rating: 4.4,
    reviewCount: 567,
    features: ["Entertainment", "Meals", "Extra Legroom"],
    departureTime: "Evening (6PM - 12AM)",
    arrivalTime: "Morning (6AM - 12PM)",
    isFavorite: false,
  },
  {
    id: "11",
    airline: "US-Bangla Airlines",
    airlineCode: "BS",
    flightNumber: "BS 203",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "07:45",
      date: "2024-01-15",
    },
    arrival: {
      airport: "SIN",
      city: "Singapore",
      time: "12:20",
      date: "2024-01-15",
    },
    duration: "4h 35m",
    stops: "Non-stop",
    price: 350,
    originalPrice: 400,
    aircraft: "Boeing 737",
    class: "Economy",
    baggage: "20kg included",
    rating: 4.2,
    reviewCount: 289,
    features: ["Meals"],
    departureTime: "Early Morning (12AM - 6AM)",
    arrivalTime: "Afternoon (12PM - 6PM)",
    isFavorite: true,
  },
  {
    id: "12",
    airline: "Novoair",
    airlineCode: "VQ",
    flightNumber: "VQ 303",
    departure: {
      airport: "DAC",
      city: "Dhaka",
      time: "10:30",
      date: "2024-01-15",
    },
    arrival: {
      airport: "DEL",
      city: "Delhi",
      time: "12:45",
      date: "2024-01-15",
    },
    duration: "2h 15m",
    stops: "Non-stop",
    price: 250,
    originalPrice: 300,
    aircraft: "Airbus A320",
    class: "Economy",
    baggage: "20kg included",
    rating: 4.1,
    reviewCount: 198,
    features: ["Meals"],
    departureTime: "Morning (6AM - 12PM)",
    arrivalTime: "Afternoon (12PM - 6PM)",
    isFavorite: false,
  },
];

interface FlightListingGridProps {
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
}

const FlightListingGrid = ({
  viewMode = "list",
  onViewModeChange,
  filters,
}: FlightListingGridProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [displayedFlights, setDisplayedFlights] = useState(6);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const loadMoreFlights = () => {
    setDisplayedFlights((prev) => Math.min(prev + 6, flightData.length));
  };

  const visibleFlights = flightData.slice(0, displayedFlights);
  const hasMoreFlights = displayedFlights < flightData.length;

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

  const renderFlightCard = (flight: any) => {
    if (viewMode === "grid") {
      return (
        <div
          key={flight.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
        >
          {/* Flight Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-1 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {flight.airlineCode}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {flight.airline}
                  </h3>
                  <p className="text-xs text-gray-600">{flight.flightNumber}</p>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(flight.id)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                {favorites.includes(flight.id) ? (
                  <HeartSolidIcon className="w-4 h-4 text-red-500" />
                ) : (
                  <HeartIcon className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* Flight Route */}
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">
                  {flight.departure.time}
                </div>
                <div className="text-xs text-gray-600">
                  {flight.departure.airport}
                </div>
                <div className="text-xs text-gray-500">
                  {flight.departure.city}
                </div>
              </div>

              <div className="flex-1 px-4">
                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {flight.duration}
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-500">{flight.stops}</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">
                  {flight.arrival.time}
                </div>
                <div className="text-xs text-gray-600">
                  {flight.arrival.airport}
                </div>
                <div className="text-xs text-gray-500">
                  {flight.arrival.city}
                </div>
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <PaperAirplaneIcon className="w-3 h-3" />
                  <span className="truncate">{flight.aircraft}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-3 h-3" />
                  <span>{flight.class}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {renderStars(flight.rating)}
                <span className="text-xs text-gray-500">
                  ({flight.reviewCount})
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1 mb-3">
              {flight.features
                .slice(0, 2)
                .map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
            </div>

            {/* Price and Book */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      ${flight.price}
                    </span>
                    {flight.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${flight.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">per person</span>
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
    }

    // List View
    return (
      <div
        key={flight.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Airline Info */}
            <div className="flex items-center gap-4 lg:w-48">
              <div className="w-12 h-12 bg-primary-1 rounded-full flex items-center justify-center text-white font-bold">
                {flight.airlineCode}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {flight.airline}
                </h3>
                <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(flight.rating)}
                  <span className="text-xs text-gray-500">
                    ({flight.reviewCount})
                  </span>
                </div>
              </div>
            </div>

            {/* Flight Route */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {flight.departure.time}
                  </div>
                  <div className="text-sm text-gray-600">
                    {flight.departure.airport}
                  </div>
                  <div className="text-xs text-gray-500">
                    {flight.departure.city}
                  </div>
                </div>

                <div className="flex-1 px-4">
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {flight.duration}
                    </div>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500">
                      {flight.stops}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {flight.arrival.time}
                  </div>
                  <div className="text-sm text-gray-600">
                    {flight.arrival.airport}
                  </div>
                  <div className="text-xs text-gray-500">
                    {flight.arrival.city}
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Details */}
            <div className="lg:w-48">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <PaperAirplaneIcon className="w-4 h-4" />
                  <span>{flight.aircraft}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{flight.class}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {flight.features
                  .slice(0, 2)
                  .map((feature: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
              </div>
            </div>

            {/* Price and Actions */}
            <div className="lg:w-48 text-right">
              <div className="flex items-center justify-end gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${flight.price}
                </span>
                {flight.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${flight.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => toggleFavorite(flight.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {favorites.includes(flight.id) ? (
                    <HeartSolidIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <Link
                  href="/package-details"
                  className="bg-primary-1 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-2 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Flights Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        {visibleFlights.map(renderFlightCard)}
      </div>

      {/* Load More Button - Only show if there are more flights */}
      {hasMoreFlights && (
        <div className="text-center pt-8">
          <button
            onClick={loadMoreFlights}
            className="bg-white border border-primary-1 text-primary-1 px-8 py-3 rounded-lg font-medium hover:bg-primary-1 hover:text-white transition-colors"
          >
            Load More Flights ({flightData.length - displayedFlights} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightListingGrid;
