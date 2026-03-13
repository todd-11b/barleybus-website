"use client";

import { useState, useEffect } from "react";

const PackageMap = ({ position }: { position: number[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div className="h-[400px] w-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  // Show a beautiful map placeholder instead of the problematic Leaflet map
  return (
    <div className="h-[400px] w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden border border-blue-200">
      {/* Map-like grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-blue-300/40"></div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400/20 rounded-full"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-12 left-12 w-4 h-4 bg-blue-600/20 rounded-full"></div>
      <div className="absolute bottom-6 right-16 w-10 h-10 bg-blue-400/15 rounded-full"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg mb-4">
            <svg
              className="w-10 h-10 text-primary-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Package Location
        </h3>
        <p className="text-gray-600 mb-6 text-lg">📍 Warsaw, Poland</p>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/50">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="font-semibold text-gray-700">Latitude</p>
              <p className="text-primary-1 font-mono">
                {position[0].toFixed(4)}
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-700">Longitude</p>
              <p className="text-primary-1 font-mono">
                {position[1].toFixed(4)}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Interactive map integration in progress
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps?q=${position[0]},${position[1]}`,
              "_blank"
            )
          }
          className="mt-6 px-6 py-3 bg-primary-1 text-white rounded-lg hover:bg-primary-2 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View on Google Maps
        </button>
      </div>
    </div>
  );
};

export default PackageMap;
