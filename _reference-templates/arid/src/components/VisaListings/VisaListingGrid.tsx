"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HeartIcon,
  ClockIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

interface VisaListingGridProps {
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  filters?: {
    priceRange: number[];
    countries: string[];
    visaTypes: string[];
    processingTimes: string[];
    requirements: string[];
  };
}

const VisaListingGrid = ({
  viewMode = "grid",
  onViewModeChange,
  filters,
}: VisaListingGridProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const visaData = [
    {
      id: "1",
      country: "United States",
      flag: "🇺🇸",
      flagImage: "/assets/images/flags/usa.svg",
      visaType: "Tourist Visa",
      price: 160,
      originalPrice: 200,
      processingTime: "5-10 days",
      validity: "10 years",
      requirements: ["Passport", "Photo", "Bank Statement"],
      description: "Multiple entry tourist visa for US travel",
      features: ["Multiple Entry", "10 Year Validity", "Fast Processing"],
      isFavorite: false,
    },
    {
      id: "2",
      country: "United Kingdom",
      flag: "🇬🇧",
      flagImage: "/assets/images/flags/uk.svg",
      visaType: "Business Visa",
      price: 120,
      originalPrice: 150,
      processingTime: "3-5 days",
      validity: "6 months",
      requirements: ["Passport", "Invitation Letter", "Bank Statement"],
      description: "Business visa for UK business activities",
      features: [
        "Business Activities",
        "6 Month Validity",
        "Express Processing",
      ],
      isFavorite: false,
    },
    {
      id: "3",
      country: "France",
      flag: "🇫🇷",
      flagImage: "/assets/images/flags/france.svg",
      visaType: "Tourist Visa",
      price: 80,
      originalPrice: 100,
      processingTime: "7-15 days",
      validity: "90 days",
      requirements: ["Passport", "Photo", "Travel Insurance"],
      description: "Schengen tourist visa for France",
      features: ["Schengen Zone", "90 Day Stay", "Standard Processing"],
      isFavorite: false,
    },
    {
      id: "4",
      country: "Germany",
      flag: "🇩🇪",
      flagImage: "/assets/images/flags/germany.svg",
      visaType: "Student Visa",
      price: 75,
      originalPrice: 90,
      processingTime: "10-20 days",
      validity: "2 years",
      requirements: ["Passport", "University Letter", "Bank Statement"],
      description: "Student visa for German universities",
      features: ["Study Permit", "2 Year Validity", "University Support"],
      isFavorite: false,
    },
    {
      id: "5",
      country: "Japan",
      flag: "🇯🇵",
      flagImage: "/assets/images/flags/japan.svg",
      visaType: "Tourist Visa",
      price: 45,
      originalPrice: 60,
      processingTime: "5-7 days",
      validity: "90 days",
      requirements: ["Passport", "Photo", "Itinerary"],
      description: "Tourist visa for Japan travel",
      features: ["90 Day Stay", "Fast Processing", "Multiple Entry"],
      isFavorite: false,
    },
    {
      id: "6",
      country: "Australia",
      flag: "🇦🇺",
      flagImage: "/assets/images/flags/australia.svg",
      visaType: "Work Visa",
      price: 300,
      originalPrice: 350,
      processingTime: "15-30 days",
      validity: "4 years",
      requirements: ["Passport", "Job Offer", "Skills Assessment"],
      description: "Work visa for Australian employment",
      features: ["Work Permit", "4 Year Validity", "Family Included"],
      isFavorite: false,
    },
    {
      id: "7",
      country: "Canada",
      flag: "🇨🇦",
      flagImage: "/assets/images/flags/canada.svg",
      visaType: "Tourist Visa",
      price: 100,
      originalPrice: 125,
      processingTime: "7-14 days",
      validity: "6 months",
      requirements: ["Passport", "Photo", "Financial Proof"],
      description: "Tourist visa for Canada travel",
      features: ["Multiple Entry", "6 Month Stay", "Fast Processing"],
      isFavorite: false,
    },
    {
      id: "8",
      country: "Italy",
      flag: "🇮🇹",
      flagImage: "/assets/images/flags/italy.svg",
      visaType: "Tourist Visa",
      price: 85,
      originalPrice: 110,
      processingTime: "5-10 days",
      validity: "90 days",
      requirements: ["Passport", "Photo", "Travel Insurance"],
      description: "Schengen tourist visa for Italy",
      features: ["Schengen Zone", "Cultural Sites", "Multiple Entry"],
      isFavorite: false,
    },
    {
      id: "9",
      country: "Spain",
      flag: "🇪🇸",
      flagImage: "/assets/images/flags/spain.svg",
      visaType: "Tourist Visa",
      price: 75,
      originalPrice: 95,
      processingTime: "5-8 days",
      validity: "90 days",
      requirements: ["Passport", "Photo", "Hotel Booking"],
      description: "Schengen tourist visa for Spain",
      features: ["Schengen Zone", "Beaches & Culture", "Fast Processing"],
      isFavorite: false,
    },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const renderVisaCard = (visa: any) => (
    <div
      key={visa.id}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-primary-1 to-primary-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl grid place-center justify-center backdrop-blur-sm relative overflow-hidden">
              <span className="text-xl relative z-10 text-white">
                {visa.flag}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg leading-1">
                {visa.country}
              </h3>
              <p className="text-white/90 text-sm mt-1">{visa.visaType}</p>
            </div>
          </div>
          <button
            onClick={() => toggleFavorite(visa.id)}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
          >
            {favorites.includes(visa.id) ? (
              <HeartSolidIcon className="w-5 h-5 text-white" />
            ) : (
              <HeartIcon className="w-5 h-5 text-white/70" />
            )}
          </button>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {visa.description}
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-2.5 border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <ClockIcon className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">
                Processing
              </span>
            </div>
            <span className="text-sm font-semibold text-blue-900 leading-1">
              {visa.processingTime}
            </span>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-2.5 border border-green-200">
            <div className="flex items-center gap-2 mb-1">
              <DocumentTextIcon className="w-4 h-4 text-green-600" />
              <span className="text-xs font-medium text-green-800">
                Validity
              </span>
            </div>
            <span className="text-sm font-semibold text-green-900 leading-1">
              {visa.validity}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {visa.features.map((feature: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-gradient-to-r from-primary-1/10 to-primary-2/10 text-primary-1 px-3 py-1 rounded-full border border-primary-1/20 font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${visa.price}
              </span>
              <span className="text-base font-medium text-gray-400 line-through">
                ${visa.originalPrice}
              </span>
            </div>
            <div className="mt-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md inline-block">
              Save ${visa.originalPrice - visa.price}
            </div>
          </div>
          <Link
            href="/visa-application"
            className="bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-2 hover:to-primary-1 text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );

  const renderListView = (visa: any) => (
    <div
      key={visa.id}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-1 to-primary-2 rounded-2xl grid place-center justify-center relative overflow-hidden">
            <span className="text-xl relative z-10 text-white">
              {visa.flag}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-bold text-gray-900 text-xl leading-1">
                {visa.country}
              </h3>
              <span className="bg-gradient-to-r from-primary-1/10 to-primary-2/10 text-primary-1 px-3 py-1 rounded-full text-sm font-medium">
                {visa.visaType}
              </span>
            </div>
            <p className="text-gray-600 mb-3 max-w-md">{visa.description}</p>
            <div className="flex flex-wrap gap-2">
              {visa.features
                .slice(0, 3)
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
        </div>

        <div className="flex flex-col 2xl:flex-row items-end 2xl:items-center gap-4">
          <div className="flex">
            <div className="2xl:text-center">
              <div className="text-sm text-gray-500 mb-1">Processing</div>
              <div className="font-semibold text-gray-900">
                {visa.processingTime}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Validity</div>
              <div className="font-semibold text-gray-900">{visa.validity}</div>
            </div>
          </div>
          <div className="flex">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Price</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">
                  ${visa.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${visa.originalPrice}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFavorite(visa.id)}
                className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
              >
                {favorites.includes(visa.id) ? (
                  <HeartSolidIcon className="w-5 h-5 text-red-500" />
                ) : (
                  <HeartIcon className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <Link
                href="/visa-application"
                className="bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-2 hover:to-primary-1 text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {visaData.map(renderVisaCard)}
        </div>
      ) : (
        <div className="space-y-4">{visaData.map(renderListView)}</div>
      )}
    </div>
  );
};

export default VisaListingGrid;
